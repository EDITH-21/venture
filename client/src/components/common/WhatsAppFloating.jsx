import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '919998160726';
  const defaultMessage = encodeURIComponent("Hi Asteya, I'd like to discuss a technology project.");
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
            className="mb-3 w-72 rounded-2xl bg-cosmic-card/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-violet to-cyan flex items-center justify-center text-white font-bold text-xs shadow-card-glow">
                  A
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">ASTEYA</h4>
                  <div className="flex items-center gap-1 text-[10px] text-cyan-glow font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    Direct Conversation
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cosmic-muted hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-cosmic-muted my-3 leading-relaxed font-sans">
              Have an idea, project requirement, or venture inquiry? Connect directly with our team on WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-violet to-cyan text-white font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-card-glow text-center"
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
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-cosmic-card/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl hover:border-violet-light/50 hover:shadow-card-glow transition-all group"
        aria-label="Direct Communication"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-cyan-glow" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan animate-pulse" />
        </div>
        <span className="text-xs font-semibold font-sans tracking-tight text-white group-hover:text-cyan-glow transition-colors">
          Talk to Asteya
        </span>
      </motion.button>
    </div>
  );
};
