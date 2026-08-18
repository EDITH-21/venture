import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect to admin dashboard
  React.useEffect(() => {
    if (user && user.role === 'admin') {
      const origin = location.state?.from?.pathname || '/admin/dashboard';
      navigate(origin, { replace: true });
    }
  }, [user, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await login(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid administrator credentials');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead title="Administrative Authentication" />

      <section className="min-h-screen flex items-center justify-center bg-obsidian text-warm-white px-5 py-24 relative overflow-hidden">
        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-graphite/80 backdrop-blur-xl border border-champagne/30 rounded-md p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-sm bg-obsidian border border-champagne/40 flex items-center justify-center text-champagne mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-1">
                Security Gateway
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-warm-white">
                Admin Console
              </h1>
            </div>

            {/* Error Notice */}
            {error && (
              <div className="p-3.5 mb-6 rounded-sm bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@vanguard.tech"
                    className="w-full bg-obsidian border border-graphite-border rounded-sm pl-10 pr-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
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
                    className="w-full bg-obsidian border border-graphite-border rounded-sm pl-10 pr-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={submitting}
                  className="w-full justify-center text-xs uppercase tracking-widest font-bold py-3.5"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <span className="text-[10px] font-mono text-text-muted">
                Initial Credentials: <br />
                <span className="text-champagne">admin@vanguard.tech</span> / <span className="text-champagne">AdminPassword2026!</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
