import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { apiLimiter } from './middleware/rateLimiter.js';

// Import Routes
import authRoutes from './routes/authRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import ventureRoutes from './routes/ventureRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

// Import Models for auto-initialization check
import User from './models/User.js';
import { seedDatabase } from './utils/seeder.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Security Middleware
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false,
  })
);

// CORS Configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

// Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// General Rate Limiter
app.use('/api', apiLimiter);

// Health Check Endpoint
const healthCheck = (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Vanguard MERN API',
    timestamp: new Date().toISOString(),
  });
};
app.get('/api/health', healthCheck);
app.get('/health', healthCheck);

// REST API Routes (Support both /api/... and direct serverless paths)
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/services', serviceRoutes);
app.use('/services', serviceRoutes);

app.use('/api/projects', projectRoutes);
app.use('/projects', projectRoutes);

app.use('/api/ventures', ventureRoutes);
app.use('/ventures', ventureRoutes);

app.use('/api/inquiries', inquiryRoutes);
app.use('/inquiries', inquiryRoutes);

app.use('/api/analytics', analyticsRoutes);
app.use('/analytics', analyticsRoutes);

app.use('/api/settings', settingsRoutes);
app.use('/settings', settingsRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Database connection + auto-seed (cached for serverless warm starts)
let isDbReady = false;

const ensureDB = async () => {
  if (isDbReady) return;
  try {
    await connectDB();
    try {
      const adminCount = await User.countDocuments();
      if (adminCount === 0) {
        console.log('[Server] Database is empty. Running automatic initial seeding...');
        await seedDatabase();
      }
    } catch (seedErr) {
      console.warn('[Server] Auto-seed check notice:', seedErr.message);
    }
    isDbReady = true;
  } catch (dbErr) {
    console.warn('[Server] DB connection notice:', dbErr.message);
  }
};

// Wrap app for serverless — connect DB before handling each request
const handler = async (req, res) => {
  await ensureDB();
  return app(req, res);
};

// For local development: start listening on PORT
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  const startServer = async () => {
    await ensureDB();
    app.listen(PORT, () => {
      console.log(`[Vanguard Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
      console.log(`[Vanguard Server] API Root: http://localhost:${PORT}/api`);
    });
  };
  startServer();
}

// Export both for Vercel serverless and for local
export default handler;
export { app };
