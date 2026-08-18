import React, { useState, useEffect } from 'react';
import { RefreshCw, BarChart2, TrendingUp, Users, Eye, Monitor, Compass } from 'lucide-react';
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
} from 'recharts';
import { analyticsAPI } from '../services/api';

export const AnalyticsPage = () => {
  const [range, setRange] = useState('30d');
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async (selectedRange = range) => {
    try {
      const res = await analyticsAPI.getSummary({ range: selectedRange });
      if (res.data?.success) {
        setAnalytics(res.data);
      }
    } catch (err) {
      console.warn('Analytics query failure:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics(range);
  }, [range]);

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
          Loading In-Depth Telemetry...
        </span>
      </div>
    );
  }

  const chartData = analytics?.charts?.trafficByDay || [];
  const topPages = analytics?.charts?.topPages || [];
  const devices = analytics?.charts?.devices || [];
  const sources = analytics?.charts?.trafficSources || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Real Analytics Engine
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Traffic Intelligence
          </h1>
        </div>

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
      </div>

      {/* Main Volume Chart */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6 sm:p-8">
        <h3 className="text-lg font-serif font-semibold text-warm-white mb-6">
          Daily Page Views & Session Volume ({range})
        </h3>
        {chartData.length === 0 ? (
          <div className="h-64 flex items-center justify-center border border-dashed border-graphite-border rounded text-xs font-mono text-text-muted">
            No telemetry recorded yet for this duration.
          </div>
        ) : (
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#21262D" vertical={false} />
                <XAxis dataKey="date" stroke="#68707C" fontSize={11} />
                <YAxis stroke="#68707C" fontSize={11} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#161B22',
                    border: '1px solid rgba(200,169,107,0.3)',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                  }}
                />
                <Bar dataKey="pageviews" name="Page Views" fill="#C8A96B" radius={[2, 2, 0, 0]} />
                <Bar dataKey="visitors" name="Unique Visitors" fill="#A8B9A5" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Breakdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Requested Pages */}
        <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6">
          <h3 className="text-lg font-serif font-semibold text-warm-white mb-4 pb-3 border-b border-white/5">
            Most Viewed Routes
          </h3>
          <div className="space-y-3">
            {topPages.map((p) => (
              <div key={p.page} className="flex items-center justify-between text-xs font-mono py-2 border-b border-white/5">
                <span className="text-warm-white font-mono">{p.page}</span>
                <span className="text-champagne font-bold">{p.views} views</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Inflow Referrers */}
        <div className="bg-graphite/50 border border-graphite-border rounded-sm p-6">
          <h3 className="text-lg font-serif font-semibold text-warm-white mb-4 pb-3 border-b border-white/5">
            Referral Channels
          </h3>
          <div className="space-y-3">
            {sources.map((s) => (
              <div key={s.source} className="flex items-center justify-between text-xs font-mono py-2 border-b border-white/5">
                <span className="text-warm-white font-mono">{s.source}</span>
                <span className="text-warm-white font-bold">{s.count} hits</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
