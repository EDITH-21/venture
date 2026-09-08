import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '919998160726';
  const defaultMessage = encodeURIComponent("Hi Asteya, I'd like to discuss technology collaboration.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 rounded-2xl bg-white/95 backdrop-blur-xl border border-cream-border p-5 shadow-elevation text-charcoal"
          >
            <div className="flex items-center justify-between pb-3 border-b border-cream-border">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-forest flex items-center justify-center text-cream font-bold text-xs">
                  A
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal">Asteya</h4>
                  <div className="flex items-center gap-1 text-[10px] text-forest font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                    Direct Contact
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal-muted hover:text-charcoal p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-charcoal-muted my-3 leading-relaxed font-sans">
              Have an inquiry about our products, platforms, or research initiatives? Connect directly with our team.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-md bg-forest text-cream font-semibold text-xs flex items-center justify-center gap-2 hover:bg-forest-light transition-all shadow-subtle text-center"
            >
              <span>Connect on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-cream-border text-charcoal shadow-card hover:border-forest/40 hover:bg-white transition-all group"
        aria-label="Direct Communication"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-forest" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-forest animate-pulse" />
        </div>
        <span className="text-xs font-semibold font-sans tracking-tight text-charcoal group-hover:text-forest transition-colors">
          Contact Team
        </span>
      </motion.button>
    </div>
  );
};
