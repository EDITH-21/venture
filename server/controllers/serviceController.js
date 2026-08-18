import Service from '../models/Service.js';
import ServiceCategory from '../models/ServiceCategory.js';

// Helper to slugify string
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

// @desc    Fetch all services (filtered by published for public)
// @route   GET /api/services
// @access  Public / Admin
export const getServices = async (req, res) => {
  try {
    const { category, search, all } = req.query;
    const query = {};

    // If not admin requesting "all=true", enforce published only
    if (all !== 'true' || !req.user) {
      query.published = true;
    }

    if (category) {
      query.category = new RegExp(`^${category}$`, 'i');
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const services = await Service.find(query).sort({ order: 1, createdAt: 1 });
    const categories = await ServiceCategory.find().sort({ order: 1 });

    res.json({
      success: true,
      count: services.length,
      categories,
      data: services,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single service by slug
// @route   GET /api/services/:slug
// @access  Public
export const getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    // If unpublished, ensure user is admin
    if (!service.published && !req.user) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    // Also find related services in same category
    const related = await Service.find({
      category: service.category,
      _id: { $ne: service._id },
      published: true,
    })
      .limit(3)
      .select('name slug shortDescription icon category');

    res.json({
      success: true,
      data: service,
      related,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req, res) => {
  try {
    const { name, category, shortDescription, description, icon, deliverables, idealFor, process, faq, order, published } = req.body;

    const slug = req.body.slug ? slugify(req.body.slug) : slugify(name);

    const existingService = await Service.findOne({ slug });
    if (existingService) {
      return res.status(400).json({ success: false, message: 'Service with this slug already exists' });
    }

    const service = await Service.create({
      name,
      slug,
      category,
      shortDescription,
      description,
      icon: icon || 'Code',
      deliverables: deliverables || [],
      idealFor: idealFor || [],
      process: process || [],
      faq: faq || [],
      order: order || 0,
      published: published !== undefined ? published : true,
    });

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: service,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private/Admin
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    if (req.body.name && !req.body.slug) {
      req.body.slug = slugify(req.body.name);
    } else if (req.body.slug) {
      req.body.slug = slugify(req.body.slug);
    }

    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      message: 'Service updated successfully',
      data: updatedService,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private/Admin
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    await service.deleteOne();

    res.json({
      success: true,
      message: 'Service deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
