import AnalyticsEvent from '../models/AnalyticsEvent.js';
import Inquiry from '../models/Inquiry.js';
import Project from '../models/Project.js';

// @desc    Record an anonymous analytics event
// @route   POST /api/analytics
// @access  Public
export const recordEvent = async (req, res) => {
  try {
    const { sessionId, page, referrer, device, browser, os, eventType } = req.body;

    if (!sessionId || !page) {
      return res.status(400).json({ success: false, message: 'sessionId and page are required' });
    }

    // Sanitize values to prevent logging of sensitive query params
    const cleanPage = page.split('?')[0].substring(0, 200);
    const cleanReferrer = referrer ? referrer.substring(0, 300) : 'direct';

    const event = await AnalyticsEvent.create({
      sessionId,
      page: cleanPage,
      referrer: cleanReferrer,
      device: device || 'desktop',
      browser: browser || 'Unknown',
      os: os || 'Unknown',
      eventType: eventType || 'pageview',
      timestamp: new Date(),
    });

    res.status(201).json({ success: true, eventId: event._id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get aggregated analytics for dashboard
// @route   GET /api/analytics
// @access  Private/Admin
export const getAnalyticsSummary = async (req, res) => {
  try {
    const { range = '7d' } = req.query;

    let startDate = new Date();
    if (range === 'today') {
      startDate.setHours(0, 0, 0, 0);
    } else if (range === '7d') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (range === '30d') {
      startDate.setDate(startDate.getDate() - 30);
    } else if (range === '90d') {
      startDate.setDate(startDate.getDate() - 90);
    } else {
      startDate.setDate(startDate.getDate() - 7);
    }

    const timeFilter = { timestamp: { $gte: startDate } };

    // 1. Total pageviews
    const totalPageViews = await AnalyticsEvent.countDocuments({
      ...timeFilter,
      eventType: 'pageview',
    });

    // 2. Unique visitors (distinct sessionIds)
    const uniqueSessions = await AnalyticsEvent.distinct('sessionId', timeFilter);
    const totalUniqueVisitors = uniqueSessions.length;

    // 3. Inquiries count in this timeframe & total
    const newInquiries = await Inquiry.countDocuments({
      createdAt: { $gte: startDate },
      status: 'New',
    });
    const totalInquiries = await Inquiry.countDocuments();

    // 4. Published projects count
    const publishedProjectsCount = await Project.countDocuments({ published: true });

    // 5. Daily traffic breakdown
    const trafficByDay = await AnalyticsEvent.aggregate([
      { $match: timeFilter },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' },
          },
          pageviews: { $sum: 1 },
          visitors: { $addToSet: '$sessionId' },
        },
      },
      {
        $project: {
          date: '$_id',
          pageviews: 1,
          visitors: { $size: '$visitors' },
          _id: 0,
        },
      },
      { $sort: { date: 1 } },
    ]);

    // 6. Top pages breakdown
    const topPages = await AnalyticsEvent.aggregate([
      { $match: { ...timeFilter, eventType: 'pageview' } },
      {
        $group: {
          _id: '$page',
          views: { $sum: 1 },
          uniqueVisitors: { $addToSet: '$sessionId' },
        },
      },
      {
        $project: {
          page: '$_id',
          views: 1,
          uniqueVisitors: { $size: '$uniqueVisitors' },
          _id: 0,
        },
      },
      { $sort: { views: -1 } },
      { $limit: 8 },
    ]);

    // 7. Device distribution
    const devices = await AnalyticsEvent.aggregate([
      { $match: timeFilter },
      {
        $group: {
          _id: '$device',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          name: '$_id',
          value: '$count',
          _id: 0,
        },
      },
      { $sort: { value: -1 } },
    ]);

    // 8. Traffic Sources / Referrers
    const trafficSources = await AnalyticsEvent.aggregate([
      { $match: timeFilter },
      {
        $group: {
          _id: '$referrer',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          source: '$_id',
          count: '$count',
          _id: 0,
        },
      },
      { $sort: { count: -1 } },
      { $limit: 6 },
    ]);

    res.json({
      success: true,
      range,
      hasData: totalPageViews > 0 || totalUniqueVisitors > 0,
      summary: {
        totalUniqueVisitors,
        totalPageViews,
        newInquiries,
        totalInquiries,
        publishedProjectsCount,
      },
      charts: {
        trafficByDay,
        topPages,
        devices,
        trafficSources,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
