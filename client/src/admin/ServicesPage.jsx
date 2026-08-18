import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, Check, X, Search, Layers } from 'lucide-react';
import { servicesAPI } from '../services/api';
import { Button } from '../components/common/Button';

export const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Technology',
    shortDescription: '',
    description: '',
    deliverables: '',
    idealFor: '',
    published: true,
  });

  const fetchServices = async () => {
    try {
      // Admin queries all=true to see both published and unpublished
      const res = await servicesAPI.getAll({ all: 'true' });
      if (res.data?.success) {
        setServices(res.data.data);
      }
    } catch (err) {
      console.warn('Services fetch error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleOpenModal = (service = null) => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        category: service.category,
        shortDescription: service.shortDescription,
        description: service.description,
        deliverables: (service.deliverables || []).join('\n'),
        idealFor: (service.idealFor || []).join('\n'),
        published: service.published,
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        category: 'Technology',
        shortDescription: '',
        description: '',
        deliverables: '',
        idealFor: '',
        published: true,
      });
    }
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        deliverables: formData.deliverables.split('\n').map((s) => s.trim()).filter(Boolean),
        idealFor: formData.idealFor.split('\n').map((s) => s.trim()).filter(Boolean),
      };

      if (editingService) {
        await servicesAPI.update(editingService._id, payload);
      } else {
        await servicesAPI.create(payload);
      }

      setModalOpen(false);
      await fetchServices();
    } catch (err) {
      alert(err.message || 'Service save failed');
    }
  };

  const handleTogglePublish = async (service) => {
    try {
      await servicesAPI.update(service._id, { published: !service.published });
      await fetchServices();
    } catch (err) {
      alert(err.message || 'Publish toggle failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this service permanently?')) return;
    try {
      await servicesAPI.delete(id);
      await fetchServices();
    } catch (err) {
      alert(err.message || 'Delete failed');
    }
  };

  const filteredServices = services.filter((s) => {
    const matchesCategory =
      categoryFilter === 'All' || s.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Service Architecture
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Services Management ({services.length})
          </h1>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider rounded hover:bg-champagne-light transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Service</span>
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {['All', 'Technology', 'Creative', 'Digital'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider ${
                categoryFilter === cat
                  ? 'bg-champagne text-obsidian font-bold'
                  : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter services..."
            className="w-full bg-graphite border border-graphite-border rounded-sm pl-9 pr-4 py-2 text-xs font-mono text-warm-white focus:outline-none focus:border-champagne"
          />
        </div>
      </div>

      {/* Services List Table */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-champagne">
            Loading Catalog...
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="py-16 text-center text-xs font-mono text-text-muted">
            No services found matching filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-obsidian/60 border-b border-graphite-border text-text-muted uppercase tracking-wider">
                  <th className="p-4">Service Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Deliverables</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredServices.map((svc) => (
                  <tr key={svc._id} className="hover:bg-obsidian/40 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-warm-white font-sans text-sm">{svc.name}</div>
                      <div className="text-[11px] text-text-muted line-clamp-1 max-w-sm">
                        {svc.shortDescription}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-obsidian text-champagne border border-champagne/20 uppercase text-[10px]">
                        {svc.category}
                      </span>
                    </td>
                    <td className="p-4 text-text-muted">
                      {svc.deliverables?.length || 0} items
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleTogglePublish(svc)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold transition-colors ${
                          svc.published
                            ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                            : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                        }`}
                      >
                        {svc.published ? (
                          <>
                            <Eye className="w-3 h-3" /> Published
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" /> Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleOpenModal(svc)}
                        className="p-1.5 rounded bg-graphite hover:bg-obsidian text-champagne"
                        title="Edit Service"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(svc._id)}
                        className="p-1.5 rounded bg-graphite hover:bg-red-950/40 text-text-muted hover:text-red-400"
                        title="Delete Service"
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

      {/* Create / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-graphite border border-champagne/40 rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <h3 className="text-2xl font-serif font-bold text-warm-white">
                {editingService ? 'Edit Service' : 'Create New Service'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded text-text-muted hover:text-warm-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted uppercase mb-1">Service Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white font-sans text-sm"
                  />
                </div>
                <div>
                  <label className="block text-text-muted uppercase mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Creative">Creative</option>
                    <option value="Digital">Digital</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-text-muted uppercase mb-1">Short Description *</label>
                <input
                  type="text"
                  required
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-text-muted uppercase mb-1">Full Detailed Description *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-obsidian border border-graphite-border rounded p-3 text-warm-white font-sans text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted uppercase mb-1">Deliverables (1 per line)</label>
                  <textarea
                    rows={4}
                    value={formData.deliverables}
                    onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                    placeholder="Custom Design System&#10;Speed Optimization"
                    className="w-full bg-obsidian border border-graphite-border rounded p-3 text-warm-white font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-text-muted uppercase mb-1">Ideal For (1 per line)</label>
                  <textarea
                    rows={4}
                    value={formData.idealFor}
                    onChange={(e) => setFormData({ ...formData, idealFor: e.target.value })}
                    placeholder="B2B Corporations&#10;Growing Startups"
                    className="w-full bg-obsidian border border-graphite-border rounded p-3 text-warm-white font-sans text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="pub"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="rounded bg-obsidian border-graphite-border text-champagne focus:ring-0"
                />
                <label htmlFor="pub" className="text-warm-white cursor-pointer select-none">
                  Published on live site
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
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
