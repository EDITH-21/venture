import mongoose from 'mongoose';

const siteSettingSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      default: 'Vanguard Digital',
      trim: true,
    },
    tagline: {
      type: String,
      default: "Technology, creativity and digital solutions for what's next.",
    },
    email: {
      type: String,
      default: 'contact@vanguard-digital.tech',
    },
    phone: {
      type: String,
      default: '+1 (555) 019-2834',
    },
    whatsapp: {
      type: String,
      default: '+1 (555) 019-2834',
    },
    instagram: {
      type: String,
      default: 'https://instagram.com',
    },
    linkedin: {
      type: String,
      default: 'https://linkedin.com',
    },
    website: {
      type: String,
      default: 'https://vanguard-digital.tech',
    },
    logo: {
      type: String,
      default: '',
    },
    favicon: {
      type: String,
      default: '',
    },
    socialLinks: [
      {
        platform: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SiteSetting = mongoose.model('SiteSetting', siteSettingSchema);
export default SiteSetting;
