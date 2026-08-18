import Project from '../models/Project.js';

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

// @desc    Get projects (supports ?featured=true&published=true&category=...)
// @route   GET /api/projects
// @access  Public / Admin
export const getProjects = async (req, res) => {
  try {
    const { featured, category, published, limit } = req.query;
    const query = {};

    // For public requests or default queries, enforce published: true
    if (published === 'false' && req.user) {
      query.published = false;
    } else if (published === 'all' && req.user) {
      // no published filter for admin requesting all
    } else {
      query.published = true;
    }

    if (featured === 'true') {
      query.featured = true;
    }

    if (category && category !== 'All') {
      query.category = new RegExp(`^${category}$`, 'i');
    }

    let projectQuery = Project.find(query).sort({ featured: -1, createdAt: -1 });

    if (limit) {
      projectQuery = projectQuery.limit(parseInt(limit, 10));
    }

    const projects = await projectQuery;

    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single project by slug
// @route   GET /api/projects/:slug
// @access  Public
export const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    if (!project.published && !req.user) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    // Related projects
    const related = await Project.find({
      category: project.category,
      _id: { $ne: project._id },
      published: true,
    })
      .limit(2)
      .select('title slug thumbnail category shortDescription');

    res.json({
      success: true,
      data: project,
      related,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create project
// @route   POST /api/projects
// @access  Private/Admin
export const createProject = async (req, res) => {
  try {
    const {
      title,
      category,
      shortDescription,
      description,
      thumbnail,
      images,
      technologies,
      client,
      featured,
      published,
    } = req.body;

    const slug = req.body.slug ? slugify(req.body.slug) : slugify(title);

    const existing = await Project.findOne({ slug });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Project with this slug already exists' });
    }

    const project = await Project.create({
      title,
      slug,
      category,
      shortDescription,
      description,
      thumbnail: thumbnail || '',
      images: images || [],
      technologies: technologies || [],
      client: client || 'Confidential Client',
      featured: Boolean(featured),
      published: published !== undefined ? Boolean(published) : true,
    });

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    if (req.body.title && !req.body.slug) {
      req.body.slug = slugify(req.body.title);
    } else if (req.body.slug) {
      req.body.slug = slugify(req.body.slug);
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: updatedProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    await project.deleteOne();

    res.json({
      success: true,
      message: 'Project deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
