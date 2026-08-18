import Venture from '../models/Venture.js';

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

// @desc    Get ventures (Public only gets published: true)
// @route   GET /api/ventures
// @access  Public / Admin
export const getVentures = async (req, res) => {
  try {
    const { all } = req.query;
    const query = {};

    // STRICT SECURITY: Non-admin or standard public request ONLY receives published ventures
    if (all === 'true' && req.user && req.user.role === 'admin') {
      // Admin may view drafts/coming-soon items in admin panel
    } else {
      query.published = true;
    }

    const ventures = await Venture.find(query).sort({ order: 1, createdAt: 1 });

    res.json({
      success: true,
      count: ventures.length,
      data: ventures,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new venture
// @route   POST /api/ventures
// @access  Private/Admin
export const createVenture = async (req, res) => {
  try {
    const { title, description, status, tags, order, published } = req.body;

    const slug = req.body.slug ? slugify(req.body.slug) : slugify(title);

    const existing = await Venture.findOne({ slug });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Venture with this slug already exists' });
    }

    const venture = await Venture.create({
      title,
      slug,
      description,
      status: status || 'Coming Soon',
      tags: tags || ['R&D', 'Core Technology'],
      order: order || 0,
      published: published !== undefined ? Boolean(published) : false,
    });

    res.status(201).json({
      success: true,
      message: 'Venture created successfully',
      data: venture,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update venture
// @route   PUT /api/ventures/:id
// @access  Private/Admin
export const updateVenture = async (req, res) => {
  try {
    const venture = await Venture.findById(req.params.id);

    if (!venture) {
      return res.status(404).json({ success: false, message: 'Venture not found' });
    }

    if (req.body.title && !req.body.slug) {
      req.body.slug = slugify(req.body.title);
    } else if (req.body.slug) {
      req.body.slug = slugify(req.body.slug);
    }

    const updatedVenture = await Venture.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      message: 'Venture updated successfully',
      data: updatedVenture,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete venture
// @route   DELETE /api/ventures/:id
// @access  Private/Admin
export const deleteVenture = async (req, res) => {
  try {
    const venture = await Venture.findById(req.params.id);

    if (!venture) {
      return res.status(404).json({ success: false, message: 'Venture not found' });
    }

    await venture.deleteOne();

    res.json({
      success: true,
      message: 'Venture deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
