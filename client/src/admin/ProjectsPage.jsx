import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Star, Eye, EyeOff, X, Search, Image as ImageIcon } from 'lucide-react';
import { projectsAPI } from '../services/api';

export const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Technology',
    client: '',
    shortDescription: '',
    description: '',
    thumbnail: '',
    technologies: '',
    featured: false,
    published: true,
  });

  const fetchProjects = async () => {
    try {
      const res = await projectsAPI.getAll({ published: 'all' });
      if (res.data?.success) {
        setProjects(res.data.data);
      }
    } catch (err) {
      console.warn('Projects fetch error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenModal = (proj = null) => {
    if (proj) {
      setEditingProject(proj);
      setFormData({
        title: proj.title,
        category: proj.category,
        client: proj.client || '',
        shortDescription: proj.shortDescription || '',
        description: proj.description,
        thumbnail: proj.thumbnail || '',
        technologies: (proj.technologies || []).join(', '),
        featured: proj.featured || false,
        published: proj.published !== undefined ? proj.published : true,
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        category: 'Technology',
        client: '',
        shortDescription: '',
        description: '',
        thumbnail: '',
        technologies: 'React, Node.js, Express, MongoDB, Tailwind CSS',
        featured: false,
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
        technologies: formData.technologies.split(',').map((s) => s.trim()).filter(Boolean),
        images: formData.thumbnail ? [formData.thumbnail] : [],
      };

      if (editingProject) {
        await projectsAPI.update(editingProject._id, payload);
      } else {
        await projectsAPI.create(payload);
      }

      setModalOpen(false);
      await fetchProjects();
    } catch (err) {
      alert(err.message || 'Project save failed');
    }
  };

  const handleToggleFeature = async (proj) => {
    try {
      await projectsAPI.update(proj._id, { featured: !proj.featured });
      await fetchProjects();
    } catch (err) {
      alert(err.message || 'Feature toggle failed');
    }
  };

  const handleTogglePublish = async (proj) => {
    try {
      await projectsAPI.update(proj._id, { published: !proj.published });
      await fetchProjects();
    } catch (err) {
      alert(err.message || 'Publish toggle failed');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this case study permanently?')) return;
    try {
      await projectsAPI.delete(id);
      await fetchProjects();
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
            Portfolio Management
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Projects ({projects.length})
          </h1>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider rounded hover:bg-champagne-light transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-champagne">
            Loading Projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="py-16 text-center text-xs font-mono text-text-muted">
            No projects in database.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-obsidian/60 border-b border-graphite-border text-text-muted uppercase tracking-wider">
                  <th className="p-4">Project</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Featured</th>
                  <th className="p-4">Visibility</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map((proj) => (
                  <tr key={proj._id} className="hover:bg-obsidian/40 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-obsidian border border-graphite-border overflow-hidden flex-shrink-0">
                        {proj.thumbnail ? (
                          <img src={proj.thumbnail} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-text-muted">
                            <ImageIcon className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-warm-white font-sans text-sm">{proj.title}</div>
                        <div className="text-[10px] text-text-muted">{proj.slug}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-obsidian text-champagne border border-champagne/20 text-[10px] uppercase">
                        {proj.category}
                      </span>
                    </td>
                    <td className="p-4 text-warm-white/80">{proj.client}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleToggleFeature(proj)}
                        className={`p-1.5 rounded transition-colors ${
                          proj.featured
                            ? 'text-amber-400 bg-amber-950/40 border border-amber-800/40'
                            : 'text-text-muted hover:text-warm-white'
                        }`}
                        title="Toggle Featured on Home"
                      >
                        <Star className="w-4 h-4" fill={proj.featured ? 'currentColor' : 'none'} />
                      </button>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleTogglePublish(proj)}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                          proj.published
                            ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                            : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                        }`}
                      >
                        {proj.published ? 'Live' : 'Hidden'}
                      </button>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleOpenModal(proj)}
                        className="p-1.5 rounded bg-graphite hover:bg-obsidian text-champagne"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(proj._id)}
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
          <div className="bg-graphite border border-champagne/40 rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <h3 className="text-2xl font-serif font-bold text-warm-white">
                {editingProject ? 'Edit Project' : 'Create New Project'}
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
                  <label className="block text-text-muted uppercase mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted uppercase mb-1">Client Name</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    placeholder="e.g. Aethelgard Global"
                    className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white font-sans text-sm"
                  />
                </div>
                <div>
                  <label className="block text-text-muted uppercase mb-1">Thumbnail URL</label>
                  <input
                    type="text"
                    value={formData.thumbnail}
                    onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                    placeholder="https://..."
                    className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white"
                  />
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
                <label className="block text-text-muted uppercase mb-1">Detailed Narrative *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-obsidian border border-graphite-border rounded p-3 text-warm-white font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-text-muted uppercase mb-1">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  className="w-full bg-obsidian border border-graphite-border rounded px-3 py-2 text-warm-white"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-warm-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded bg-obsidian border-graphite-border text-champagne"
                  />
                  <span>Featured on Home Page</span>
                </label>

                <label className="flex items-center gap-2 text-warm-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="rounded bg-obsidian border-graphite-border text-champagne"
                  />
                  <span>Published Live</span>
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
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
