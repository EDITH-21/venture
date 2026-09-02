import React, { useState } from 'react';
import { ShieldCheck, User, Mail, Key, CheckCircle2, Lock, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const ProfilePage = () => {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSuccess(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <div className="pb-6 border-b border-graphite-border">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
          Account & Security
        </span>
        <h1 className="text-3xl font-serif font-normal text-warm-white">
          Administrator Profile
        </h1>
      </div>

      {/* User Information Card */}
      <div className="bg-graphite/50 border border-graphite-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-4 pb-6 border-b border-white/5">
          <div className="w-16 h-16 rounded-2xl bg-obsidian border border-champagne/30 flex items-center justify-center text-champagne text-2xl font-serif font-bold">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-serif font-bold text-warm-white">
                {user?.name || 'Master Administrator'}
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-champagne/10 text-champagne border border-champagne/25 font-bold">
                {user?.role || 'Admin'}
              </span>
            </div>
            <span className="text-xs font-mono text-text-muted">
              {user?.email || 'admin@vanguard.tech'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-xs font-mono">
          <div className="bg-obsidian/70 p-4 rounded-xl border border-graphite-border">
            <span className="text-text-muted block mb-1">Access Level</span>
            <span className="text-warm-white font-bold">Full Executive Admin Control</span>
          </div>
          <div className="bg-obsidian/70 p-4 rounded-xl border border-graphite-border">
            <span className="text-text-muted block mb-1">Session Security</span>
            <span className="text-emerald-400 font-bold">Active & Authenticated</span>
          </div>
        </div>
      </div>

      {/* Security / Update Password Form */}
      <div className="bg-graphite/50 border border-graphite-border rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <Key className="w-5 h-5 text-champagne" />
          <div>
            <h3 className="text-lg font-serif font-bold text-warm-white">
              Update Administrator Password
            </h3>
            <p className="text-xs font-mono text-text-muted">
              Ensure your admin portal is protected with a strong credentials phrase.
            </p>
          </div>
        </div>

        {success && (
          <div className="p-3.5 mb-5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Admin credentials updated successfully.</span>
          </div>
        )}

        {error && (
          <div className="p-3.5 mb-5 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-text-muted uppercase mb-2">Current Password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-muted uppercase mb-2">New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
              />
            </div>
            <div>
              <label className="block text-text-muted uppercase mb-2">Confirm New Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-colors shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>Update Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
