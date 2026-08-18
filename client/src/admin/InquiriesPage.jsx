import React, { useState, useEffect } from 'react';
import {
  Mail,
  Search,
  Filter,
  Trash2,
  CheckCircle,
  Eye,
  X,
  Phone,
  Building,
  DollarSign,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { inquiriesAPI } from '../services/api';

export const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [statusCounts, setStatusCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchInquiries = async () => {
    try {
      const res = await inquiriesAPI.getAll({ status: statusFilter, search });
      if (res.data?.success) {
        setInquiries(res.data.data);
        setStatusCounts(res.data.statusCounts || {});
      }
    } catch (err) {
      console.warn('Inquiries fetch error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, search]);

  const handleStatusChange = async (id, newStatus) => {
    setActionLoading(true);
    try {
      await inquiriesAPI.updateStatus(id, newStatus);
      await fetchInquiries();
      if (selectedInquiry && selectedInquiry._id === id) {
        setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      alert(err.message || 'Status update failed');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you wish to delete this inquiry record?')) return;
    setActionLoading(true);
    try {
      await inquiriesAPI.delete(id);
      setSelectedInquiry(null);
      await fetchInquiries();
    } catch (err) {
      alert(err.message || 'Deletion failed');
    } finally {
      setActionLoading(false);
    }
  };

  const statuses = ['All', 'New', 'Contacted', 'In Progress', 'Completed', 'Archived'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Client Communications
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Inquiry Management
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads..."
              className="w-full bg-graphite border border-graphite-border rounded-sm pl-9 pr-4 py-2 text-xs font-mono text-warm-white placeholder-text-muted/60 focus:outline-none focus:border-champagne"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {statuses.map((st) => (
          <button
            key={st}
            onClick={() => setStatusFilter(st)}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap ${
              statusFilter === st
                ? 'bg-champagne text-obsidian font-bold'
                : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Table List */}
      <div className="bg-graphite/50 border border-graphite-border rounded-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-champagne">
            Loading Inquiries...
          </div>
        ) : inquiries.length === 0 ? (
          <div className="py-16 text-center text-xs font-mono text-text-muted">
            No inquiries match this filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-obsidian/60 border-b border-graphite-border text-text-muted uppercase tracking-wider">
                  <th className="p-4">Contact</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Budget</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {inquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-obsidian/40 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-warm-white font-sans text-sm">{inq.name}</div>
                      <div className="text-[11px] text-text-muted">{inq.email}</div>
                      {inq.company && (
                        <div className="text-[10px] text-champagne/80">{inq.company}</div>
                      )}
                    </td>
                    <td className="p-4 text-warm-white/90">{inq.service}</td>
                    <td className="p-4 text-champagne">{inq.budget}</td>
                    <td className="p-4">
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange(inq._id, e.target.value)}
                        disabled={actionLoading}
                        className="bg-obsidian border border-graphite-border rounded px-2.5 py-1 text-xs font-mono text-warm-white focus:border-champagne"
                      >
                        {statuses.filter((s) => s !== 'All').map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-4 text-text-muted">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedInquiry(inq)}
                        className="p-1.5 rounded bg-graphite hover:bg-obsidian text-champagne hover:border hover:border-champagne/30"
                        title="View Full Brief"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(inq._id)}
                        className="p-1.5 rounded bg-graphite hover:bg-red-950/40 text-text-muted hover:text-red-400"
                        title="Delete Inquiry"
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

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-graphite border border-champagne/40 rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne">
                  Inquiry Details
                </span>
                <h3 className="text-2xl font-serif font-bold text-warm-white">
                  {selectedInquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-2 rounded text-text-muted hover:text-warm-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-text-muted block">Email:</span>
                <a href={`mailto:${selectedInquiry.email}`} className="text-champagne underline">
                  {selectedInquiry.email}
                </a>
              </div>
              <div>
                <span className="text-text-muted block">Phone:</span>
                <span className="text-warm-white">{selectedInquiry.phone || 'N/A'}</span>
              </div>
              <div>
                <span className="text-text-muted block">Company:</span>
                <span className="text-warm-white">{selectedInquiry.company || 'N/A'}</span>
              </div>
              <div>
                <span className="text-text-muted block">Service & Budget:</span>
                <span className="text-warm-white">{selectedInquiry.service} ({selectedInquiry.budget})</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                Project Message & Requirements
              </span>
              <div className="p-4 bg-obsidian rounded border border-graphite-border text-sm text-warm-white/90 leading-relaxed whitespace-pre-wrap">
                {selectedInquiry.message}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-text-muted">Status:</span>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusChange(selectedInquiry._id, e.target.value)}
                  className="bg-obsidian border border-graphite-border rounded px-3 py-1.5 text-xs font-mono text-warm-white"
                >
                  {statuses.filter((s) => s !== 'All').map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-2 bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider rounded"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
