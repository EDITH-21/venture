import express from 'express';
import {
  getVentures,
  createVenture,
  updateVenture,
  deleteVenture,
} from '../controllers/ventureController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Optional auth check middleware for GET so if admin requests ?all=true, admin status is recognized
const optionalAuth = async (req, res, next) => {
  if (req.cookies && req.cookies.jwt) {
    try {
      const jwt = (await import('jsonwebtoken')).default;
      const User = (await import('../models/User.js')).default;
      const secret = process.env.JWT_SECRET || 'vanguard_super_secure_jwt_secret_production_ready_key_99887766';
      const decoded = jwt.verify(req.cookies.jwt, secret);
      req.user = await User.findById(decoded.userId).select('-passwordHash');
    } catch {
      // ignore, continue as public
    }
  }
  next();
};

router.get('/', optionalAuth, getVentures);
router.post('/', protect, adminOnly, createVenture);
router.put('/:id', protect, adminOnly, updateVenture);
router.delete('/:id', protect, adminOnly, deleteVenture);

export default router;
