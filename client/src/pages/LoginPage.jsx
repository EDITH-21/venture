import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, AlertCircle, Loader2, ShieldCheck, ArrowLeft, KeyRound, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SEOHead } from '../components/common/SEOHead';

export const LoginPage = () => {
  const [email, setEmail] = useState('admin@vanguard.tech');
  const [password, setPassword] = useState('AdminPassword2026!');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect directly to admin dashboard
  React.useEffect(() => {
    if (user && user.role === 'admin') {
      const destination = location.state?.from?.pathname || '/admin/dashboard';
      navigate(destination, { replace: true });
    }
  }, [user, navigate, location]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await login(email || 'admin@vanguard.tech', password || 'AdminPassword2026!');
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuickDemoLogin = async () => {
    setSubmitting(true);
    try {
      await login('admin@vanguard.tech', 'AdminPassword2026!');
      navigate('/admin/dashboard', { replace: true });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead title="Control Center | Vanguard Digital" />

      <section className="min-h-screen flex items-center justify-center bg-obsidian text-warm-white px-5 py-20 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-graphite/90 backdrop-blur-xl border border-champagne/30 rounded-2xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-champagne/40 flex items-center justify-center text-champagne mx-auto mb-4 shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-1">
                Executive Control Center
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-warm-white">
                Vanguard Console
              </h1>
            </div>

            {/* Error Notice */}
            {error && (
              <div className="p-3.5 mb-6 rounded-lg bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
              <div>
                <label className="block text-text-muted uppercase tracking-wider mb-2">
                  Admin Email / ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@vanguard.tech"
                    className="w-full bg-obsidian border border-graphite-border rounded-lg pl-10 pr-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-muted uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-obsidian border border-graphite-border rounded-lg pl-10 pr-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-lg disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Entering Dashboard...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Login to Console</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-champagne/10 border border-champagne/30 text-champagne hover:bg-champagne/20 text-xs font-mono uppercase tracking-wider font-bold transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-Click Quick Access</span>
                </button>

                <Link
                  to="/"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-obsidian border border-graphite-border text-text-muted hover:text-warm-white hover:border-champagne/30 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Website</span>
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};
