import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  QrCode,
  Settings,
  User,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AdminLayout = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Enquiries', path: '/admin/enquiries', icon: MessageSquare },
    { name: 'QR Management', path: '/admin/qr', icon: QrCode },
    { name: 'Website Settings', path: '/admin/settings', icon: Settings },
    { name: 'Profile', path: '/admin/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-warm-white flex flex-col md:flex-row">
      {/* Mobile Top Navigation Bar */}
      <div className="md:hidden bg-obsidian-deep border-b border-graphite-border px-5 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-serif font-bold text-base text-warm-white">
            Vanguard <span className="text-champagne font-light italic">Admin</span>
          </span>
        </div>

        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="p-2 text-text-muted hover:text-champagne focus:outline-none"
        >
          {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar (Desktop + Mobile Drawer) */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-obsidian-deep border-r border-graphite-border flex flex-col justify-between p-6 z-50 transition-transform duration-300 ${
          mobileDrawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-8">
          {/* Brand Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-warm-white block leading-tight">
                  Vanguard
                </span>
                <span className="text-[10px] font-mono text-champagne uppercase tracking-widest block">
                  Admin Console
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="md:hidden text-text-muted hover:text-warm-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileDrawerOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-champagne text-obsidian font-bold shadow-md'
                        : 'text-text-muted hover:text-warm-white hover:bg-graphite/60'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/5 space-y-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-obsidian border border-graphite-border text-text-muted hover:text-champagne hover:border-champagne/30 text-xs font-mono transition-colors"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              <span>View Public Site</span>
            </span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider text-red-400 hover:bg-red-950/40 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
