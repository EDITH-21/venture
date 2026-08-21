import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '919998160726';
  const defaultMessage = encodeURIComponent("Hi Vanguard Digital, I'd like to discuss a project.");
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
            className="mb-3 w-72 rounded-2xl bg-graphite/95 backdrop-blur-xl border border-champagne/40 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-warm-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center text-champagne font-bold text-xs">
                  VD
                </div>
                <div>
                  <h4 className="text-xs font-bold text-warm-white">Vanguard Digital</h4>
                  <div className="flex items-center gap-1 text-[10px] text-sage font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                    Online · Direct Engineering
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-warm-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-text-muted my-3 leading-relaxed">
              Have an idea, need an estimate, or want to discuss technical feasibility? Chat directly with our engineering team on WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-md bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-champagne-light transition-all shadow-md text-center"
            >
              <span>Chat on WhatsApp</span>
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
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-graphite/90 backdrop-blur-md border border-champagne/40 text-warm-white shadow-2xl hover:border-champagne hover:bg-graphite transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-champagne" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sage animate-pulse border-2 border-graphite" />
        </div>
        <span className="text-xs font-bold font-sans tracking-wide text-warm-white group-hover:text-champagne transition-colors">
          Chat on WhatsApp
        </span>
      </motion.button>
    </div>
  );
};
