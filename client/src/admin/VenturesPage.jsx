import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Rocket, Eye, EyeOff, Lock, X } from 'lucide-react';
import { venturesAPI } from '../services/api';

export const VenturesPage = () => {
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingVenture, setEditingVenture] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Coming Soon',
    tags: 'AI & Core Systems, R&D',
    published: false,
  });

  const fetchVentures = async () => {
    try {
      const res = await venturesAPI.getAll({ all: 'true' });
      if (res.data?.success) {
        setVentures(res.data.data);
      }
    } catch (err) {
      console.warn('Ventures fetch error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVentures();
  }, []);

  const handleOpenModal = (v = null) => {
    if (v) {
      setEditingVenture(v);
      setFormData({
        title: v.title,
        description: v.description,
        status: v.status || 'Coming Soon',
        tags: (v.tags || []).join(', '),
        published: Boolean(v.published),
      });
    } else {
      setEditingVenture(null);
      setFormData({
        title: '',
        description: '',
        status: 'Coming Soon',
        tags: 'AI & Core Systems, R&D',
        published: false,
      });
    }
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map((s) => s.trim()).filter(Boolean),
      };

      if (editingVenture) {
        await venturesAPI.update(editingVenture._id, payload);
      } else {
        await venturesAPI.create(payload);
      }

      setModalOpen(false);
      await fetchVentures();
    } catch (err) {
      alert(err.message || 'Venture save failed');
    }
  };

  const handleTogglePublish = async (v) => {
    try {
      await venturesAPI.update(v._id, { published: !v.published });
      await fetchVentures();
    } catch (err) {
      alert(err.message || 'Publish toggle failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this venture specification permanently?')) return;
    try {
      await venturesAPI.delete(id);
      await fetchVentures();
    } catch (err) {
      alert(err.message || 'Delete failed');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Incubation Hub
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Ventures & R&D ({ventures.length})
          </h1>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider rounded hover:bg-champagne-light transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Venture</span>
        </button>
      </div>

      {/* Secrecy Warning Callout */}
      <div className="p-4 rounded-sm bg-obsidian border border-champagne/30 text-xs font-mono text-text-muted flex items-start gap-3">
        <Lock className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" />
        <div>
          <span className="text-champagne font-bold block mb-1">CONFIDENTIALITY ENFORCEMENT</span>
          By default, all ventures remain in stealth mode and unpublished. The public API strictly filters out unpublished ventures to preserve private R&D secrecy.
        </div>
      </div>

      {/* Ventures List */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-champagne">
            Loading Ventures...
          </div>
        ) : ventures.length === 0 ? (
          <div className="py-16 text-center text-xs font-mono text-text-muted">
            No ventures created yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-obsidian/60 border-b border-graphite-border text-text-muted uppercase tracking-wider">
                  <th className="p-4">Venture Name</th>
                  <th className="p-4">Stage Status</th>
                  <th className="p-4">Tags</th>
                  <th className="p-4">Public Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {ventures.map((v) => (
                  <tr key={v._id} className="hover:bg-obsidian/40 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-warm-white font-sans text-sm">{v.title}</div>
                      <div className="text-[11px] text-text-muted line-clamp-1 max-w-sm">
                        {v.description}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded bg-obsidian text-champagne border border-champagne/30 text-[10px] uppercase font-bold">
                        {v.status}
                      </span>
                    </td>
                    <td className="p-4 text-text-muted">
                      {v.tags?.join(', ') || 'N/A'}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleTogglePublish(v)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] uppercase font-bold ${
                          v.published
                            ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                            : 'bg-amber-950/40 text-amber-300 border border-amber-800/40'
                        }`}
                      >
                        {v.published ? (
                          <>
                            <Eye className="w-3 h-3" /> Publicly Revealed
                          </>
                        ) : (
                          <>
                            <Lock className="w-3 h-3" /> Stealth / Confidential
                          </>
                        )}
                      </button>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleOpenModal(v)}
                        className="p-1.5 rounded bg-graphite hover:bg-obsidian text-champagne"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(v._id)}
                        className="p-1.5 rounded bg-graphite hover:bg-red-950/40 text-text-muted hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-graphite border border-champagne/40 rounded-md max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <h3 className="text-2xl font-serif font-bold text-warm-white">
                {editingVenture ? 'Edit Venture' : 'Register New Venture'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-text-muted hover:text-warm-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-text-muted uppercase mb-1">Venture Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white font-sans text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted uppercase mb-1">Status Stage</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Coming Soon">Coming Soon</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-muted uppercase mb-1">Domain Tags</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-muted uppercase mb-1">Description / Thesis *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-obsidian border border-graphite-border rounded p-3 text-warm-white font-sans text-sm"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-warm-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="rounded bg-obsidian border-graphite-border text-champagne"
                  />
                  <span>Reveal publicly on website (Unchecked = Stealth/Private)</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-graphite border border-graphite-border text-text-muted rounded uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-champagne text-obsidian font-bold rounded uppercase tracking-wider"
                >
                  Save Venture
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
