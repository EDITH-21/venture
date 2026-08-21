import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderLock, 
  CheckCircle2, 
  Clock, 
  FileText, 
  UploadCloud, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Lock
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Link } from 'react-router-dom';

export const ClientPortalPage = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default demo view enabled

  const activeMilestones = [
    { step: '01', title: 'Requirements & Scope', status: 'completed', date: 'Aug 12, 2026' },
    { step: '02', title: 'UI/UX Design & Prototyping', status: 'completed', date: 'Aug 18, 2026' },
    { step: '03', title: 'Full-Stack Development', status: 'current', date: 'In Progress (85%)' },
    { step: '04', title: 'QA & Device Testing', status: 'upcoming', date: 'Pending Sprint 4' },
    { step: '05', title: 'Production Launch & Handover', status: 'upcoming', date: 'Target: Sep 02, 2026' },
  ];

  const deliverables = [
    { title: 'Project Proposal & Technical Specifications', status: 'Approved', type: 'PDF Document', size: '2.4 MB' },
    { title: 'Brand Design Tokens & Figma UI Mockups', status: 'Approved', type: 'Design System', size: 'Link' },
    { title: 'Staging Environment URL', status: 'Active', type: 'Live Preview', size: 'vanguard-staging.vercel.app' },
    { title: 'Final Codebase & GitHub Repository', status: 'Handover Pending', type: 'GitHub Repo', size: 'Private' },
  ];

  const onboardingAssets = [
    { item: 'High-Resolution Vector Logo (SVG/PNG)', status: 'Received' },
    { item: 'Brand Color Palette & Font Preferences', status: 'Received' },
    { item: 'Core Website Copy & Services Information', status: 'Received' },
    { item: 'Payment Gateway API Keys (Razorpay/Stripe)', status: 'Pending Review' },
    { item: 'Domain DNS Access / Cloudflare Invite', status: 'Pending Launch' },
  ];

  return (
    <>
      <SEOHead
        title="Client Project Portal — Vanguard Digital"
        description="Track your project development milestones, review proposals, upload brand assets, and monitor live deployment progress."
      />

      {/* Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-16 border-b border-graphite-border/60 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
              <FolderLock className="w-3.5 h-3.5 text-champagne" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold">
                Client Command Center
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-tight mb-4">
              Project Milestone Tracker.
            </h1>
            <p className="text-base text-text-muted leading-relaxed max-w-2xl">
              Transparent, real-time visibility into your digital project lifecycle, deliverables, pending assets, and staging previews.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portal View */}
      <section className="bg-obsidian-deep text-warm-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Active Project Header Card */}
          <div className="bg-graphite/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-champagne/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-sage font-bold">
                  Sprint 3 · Active Development
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-white">
                Enterprise Digital Platform & Portal
              </h2>
              <p className="text-xs text-text-muted mt-1">
                Client: <span className="text-warm-white font-semibold">Sterling Enterprises</span> · Project Ref: <span className="font-mono text-champagne">VNG-2026-084</span>
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I%20have%20an%20update%20regarding%20my%20active%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-5 py-3 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-champagne-light transition-all shadow-md text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Lead Developer</span>
              </a>
            </div>
          </div>

          {/* 5-Stage Milestone Timeline */}
          <div className="bg-graphite/50 p-6 sm:p-8 rounded-2xl border border-graphite-border space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <h3 className="text-xl font-serif font-bold text-warm-white">
                Milestone Roadmap
              </h3>
              <span className="text-xs font-mono text-champagne bg-champagne/10 px-3 py-1 rounded border border-champagne/20">
                Phase 3 of 5
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {activeMilestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border flex flex-col justify-between h-40 ${
                    m.status === 'completed'
                      ? 'bg-obsidian/90 border-sage/40 text-warm-white'
                      : m.status === 'current'
                      ? 'bg-obsidian/95 border-champagne ring-1 ring-champagne/40 shadow-lg'
                      : 'bg-obsidian/40 border-white/5 text-text-muted'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-champagne">
                      {m.step}
                    </span>
                    {m.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-sage" />
                    ) : m.status === 'current' ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-champagne animate-ping" />
                    ) : (
                      <Clock className="w-4 h-4 text-text-muted/40" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-sm mb-1 text-warm-white">
                      {m.title}
                    </h4>
                    <span className="text-[10px] font-mono text-text-muted block">
                      {m.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Column Split: Deliverables & Onboarding Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Deliverables */}
            <div className="bg-graphite/50 p-6 sm:p-8 rounded-2xl border border-graphite-border space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <h3 className="text-xl font-serif font-bold text-warm-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-champagne" />
                  Project Deliverables
                </h3>
                <span className="text-xs font-mono text-text-muted">4 Records</span>
              </div>

              <div className="space-y-3">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 rounded-lg bg-obsidian border border-white/5 text-xs">
                    <div>
                      <span className="font-semibold text-warm-white block">{d.title}</span>
                      <span className="text-[10px] text-text-muted font-mono">{d.type} · {d.size}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      d.status === 'Approved' || d.status === 'Active'
                        ? 'bg-sage/15 text-sage border border-sage/30'
                        : 'bg-champagne/15 text-champagne border border-champagne/30'
                    }`}>
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Onboarding Assets Checklist */}
            <div className="bg-graphite/50 p-6 sm:p-8 rounded-2xl border border-graphite-border space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <h3 className="text-xl font-serif font-bold text-warm-white flex items-center gap-2">
                  <UploadCloud className="w-5 h-5 text-champagne" />
                  Client Onboarding Checklist
                </h3>
                <span className="text-xs font-mono text-sage font-bold">3 of 5 Completed</span>
              </div>

              <div className="space-y-3">
                {onboardingAssets.map((a, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 rounded-lg bg-obsidian border border-white/5 text-xs">
                    <div className="flex items-center gap-2.5">
                      {a.status === 'Received' ? (
                        <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-champagne flex-shrink-0" />
                      )}
                      <span className="text-warm-white/90">{a.item}</span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono ${
                      a.status === 'Received' ? 'text-sage bg-sage/10' : 'text-champagne bg-champagne/10'
                    }`}>
                      {a.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
