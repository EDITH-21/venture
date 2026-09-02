import React, { useState, useRef, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  QrCode,
  Download,
  Copy,
  Check,
  Upload,
  RefreshCw,
  Trash2,
  ExternalLink,
  Shield,
  Sparkles,
  Layers,
  MessageSquare,
  Globe,
  Phone,
  Link as LinkIcon,
} from 'lucide-react';

const PRESET_QRS = [
  {
    id: 'general-website',
    title: 'General Website QR',
    description: 'Links directly to the public Vanguard Digital homepage.',
    url: 'https://venture-kappa-seven.vercel.app/',
    category: 'Public',
    icon: Globe,
    badgeColor: 'bg-champagne/10 text-champagne border-champagne/25',
  },
  {
    id: 'whatsapp-chat',
    title: 'WhatsApp Direct Chat QR',
    description: 'Opens WhatsApp chat with prefilled enquiry prompt.',
    url: 'https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I%20would%20like%20to%20discuss%20a%20website%20project.',
    category: 'Communication',
    icon: MessageSquare,
    badgeColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40',
  },
  {
    id: 'contact-enquiry',
    title: 'Contact & Enquiry QR',
    description: 'Opens the enquiry and consultation section directly.',
    url: 'https://venture-kappa-seven.vercel.app/#contact',
    category: 'Lead Capture',
    icon: Phone,
    badgeColor: 'bg-blue-950/60 text-blue-300 border-blue-800/40',
  },
  {
    id: 'campaign-qr',
    title: 'Marketing Campaign QR',
    description: 'Special tracking QR for brochures, business cards and print ads.',
    url: 'https://venture-kappa-seven.vercel.app/?utm_source=print&utm_medium=qr',
    category: 'Marketing',
    icon: Sparkles,
    badgeColor: 'bg-purple-950/60 text-purple-300 border-purple-800/40',
  },
  {
    id: 'admin-access',
    title: 'Separate Admin Access QR',
    description: 'Private administrator gateway link (keep strictly confidential).',
    url: 'https://venture-kappa-seven.vercel.app/admin',
    category: 'Private Admin',
    icon: Shield,
    badgeColor: 'bg-amber-950/60 text-amber-300 border-amber-800/40',
  },
];

export const QRManagementPage = () => {
  const [qrList, setQrList] = useState(() => {
    try {
      const saved = localStorage.getItem('vanguard_managed_qrs');
      return saved ? JSON.parse(saved) : PRESET_QRS;
    } catch {
      return PRESET_QRS;
    }
  });

  const [copiedId, setCopiedId] = useState(null);
  const [customTitle, setCustomTitle] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customCategory, setCustomCategory] = useState('Campaign');

  // Custom QR Upload State
  const [uploadedImages, setUploadedImages] = useState(() => {
    try {
      const saved = localStorage.getItem('vanguard_uploaded_qrs');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const fileInputRefs = useRef({});

  useEffect(() => {
    localStorage.setItem('vanguard_managed_qrs', JSON.stringify(qrList));
  }, [qrList]);

  useEffect(() => {
    localStorage.setItem('vanguard_uploaded_qrs', JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  const handleCopyLink = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadSVG = (id, title) => {
    const svgElem = document.getElementById(`qr-svg-${id}`);
    if (!svgElem) return;

    const svgData = new XMLSerializer().serializeToString(svgElem);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 400;
      canvas.height = 400;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20, 360, 360);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = `${title.toLowerCase().replace(/\s+/g, '-')}-qr.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  const handleCreateCustomQR = (e) => {
    e.preventDefault();
    if (!customUrl) return;

    const newQr = {
      id: `custom-qr-${Date.now()}`,
      title: customTitle || 'Custom Campaign QR',
      description: customDesc || 'Custom generated destination QR code.',
      url: customUrl.startsWith('http') ? customUrl : `https://${customUrl}`,
      category: customCategory,
      icon: QrCode,
      badgeColor: 'bg-champagne/10 text-champagne border-champagne/25',
    };

    setQrList([newQr, ...qrList]);
    setCustomTitle('');
    setCustomUrl('');
    setCustomDesc('');
  };

  const handleDeleteQR = (id) => {
    if (!window.confirm('Delete this QR code entry?')) return;
    setQrList(qrList.filter((q) => q.id !== id));
    const updatedUploads = { ...uploadedImages };
    delete updatedUploads[id];
    setUploadedImages(updatedUploads);
  };

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImages((prev) => ({
        ...prev,
        [id]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveUploadedImage = (id) => {
    const updated = { ...uploadedImages };
    delete updated[id];
    setUploadedImages(updated);
  };

  const handleResetPresets = () => {
    if (window.confirm('Reset all QR codes to original defaults?')) {
      setQrList(PRESET_QRS);
      setUploadedImages({});
    }
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold block mb-1">
            Digital Asset Management
          </span>
          <h1 className="text-3xl font-serif font-normal text-warm-white">
            QR Code Management ({qrList.length})
          </h1>
          <p className="text-xs text-text-muted mt-1 font-mono">
            Generate, customize, upload, preview, and download high-resolution QR codes for physical & digital campaigns.
          </p>
        </div>

        <button
          onClick={handleResetPresets}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-graphite border border-graphite-border text-text-muted hover:text-warm-white text-xs font-mono rounded-lg transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Generator Form Card */}
      <div className="bg-graphite/60 border border-champagne/30 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <div className="w-10 h-10 rounded-lg bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-warm-white">
              Generate New Custom QR Code
            </h2>
            <p className="text-xs font-mono text-text-muted">
              Create a unique QR code for marketing banners, events, print ads, or landing pages.
            </p>
          </div>
        </div>

        <form onSubmit={handleCreateCustomQR} className="grid grid-cols-1 md:grid-cols-12 gap-5 text-xs font-mono">
          <div className="md:col-span-4">
            <label className="block text-text-muted uppercase mb-2">QR Code Label *</label>
            <input
              type="text"
              required
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="e.g. Cinema Exhibition Banner QR"
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div className="md:col-span-5">
            <label className="block text-text-muted uppercase mb-2">Destination URL / Link *</label>
            <input
              type="text"
              required
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="https://venture-kappa-seven.vercel.app/offer"
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-text-muted uppercase mb-2">Category</label>
            <select
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-3 text-warm-white text-sm focus:outline-none focus:border-champagne"
            >
              <option value="Campaign">Campaign</option>
              <option value="Event">Event / Exhibition</option>
              <option value="Social">Social Media</option>
              <option value="School">School Admission</option>
              <option value="Cinema">Cinema Showtime</option>
            </select>
          </div>

          <div className="md:col-span-9">
            <label className="block text-text-muted uppercase mb-2">Short Description / Purpose</label>
            <input
              type="text"
              value={customDesc}
              onChange={(e) => setCustomDesc(e.target.value)}
              placeholder="Optional context for this QR code"
              className="w-full bg-obsidian border border-graphite-border rounded-lg px-4 py-2.5 text-warm-white text-sm focus:outline-none focus:border-champagne"
            />
          </div>

          <div className="md:col-span-3 flex items-end">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-champagne-light transition-colors shadow-lg"
            >
              <QrCode className="w-4 h-4" />
              <span>Generate QR</span>
            </button>
          </div>
        </form>
      </div>

      {/* QR Codes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qrList.map((item) => {
          const Icon = item.icon || QrCode;
          const isCopied = copiedId === item.id;
          const customUploadedImg = uploadedImages[item.id];

          return (
            <div
              key={item.id}
              className="bg-graphite/50 border border-graphite-border hover:border-champagne/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-md hover:shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-warm-white">
                      {item.title}
                    </span>
                  </div>

                  <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* High-Contrast QR Code Visual Container */}
                <div className="p-4 rounded-xl bg-warm-white flex items-center justify-center mx-auto w-fit mb-6 shadow-inner relative group/qr">
                  {customUploadedImg ? (
                    <img
                      src={customUploadedImg}
                      alt={item.title}
                      className="w-44 h-44 object-contain rounded"
                    />
                  ) : (
                    <QRCodeSVG
                      id={`qr-svg-${item.id}`}
                      value={item.url}
                      size={176}
                      level="H"
                      includeMargin={true}
                    />
                  )}
                </div>

                {/* Target URL Preview */}
                <div className="p-3 rounded-lg bg-obsidian border border-graphite-border text-xs font-mono text-warm-white/80 break-all mb-4 flex items-center justify-between gap-2">
                  <span className="line-clamp-1">{item.url}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-champagne hover:text-warm-white flex-shrink-0"
                    title="Open Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Actions & Upload Suite */}
              <div className="space-y-2.5 pt-4 border-t border-white/5">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <button
                    onClick={() => handleCopyLink(item.url, item.id)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-obsidian border border-graphite-border text-text-muted hover:text-champagne hover:border-champagne/30 transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied!' : 'Copy Link'}</span>
                  </button>

                  <button
                    onClick={() => handleDownloadSVG(item.id, item.title)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-champagne text-obsidian font-bold hover:bg-champagne-light transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PNG</span>
                  </button>
                </div>

                {/* Upload Custom QR / Replace */}
                <div className="flex items-center justify-between pt-1">
                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => (fileInputRefs.current[item.id] = el)}
                    onChange={(e) => handleImageUpload(e, item.id)}
                    className="hidden"
                  />

                  {customUploadedImg ? (
                    <div className="flex items-center gap-2 w-full justify-between">
                      <button
                        onClick={() => fileInputRefs.current[item.id]?.click()}
                        className="text-[11px] font-mono text-champagne hover:underline inline-flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" /> Replace Custom Image
                      </button>
                      <button
                        onClick={() => handleRemoveUploadedImage(item.id)}
                        className="text-[11px] font-mono text-red-400 hover:text-red-300"
                        title="Revert to dynamic generator"
                      >
                        Revert
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => fileInputRefs.current[item.id]?.click()}
                      className="text-[11px] font-mono text-text-muted hover:text-champagne inline-flex items-center gap-1"
                    >
                      <Upload className="w-3 h-3" /> Upload Custom Graphic
                    </button>
                  )}

                  {!PRESET_QRS.some((p) => p.id === item.id) && (
                    <button
                      onClick={() => handleDeleteQR(item.id)}
                      className="text-text-muted hover:text-red-400 p-1 rounded"
                      title="Delete QR"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
