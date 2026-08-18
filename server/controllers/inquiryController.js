import Inquiry from '../models/Inquiry.js';

// @desc    Submit project inquiry / contact form
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and project message are required.',
      });
    }

    const inquiry = await Inquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      service: service || 'General Technology Inquiry',
      budget: budget || 'Flexible',
      message: message.trim(),
      status: 'New',
    });

    res.status(201).json({
      success: true,
      message: "Thanks. We'll get back to you soon.",
      data: {
        _id: inquiry._id,
        createdAt: inquiry.createdAt,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong. Please check your inputs and try again.',
      error: error.message,
    });
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
export const getInquiries = async (req, res) => {
  try {
    const { status, search } = req.query;
    const query = {};

    if (status && status !== 'All') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { service: { $regex: search, $options: 'i' } },
      ];
    }

    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });

    const statusCounts = {
      all: await Inquiry.countDocuments(),
      new: await Inquiry.countDocuments({ status: 'New' }),
      contacted: await Inquiry.countDocuments({ status: 'Contacted' }),
      inProgress: await Inquiry.countDocuments({ status: 'In Progress' }),
      completed: await Inquiry.countDocuments({ status: 'Completed' }),
      archived: await Inquiry.countDocuments({ status: 'Archived' }),
    };

    res.json({
      success: true,
      count: inquiries.length,
      statusCounts,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private/Admin
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['New', 'Contacted', 'In Progress', 'Completed', 'Archived'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status provided' });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }

    res.json({
      success: true,
      message: 'Inquiry status updated',
      data: inquiry,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private/Admin
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }

    await inquiry.deleteOne();

    res.json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
