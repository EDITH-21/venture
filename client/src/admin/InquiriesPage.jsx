import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Mail,
  Phone,
  CheckCircle,
  Clock,
  Trash2,
  Search,
  Filter,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Eye,
  X,
} from 'lucide-react';
import { inquiriesAPI } from '../services/api';

const DEFAULT_INQUIRIES = [
  {
    _id: 'inq-demo-1',
    name: 'Rajesh Sharma',
    business: 'St. Xavier International School',
    email: 'principal@stxaviers.edu.in',
    phone: '+91 98765 43210',
    message: 'We want to modernize our school website with online student admissions, fee notices, circulars, and a faculty portal before the next academic term.',
    service: 'School Website Development',
    status: 'New',
    createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    _id: 'inq-demo-2',
    name: 'Ananya Verma',
    business: 'CineStar Multiplex',
    email: 'ananya.v@cinestarmovies.com',
    phone: '+91 91234 56789',
    message: 'Looking for a clean cinema website for 4 theatre locations to display now-showing movie timings, poster showcases, and food counter menus.',
    service: 'Cinema Website',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 24 * 3600000).toISOString(),
  },
  {
    _id: 'inq-demo-3',
    name: 'Vikram Patel',
    business: 'Aethelgard Logistics Pvt Ltd',
    email: 'vikram@aethelgard.com',
    phone: '+91 99887 76655',
    message: 'Need a professional corporate website to showcase our enterprise freight services, client case studies, and WhatsApp quick inquiry buttons.',
    service: 'Business Website',
    status: 'Closed',
    createdAt: new Date(Date.now() - 48 * 3600000).toISOString(),
  },
];

const LOCAL_STORAGE_KEY = 'vanguard_managed_inquiries';

export const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_INQUIRIES;
    } catch {
      return DEFAULT_INQUIRIES;
    }
  });

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inquiries));
  }, [inquiries]);

  // Sync with API if backend is running
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await inquiriesAPI.getAll();
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setInquiries(res.data.data);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res.data.data));
        }
      } catch (err) {
        console.warn('Inquiries API fallback to local store:', err.message);
      }
    };
    fetchAPI();
  }, []);

  const handleUpdateStatus = async (id, newStatus) => {
    const updated = inquiries.map((inq) =>
      inq._id === id ? { ...inq, status: newStatus } : inq
    );
    setInquiries(updated);

    try {
      await inquiriesAPI.updateStatus(id, newStatus);
    } catch (e) {
      // ignore
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this client enquiry permanently?')) return;
    const updated = inquiries.filter((inq) => inq._id !== id);
    setInquiries(updated);
    if (selectedInquiry?._id === id) setSelectedInquiry(null);

    try {
      await inquiriesAPI.delete(id);
    } catch (e) {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset to standard sample enquiries?')) {
      setInquiries(DEFAULT_INQUIRIES);
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === 'All' || inq.status === filterStatus;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inq.business && inq.business.toLowerCase().includes(searchTerm.toLowerCase())) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inq.message && inq.message.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const countNew = inquiries.filter((i) => i.status === 'New').length;
  const countContacted = inquiries.filter((i) => i.status === 'Contacted').length;
  const countClosed = inquiries.filter((i) => i.status === 'Closed').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Client Inbound Management
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            Client Enquiries ({inquiries.length})
          </h1>
          <p className="text-xs text-text-muted mt-1 font-mono">
            {countNew} New · {countContacted} Contacted · {countClosed} Closed
          </p>
        </div>

        <button
          onClick={handleResetDefaults}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-graphite border border-graphite-border text-text-muted hover:text-warm-white text-xs font-mono rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Sample Data</span>
        </button>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {['All', 'New', 'Contacted', 'Closed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                filterStatus === st
                  ? 'bg-champagne text-obsidian font-bold shadow-md'
                  : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
              }`}
            >
              {st} {st === 'All' ? `(${inquiries.length})` : st === 'New' ? `(${countNew})` : st === 'Contacted' ? `(${countContacted})` : `(${countClosed})`}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, business, email..."
            className="w-full bg-graphite border border-graphite-border rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-warm-white focus:outline-none focus:border-champagne"
          />
        </div>
      </div>

      {/* Inquiries Table / Cards */}
      <div className="bg-graphite/50 border border-graphite-border rounded-xl overflow-hidden shadow-lg">
        {filteredInquiries.length === 0 ? (
          <div className="py-20 text-center text-xs font-mono text-text-muted">
            No enquiries found matching filter criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-obsidian/60 border-b border-graphite-border text-text-muted uppercase tracking-wider">
                  <th className="p-4">Client / Organization</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Requirement Preview</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredInquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-obsidian/40 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-warm-white font-sans text-sm">{inq.name}</div>
                      <div className="text-[11px] text-champagne/80 font-medium">
                        {inq.business || 'Individual / Business'}
                      </div>
                      <div className="text-[10px] text-text-muted mt-1">
                        {new Date(inq.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </td>

                    <td className="p-4 space-y-1">
                      <div className="text-text-muted">{inq.email}</div>
                      <div className="text-champagne">{inq.phone}</div>
                    </td>

                    <td className="p-4 max-w-xs">
                      <p className="line-clamp-2 text-text-muted font-sans text-xs leading-relaxed">
                        {inq.message}
                      </p>
                    </td>

                    <td className="p-4 text-center">
                      <select
                        value={inq.status}
                        onChange={(e) => handleUpdateStatus(inq._id, e.target.value)}
                        className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                          inq.status === 'New'
                            ? 'bg-amber-950/60 text-amber-300 border-amber-800/50'
                            : inq.status === 'Contacted'
                            ? 'bg-blue-950/60 text-blue-300 border-blue-800/50'
                            : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedInquiry(inq)}
                        className="p-1.5 rounded-lg bg-graphite hover:bg-obsidian text-champagne transition-colors"
                        title="View Full Detail"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <a
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(inq.name)},%20this%20is%20Vanguard%20Digital%20regarding%20your%20website%20enquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-graphite hover:bg-emerald-950/40 text-emerald-400 inline-flex transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => handleDelete(inq._id)}
                        className="p-1.5 rounded-lg bg-graphite hover:bg-red-950/40 text-text-muted hover:text-red-400 transition-colors"
                        title="Delete Enquiry"
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

      {/* Enquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-graphite border border-champagne/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-champagne">
                  Enquiry Details
                </span>
                <h3 className="text-xl font-serif font-bold text-warm-white">
                  {selectedInquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1.5 rounded-lg text-text-muted hover:text-warm-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-text-muted block mb-1">Business / Org:</span>
                  <span className="text-warm-white font-sans text-sm font-bold">
                    {selectedInquiry.business || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="text-text-muted block mb-1">Current Status:</span>
                  <span className="text-champagne font-bold">{selectedInquiry.status}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-text-muted block mb-1">Email:</span>
                  <a href={`mailto:${selectedInquiry.email}`} className="text-warm-white hover:underline">
                    {selectedInquiry.email}
                  </a>
                </div>
                <div>
                  <span className="text-text-muted block mb-1">Phone:</span>
                  <a href={`tel:${selectedInquiry.phone}`} className="text-champagne hover:underline">
                    {selectedInquiry.phone}
                  </a>
                </div>
              </div>

              <div>
                <span className="text-text-muted block mb-1">Full Requirement Note:</span>
                <div className="p-4 rounded-lg bg-obsidian border border-graphite-border text-warm-white font-sans text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedInquiry._id, 'Contacted')}
                    className="px-3 py-1.5 rounded bg-blue-950/60 border border-blue-800/50 text-blue-300 font-bold"
                  >
                    Mark Contacted
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedInquiry._id, 'Closed')}
                    className="px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 font-bold"
                  >
                    Mark Closed
                  </button>
                </div>

                <a
                  href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(selectedInquiry.name)},%20this%20is%20Vanguard%20Digital.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded bg-champagne text-obsidian font-bold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
