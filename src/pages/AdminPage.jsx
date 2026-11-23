import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Lock,
  Unlock,
  KeyRound,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  ExternalLink,
  LogOut,
  FolderKanban,
  Wrench,
  FileBadge2,
  Database,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { useData } from "../context/DataContext";
import KciLogo from "../components/KciLogo";
import { PORTFOLIO_CATEGORIES } from "../data/kciData";

const PRESET_IMAGES = [
  { label: "Taman Golf Karawaci", url: "/assets/kci/hero_karawaci.webp" },
  { label: "Rest Area KM 68 Tol Cipali", url: "/assets/kci/komersial_cipali_restarea.webp" },
  { label: "Goldfinch Summarecon Serpong", url: "/assets/kci/hunian_goldfinch_serpong.webp" },
  { label: "Planter Box & Bench", url: "/assets/kci/hardscape_planter_bench.webp" },
  { label: "Catha Rempoa Damai Putra", url: "/assets/kci/kawasan_catha_rempoa.webp" },
  { label: "Segara City Harapan Indah", url: "/assets/kci/kawasan_segara_city.webp" },
  { label: "Vertical Garden Gedung", url: "/assets/kci/vertical_garden_gedung.webp" },
  { label: "Vertical Garden Bebek Kaleyo", url: "/assets/kci/vertical_garden_bebek_kaleyo.webp" },
  { label: "Rumput Sintetis Futsal", url: "/assets/kci/rumput_sintetis_futsal.webp" },
  { label: "Kolam Koi & Water Feature", url: "/assets/kci/kolam_buatan_pond.webp" },
  { label: "Perawatan Bonsai & Pohon", url: "/assets/kci/perawatan_bonsai.webp" },
  { label: "Rental Tanaman Indoor", url: "/assets/kci/indoor_plant_rent.webp" },
  { label: "Dekorasi Indoor Eksklusif", url: "/assets/kci/dekorasi_indoor.webp" },
  { label: "Taman Aviary & Burung", url: "/assets/kci/taman_aviary.webp" },
  { label: "Hidroponik Mandiri", url: "/assets/kci/hidroponik_farm.webp" },
  { label: "Nursery Mandiri Cigombong", url: "/assets/kci/nursery_cigombong.webp" },
  { label: "SK AHU Kemenkumham", url: "/assets/kci/legalitas_ahu.webp" },
  { label: "NPWP Badan Resmi", url: "/assets/kci/legalitas_npwp.webp" },
];

export default function AdminPage() {
  const {
    portfolio,
    services,
    legality,
    firebaseStatus,
    addPortfolio,
    updatePortfolio,
    deletePortfolio,
    addService,
    updateService,
    deleteService,
    updateLegality,
    seedToFirebase,
    resetAllToDefaults,
  } = useData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("kci_admin_logged_in") === "true";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");

  // Active Tab: 'portfolio' | 'services' | 'legality' | 'database'
  const [activeTab, setActiveTab] = useState("portfolio");
  const [toastMessage, setToastMessage] = useState("");

  // Portfolio Modal State
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [editingPortfolioId, setEditingPortfolioId] = useState(null);
  const [portfolioForm, setPortfolioForm] = useState({
    title: "",
    projectContext: "",
    category: "Hunian & Taman",
    image: "/assets/kci/hero_karawaci.webp",
    caption: "",
  });

  // Services Modal State
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    number: "01",
    title: "",
    subtitle: "",
    summary: "",
    scopeText: "",
    idealFor: "",
    image: "/assets/kci/hunian_goldfinch_serpong.webp",
    featured: true,
  });

  // Legality Edit State
  const [ahuForm, setAhuForm] = useState(() => legality?.ahu || {});
  const [npwpForm, setNpwpForm] = useState(() => legality?.npwp || {});

  // Sync legality state when data loads
  React.useEffect(() => {
    if (legality?.ahu) setAhuForm(legality.ahu);
    if (legality?.npwp) setNpwpForm(legality.npwp);
  }, [legality]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 4000);
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === "cendikia123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("kci_admin_logged_in", "true");
      setAuthError("");
    } else {
      setAuthError("Kata sandi salah! Masukkan kata sandi yang benar.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("kci_admin_logged_in");
    setPasswordInput("");
  };

  // ==========================================
  // HANDLERS: PORTFOLIO
  // ==========================================
  const handleOpenAddPortfolio = () => {
    setEditingPortfolioId(null);
    setPortfolioForm({
      title: "",
      projectContext: "",
      category: "Hunian & Taman",
      image: "/assets/kci/hero_karawaci.webp",
      caption: "",
    });
    setIsPortfolioModalOpen(true);
  };

  const handleOpenEditPortfolio = (item) => {
    setEditingPortfolioId(item.id);
    setPortfolioForm({
      title: item.title || "",
      projectContext: item.projectContext || "",
      category: item.category || "Hunian & Taman",
      image: item.image || "/assets/kci/hero_karawaci.webp",
      caption: item.caption || "",
    });
    setIsPortfolioModalOpen(true);
  };

  const handleSavePortfolio = async (e) => {
    e.preventDefault();
    if (!portfolioForm.title.trim()) return;

    if (editingPortfolioId) {
      await updatePortfolio(editingPortfolioId, portfolioForm);
      showToast(`Proyek "${portfolioForm.title}" berhasil diperbarui!`);
    } else {
      await addPortfolio(portfolioForm);
      showToast(`Proyek baru "${portfolioForm.title}" berhasil ditambahkan!`);
    }
    setIsPortfolioModalOpen(false);
  };

  const handleDeletePortfolio = async (id, title) => {
    if (window.confirm(`Yakin ingin menghapus portofolio "${title}"?`)) {
      await deletePortfolio(id);
      showToast(`Proyek "${title}" telah dihapus.`);
    }
  };

  // ==========================================
  // HANDLERS: SERVICES
  // ==========================================
  const handleOpenAddService = () => {
    setEditingServiceId(null);
    setServiceForm({
      number: String((services.length || 0) + 1).padStart(2, "0"),
      title: "",
      subtitle: "",
      summary: "",
      scopeText: "",
      idealFor: "",
      image: "/assets/kci/hunian_goldfinch_serpong.webp",
      featured: true,
    });
    setIsServiceModalOpen(true);
  };

  const handleOpenEditService = (service) => {
    setEditingServiceId(service.id);
    setServiceForm({
      number: service.number || "01",
      title: service.title || "",
      subtitle: service.subtitle || "",
      summary: service.summary || "",
      scopeText: Array.isArray(service.scope) ? service.scope.join("\n") : "",
      idealFor: service.idealFor || "",
      image: service.image || "/assets/kci/hunian_goldfinch_serpong.webp",
      featured: Boolean(service.featured),
    });
    setIsServiceModalOpen(true);
  };

  const handleSaveService = async (e) => {
    e.preventDefault();
    if (!serviceForm.title.trim()) return;

    const payload = {
      number: serviceForm.number,
      title: serviceForm.title,
      subtitle: serviceForm.subtitle,
      summary: serviceForm.summary,
      scope: serviceForm.scopeText
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      idealFor: serviceForm.idealFor,
      image: serviceForm.image,
      featured: serviceForm.featured,
    };

    if (editingServiceId) {
      await updateService(editingServiceId, payload);
      showToast(`Layanan "${serviceForm.title}" berhasil diperbarui!`);
    } else {
      await addService(payload);
      showToast(`Layanan "${serviceForm.title}" berhasil ditambahkan!`);
    }
    setIsServiceModalOpen(false);
  };

  const handleDeleteService = async (id, title) => {
    if (window.confirm(`Yakin ingin menghapus layanan "${title}"?`)) {
      await deleteService(id);
      showToast(`Layanan "${title}" telah dihapus.`);
    }
  };

  // ==========================================
  // HANDLERS: LEGALITY
  // ==========================================
  const handleSaveAhu = async (e) => {
    e.preventDefault();
    await updateLegality("ahu", ahuForm);
    showToast("Dokumen SK AHU Kemenkumham berhasil disimpan ke database!");
  };

  const handleSaveNpwp = async (e) => {
    e.preventDefault();
    await updateLegality("npwp", npwpForm);
    showToast("Dokumen NPWP Badan berhasil disimpan ke database!");
  };

  // ==========================================
  // VIEW: LOGIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-stone-950 border border-stone-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle green ambient light */}
          <div className="absolute -top-24 -left-24 w-52 h-52 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-stone-900 border border-stone-800 mb-4 shadow-inner">
              <KciLogo width={50} showText={false} />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Portal Admin CV. Kreasi Cendekia
            </h1>
            <p className="text-xs text-stone-400 mt-1">
              Masukkan kata sandi administrator untuk mengelola konten website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                Kata Sandi Akses
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setAuthError("");
                  }}
                  placeholder="Ketik kata sandi admin..."
                  autoFocus
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 pr-10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 bg-red-950/50 border border-red-800/80 rounded-xl text-red-300 text-xs">
                <AlertCircle size={15} className="shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-950 transition-all active:scale-[0.98]"
            >
              Masuk ke Control Panel
            </button>
          </form>

          <div className="mt-6 text-center border-t border-stone-900 pt-4">
            <Link
              to="/"
              className="text-xs text-stone-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
            >
              ← Kembali ke Beranda Publik
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-200 border border-emerald-400/30">
          <CheckCircle2 size={18} />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md border-b border-stone-800 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" title="Buka Beranda" className="flex items-center gap-2">
              <KciLogo width={36} showText={false} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold text-white tracking-wide">
                  KCI Admin Control Panel
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Firebase Active
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Database: <span className="text-stone-300 font-mono">projek-4-818d8</span> (Firestore)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950 border border-stone-800 text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  firebaseStatus === "connected"
                    ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                    : "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
                }`}
              />
              <span className="text-stone-300 text-[11px]">
                {firebaseStatus === "connected" ? "Cloud Firestore Sync" : "Local Fallback"}
              </span>
            </div>

            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all"
            >
              <span>Lihat Web Live</span>
              <ExternalLink size={13} />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-800/80 text-red-200 text-xs font-semibold transition-all"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-4 mb-6">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "portfolio"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950 font-bold"
                : "bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200"
            }`}
          >
            <FolderKanban size={16} />
            <span>Portofolio ({portfolio?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "services"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950 font-bold"
                : "bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200"
            }`}
          >
            <Wrench size={16} />
            <span>Katalog Layanan ({services?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab("legality")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "legality"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950 font-bold"
                : "bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200"
            }`}
          >
            <FileBadge2 size={16} />
            <span>Dokumen Legalitas</span>
          </button>

          <button
            onClick={() => setActiveTab("database")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "database"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950 font-bold"
                : "bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200"
            }`}
          >
            <Database size={16} />
            <span>Sinkronisasi Firebase</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: PORTOFOLIO CRUD                                         */}
        {/* ============================================================== */}
        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-stone-900/60 p-5 rounded-2xl border border-stone-800">
              <div>
                <h2 className="text-base font-bold text-white">Manajemen Galeri Portofolio</h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Tambah, edit, dan hapus proyek lanskap yang ditampilkan di halaman /portofolio dan Beranda.
                </p>
              </div>
              <button
                onClick={handleOpenAddPortfolio}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all shrink-0"
              >
                <Plus size={16} />
                <span>+ Tambah Proyek Portofolio</span>
              </button>
            </div>

            {/* Portfolio Grid List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-stone-700 transition-all"
                >
                  <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = "/assets/kci/hero_karawaci.webp";
                      }}
                    />
                    <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded-md bg-black/75 backdrop-blur-sm text-emerald-400 border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-sm text-white line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium mt-0.5 line-clamp-1">
                        {item.projectContext}
                      </p>
                      <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-stone-500">
                        ID: {item.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditPortfolio(item)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
                        >
                          <Pencil size={13} />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeletePortfolio(item.id, item.title)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-950/50 hover:bg-red-900/80 text-red-300 text-xs font-medium transition-colors border border-red-800/40"
                        >
                          <Trash2 size={13} />
                          <span>Hapus</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: SERVICES (LAYANAN) CRUD                                 */}
        {/* ============================================================== */}
        {activeTab === "services" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-stone-900/60 p-5 rounded-2xl border border-stone-800">
              <div>
                <h2 className="text-base font-bold text-white">Manajemen Katalog Layanan</h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  Kelola paket layanan spesialisasi yang tampil di halaman /layanan dan Beranda KCI.
                </p>
              </div>
              <button
                onClick={handleOpenAddService}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all shrink-0"
              >
                <Plus size={16} />
                <span>+ Tambah Layanan Baru</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between hover:border-stone-700 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-xl">
                          {svc.number || "00"}
                        </span>
                        <div>
                          <h3 className="font-bold text-base text-white">{svc.title}</h3>
                          <p className="text-xs text-stone-400">{svc.subtitle}</p>
                        </div>
                      </div>
                      {svc.featured && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                      {svc.summary}
                    </p>

                    {/* Scope list preview */}
                    {Array.isArray(svc.scope) && svc.scope.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-stone-800">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                          Lingkup Kerja ({svc.scope.length}):
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {svc.scope.slice(0, 4).map((s, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-stone-950 text-stone-300 border border-stone-800"
                            >
                              ✓ {s}
                            </span>
                          ))}
                          {svc.scope.length > 4 && (
                            <span className="text-[11px] px-2 py-1 text-stone-500">
                              +{svc.scope.length - 4} lainnya
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-500">ID: {svc.id}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenEditService(svc)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
                      >
                        <Pencil size={13} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteService(svc.id, svc.title)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-950/50 hover:bg-red-900/80 text-red-300 text-xs font-medium transition-colors border border-red-800/40"
                      >
                        <Trash2 size={13} />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: LEGALITAS CRUD                                          */}
        {/* ============================================================== */}
        {activeTab === "legality" && (
          <div className="space-y-6">
            <div className="bg-stone-900/60 p-5 rounded-2xl border border-stone-800">
              <h2 className="text-base font-bold text-white">Manajemen Legalitas Badan Usaha</h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Perbarui data Surat Keputusan Kemenkumham AHU dan NPWP Badan untuk keperluan administrasi pengadaan.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Form SK AHU */}
              <form
                onSubmit={handleSaveAhu}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <h3 className="font-bold text-sm text-emerald-400">
                    1. SK Kemenkumham RI (AHU)
                  </h3>
                  <span className="text-[10px] text-stone-400 bg-stone-950 px-2 py-0.5 rounded">
                    Key: ahu
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    Judul Dokumen
                  </label>
                  <input
                    type="text"
                    value={ahuForm.title || ""}
                    onChange={(e) => setAhuForm({ ...ahuForm, title: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">
                      Nomor SK AHU
                    </label>
                    <input
                      type="text"
                      value={ahuForm.number || ""}
                      onChange={(e) => setAhuForm({ ...ahuForm, number: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">
                      Tanggal Terbit
                    </label>
                    <input
                      type="text"
                      value={ahuForm.issuedDate || ""}
                      onChange={(e) => setAhuForm({ ...ahuForm, issuedDate: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    Informasi Akta Notaris
                  </label>
                  <input
                    type="text"
                    value={ahuForm.deedInfo || ""}
                    onChange={(e) => setAhuForm({ ...ahuForm, deedInfo: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    Nama Notaris & Wilayah
                  </label>
                  <input
                    type="text"
                    value={ahuForm.notary || ""}
                    onChange={(e) => setAhuForm({ ...ahuForm, notary: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    Kedudukan Domisili
                  </label>
                  <input
                    type="text"
                    value={ahuForm.domicile || ""}
                    onChange={(e) => setAhuForm({ ...ahuForm, domicile: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    URL Gambar Scan Dokumen
                  </label>
                  <input
                    type="text"
                    value={ahuForm.image || ""}
                    onChange={(e) => setAhuForm({ ...ahuForm, image: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Save size={15} />
                  <span>Simpan Perubahan SK AHU</span>
                </button>
              </form>

              {/* Form NPWP */}
              <form
                onSubmit={handleSaveNpwp}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <h3 className="font-bold text-sm text-emerald-400">
                    2. NPWP Badan (Dirjen Pajak)
                  </h3>
                  <span className="text-[10px] text-stone-400 bg-stone-950 px-2 py-0.5 rounded">
                    Key: npwp
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    Judul Dokumen
                  </label>
                  <input
                    type="text"
                    value={npwpForm.title || ""}
                    onChange={(e) => setNpwpForm({ ...npwpForm, title: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">
                      Nomor NPWP Badan
                    </label>
                    <input
                      type="text"
                      value={npwpForm.number || ""}
                      onChange={(e) => setNpwpForm({ ...npwpForm, number: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">
                      NPWP 16 Digit
                    </label>
                    <input
                      type="text"
                      value={npwpForm.npwp16 || ""}
                      onChange={(e) => setNpwpForm({ ...npwpForm, npwp16: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">
                      Tanggal Terdaftar
                    </label>
                    <input
                      type="text"
                      value={npwpForm.registeredDate || ""}
                      onChange={(e) => setNpwpForm({ ...npwpForm, registeredDate: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">
                      Kantor Pelayanan Pajak (KPP)
                    </label>
                    <input
                      type="text"
                      value={npwpForm.taxOffice || ""}
                      onChange={(e) => setNpwpForm({ ...npwpForm, taxOffice: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    Alamat Wajib Pajak Terdaftar
                  </label>
                  <input
                    type="text"
                    value={npwpForm.address || ""}
                    onChange={(e) => setNpwpForm({ ...npwpForm, address: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">
                    URL Gambar Scan Kartu NPWP
                  </label>
                  <input
                    type="text"
                    value={npwpForm.image || ""}
                    onChange={(e) => setNpwpForm({ ...npwpForm, image: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Save size={15} />
                  <span>Simpan Perubahan NPWP</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: DATABASE & SYNC                                         */}
        {/* ============================================================== */}
        {activeTab === "database" && (
          <div className="space-y-6 max-w-3xl">
            <div className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Database size={18} className="text-emerald-400" />
                <span>Status & Sinkronisasi Database Firebase</span>
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                Aplikasi ini terhubung langsung dengan Google Firebase Cloud Firestore (Project ID:{" "}
                <span className="font-mono text-emerald-400 font-bold">projek-4-818d8</span>). Seluruh data
                tersimpan aman di cloud dan memiliki cache lokal otomatis agar website tetap aktif instan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <span className="text-[11px] text-stone-400">Total Portofolio</span>
                  <p className="text-xl font-bold text-white mt-1 font-mono">
                    {portfolio.length} Item
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <span className="text-[11px] text-stone-400">Total Layanan</span>
                  <p className="text-xl font-bold text-white mt-1 font-mono">
                    {services.length} Paket
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <span className="text-[11px] text-stone-400">Dokumen Legalitas</span>
                  <p className="text-xl font-bold text-white mt-1 font-mono">
                    {Object.keys(legality || {}).length} Dokumen
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={async () => {
                    const res = await seedToFirebase();
                    if (res.success) {
                      showToast("Seluruh data default berhasil di-upload ke Firebase Firestore!");
                    } else {
                      showToast("Gagal upload ke Firebase: " + res.error);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                >
                  <RefreshCw size={15} />
                  <span>Upload / Seed Data Default ke Firebase</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Yakin ingin mereset seluruh data kembali ke kondisi default pabrikan?")) {
                      resetAllToDefaults();
                      showToast("Data telah di-reset ke kondisi awal pabrikan.");
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-all border border-stone-700"
                >
                  <span>Reset ke Data Default Pabrikan</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* MODAL: TAMBAH / EDIT PORTOFOLIO                                */}
      {/* ============================================================== */}
      {isPortfolioModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-xl rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
              <h3 className="font-bold text-sm text-white">
                {editingPortfolioId ? "Edit Proyek Portofolio" : "Tambah Proyek Portofolio"}
              </h3>
              <button
                onClick={() => setIsPortfolioModalOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSavePortfolio} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Judul Proyek *
                </label>
                <input
                  type="text"
                  required
                  value={portfolioForm.title}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                  placeholder="Contoh: Lanskap & Kolam Tepi Danau"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Klien / Konteks Lokasi Proyek
                </label>
                <input
                  type="text"
                  value={portfolioForm.projectContext}
                  onChange={(e) =>
                    setPortfolioForm({ ...portfolioForm, projectContext: e.target.value })
                  }
                  placeholder="Contoh: Taman Golf Karawaci · Bpk. John Riady"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Kategori Proyek
                </label>
                <select
                  value={portfolioForm.category}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  {PORTFOLIO_CATEGORIES.filter((c) => c !== "Semua").map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  URL Gambar Foto Proyek
                </label>
                <input
                  type="text"
                  value={portfolioForm.image}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, image: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                />
                {/* Quick preset selector */}
                <div className="mt-2">
                  <span className="text-[10px] text-stone-400">Pilih cepat foto aset lokal KCI:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1 max-h-24 overflow-y-auto">
                    {PRESET_IMAGES.slice(0, 8).map((p) => (
                      <button
                        key={p.url}
                        type="button"
                        onClick={() => setPortfolioForm({ ...portfolioForm, image: p.url })}
                        className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                          portfolioForm.image === p.url
                            ? "bg-emerald-600 text-white border-emerald-500"
                            : "bg-stone-950 text-stone-400 border-stone-800 hover:text-white"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Deskripsi / Keterangan Proyek
                </label>
                <textarea
                  rows={3}
                  value={portfolioForm.caption}
                  onChange={(e) => setPortfolioForm({ ...portfolioForm, caption: e.target.value })}
                  placeholder="Keterangan singkat tentang pekerjaan..."
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsPortfolioModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md"
                >
                  Simpan Proyek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: TAMBAH / EDIT LAYANAN                                   */}
      {/* ============================================================== */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-xl rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
              <h3 className="font-bold text-sm text-white">
                {editingServiceId ? "Edit Layanan" : "Tambah Layanan Baru"}
              </h3>
              <button
                onClick={() => setIsServiceModalOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Nomor Urut
                  </label>
                  <input
                    type="text"
                    value={serviceForm.number}
                    onChange={(e) => setServiceForm({ ...serviceForm, number: e.target.value })}
                    placeholder="01"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Nama Layanan *
                  </label>
                  <input
                    type="text"
                    required
                    value={serviceForm.title}
                    onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                    placeholder="Contoh: Desain & Konstruksi Taman"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Sub-judul / Tagline
                </label>
                <input
                  type="text"
                  value={serviceForm.subtitle}
                  onChange={(e) => setServiceForm({ ...serviceForm, subtitle: e.target.value })}
                  placeholder="Contoh: Hunian Pribadi · Kantor · Lingkungan"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Ringkasan / Summary
                </label>
                <textarea
                  rows={2}
                  value={serviceForm.summary}
                  onChange={(e) => setServiceForm({ ...serviceForm, summary: e.target.value })}
                  placeholder="Penjelasan singkat layanan..."
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Lingkup Kerja (1 baris per item poin)
                </label>
                <textarea
                  rows={4}
                  value={serviceForm.scopeText}
                  onChange={(e) => setServiceForm({ ...serviceForm, scopeText: e.target.value })}
                  placeholder={"Desain Taman Rumah Pribadi\nDesain Taman Kantor\nPenataan drainase"}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Target Klien (Ideal For)
                </label>
                <input
                  type="text"
                  value={serviceForm.idealFor}
                  onChange={(e) => setServiceForm({ ...serviceForm, idealFor: e.target.value })}
                  placeholder="Contoh: Rumah tinggal, kawasan komersial, gedung kantor"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  URL Foto Ilustrasi
                </label>
                <input
                  type="text"
                  value={serviceForm.image}
                  onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featuredSvc"
                  checked={serviceForm.featured}
                  onChange={(e) => setServiceForm({ ...serviceForm, featured: e.target.checked })}
                  className="rounded border-stone-700 bg-stone-950 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="featuredSvc" className="text-xs text-stone-300">
                  Tampilkan sebagai layanan unggulan (Featured di Beranda)
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsServiceModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md"
                >
                  Simpan Layanan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
