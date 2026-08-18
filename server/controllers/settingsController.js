import SiteSetting from '../models/SiteSetting.js';

// @desc    Get site settings
// @route   GET /api/settings
// @access  Public
export const getSettings = async (req, res) => {
  try {
    let settings = await SiteSetting.findOne();

    if (!settings) {
      settings = await SiteSetting.create({
        companyName: 'Vanguard Digital',
        tagline: "Technology, creativity and digital solutions for what's next.",
        email: 'contact@vanguard-digital.tech',
        phone: '+1 (555) 019-2834',
        whatsapp: '+1 (555) 019-2834',
        instagram: 'https://instagram.com/vanguard.digital',
        linkedin: 'https://linkedin.com/company/vanguard-digital',
        website: 'https://vanguard-digital.tech',
      });
    }

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update site settings
// @route   PUT /api/settings
// @access  Private/Admin
export const updateSettings = async (req, res) => {
  try {
    let settings = await SiteSetting.findOne();

    if (!settings) {
      settings = new SiteSetting(req.body);
    } else {
      Object.assign(settings, req.body);
    }

    await settings.save();

    res.json({
      success: true,
      message: 'Site settings updated successfully',
      data: settings,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
