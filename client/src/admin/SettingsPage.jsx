import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, AlertCircle, Building, Mail, Phone, Globe, MessageSquare } from 'lucide-react';
import { settingsAPI } from '../services/api';
import { useSettings } from '../context/SettingsContext';

export const SettingsPage = () => {
  const { settings, updateSettingsState } = useSettings();
  const [formData, setFormData] = useState({
    companyName: '',
    tagline: '',
    email: '',
    phone: '',
    whatsapp: '',
    instagram: '',
    linkedin: '',
    website: '',
  });

  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (settings) {
      setFormData({
        companyName: settings.companyName || '',
        tagline: settings.tagline || '',
        email: settings.email || '',
        phone: settings.phone || '',
        whatsapp: settings.whatsapp || '',
        instagram: settings.instagram || '',
        linkedin: settings.linkedin || '',
        website: settings.website || '',
      });
    }
  }, [settings]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const res = await settingsAPI.update(formData);
      if (res.data?.success) {
        updateSettingsState(res.data.data);
        setStatusMessage({ type: 'success', text: 'Site settings updated successfully.' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: err.message || 'Settings update failed.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="pb-6 border-b border-graphite-border">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
          Global Configurations
        </span>
        <h1 className="text-3xl font-serif font-normal text-warm-white">
          Site Identity & Contact Channels
        </h1>
      </div>

      {statusMessage.text && (
        <div
          className={`p-4 rounded text-xs font-mono flex items-center gap-3 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/50 border border-emerald-800 text-emerald-200'
              : 'bg-red-950/50 border border-red-800 text-red-200'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-400" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-graphite/50 border border-graphite-border rounded-sm p-8 space-y-6 text-xs font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="block text-text-muted uppercase mb-2">Company Name</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-sm text-warm-white font-sans focus:border-champagne"
            />
          </div>

          {/* Website URL */}
          <div>
            <label className="block text-text-muted uppercase mb-2">Primary Domain</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-sm text-warm-white font-mono focus:border-champagne"
            />
          </div>
        </div>

        {/* Tagline */}
        <div>
          <label className="block text-text-muted uppercase mb-2">Brand Tagline</label>
          <input
            type="text"
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-sm text-warm-white font-sans focus:border-champagne"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
          {/* Email */}
          <div>
            <label className="block text-text-muted uppercase mb-2">Official Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2.5 text-xs text-warm-white focus:border-champagne"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-text-muted uppercase mb-2">Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2.5 text-xs text-warm-white focus:border-champagne"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-text-muted uppercase mb-2">WhatsApp Number</label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2.5 text-xs text-warm-white focus:border-champagne"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
          {/* LinkedIn */}
          <div>
            <label className="block text-text-muted uppercase mb-2">LinkedIn URL</label>
            <input
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2.5 text-xs text-warm-white focus:border-champagne"
            />
          </div>

          {/* Instagram */}
          <div>
            <label className="block text-text-muted uppercase mb-2">Instagram URL</label>
            <input
              type="url"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2.5 text-xs text-warm-white focus:border-champagne"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 bg-champagne text-obsidian font-bold text-xs uppercase tracking-widest rounded hover:bg-champagne-light transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
