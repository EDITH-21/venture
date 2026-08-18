import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Eye,
  Mail,
  FolderGit2,
  TrendingUp,
  ArrowUpRight,
  RefreshCw,
  Clock,
  Layers,
  Smartphone,
  Laptop,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { analyticsAPI, inquiriesAPI } from '../services/api';
import { Button } from '../components/common/Button';

export const DashboardPage = () => {
  const [range, setRange] = useState('7d');
  const [analytics, setAnalytics] = useState(null);
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDashboardData = async (selectedRange = range) => {
    try {
      const [analyticsRes, inquiriesRes] = await Promise.all([
        analyticsAPI.getSummary({ range: selectedRange }),
        inquiriesAPI.getAll({ limit: 5 }),
      ]);

      if (analyticsRes.data?.success) {
        setAnalytics(analyticsRes.data);
      }
      if (inquiriesRes.data?.success) {
        setRecentInquiries(inquiriesRes.data.data?.slice(0, 5) || []);
      }
    } catch (err) {
      console.warn('Dashboard fetch error:', err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData(range);
  }, [range]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchDashboardData(range);
  };

  const COLORS = ['#C8A96B', '#E2D2AE', '#A8B9A5', '#68707C', '#30363D'];

  const timeFilterOptions = [
    { label: 'Today', value: 'today' },
    { label: '7 Days', value: '7d' },
    { label: '30 Days', value: '30d' },
    { label: '90 Days', value: '90d' },
  ];

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="w-10 h-10 border-2 border-champagne/20 border-t-champagne rounded-full animate-spin mx-auto mb-4" />
        <span className="text-xs font-mono uppercase tracking-wider text-champagne">
          Aggregating Telemetry Engine...
        </span>
      </div>
    );
  }

  const summary = analytics?.summary || {
    totalUniqueVisitors: 0,
    totalPageViews: 0,
    newInquiries: 0,
    publishedProjectsCount: 0,
  };

  const chartData = analytics?.charts?.trafficByDay || [];
  const topPages = analytics?.charts?.topPages || [];
  const devices = analytics?.charts?.devices || [];
  const trafficSources = analytics?.charts?.trafficSources || [];

  return (
    <div className="space-y-8">
      {/* Page Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Telemetry & Control
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            System Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Time Filter Pills */}
          <div className="bg-graphite p-1 rounded-sm border border-graphite-border flex items-center gap-1">
            {timeFilterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setRange(opt.value)}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                  range === opt.value
                    ? 'bg-champagne text-obsidian font-bold'
                    : 'text-text-muted hover:text-warm-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            className="p-2 bg-graphite border border-graphite-border hover:border-champagne/40 rounded text-text-muted hover:text-champagne transition-colors"
            title="Refresh Metrics"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-champagne' : ''}`} />
          </button>
        </div>
      </div>

      {/* Metric Metric Cards Grid (Real numbers from MongoDB) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Unique Visitors */}
        <div className="bg-graphite/60 border border-graphite-border rounded-sm p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-text-muted mb-4">
            <span className="text-xs font-mono uppercase tracking-wider">Total Visitors</span>
            <Users className="w-4 h-4 text-champagne" />
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-warm-white">
              {summary.totalUniqueVisitors}
            </span>
            <span className="text-[10px] font-mono text-text-muted block mt-1">
              Distinct sessions ({range})
            </span>
          </div>
        </div>

        {/* Total Page Views */}
        <div className="bg-graphite/60 border border-graphite-border rounded-sm p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-text-muted mb-4">
            <span className="text-xs font-mono uppercase tracking-wider">Page Views</span>
            <Eye className="w-4 h-4 text-champagne" />
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-warm-white">
              {summary.totalPageViews}
            </span>
            <span className="text-[10px] font-mono text-text-muted block mt-1">
              Telemetry hits ({range})
            </span>
          </div>
        </div>

        {/* New Inquiries */}
        <div className="bg-graphite/60 border border-graphite-border rounded-sm p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-text-muted mb-4">
            <span className="text-xs font-mono uppercase tracking-wider">New Inquiries</span>
            <Mail className="w-4 h-4 text-sage" />
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-sage">
              {summary.newInquiries}
            </span>
            <span className="text-[10px] font-mono text-text-muted block mt-1">
              Unprocessed client briefs
            </span>
          </div>
        </div>

        {/* Published Projects */}
        <div className="bg-graphite/60 border border-graphite-border rounded-sm p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-text-muted mb-4">
            <span className="text-xs font-mono uppercase tracking-wider">Live Projects</span>
            <FolderGit2 className="w-4 h-4 text-champagne-light" />
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-warm-white">
              {summary.publishedProjectsCount}
            </span>
            <span className="text-[10px] font-mono text-text-muted block mt-1">
              Publicly visible casework
            </span>
          </div>
        </div>
      </div>

      {/* Traffic Time-Series Chart */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
          <div>
            <h3 className="text-lg font-serif font-semibold text-warm-white">
              Visitor Traffic & Page Views
            </h3>
            <span className="text-xs font-mono text-text-muted">
              Telemetry volume across {range}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-champagne" />
              <span>Page Views</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sage" />
              <span>Visitors</span>
            </div>
          </div>
        </div>

        {chartData.length === 0 ? (
          <div className="h-64 flex items-center justify-center border border-dashed border-graphite-border rounded text-xs font-mono text-text-muted">
            No analytics data yet for this timeframe.
          </div>
        ) : (
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C8A96B" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#C8A96B" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A8B9A5" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#A8B9A5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#21262D" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#68707C"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#30363D' }}
                />
                <YAxis
                  stroke="#68707C"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#30363D' }}
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#161B22',
                    border: '1px solid rgba(200,169,107,0.3)',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="pageviews"
                  name="Page Views"
                  stroke="#C8A96B"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorViews)"
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  name="Visitors"
                  stroke="#A8B9A5"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorVisitors)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* 3 Secondary Telemetry Breakdown Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Pages */}
        <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6">
          <h3 className="text-base font-serif font-semibold text-warm-white mb-4 pb-3 border-b border-white/5">
            Top Pages ({range})
          </h3>
          {topPages.length === 0 ? (
            <p className="text-xs font-mono text-text-muted py-8 text-center">
              No page view records yet.
            </p>
          ) : (
            <div className="space-y-3">
              {topPages.map((p) => (
                <div
                  key={p.page}
                  className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-white/5"
                >
                  <span className="text-warm-white/90 truncate max-w-[70%]">{p.page}</span>
                  <span className="text-champagne font-bold">{p.views} views</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Traffic Sources */}
        <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6">
          <h3 className="text-base font-serif font-semibold text-warm-white mb-4 pb-3 border-b border-white/5">
            Traffic Sources ({range})
          </h3>
          {trafficSources.length === 0 ? (
            <p className="text-xs font-mono text-text-muted py-8 text-center">
              No referrer records yet.
            </p>
          ) : (
            <div className="space-y-3">
              {trafficSources.map((s) => (
                <div
                  key={s.source}
                  className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-white/5"
                >
                  <span className="text-warm-white/90 truncate max-w-[70%]">{s.source}</span>
                  <span className="text-warm-white font-bold">{s.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Devices */}
        <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6">
          <h3 className="text-base font-serif font-semibold text-warm-white mb-4 pb-3 border-b border-white/5">
            Device Distribution ({range})
          </h3>
          {devices.length === 0 ? (
            <p className="text-xs font-mono text-text-muted py-8 text-center">
              No device records yet.
            </p>
          ) : (
            <div className="space-y-3">
              {devices.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-white/5 capitalize"
                >
                  <span className="text-warm-white/90">{d.name}</span>
                  <span className="text-champagne font-bold">{d.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Inquiries Quick Table */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
          <div>
            <h3 className="text-lg font-serif font-semibold text-warm-white">
              Recent Inquiries
            </h3>
            <span className="text-xs font-mono text-text-muted">
              Latest incoming project proposals
            </span>
          </div>

          <Link
            to="/admin/inquiries"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-champagne hover:text-champagne-light"
          >
            <span>Manage All Inquiries</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentInquiries.length === 0 ? (
          <div className="py-10 text-center text-xs font-mono text-text-muted">
            No inquiries recorded yet. Submissions from /contact will appear here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-graphite-border text-text-muted">
                  <th className="pb-3">Name & Email</th>
                  <th className="pb-3">Service</th>
                  <th className="pb-3">Budget</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentInquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-obsidian/40">
                    <td className="py-3">
                      <div className="font-bold text-warm-white font-sans">{inq.name}</div>
                      <div className="text-[10px] text-text-muted">{inq.email}</div>
                    </td>
                    <td className="py-3 text-warm-white/80">{inq.service}</td>
                    <td className="py-3 text-champagne">{inq.budget}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                          inq.status === 'New'
                            ? 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
                            : inq.status === 'Contacted'
                            ? 'bg-blue-950/60 text-blue-300 border border-blue-800/50'
                            : inq.status === 'Completed'
                            ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                            : 'bg-graphite text-text-muted'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-3 text-text-muted">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
