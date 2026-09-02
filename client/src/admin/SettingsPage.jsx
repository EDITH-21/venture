import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, RefreshCw, Globe, Mail, Phone, MessageSquare, Instagram, Linkedin } from 'lucide-react';
import { settingsAPI } from '../services/api';

const DEFAULT_SETTINGS = {
  companyName: 'Vanguard Digital',
  tagline: 'Building better digital experiences.',
  email: 'shivamgate21@gmail.com',
  phone: '+91 9998160726',
  whatsapp: '+91 9998160726',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
};

const LOCAL_STORAGE_KEY = 'vanguard_managed_settings';

export const SettingsPage = () => {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  const [saving, setSaving] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.data?.success && res.data.data) {
          setFormData(res.data.data);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res.data.data));
        }
      } catch (e) {
        console.warn('Settings API fallback to local:', e.message);
      }
    };
    fetchAPI();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccessNotice(false);

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
      try {
        await settingsAPI.update(formData);
      } catch (err) {
        // ignore
      }

      setSuccessNotice(true);
      setTimeout(() => setSuccessNotice(false), 3000);
    } catch (err) {
      alert('Could not save settings');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all website settings to defaults?')) {
      setFormData(DEFAULT_SETTINGS);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Global Configuration
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Website Settings
          </h1>
          <p className="text-xs text-text-muted mt-1 font-mono">
            Manage contact information, business identity, and public social channels.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-graphite border border-graphite-border text-text-muted hover:text-warm-white text-xs font-mono rounded-lg transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Notice */}
      {successNotice && (
        <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2.5 animate-in fade-in duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Website settings updated successfully! Changes saved to memory & storage.</span>
        </div>
      )}

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="bg-graphite/50 border border-graphite-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl text-xs font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-text-muted uppercase mb-2">
              Business Name
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div>
            <label className="block text-text-muted uppercase mb-2">
              Tagline / Slogan
            </label>
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-text-muted uppercase mb-2">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div>
            <label className="block text-text-muted uppercase mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-muted uppercase mb-2">
            WhatsApp Business Number
          </label>
          <input
            type="text"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+91 9998160726"
            className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white font-sans text-sm focus:outline-none focus:border-champagne"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/5">
          <div>
            <label className="block text-text-muted uppercase mb-2">
              Instagram Profile URL
            </label>
            <input
              type="url"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="https://instagram.com/..."
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div>
            <label className="block text-text-muted uppercase mb-2">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/company/..."
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white text-sm focus:outline-none focus:border-champagne"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-lg disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
