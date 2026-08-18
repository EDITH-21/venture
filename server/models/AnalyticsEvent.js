import mongoose from 'mongoose';

const analyticsEventSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    index: true,
  },
  page: {
    type: String,
    required: true,
    index: true,
  },
  referrer: {
    type: String,
    default: 'direct',
  },
  device: {
    type: String,
    default: 'desktop',
    index: true,
  },
  browser: {
    type: String,
    default: 'Unknown',
  },
  os: {
    type: String,
    default: 'Unknown',
  },
  country: {
    type: String,
    default: 'Global',
  },
  eventType: {
    type: String,
    default: 'pageview',
    index: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

analyticsEventSchema.index({ timestamp: -1, page: 1 });

const AnalyticsEvent = mongoose.model('AnalyticsEvent', analyticsEventSchema);
export default AnalyticsEvent;
