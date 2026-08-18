import express from 'express';
import { recordEvent, getAnalyticsSummary } from '../controllers/analyticsController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', recordEvent);
router.get('/', protect, adminOnly, getAnalyticsSummary);

export default router;
