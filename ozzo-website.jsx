import { useState, useEffect, useRef } from "react";

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                            ║
// ║   ✏️  EDIT YOUR WEBSITE CONTENT HERE — NO CODING KNOWLEDGE NEEDED  ✏️      ║
// ║                                                                            ║
// ║   Just change the text between the quote marks "like this"                 ║
// ║   To add a new item, copy an existing one and paste it below               ║
// ║   To remove an item, delete everything between the { } including them      ║
// ║                                                                            ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

const SITE_CONFIG = {

  // ── BRAND ──
  brandName: "OZZO",
  tagline: "Cinematography & Aerial Production",

  // ── HERO SECTION ──
  // image: paste a filename or URL for the hero background
  //        leave as "" to use the default mountain illustration
  hero: {
    image: "",                    // e.g. "hero-bg.jpg" or "https://yoursite.com/hero.jpg"
    headline: "We make your story",
    headlineAccent: "come alive",
    description: "Tailor-made cinematography, aerial filming, and post-production services. Based in Iceland, working worldwide.",
    buttonPrimary: "See Our Work",
    buttonSecondary: "Start a Project",
  },

  // ── SHOWREEL ──
  // Paste any Vimeo or YouTube URL here
  // Examples:
  //   "https://vimeo.com/906691739"
  //   "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  // thumbnail: optional poster image shown before someone clicks play
  showreel: {
    video: "https://vimeo.com/906691739",
    thumbnail: "",                // e.g. "showreel-thumb.jpg"
    title: "Showreel 2025",
    subtitle: "A curated selection of our finest cinematic work",
    duration: "2:30",
  },

  // ── NAVIGATION LINKS ──
  navLinks: [
    { label: "Showreel", href: "#showreel" },
    { label: "Work",      href: "#work" },
    { label: "Services",  href: "#services" },
    { label: "Equipment", href: "#gear" },
    { label: "About",     href: "#about" },
  ],

  // ── PORTFOLIO PROJECTS ──
  // image: a photo or still frame from the project
  //        leave as "" to use the colored gradient background
  // video: paste a full YouTube or Vimeo URL
  //        leave as "" if no video — the play icon won't show
  //        Examples:
  //          "https://vimeo.com/906691739"
  //          "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  //          "https://youtu.be/dQw4w9WgXcQ"
  projects: [
    {
      title: "Highland Horizons",
      image: "",                  // e.g. "highland-horizons.jpg"
      video: "",                  // e.g. "https://vimeo.com/123456789"
      category: "Aerial · Nature Documentary",
      tags: ["aerial", "nature"],
      year: "2025",
      featured: true,
      colors: ["#1a3045", "#2a5545", "#1a3020"],
    },
    {
      title: "Arctic Blue",
      image: "",
      video: "",
      category: "Brand Film · Commercial",
      tags: ["commercial"],
      year: "2024",
      colors: ["#0e2535", "#1a4055", "#0e2535"],
    },
    {
      title: "Volcanic Light",
      image: "",
      video: "",
      category: "Nature · Time-lapse",
      tags: ["nature"],
      year: "2024",
      colors: ["#1a1215", "#3a1a10", "#1a0e08"],
    },
    {
      title: "Norðurljós Tours",
      image: "",
      video: "",
      category: "Tourism · Commercial",
      tags: ["commercial"],
      year: "2024",
      colors: ["#0a1520", "#0c1a28", "#0a1015"],
    },
    {
      title: "Coastal Atlas",
      image: "",
      video: "",
      category: "Aerial · Documentary",
      tags: ["aerial"],
      year: "2023",
      colors: ["#0e1a25", "#1a3545", "#0e1520"],
    },
    {
      title: "Sónar Reykjavík",
      image: "",
      video: "",
      category: "Event · Live Coverage",
      tags: ["nature", "aerial"],
      year: "2024",
      colors: ["#0e0e18", "#1a1525", "#12101a"],
    },
  ],

  // ── SERVICES ──
  services: [
    {
      label: "What We Do",
      title: "Aerial Cinematography",
      description: "Licensed drone operations with cinema-grade stabilization. 6K+ capture across extreme environments.",
    },
    {
      label: "Services",
      title: "Commercial Production",
      description: "End-to-end video for brands — concept, storyboard, shoot, color grade, and sound design.",
    },
    {
      label: "Services",
      title: "Post-Production",
      description: "Professional editing, color grading, motion graphics, and VFX. Cinematic polish from start to finish.",
    },
  ],

  // ── EQUIPMENT ──
  // image: a photo of the gear item
  //        leave as "" to use the default circle placeholder
  equipment: [
    {
      category: "Cameras",
      count: "4 units",
      items: [
        { name: "Sony FX6", image: "", spec: "Full-Frame Cinema · 4K 120fps · S-Cinetone", badge: "Primary Camera", details: ["Full-Frame 10.2MP Exmor R Sensor", "4K up to 120fps, 1080p 240fps", "S-Cinetone, S-Log3, 15+ stops DR", "Dual Base ISO 800 / 12800", "E-Mount, Electronic Variable ND"] },
        { name: "RED Komodo 6K", image: "", spec: "Super 35 · 6K · Global Shutter · R3D", badge: "Cinema", details: ["Super 35 Global Shutter Sensor", "6K at 40fps, 4K at 60fps", "REDCODE RAW (R3D) recording", "16+ stops Dynamic Range", "Canon RF Mount, compact body"] },
        { name: "Sony A7S III", image: "", spec: "Full-Frame · Low-Light Specialist", badge: "B-Cam", details: ["12.1MP Full-Frame Exmor R", "4K 120fps, 10-bit 4:2:2 internal", "ISO expandable to 409600", "5-Axis IBIS, no recording limit", "Dual CFexpress Type A slots"] },
        { name: "Blackmagic Pocket 6K Pro", image: "", spec: "Super 35 · BRAW · Built-in NDs", badge: "Compact", details: ["Super 35 HDR sensor", "6K at 50fps in Blackmagic RAW", "Built-in 2/4/6 stop ND filters", "EF Mount, 5\" HDR touchscreen", "DaVinci Resolve Studio included"] },
      ],
    },
    {
      category: "Aerial Systems",
      count: "3 units",
      items: [
        { name: "DJI Inspire 3", image: "", spec: "8K Full-Frame · Dual Operator", badge: "Flagship", details: ["Full-Frame 8K CinemaDNG RAW", "Zenmuse X9-8K Air Gimbal", "Waypoint Pro flight planning", "Dual operator control system", "28 min flight time, O3 Pro link"] },
        { name: "DJI Mavic 3 Pro Cine", image: "", spec: "Hasselblad · Triple Lens · ProRes", badge: "Versatile", details: ["4/3 CMOS Hasselblad camera", "Triple lens: 24/70/166mm equiv.", "Apple ProRes 422 HQ internal", "43 min flight time", "Omnidirectional obstacle sensing"] },
        { name: "DJI FPV Combo", image: "", spec: "4K 120fps · Immersive POV", badge: "FPV", details: ["4K at 120fps, 150° super-wide FOV", "0-100 km/h in 2 seconds", "Motion controller + goggles", "RockSteady EIS stabilization", "20 min flight, 140 km/h max"] },
      ],
    },
    {
      category: "Lenses",
      count: "3 units",
      items: [
        { name: "Sony 24-70mm f/2.8 GM II", image: "", spec: "E-Mount · Nano AR II Coating", badge: "Workhorse", details: ["Constant f/2.8 aperture", "Nano AR Coating II, XA elements", "Weather sealed, 695g", "Linear response MF, 4 XD motors", "Versatile zoom for all situations"] },
        { name: "Sony 16-35mm f/2.8 GM", image: "", spec: "Ultra-Wide · Landscapes & Interiors", badge: "Wide", details: ["Ultra-wide constant f/2.8", "Nano AR coating, XA element", "Dust and moisture resistant", "Ideal for landscapes and astro", "680g, 0.28m minimum focus"] },
        { name: "Sigma 85mm f/1.4 DG DN Art", image: "", spec: "Portrait · Cinematic Bokeh", badge: "Prime", details: ["f/1.4 maximum aperture", "14 elements in 11 groups", "Hypersonic AF motor", "Gorgeous rendering and bokeh", "E-Mount native, 630g"] },
      ],
    },
    {
      category: "Support & Audio",
      count: "4 units",
      items: [
        { name: "DJI Ronin 4D", image: "", spec: "4-Axis · LiDAR AF · Wireless", badge: "Stabilizer", details: ["4-Axis cinema stabilization", "LiDAR range finder for AF", "Wireless video TX built-in", "6K ProRes / RAW recording", "Z-Axis optional for vehicle work"] },
        { name: "Sennheiser MKE 600", image: "", spec: "Shotgun · Super-Cardioid", badge: "Shotgun", details: ["Super-cardioid/lobar pickup", "Low self-noise: 15 dBA", "Switchable low-cut filter", "Phantom or AA battery powered", "Rugged, weather-resistant build"] },
        { name: "Røde Wireless PRO", image: "", spec: "Dual Channel · 32-bit Float", badge: "Wireless", details: ["Dual channel wireless system", "32-bit float onboard recording", "260m line-of-sight range", "GainAssist intelligent leveling", "7-hour battery per transmitter"] },
        { name: "Zoom F6 Field Recorder", image: "", spec: "6-Input · 32-bit Float · Dual SD", badge: "Recorder", details: ["6x inputs, 14x tracks", "32-bit float — no clipping ever", "Dual SD card slots", "Timecode in/out", "Ultra-compact field format"] },
      ],
    },
  ],

  // ── ABOUT SECTION ──
  about: {
    headline: "The Icelandic home for",
    headlineAccent: "cinematography",
    headlineSuffix: "and aerial production",
    description: "OZZO Productions has grown into a trusted partner for filmmakers, agencies, and brands who need cinematic quality in demanding environments. From volcanic highlands to glacial lagoons, we bring the right gear, deep local knowledge, and a commitment to every frame.",
    stats: [
      { number: "150+", label: "Projects" },
      { number: "8",    label: "Years" },
      { number: "12",   label: "Countries" },
    ],
  },

  // ── CONTACT ──
  contact: {
    headline: "Let's create",
    headlineAccent: "something",
    headlineSuffix: "together",
    description: "Ready to bring your vision to life? Reach out and let's talk about your next project.",
    email: "hello@ozzo.is",
    clientAccessUrl: "https://www.gallery.ozzo.is/gallery-list",
    socials: [
      { label: "Email",     href: "mailto:hello@ozzo.is",              icon: "email" },
      { label: "Instagram", href: "https://www.instagram.com/ozzo.is", icon: "instagram" },
      { label: "Vimeo",     href: "https://vimeo.com/ozzo",            icon: "vimeo" },
    ],
  },
};

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║   🛑  STOP EDITING HERE — everything below is the website code  🛑         ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

const ICONS = {
  email: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  vimeo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  play: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ededed" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>,
  arrowRight: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
};

// Auto-detect YouTube or Vimeo from any URL format and return an embed URL
function parseVideoUrl(url) {
  if (!url) return null;
  let match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (match) return `https://player.vimeo.com/video/${match[1]}?autoplay=1&title=0&byline=0&portrait=0`;
  match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
  return null;
}

// Auto-grab thumbnail from YouTube or Vimeo URL (no API key needed)
function getVideoThumbnail(url) {
  if (!url) return null;
  // YouTube — free thumbnail at img.youtube.com
  let match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (match) return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
  // Vimeo — use vumbnail.com (free, no API key)
  match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (match) return `https://vumbnail.com/${match[1]}.jpg`;
  return null;
}

function VideoLightbox({ video, onClose }) {
  const embedUrl = parseVideoUrl(video);
  if (!embedUrl) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <iframe
          src={embedUrl}
          className="lightbox-iframe"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="Video"
        />
      </div>
    </div>
  );
}

function ParallaxCard({ project, className, style, onPlay }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * 40);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Priority: custom image > auto video thumbnail > gradient fallback
  const customImage = project.image && project.image.length > 0;
  const hasVideo = project.video && project.video.length > 0;
  const autoThumb = !customImage && hasVideo ? getVideoThumbnail(project.video) : null;
  const displayImage = customImage ? project.image : autoThumb;
  const bg = displayImage ? undefined : `linear-gradient(180deg, ${project.colors.join(",")})`;

  const handleClick = () => {
    if (hasVideo && onPlay) onPlay(project.video);
  };

  return (
    <div ref={ref} className={className || "bento-card"} style={{ ...style, overflow: "hidden" }} onClick={handleClick}>
      {displayImage ? (
        <img
          src={displayImage}
          alt={project.title}
          className="parallax-bg parallax-img"
          style={{ transform: `translateY(${offset}px) scale(1.15)` }}
        />
      ) : (
        <div className="parallax-bg" style={{ background: bg, transform: `translateY(${offset}px) scale(1.15)` }} />
      )}
      {hasVideo && (
        <div className="poster-center"><div className="poster-icon">{ICONS.play}</div></div>
      )}
      <div className="bento-info">
        <div className="bento-title">{project.title}</div>
        <div className="bento-meta">{project.category} · {project.year}</div>
      </div>
    </div>
  );
}

function GearCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const hasImage = item.image && item.image.length > 0;
  return (
    <div className="gear-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="gear-card-img">
        <div className="gear-card-badge">{item.badge}</div>
        {hasImage ? (
          <img src={item.image} alt={item.name} className="gear-card-photo" />
        ) : (
          <div className="gear-card-img-center">
            <div className="gear-circle-outer"><div className="gear-circle-inner" /></div>
          </div>
        )}
      </div>
      <div className="gear-card-body">
        <div className="gear-card-name">{item.name}</div>
        <div className="gear-card-spec">{item.spec}</div>
      </div>
      {hovered && (
        <div className="gear-overlay">
          <div className="gear-overlay-name">{item.name}</div>
          <ul className="gear-overlay-specs">
            {item.details.map((d, i) => <li key={i}><span className="spec-dot" />{d}</li>)}
          </ul>
          <span className="gear-overlay-tag">{item.badge}</span>
        </div>
      )}
    </div>
  );
}

function GearScrollRow({ children }) {
  const ref = useRef(null);
  const drag = useRef({ active: false, x: 0, scroll: 0 });
  return (
    <div
      ref={ref}
      className="gear-scroll"
      onMouseDown={(e) => { drag.current = { active: true, x: e.pageX - ref.current.offsetLeft, scroll: ref.current.scrollLeft }; }}
      onMouseUp={() => { drag.current.active = false; }}
      onMouseLeave={() => { drag.current.active = false; }}
      onMouseMove={(e) => {
        if (!drag.current.active) return;
        e.preventDefault();
        ref.current.scrollLeft = drag.current.scroll - (e.pageX - ref.current.offsetLeft - drag.current.x) * 1.5;
      }}
    >
      {children}
    </div>
  );
}

export default function OzzoWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visible, setVisible] = useState(new Set());
  const [reelPlaying, setReelPlaying] = useState(false);
  const [lightboxVideo, setLightboxVideo] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible((p) => new Set([...p, e.target.dataset.rid]));
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll("[data-rid]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const rv = (id, extraClass) => ({ "data-rid": id, className: `${extraClass || ""} reveal ${visible.has(id) ? "vis" : ""}`.trim() });

  const C = SITE_CONFIG;
  const allTags = [...new Set(C.projects.flatMap((p) => p.tags))];
  const filtered = activeFilter === "all" ? C.projects : C.projects.filter((p) => p.tags.includes(activeFilter));
  const featured = filtered.find((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <div className="ozzo-root">
      <style>{CSS}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-brand">{C.brandName}</a>
        <ul className="nav-links">
          {C.navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <a href="#contact" className="nav-cta">Get in Touch</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-overlay">
          {C.navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          {C.hero.image ? (
            <>
              <img src={C.hero.image} alt="" className="hero-bg-image" />
              <div className="hero-bg-overlay" />
            </>
          ) : (
            <>
              <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="hero-mountains">
                <defs>
                  <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1a2a30"/><stop offset="100%" stopColor="#0c1215"/></linearGradient>
                  <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#152025"/><stop offset="100%" stopColor="#0a0e12"/></linearGradient>
                  <linearGradient id="m3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f1518"/><stop offset="100%" stopColor="#0c0c0c"/></linearGradient>
                </defs>
                <polygon fill="url(#m1)" points="0,280 120,140 280,200 420,100 560,180 700,80 840,160 1000,60 1120,150 1280,90 1440,170 1440,400 0,400" opacity=".6"/>
                <polygon fill="url(#m2)" points="0,320 100,220 250,280 400,180 550,260 720,150 900,230 1050,170 1200,240 1350,190 1440,250 1440,400 0,400" opacity=".8"/>
                <polygon fill="url(#m3)" points="0,350 180,280 350,320 500,260 680,300 850,240 1020,290 1180,260 1300,300 1440,270 1440,400 0,400"/>
              </svg>
              <div className="hero-aurora" />
            </>
          )}
        </div>
        <div className="hero-content">
          <p className="hero-tag">{C.tagline}</p>
          <h1 className="hero-title">{C.hero.headline}<br /><em>{C.hero.headlineAccent}</em></h1>
          <p className="hero-sub">{C.hero.description}</p>
          <div className="hero-buttons">
            <a href="#work" className="btn btn-fill">{C.hero.buttonPrimary}</a>
            <a href="#contact" className="btn btn-ghost">{C.hero.buttonSecondary} {ICONS.arrowRight}</a>
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <div className="showreel-section" id="showreel">
        <div className="showreel-header">
          <p className="label">{C.showreel.title}</p>
          <h2 className="section-title">{C.showreel.subtitle}</h2>
        </div>
        <div className="showreel-container" onClick={() => setReelPlaying(true)}>
          {reelPlaying ? (
            <iframe
              src={parseVideoUrl(C.showreel.video)}
              className="showreel-iframe"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title="Showreel"
            />
          ) : (
            <div className="showreel-poster">
              {(C.showreel.thumbnail || getVideoThumbnail(C.showreel.video)) && (
                <img src={C.showreel.thumbnail || getVideoThumbnail(C.showreel.video)} alt="Showreel" className="showreel-thumb" />
              )}
              <div className="showreel-play">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ededed" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <span className="showreel-duration">{C.showreel.duration}</span>
            </div>
          )}
        </div>
      </div>

      {/* WORK */}
      <div className="section-header" id="work">
        <div>
          <p className="label">Selected Work</p>
          <h2 className="section-title">Recent <em>projects</em></h2>
        </div>
        <div className="filters">
          <button className={`filter-pill ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>All</button>
          {allTags.map((t) => (
            <button key={t} className={`filter-pill ${activeFilter === t ? "active" : ""}`} onClick={() => setActiveFilter(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div {...rv("bento", "bento")}>
        {featured && (
          <ParallaxCard project={featured} className="bento-card featured" onPlay={setLightboxVideo} />
        )}
        {C.services[0] && (
          <div className="bento-card" id="services">
            <div className="bento-service">
              <span className="service-label">{C.services[0].label}</span>
              <div><h3 className="service-title">{C.services[0].title}</h3><p className="service-desc">{C.services[0].description}</p><div className="service-arrow">{ICONS.arrow}</div></div>
            </div>
          </div>
        )}
        {regular.slice(0, 2).map((p, i) => (
          <ParallaxCard key={i} project={p} onPlay={setLightboxVideo} />
        ))}
        {C.services[1] && (
          <div className="bento-card mobile-hide">
            <div className="bento-service">
              <span className="service-label">{C.services[1].label}</span>
              <div><h3 className="service-title">{C.services[1].title}</h3><p className="service-desc">{C.services[1].description}</p><div className="service-arrow">{ICONS.arrow}</div></div>
            </div>
          </div>
        )}
        {regular.slice(2).map((p, i) => (
          <ParallaxCard key={i + 10} project={p} className="bento-card mobile-hide" onPlay={setLightboxVideo} />
        ))}
        {C.services[2] && (
          <div className="bento-card mobile-hide">
            <div className="bento-service">
              <span className="service-label">{C.services[2].label}</span>
              <div><h3 className="service-title">{C.services[2].title}</h3><p className="service-desc">{C.services[2].description}</p><div className="service-arrow">{ICONS.arrow}</div></div>
            </div>
          </div>
        )}
      </div>
      <div className="view-all-mobile"><a href="#work">View all projects {ICONS.arrowRight}</a></div>

      {/* ABOUT */}
      <div {...rv("about", "about-strip")} id="about">
        <div><h2 className="about-title">{C.about.headline} <em>{C.about.headlineAccent}</em> {C.about.headlineSuffix}</h2></div>
        <div>
          <p className="about-desc">{C.about.description}</p>
          <a href="#contact" className="btn btn-fill">Work With Us</a>
          <div className="about-stats">
            {C.about.stats.map((s, i) => <div key={i}><div className="stat-num">{s.number}</div><div className="stat-label">{s.label}</div></div>)}
          </div>
        </div>
      </div>

      {/* EQUIPMENT */}
      <div className="section-header" id="gear">
        <div><p className="label">Our Kit</p><h2 className="section-title">Equipment <em>we work with</em></h2></div>
      </div>
      <div className="gear-showcase">
        {C.equipment.map((cat, ci) => (
          <div key={ci} {...rv(`gear${ci}`, "gear-category")}>
            <div className="gear-cat-header">
              <div className="gear-cat-title">{cat.category}</div>
              <span className="gear-cat-count">{cat.count}</span>
            </div>
            <GearScrollRow>{cat.items.map((item, ii) => <GearCard key={ii} item={item} />)}</GearScrollRow>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div {...rv("contact", "contact-section")} id="contact">
        <div className="contact-glow" />
        <h2 className="contact-title">{C.contact.headline} <em>{C.contact.headlineAccent}</em><br />{C.contact.headlineSuffix}</h2>
        <p className="contact-desc">{C.contact.description}</p>
        <div className="contact-buttons">
          <a href={`mailto:${C.contact.email}`} className="btn btn-fill">Start a Project</a>
          <a href={C.contact.clientAccessUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">Client Access</a>
        </div>
        <div className="contact-links">
          {C.contact.socials.map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">{ICONS[s.icon]}</div>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <span className="footer-brand">{C.brandName}</span>
        <span className="footer-copy">© 2026 {C.brandName} Productions</span>
        <div className="footer-links"><a href="#work">Work</a><a href="#gear">Equipment</a><a href="#contact">Contact</a></div>
      </footer>

      {/* VIDEO LIGHTBOX */}
      {lightboxVideo && (
        <VideoLightbox video={lightboxVideo} onClose={() => setLightboxVideo(null)} />
      )}
    </div>
  );
}

// ── ALL STYLES ──
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
::selection { background:#d4a843; color:#0c0c0c; }
a { color:inherit; text-decoration:none; }
ul { list-style:none; }
button { font-family:'Montserrat',sans-serif; }

.ozzo-root {
  background:#0c0c0c;
  color:#ededed;
  font-family:'Montserrat',sans-serif;
  -webkit-font-smoothing:antialiased;
  line-height:1.6;
  width:100%;
}

/* ══════════════════
   NAV
   ══════════════════ */
.nav {
  position:fixed; top:0; left:0; right:0; z-index:100;
  padding:1.25rem 2.5rem;
  display:flex; justify-content:space-between; align-items:center;
  transition:background .4s, backdrop-filter .4s;
}
.nav.scrolled { background:rgba(12,12,12,.88); backdrop-filter:blur(24px); border-bottom:1px solid #262626; }
.nav-brand { font-size:1.5rem; font-weight:600; letter-spacing:.08em; }
.nav-links { display:flex; gap:2rem; }
.nav-links a { font-size:.8rem; font-weight:500; color:#a0a0a0; letter-spacing:.04em; transition:color .25s; }
.nav-links a:hover { color:#ededed; }
.nav-cta { font-size:.75rem; font-weight:500; letter-spacing:.03em; padding:.6rem 1.4rem; background:#ededed; color:#0c0c0c; border-radius:100px; transition:opacity .25s; }
.nav-cta:hover { opacity:.85; }
.hamburger { display:none; background:none; border:none; cursor:pointer; padding:4px; color:#ededed; }

.mobile-overlay { position:fixed; inset:0; background:rgba(12,12,12,.97); z-index:99; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2.5rem; }
.mobile-overlay a { font-size:1.8rem; font-weight:300; color:#a0a0a0; transition:color .2s; }
.mobile-overlay a:hover { color:#ededed; }

/* ══════════════════
   HERO
   ══════════════════ */
.hero {
  min-height:100dvh;
  display:flex; flex-direction:column; justify-content:flex-end;
  padding:0 2.5rem 4rem;
  position:relative; overflow:hidden;
}
.hero-bg { position:absolute; inset:0; background: radial-gradient(ellipse 120% 80% at 70% 20%,rgba(50,90,130,.45) 0%,transparent 60%), radial-gradient(ellipse 80% 60% at 20% 70%,rgba(20,60,80,.35) 0%,transparent 50%), linear-gradient(180deg,#0a1520 0%,#0c1a25 30%,#0f1215 70%,#0c0c0c 100%); }
.hero-mountains { position:absolute; bottom:0; left:0; width:100%; height:45%; z-index:1; }
.hero-aurora { position:absolute; top:8%; left:10%; right:10%; height:30%; background: radial-gradient(ellipse 60% 100% at 30% 50%,rgba(80,200,120,.08) 0%,transparent 70%), radial-gradient(ellipse 40% 80% at 60% 40%,rgba(100,180,220,.06) 0%,transparent 60%); filter:blur(20px); animation:auroraShift 8s ease-in-out infinite alternate; }
@keyframes auroraShift { 0%{transform:translateX(-2%) scaleY(1);opacity:.7} 100%{transform:translateX(2%) scaleY(1.1);opacity:1} }
.hero-content { position:relative; z-index:2; max-width:900px; }
.hero-tag { font-size:.7rem; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#d4a843; margin-bottom:1.5rem; }
.hero-title { font-size:clamp(2.8rem,7vw,5.5rem); font-weight:300; line-height:1.08; letter-spacing:-.02em; margin-bottom:1.5rem; }
.hero-title em, em { font-style:italic; color:#d4a843; }
.hero-sub { font-size:clamp(.9rem,1.4vw,1.1rem); color:#a0a0a0; max-width:520px; line-height:1.65; margin-bottom:2.5rem; }
.hero-buttons { display:flex; gap:1rem; flex-wrap:wrap; }

/* ══════════════════
   BUTTONS
   ══════════════════ */
.btn { display:inline-flex; align-items:center; gap:.5rem; padding:.85rem 2rem; font-family:'Montserrat',sans-serif; font-size:.8rem; font-weight:500; letter-spacing:.03em; border-radius:100px; border:none; cursor:pointer; transition:all .3s ease; }
.btn-fill { background:#ededed; color:#0c0c0c; }
.btn-fill:hover { opacity:.88; transform:translateY(-1px); }
.btn-ghost { background:rgba(255,255,255,.08); color:#ededed; border:1px solid #262626; }
.btn-ghost:hover { background:rgba(255,255,255,.12); border-color:#3a3a3a; }

/* ══════════════════
   SHOWREEL
   ══════════════════ */
.showreel-section {
  padding:6rem 2.5rem 2rem;
}
.showreel-header {
  margin-bottom:2rem;
}
.showreel-container {
  position:relative;
  width:100%;
  max-width:1100px;
  margin:0 auto;
  aspect-ratio:16/9;
  border-radius:36px;
  overflow:hidden;
  border:1px solid #262626;
  background:#141414;
  cursor:pointer;
  transition:border-color .35s, box-shadow .35s;
}
.showreel-container:hover {
  border-color:#3a3a3a;
  box-shadow:0 0 80px rgba(212,168,67,.06);
}
.showreel-iframe {
  width:100%; height:100%;
  border:none;
}
.showreel-poster {
  position:absolute; inset:0;
  display:flex; flex-direction:column;
  align-items:center; justify-content:center;
  gap:1.2rem;
  background:
    radial-gradient(ellipse at center, rgba(212,168,67,.04), transparent 60%),
    linear-gradient(135deg, #141418, #1a1a20, #141418);
}
.showreel-play {
  width:80px; height:80px;
  border-radius:50%;
  border:1.5px solid rgba(255,255,255,.2);
  display:flex; align-items:center; justify-content:center;
  padding-left:4px;
  transition:all .35s ease;
  position:relative;
}
.showreel-play::before {
  content:''; position:absolute; inset:-10px;
  border-radius:50%;
  border:1px solid rgba(255,255,255,.08);
  animation:reelPulse 2.5s ease-in-out infinite;
}
@keyframes reelPulse {
  0%,100% { transform:scale(1); opacity:.5; }
  50% { transform:scale(1.12); opacity:0; }
}
.showreel-container:hover .showreel-play {
  background:rgba(212,168,67,.2);
  border-color:rgba(212,168,67,.4);
  transform:scale(1.08);
}
.showreel-duration {
  font-size:.7rem; font-weight:500;
  letter-spacing:.12em; text-transform:uppercase;
  color:#666;
}

/* ══════════════════
   PARALLAX BG
   ══════════════════ */
.parallax-bg {
  position:absolute; inset:-20px;
  transition:transform .05s linear;
  z-index:0;
}
.parallax-img {
  width:calc(100% + 40px); height:calc(100% + 40px);
  object-fit:cover;
  display:block;
}

/* ══════════════════
   IMAGE SUPPORT
   ══════════════════ */
.hero-bg-image {
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  opacity:.7;
}
.hero-bg-overlay {
  position:absolute; inset:0;
  background:linear-gradient(to bottom, rgba(12,12,12,.2) 0%, rgba(12,12,12,.5) 60%, #0c0c0c 100%);
}
.gear-card-photo {
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  transition:transform .5s ease;
}
.gear-card:hover .gear-card-photo {
  transform:scale(1.05);
}
.showreel-thumb {
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  z-index:0;
}
.showreel-poster .showreel-play,
.showreel-poster .showreel-duration {
  position:relative; z-index:1;
}

/* ══════════════════
   SECTION HEADERS
   ══════════════════ */
.section-header {
  padding:6rem 2.5rem 2rem;
  display:flex; justify-content:space-between; align-items:flex-end;
  flex-wrap:wrap; gap:1.5rem;
}
.section-title { font-size:clamp(2rem,4vw,3.2rem); font-weight:300; line-height:1.15; }
.label { font-size:.65rem; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:#666; margin-bottom:.6rem; }
.filters { display:flex; gap:.5rem; flex-wrap:wrap; }
.filter-pill { padding:.45rem 1.1rem; font-size:.72rem; font-weight:500; letter-spacing:.02em; background:transparent; border:1px solid #262626; color:#a0a0a0; border-radius:100px; cursor:pointer; transition:all .25s; }
.filter-pill.active, .filter-pill:hover { border-color:#d4a843; color:#d4a843; background:rgba(212,168,67,.06); }

/* ══════════════════
   BENTO GRID
   ══════════════════ */
.bento {
  padding:0 2.5rem 2.5rem;
  display:grid; grid-template-columns:repeat(3,1fr);
  gap:1.25rem;
}
.bento-card {
  position:relative; background:#1a1a1a;
  border:1px solid #262626; border-radius:36px;
  overflow:hidden; min-height:260px;
  cursor:pointer; transition:border-color .35s, transform .35s;
}
.bento-card:hover { border-color:#3a3a3a; transform:translateY(-3px); }
.bento-card.featured { grid-column:span 2; grid-row:span 2; }
.poster-center { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; z-index:2; }
.poster-icon { width:56px; height:56px; border-radius:50%; background:rgba(0,0,0,.35); border:1px solid rgba(255,255,255,.2); display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px); padding-left:3px; transition:transform .3s, background .3s; }
.bento-card:hover .poster-icon { transform:scale(1.1); background:rgba(212,168,67,.25); }
.bento-info { position:absolute; bottom:0; left:0; right:0; padding:1.8rem 2rem; background:linear-gradient(to top, rgba(12,12,12,.92) 0%, transparent 100%); z-index:3; }
.bento-title { font-size:1.4rem; font-weight:400; margin-bottom:.25rem; }
.bento-meta { font-size:.7rem; color:#666; letter-spacing:.06em; text-transform:uppercase; }

.bento-service { display:flex; flex-direction:column; justify-content:space-between; padding:2.2rem; height:100%; }
.service-label { font-size:.65rem; font-weight:500; letter-spacing:.15em; text-transform:uppercase; color:#d4a843; }
.service-title { font-size:1.5rem; font-weight:400; line-height:1.25; margin-top:auto; }
.service-desc { font-size:.85rem; color:#a0a0a0; line-height:1.6; margin-top:.8rem; }
.service-arrow { width:40px; height:40px; border-radius:50%; background:rgba(255,255,255,.05); border:1px solid #262626; display:flex; align-items:center; justify-content:center; margin-top:1.2rem; transition:background .3s; }
.bento-card:hover .service-arrow { background:rgba(255,255,255,.1); }

.view-all-mobile { display:none; text-align:center; }
.view-all-mobile a { display:inline-flex; align-items:center; gap:.4rem; font-size:.8rem; font-weight:500; color:#d4a843; }

/* ══════════════════
   ABOUT
   ══════════════════ */
.about-strip {
  margin:2.5rem;
  padding:4rem 3.5rem;
  background:#1a1a1a; border:1px solid #262626; border-radius:36px;
  display:grid; grid-template-columns:1fr 1fr;
  gap:4rem; align-items:center;
}
.about-title { font-size:clamp(1.8rem,3.5vw,2.8rem); font-weight:300; line-height:1.2; }
.about-desc { font-size:.95rem; color:#a0a0a0; line-height:1.7; margin-bottom:1.5rem; }
.about-stats { display:flex; gap:3rem; margin-top:2rem; }
.stat-num { font-size:2.4rem; font-weight:300; color:#d4a843; line-height:1; }
.stat-label { font-size:.68rem; color:#666; letter-spacing:.08em; text-transform:uppercase; margin-top:.35rem; }

/* ══════════════════
   EQUIPMENT
   ══════════════════ */
.gear-showcase { padding:0 2.5rem 2.5rem; }
.gear-category { margin-bottom:3rem; }
.gear-cat-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem; }
.gear-cat-title { font-size:1.4rem; font-weight:400; }
.gear-cat-count { font-size:.65rem; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#666; }
.gear-scroll { display:flex; gap:1rem; overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; padding-bottom:1rem; scrollbar-width:none; cursor:grab; }
.gear-scroll::-webkit-scrollbar { display:none; }
.gear-card { flex:0 0 340px; scroll-snap-align:start; border-radius:36px; overflow:hidden; position:relative; border:1px solid #262626; background:#1a1a1a; cursor:pointer; transition:border-color .35s, transform .35s; }
.gear-card:hover { border-color:#3a3a3a; transform:translateY(-3px); }
.gear-card-img { width:100%; aspect-ratio:4/3; overflow:hidden; position:relative; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#1a1a1e,#222228,#1a1a1e); }
.gear-card-img-center { position:relative; z-index:1; }
.gear-circle-outer { width:70px; height:70px; border-radius:50%; border:2px solid #3a3a42; display:flex; align-items:center; justify-content:center; }
.gear-circle-inner { width:40px; height:40px; border-radius:50%; background:#0e0e14; border:1px solid #2a2a30; }
.gear-card-badge { position:absolute; top:1rem; right:1rem; font-size:.58rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; padding:.35rem .8rem; background:rgba(0,0,0,.55); color:#d4a843; border-radius:100px; backdrop-filter:blur(12px); border:1px solid rgba(212,168,67,.2); z-index:4; }
.gear-card-body { padding:1.3rem 1.5rem 1.5rem; }
.gear-card-name { font-size:1.1rem; font-weight:500; margin-bottom:.3rem; }
.gear-card-spec { font-size:.72rem; color:#666; letter-spacing:.02em; line-height:1.5; }
.gear-overlay { position:absolute; inset:0; background:rgba(10,10,10,.92); backdrop-filter:blur(4px); display:flex; flex-direction:column; justify-content:flex-end; padding:2rem; z-index:5; }
.gear-overlay-name { font-size:1.5rem; font-weight:400; margin-bottom:.6rem; }
.gear-overlay-specs { list-style:none; display:flex; flex-direction:column; gap:.4rem; }
.gear-overlay-specs li { font-size:.78rem; color:#a0a0a0; display:flex; align-items:center; gap:.6rem; }
.spec-dot { width:4px; height:4px; border-radius:50%; background:#d4a843; flex-shrink:0; }
.gear-overlay-tag { display:inline-block; margin-top:1rem; font-size:.6rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; padding:.35rem .9rem; background:rgba(212,168,67,.1); color:#d4a843; border:1px solid rgba(212,168,67,.25); border-radius:100px; align-self:flex-start; }

/* ══════════════════
   CONTACT
   ══════════════════ */
.contact-section { margin:2.5rem; padding:6rem 3.5rem; background:#1a1a1a; border:1px solid #262626; border-radius:36px; text-align:center; position:relative; overflow:hidden; }
.contact-glow { position:absolute; width:500px; height:500px; bottom:-250px; left:50%; transform:translateX(-50%); background:radial-gradient(circle,rgba(212,168,67,.08),transparent 70%); pointer-events:none; }
.contact-title { font-size:clamp(2.2rem,5vw,3.8rem); font-weight:300; line-height:1.12; margin-bottom:1rem; position:relative; }
.contact-desc { font-size:.95rem; color:#a0a0a0; max-width:440px; margin:0 auto 2.5rem; line-height:1.65; position:relative; }
.contact-buttons { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; position:relative; }
.contact-links { display:flex; gap:2.5rem; justify-content:center; margin-top:3rem; flex-wrap:wrap; position:relative; }
.contact-link { display:flex; flex-direction:column; align-items:center; gap:.6rem; color:#a0a0a0; transition:color .25s; }
.contact-link:hover { color:#d4a843; }
.contact-link-icon { width:48px; height:48px; border-radius:16px; background:#141414; border:1px solid #262626; display:flex; align-items:center; justify-content:center; transition:border-color .25s; }
.contact-link:hover .contact-link-icon { border-color:#d4a843; }
.contact-link span { font-size:.68rem; letter-spacing:.1em; text-transform:uppercase; font-weight:500; }

/* ══════════════════
   FOOTER
   ══════════════════ */
.site-footer { padding:2.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; border-top:1px solid #262626; }
.footer-brand { font-size:1rem; letter-spacing:.06em; color:#a0a0a0; }
.footer-copy { font-size:.7rem; color:#666; letter-spacing:.03em; }
.footer-links { display:flex; gap:1.5rem; }
.footer-links a { font-size:.72rem; color:#666; letter-spacing:.02em; transition:color .2s; }
.footer-links a:hover { color:#ededed; }

/* ══════════════════
   VIDEO LIGHTBOX
   ══════════════════ */
.lightbox {
  position:fixed; inset:0; z-index:9999;
  background:rgba(0,0,0,.92);
  backdrop-filter:blur(8px);
  display:flex; align-items:center; justify-content:center;
  padding:2rem;
  animation:lightboxIn .3s ease;
}
@keyframes lightboxIn {
  from { opacity:0; }
  to { opacity:1; }
}
.lightbox-inner {
  position:relative;
  width:100%; max-width:1000px;
  aspect-ratio:16/9;
  border-radius:20px;
  overflow:hidden;
  background:#000;
  border:1px solid #333;
  box-shadow:0 40px 100px rgba(0,0,0,.6);
  animation:lightboxScale .35s ease;
}
@keyframes lightboxScale {
  from { transform:scale(.92); opacity:0; }
  to { transform:scale(1); opacity:1; }
}
.lightbox-iframe {
  width:100%; height:100%;
  border:none;
}
.lightbox-close {
  position:absolute; top:-3rem; right:0;
  width:40px; height:40px;
  border-radius:50%;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.15);
  color:#ededed;
  display:flex; align-items:center; justify-content:center;
  cursor:pointer;
  transition:background .25s;
  z-index:10;
}
.lightbox-close:hover { background:rgba(255,255,255,.15); }

/* ══════════════════
   REVEAL ANIMATION
   ══════════════════ */
.reveal { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
.reveal.vis { opacity:1; transform:none; }

/* ══════════════════════════════════════════════
   TABLET (max 1024px)
   ══════════════════════════════════════════════ */
@media (max-width:1024px) {
  .nav { padding:1.25rem 2rem; }
  .hero { padding:0 2rem 4rem; }
  .showreel-section { padding:5rem 2rem 2rem; }
  .section-header { padding:5rem 2rem 1.5rem; }
  .bento { padding:0 2rem 2rem; grid-template-columns:repeat(2,1fr); }
  .bento-card.featured { grid-column:span 2; }
  .about-strip { margin:2rem; padding:3rem 2.5rem; grid-template-columns:1fr; gap:2.5rem; }
  .gear-showcase { padding:0 2rem 2rem; }
  .gear-card { flex:0 0 300px; }
  .contact-section { margin:2rem; padding:5rem 2.5rem; }
  .site-footer { padding:2rem; }
}

/* ══════════════════════════════════════════════
   MOBILE (max 768px)
   ══════════════════════════════════════════════ */
@media (max-width:768px) {
  /* Nav */
  .nav-links, .nav-cta { display:none; }
  .hamburger { display:block; }
  .nav { padding:1rem 1.25rem; }

  /* Hero */
  .hero { padding:0 1.25rem 3rem; min-height:85dvh; }
  .hero-title { font-size:clamp(2.2rem,10vw,3.5rem); }
  .hero-sub { font-size:.88rem; margin-bottom:2rem; }
  .hero-buttons { flex-direction:column; gap:.75rem; }
  .hero-buttons .btn { width:100%; justify-content:center; text-align:center; }

  /* Showreel */
  .showreel-section { padding:3rem 1.25rem 1rem; }
  .showreel-container { border-radius:20px; }
  .showreel-play { width:64px; height:64px; }
  .showreel-play svg { width:22px; height:22px; }

  /* Section headers */
  .section-header { padding:3rem 1.25rem 1.25rem; flex-direction:column; align-items:flex-start; gap:1rem; }
  .filters { width:100%; overflow-x:auto; flex-wrap:nowrap; padding-bottom:.5rem; gap:.4rem; }
  .filter-pill { flex-shrink:0; font-size:.68rem; padding:.4rem 1rem; }

  /* Bento grid */
  .bento { grid-template-columns:1fr; padding:0 1.25rem 1.25rem; gap:1rem; }
  .bento-card.featured { grid-column:span 1; grid-row:span 1; min-height:280px; }
  .bento-card { min-height:220px; border-radius:24px; }
  .bento-card.mobile-hide { display:none; }
  .bento-info { padding:1.25rem 1.5rem; }
  .bento-title { font-size:1.15rem; }
  .bento-service { padding:1.5rem; }
  .service-title { font-size:1.25rem; }
  .service-desc { font-size:.8rem; }

  /* View all link */
  .view-all-mobile { display:block; padding:1.5rem 1.25rem 0; margin-bottom:0; }

  /* About */
  .about-strip {
    margin:2rem 1.25rem;
    padding:2rem 1.5rem;
    grid-template-columns:1fr;
    gap:1.5rem;
    border-radius:24px;
  }
  .about-title { font-size:1.4rem; }
  .about-desc { font-size:.85rem; line-height:1.65; }
  .about-stats { gap:1.5rem; margin-top:1.5rem; }
  .stat-num { font-size:1.8rem; }

  /* Equipment */
  .gear-showcase { padding:0 1.25rem 1.25rem; }
  .gear-category { margin-bottom:2rem; }
  .gear-card { flex:0 0 260px; border-radius:24px; }
  .gear-card-img { aspect-ratio:3/2; }
  .gear-card-body { padding:1rem 1.25rem 1.25rem; }
  .gear-card-name { font-size:1rem; }
  .gear-cat-title { font-size:1.1rem; }

  /* Contact */
  .contact-section {
    margin:2rem 1.25rem;
    padding:3rem 1.5rem;
    border-radius:24px;
  }
  .contact-title { font-size:clamp(1.6rem,7vw,2.5rem); }
  .contact-desc { font-size:.85rem; margin-bottom:1.5rem; }
  .contact-buttons { flex-direction:column; }
  .contact-buttons .btn { width:100%; justify-content:center; }
  .contact-links { gap:1.5rem; margin-top:2rem; }
  .contact-link-icon { width:42px; height:42px; border-radius:12px; }

  /* Footer */
  .site-footer { padding:1.5rem 1.25rem; flex-direction:column; align-items:flex-start; gap:.8rem; }

  /* Lightbox */
  .lightbox { padding:1rem; }
  .lightbox-inner { border-radius:16px; }
  .lightbox-close { top:-2.5rem; width:36px; height:36px; }
}

/* ══════════════════════════════════════════════
   SMALL MOBILE (max 400px)
   ══════════════════════════════════════════════ */
@media (max-width:400px) {
  .nav { padding:1rem; }
  .hero { padding:0 1rem 2rem; }
  .hero-title { font-size:1.8rem; }
  .section-header { padding:2.5rem 1rem 1rem; }
  .section-title { font-size:1.5rem; }
  .bento { padding:0 1rem; gap:.85rem; }
  .bento-card { min-height:180px; border-radius:20px; }
  .about-strip { margin:1.5rem 1rem; padding:1.75rem 1.25rem; border-radius:20px; }
  .about-title { font-size:1.25rem; }
  .gear-showcase { padding:0 1rem 1rem; }
  .gear-card { flex:0 0 220px; border-radius:20px; }
  .contact-section { margin:1.5rem 1rem; padding:2.5rem 1.25rem; border-radius:20px; }
  .view-all-mobile { padding:1.25rem 1rem 0; }
  .site-footer { padding:1.5rem 1rem; }
}
`;
