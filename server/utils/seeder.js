import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectDB, disconnectDB } from '../config/db.js';
import User from '../models/User.js';
import ServiceCategory from '../models/ServiceCategory.js';
import Service from '../models/Service.js';
import Project from '../models/Project.js';
import Venture from '../models/Venture.js';
import SiteSetting from '../models/SiteSetting.js';
import Inquiry from '../models/Inquiry.js';
import AnalyticsEvent from '../models/AnalyticsEvent.js';
import {
  categoriesData,
  servicesData,
  sampleProjects,
  defaultVentures,
  defaultSettings,
} from './seedData.js';

dotenv.config();

export const seedDatabase = async () => {
  try {
    console.log('[Seeder] Starting database population...');

    // Clear existing collections
    await User.deleteMany();
    await ServiceCategory.deleteMany();
    await Service.deleteMany();
    await Project.deleteMany();
    await Venture.deleteMany();
    await SiteSetting.deleteMany();

    // 1. Create Default Admin User
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash('AdminPassword2026!', salt);

    const adminUser = await User.create({
      name: 'Vanguard Administrator',
      email: 'admin@vanguard.tech',
      passwordHash,
      role: 'admin',
    });
    console.log(`[Seeder] Admin user created: ${adminUser.email} (Password: AdminPassword2026!)`);

    // 2. Insert Service Categories
    await ServiceCategory.insertMany(categoriesData);
    console.log(`[Seeder] Created ${categoriesData.length} service categories.`);

    // 3. Insert All Services (Technology, Creative, Digital)
    await Service.insertMany(servicesData);
    console.log(`[Seeder] Created ${servicesData.length} services across Technology, Creative, and Digital.`);

    // 4. Insert Sample Projects
    await Project.insertMany(sampleProjects);
    console.log(`[Seeder] Created ${sampleProjects.length} initial portfolio projects.`);

    // 5. Insert Initial Ventures (Default unpublished for strict secrecy)
    await Venture.insertMany(defaultVentures);
    console.log(`[Seeder] Created ${defaultVentures.length} internal venture projects (Unpublished/Secrecy preserved).`);

    // 6. Insert Default Site Settings
    await SiteSetting.create(defaultSettings);
    console.log('[Seeder] Site settings initialized.');

    // 7. Insert sample analytics events for initial realistic graph preview
    const sampleAnalytics = [];
    const pages = ['/', '/about', '/solutions', '/solutions/technology', '/solutions/technology/web-development', '/work', '/ventures', '/contact'];
    const devices = ['desktop', 'desktop', 'mobile', 'desktop', 'mobile', 'tablet'];
    const referrers = ['https://google.com', 'https://linkedin.com', 'direct', 'https://twitter.com', 'direct'];
    
    for (let i = 0; i < 45; i++) {
      const pastDays = Math.floor(Math.random() * 7);
      const timestamp = new Date();
      timestamp.setDate(timestamp.getDate() - pastDays);
      timestamp.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));

      sampleAnalytics.push({
        sessionId: `sess_${Math.random().toString(36).substring(2, 9)}`,
        page: pages[Math.floor(Math.random() * pages.length)],
        referrer: referrers[Math.floor(Math.random() * referrers.length)],
        device: devices[Math.floor(Math.random() * devices.length)],
        browser: 'Chrome',
        os: 'Windows',
        eventType: 'pageview',
        timestamp,
      });
    }
    await AnalyticsEvent.insertMany(sampleAnalytics);
    console.log(`[Seeder] Inserted ${sampleAnalytics.length} initial telemetry event points.`);

    console.log('[Seeder] Database seeding completed successfully.');
  } catch (error) {
    console.error(`[Seeder Error]: ${error.message}`);
    throw error;
  }
};

// If run directly via command line
if (process.argv[1] && process.argv[1].endsWith('seeder.js')) {
  (async () => {
    await connectDB();
    await seedDatabase();
    await disconnectDB();
    process.exit(0);
  })();
}
