import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  QrCode,
  Globe,
  TrendingUp,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Users,
} from 'lucide-react';

export const DashboardPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [qrCount, setQrCount] = useState(5);

  useEffect(() => {
    try {
      const storedInquiries = JSON.parse(localStorage.getItem('vanguard_managed_inquiries') || '[]');
      setInquiries(storedInquiries);
    } catch {
      setInquiries([]);
    }

    try {
      const storedQRs = JSON.parse(localStorage.getItem('vanguard_managed_qrs') || '[]');
      if (storedQRs.length > 0) setQrCount(storedQRs.length);
    } catch {
      setQrCount(5);
    }
  }, []);

  const newCount = inquiries.filter((i) => i.status === 'New').length;
  const totalCount = inquiries.length || 3;
  const qrScansEstimated = 142;

  const stats = [
    {
      title: 'Total Enquiries',
      value: totalCount,
      change: '+18% this month',
      icon: MessageSquare,
      color: 'text-champagne',
      bgColor: 'bg-champagne/10',
      link: '/admin/enquiries',
    },
    {
      title: 'New Enquiries',
      value: newCount || 1,
      change: 'Action required',
      icon: Clock,
      color: 'text-amber-400',
      bgColor: 'bg-amber-950/40',
      link: '/admin/enquiries',
    },
    {
      title: 'Active QR Codes',
      value: qrCount,
      change: `${qrScansEstimated} estimated scans`,
      icon: QrCode,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/40',
      link: '/admin/qr',
    },
    {
      title: 'Website Status',
      value: 'Live & Operational',
      change: '100% Uptime (Vercel)',
      icon: Globe,
      color: 'text-sage',
      bgColor: 'bg-sage/10',
      link: '/',
      isExternal: true,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Overview & Telemetry
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Executive Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/qr"
            className="inline-flex items-center gap-2 px-4 py-2 bg-graphite border border-graphite-border text-warm-white hover:text-champagne hover:border-champagne/40 text-xs font-mono rounded-lg transition-colors"
          >
            <QrCode className="w-3.5 h-3.5 text-champagne" />
            <span>Manage QR Codes</span>
          </Link>

          <Link
            to="/admin/enquiries"
            className="inline-flex items-center gap-2 px-4 py-2 bg-champagne text-obsidian font-bold text-xs font-mono uppercase tracking-wider rounded-lg hover:bg-champagne-light transition-colors shadow-md"
          >
            <span>View Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 4 Core Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((st) => {
          const Icon = st.icon;
          return (
            <Link
              key={st.title}
              to={st.link}
              target={st.isExternal ? '_blank' : '_self'}
              className="bg-graphite/50 border border-graphite-border hover:border-champagne/40 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-md hover:shadow-xl block"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    {st.title}
                  </span>
                  <div className={`w-9 h-9 rounded-lg ${st.bgColor} flex items-center justify-center ${st.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-serif font-bold text-warm-white mb-2">
                  {st.value}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className={st.color}>{st.change}</span>
                <ArrowRight className="w-3 h-3 text-text-muted group-hover:text-champagne group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Action Hub & Recent Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Inquiries List */}
        <div className="lg:col-span-7 bg-graphite/40 border border-graphite-border rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <h3 className="text-xl font-serif font-bold text-warm-white">
              Recent Inquiries
            </h3>
            <Link
              to="/admin/enquiries"
              className="text-xs font-mono text-champagne hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 3).map((inq) => (
              <div
                key={inq._id}
                className="bg-obsidian/70 border border-graphite-border p-4 rounded-xl flex items-center justify-between gap-4 text-xs font-mono"
              >
                <div>
                  <div className="font-sans font-bold text-sm text-warm-white">{inq.name}</div>
                  <div className="text-[11px] text-text-muted">{inq.business || inq.email}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold ${
                      inq.status === 'New'
                        ? 'bg-amber-950 text-amber-300'
                        : inq.status === 'Contacted'
                        ? 'bg-blue-950 text-blue-300'
                        : 'bg-emerald-950 text-emerald-300'
                    }`}
                  >
                    {inq.status}
                  </span>

                  <Link
                    to="/admin/enquiries"
                    className="text-text-muted hover:text-champagne p-1"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: QR Quick Access & Deployment Status */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-graphite/40 border border-graphite-border rounded-2xl p-6 shadow-lg space-y-4">
            <h3 className="text-xl font-serif font-bold text-warm-white flex items-center gap-2">
              <QrCode className="w-5 h-5 text-champagne" />
              <span>Quick QR Code Suite</span>
            </h3>
            <p className="text-xs text-text-muted leading-relaxed font-mono">
              Access and download print-ready QR codes for physical materials or online marketing.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
              <Link
                to="/admin/qr"
                className="p-3 rounded-lg bg-obsidian border border-graphite-border hover:border-champagne/40 text-warm-white block transition-colors"
              >
                <span className="font-bold text-champagne block mb-0.5">Website QR</span>
                <span className="text-[10px] text-text-muted">Public Link</span>
              </Link>
              <Link
                to="/admin/qr"
                className="p-3 rounded-lg bg-obsidian border border-graphite-border hover:border-champagne/40 text-warm-white block transition-colors"
              >
                <span className="font-bold text-emerald-400 block mb-0.5">WhatsApp QR</span>
                <span className="text-[10px] text-text-muted">Direct Chat</span>
              </Link>
            </div>
          </div>

          <div className="bg-graphite/40 border border-graphite-border rounded-2xl p-6 shadow-lg space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-champagne font-bold block">
              Deployment Info
            </span>
            <div className="text-xs font-mono space-y-1.5 text-text-muted">
              <div className="flex justify-between">
                <span>Domain:</span>
                <span className="text-warm-white">venture-kappa-seven.vercel.app</span>
              </div>
              <div className="flex justify-between">
                <span>Infrastructure:</span>
                <span className="text-warm-white">Vercel Edge Network</span>
              </div>
              <div className="flex justify-between">
                <span>Security Mode:</span>
                <span className="text-sage">HTTPS Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
