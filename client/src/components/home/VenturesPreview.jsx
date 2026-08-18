import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { venturesAPI } from '../../services/api';
import { Button } from '../common/Button';

export const VenturesPreview = () => {
  const [publishedVentures, setPublishedVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVentures = async () => {
      try {
        // Public request will only receive published: true from server
        const res = await venturesAPI.getAll();
        if (res.data?.success) {
          setPublishedVentures(res.data.data);
        }
      } catch (err) {
        console.warn('Ventures fetch status:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVentures();
  }, []);

  // Standard Coming Soon slots to protect confidential R&D projects
  const comingSoonSlots = [
    {
      num: '01',
      code: 'CORE-LABS-X1',
      tag: 'Autonomous AI & Core Systems',
      status: 'COMING SOON',
      notice: 'Proprietary venture under active private R&D testing.',
    },
    {
      num: '02',
      code: 'EDGE-PROTO-X2',
      tag: 'Distributed Real-Time Grid',
      status: 'COMING SOON',
      notice: 'Decentralized state orchestration protocol for low-latency nodes.',
    },
    {
      num: '03',
      code: 'SYNTH-UI-X3',
      tag: 'Generative Interface Framework',
      status: 'COMING SOON',
      notice: 'Next-generation tokenized frontend compiler and design engine.',
    },
  ];

  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Internal Incubator & R&D
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white mb-6">
            We're Building The Future
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            Alongside our client work, we're building our own products and technology ventures.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* If there are published ventures from API, render them first */}
          {publishedVentures.map((venture, idx) => (
            <motion.div
              key={venture._id || venture.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-graphite/80 rounded-md border border-champagne/40 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <span className="font-mono text-sm font-bold text-champagne">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-champagne/10 text-champagne border border-champagne/30">
                    Live Venture
                  </span>
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-serif font-semibold text-warm-white mb-3">
                    {venture.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {venture.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Discreet Coming Soon placeholders strictly maintaining project secrecy */}
          {comingSoonSlots.slice(0, 3 - publishedVentures.length).map((slot, idx) => (
            <motion.div
              key={slot.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-graphite/40 rounded-md border border-dashed border-graphite-border hover:border-champagne/30 p-8 sm:p-10 flex flex-col justify-between relative group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <span className="font-mono text-sm font-bold text-text-muted">
                    {slot.num}
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-obsidian text-champagne border border-champagne/20">
                    <Lock className="w-2.5 h-2.5" />
                    <span>{slot.status}</span>
                  </div>
                </div>

                <div className="pt-8">
                  <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase block mb-2">
                    {slot.code}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-warm-white/90 mb-3 tracking-wide">
                    {slot.tag}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {slot.notice}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>R&D STAGE</span>
                <span className="text-champagne/70">STEALTH MODE</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Action */}
        <div className="mt-16 text-center">
          <Button
            to="/ventures"
            variant="outline"
            size="md"
            icon={ArrowRight}
            className="text-xs uppercase tracking-wider font-semibold"
          >
            Explore Ventures Philosophy
          </Button>
        </div>
      </div>
    </section>
  );
};
