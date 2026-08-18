import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Mail,
  Layers,
  FolderGit2,
  Rocket,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
    { name: 'Inquiries', path: '/admin/inquiries', icon: Mail },
    { name: 'Services', path: '/admin/services', icon: Layers },
    { name: 'Projects', path: '/admin/projects', icon: FolderGit2 },
    { name: 'Ventures', path: '/admin/ventures', icon: Rocket },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-warm-white flex">
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-graphite border-r border-graphite-border justify-between h-screen sticky top-0">
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-graphite-border/80 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-obsidian border border-champagne/40 flex items-center justify-center text-champagne font-serif font-bold text-base">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-warm-white">
                  Vanguard
                </span>
                <span className="text-[9px] font-mono text-champagne">
                  CONTROL PANEL
                </span>
              </div>
            </Link>

            <Link
              to="/"
              target="_blank"
              className="p-1.5 rounded text-text-muted hover:text-champagne transition-colors"
              title="View Public Site"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-sm text-xs font-mono tracking-wider transition-colors ${
                      isActive
                        ? 'bg-obsidian text-champagne border-l-2 border-champagne font-semibold shadow-sm'
                        : 'text-text-muted hover:text-warm-white hover:bg-obsidian/40'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-graphite-border/80 bg-obsidian/40">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-champagne/15 border border-champagne/30 flex items-center justify-center text-champagne font-mono text-xs font-bold">
                {user?.name?.charAt(0) || 'A'}
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-warm-white truncate">
                  {user?.name || 'Administrator'}
                </span>
                <span className="text-[10px] font-mono text-text-muted truncate">
                  {user?.email || 'admin@vanguard.tech'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded bg-graphite hover:bg-red-950/40 border border-graphite-border hover:border-red-800/50 text-text-muted hover:text-red-300 text-xs font-mono transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header Bar */}
        <header className="lg:hidden bg-graphite border-b border-graphite-border px-5 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm bg-obsidian border border-champagne/30 flex items-center justify-center text-champagne font-serif font-bold text-sm">
              V
            </div>
            <span className="font-mono text-xs font-bold text-warm-white uppercase tracking-wider">
              Admin Panel
            </span>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded text-warm-white hover:bg-obsidian"
          >
            {mobileOpen ? <X className="w-5 h-5 text-champagne" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-graphite border-b border-graphite-border p-4 space-y-2 z-30">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded text-xs font-mono ${
                      isActive ? 'bg-obsidian text-champagne font-bold' : 'text-text-muted'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
            <div className="pt-2 border-t border-white/5">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 py-2 px-3 text-red-300 text-xs font-mono"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}

        {/* Nested Admin Content View */}
        <main className="flex-1 p-5 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
