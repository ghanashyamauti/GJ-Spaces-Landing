import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Check,
  ChevronRight,
  Clock,
  Compass,
  ExternalLink,
  Instagram,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Minus,
  Pause,
  Phone,
  Play,
  Plus,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import atelierImage from "@/assets/gj-atelier.jpg";
import suiteImage from "@/assets/gj-suite.jpg";
import loungeImage from "@/assets/gj-lounge.jpg";
import stairImage from "@/assets/gj-stair.jpg";
import serviceAssetImg from "@/assets/service-asset-management.jpg";
import serviceInvestmentImg from "@/assets/service-investment.jpg";
import serviceWorkspacesImg from "@/assets/service-workspaces.jpg";
import serviceInteriorsImg from "@/assets/service-interiors.jpg";
import client1Img from "@/assets/client-1.jpg";
import client2Img from "@/assets/client-2.jpg";
import client3Img from "@/assets/client-3.jpg";
import teamJohnSmithImg from "@/assets/team-john-smith.jpg";
import teamGaneshJadhavImg from "@/assets/team-ganesh-jadhav.jpg";
import teamMichaelBrownImg from "@/assets/team-michael-brown.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GJ SpaCes | Luxury Workspaces, Interiors & Asset Advisory Pune" },
      {
        name: "description",
        content:
          "Pune's premier boutique managed workspaces, turnkey luxury interior design studio, and real estate asset advisory led by Mr. Ganesh C Jadhav.",
      },
      { property: "og:title", content: "GJ SpaCes | Architecture for Living, Work & Investment" },
      {
        property: "og:description",
        content:
          "Curated workspaces, rarefied residential interiors, and real estate asset management across Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const hubs = {
  "Koregaon Park": { suites: 2, commute: "8 min from Pune Station", tone: "Flagship" },
  Baner: { suites: 4, commute: "5 min from Balewadi High Street", tone: "Technology District" },
  Kharadi: { suites: 3, commute: "4 min from EON IT Park", tone: "Enterprise Hub" },
  Balewadi: { suites: 1, commute: "2 min from High Street", tone: "Creative Quarter" },
} as const;

type Hub = keyof typeof hubs;
type Brief = "workspace" | "residence";

interface PortfolioItem {
  id: string;
  image: string;
  label: string;
  title: string;
  location: string;
  category: "Workspace" | "Interior" | "Culture";
  description: string;
  specs: string[];
}

const portfolioGallery: PortfolioItem[] = [
  {
    id: "monolith",
    image: suiteImage,
    label: "Capacity 04—06",
    title: "The Monolith Suite",
    location: "Koregaon Park",
    category: "Workspace",
    description:
      "A tailored private executive suite carved with fluted Italian stone, acoustic bronze panelling, and enterprise-grade dedicated connectivity.",
    specs: ["Ergonomic Herman Miller seating", "Dedicated 1 Gbps fiber VLAN", "Private lounge enclave"],
  },
  {
    id: "verdant",
    image: loungeImage,
    label: "Members' Salon",
    title: "The Verdant Lounge",
    location: "Baner",
    category: "Culture",
    description:
      "A biophilic sanctuary curated for rarefied networking, artisan coffee tastings, and focused decompression.",
    specs: ["Living moss vertical garden", "Artisan espresso bar", "Natural skylight integration"],
  },
  {
    id: "copper",
    image: stairImage,
    label: "Events + Culture",
    title: "The Copper Atelier",
    location: "Kharadi",
    category: "Workspace",
    description:
      "A dramatic architectural nexus featuring hand-brushed copper cladding and sculptural circulation for team summits.",
    specs: ["Hand-brushed copper finish", "Dolby Atmos acoustics", "Amphitheater stepped seating"],
  },
  {
    id: "atelier",
    image: atelierImage,
    label: "Design Studio",
    title: "The Material Atelier",
    location: "Koregaon Park",
    category: "Interior",
    description:
      "Our core interior research laboratory showcasing curated travertine, reclaimed teak, and bespoke metal samples for bespoke residences.",
    specs: ["Material tactile gallery", "Full scale lighting simulator", "Bespoke joinery workshop"],
  },
  {
    id: "hero",
    image: serviceWorkspacesImg,
    label: "Executive Reception",
    title: "The Grand Rotunda",
    location: "Balewadi",
    category: "Workspace",
    description:
      "An imposing welcome statement clad in monolithic stone and warm architectural illumination designed to elevate corporate presence.",
    specs: ["24/7 Biometric access gate", "Concierge hospitality desk", "Fluted quartzite wall"],
  },
  {
    id: "penthouse",
    image: suiteImage,
    label: "Private Residence",
    title: "The Koregaon Penthouse",
    location: "Koregaon Park",
    category: "Interior",
    description:
      "A private luxury residential interior balancing minimalist Japanese aesthetics with rich Indian craft traditions.",
    specs: ["Custom Italian marble kitchen", "Smart home automated scenes", "Private terrace garden"],
  },
];

const servicesList = [
  {
    icon: Building2,
    number: "01",
    image: serviceAssetImg,
    tag: "Asset Stewardship",
    title: "Property Consultant & Asset Management",
    short: "Let us take care of your property while maximizing your returns.",
    desc: "Comprehensive real estate asset stewardship covering high-caliber corporate tenant acquisition, lease structuring, operational optimization, and complete facility upkeep to ensure zero vacancy and peak capitalization.",
    bullets: ["Corporate Tenant Acquisition", "Preventative Asset Stewardship", "Lease & Yield Optimization"],
  },
  {
    icon: TrendingUp,
    number: "02",
    image: serviceInvestmentImg,
    tag: "Portfolio Strategy",
    title: "Real Estate Investment Strategies",
    short: "Tailored data-driven investment strategies for long-term alpha.",
    desc: "Bespoke micro-market intelligence across Pune's prime growth corridors. We guide individual and institutional investors in acquiring, developing, and monetizing high-yield commercial and luxury residential properties.",
    bullets: ["Pune Micro-Market Intelligence", "Commercial vs Residential ROI Modeling", "Capital Growth & Exit Strategy"],
  },
  {
    icon: Layers,
    number: "03",
    image: serviceWorkspacesImg,
    tag: "Turnkey Offices",
    title: "Boutique Managed Workspaces",
    short: "Bespoke corporate ecosystems tailored for teams of 4 to 100+.",
    desc: "Fully serviced, architecturally refined private offices in Pune's most coveted business hubs. Combining enterprise technology, 24/7 biometric security, artisan hospitality, and flexible enterprise terms.",
    bullets: ["1 Gbps Redundant Dual Fiber", "Dedicated Acoustic Private Suites", "Concierge & Meeting Room Privileges"],
  },
  {
    icon: Sparkles,
    number: "04",
    image: serviceInteriorsImg,
    tag: "Private Sanctuaries",
    title: "Turnkey Luxury Architectural Interiors",
    short: "Rarefied private residences and bespoke corporate headquarters.",
    desc: "From initial spatial planning to custom bespoke millwork, Italian stonework, and lighting design. We deliver turnkey architectural transformations executed with uncompromising craftsmanship.",
    bullets: ["Full Turnkey Interior Execution", "Exclusive Material Procurement", "Custom Furniture & Millwork Design"],
  },
];

const testimonialsList = [
  {
    quote: "Exceptional Service",
    content: "I am incredibly impressed with the level of service and expertise provided by GJ SpaCes.",
    image: client1Img,
    rating: 5,
  },
  {
    quote: "Maximized Profits",
    content: "Working with GJ SpaCes has been one of the best financial decisions I have made for my real estate portfolio.",
    image: client2Img,
    rating: 5,
  },
  {
    quote: "Unmatched Expertise",
    content: "I cannot recommend GJ SpaCes enough. Their data-driven approach and attention to detail have consistently helped me achieve and exceed my business goals.",
    image: client3Img,
    rating: 5,
  },
];

const teamMembersList = [
  {
    name: "John Smith",
    role: "REAL ESTATE AGENT",
    image: teamJohnSmithImg,
    facebook: "https://www.facebook.com/ganesh.jadhav.7106/",
    x: "https://x.com",
    linkedin: "https://www.linkedin.com/in/ganesh-jadhav-8ba64b14/",
  },
  {
    name: "Mr. Ganesh C Jadhav",
    role: "FOUNDER",
    image: teamGaneshJadhavImg,
    facebook: "https://www.facebook.com/ganesh.jadhav.7106/",
    instagram: "https://www.instagram.com/ganesh.jadhav01/",
    linkedin: "https://www.linkedin.com/in/ganesh-jadhav-8ba64b14/",
  },
  {
    name: "Michael Brown",
    role: "DEVELOPMENT CONSULTANT",
    image: teamMichaelBrownImg,
    facebook: "https://www.facebook.com/ganesh.jadhav.7106/",
    x: "https://x.com",
    linkedin: "https://www.linkedin.com/in/ganesh-jadhav-8ba64b14/",
  },
];

const trackRecordStats = [
  { value: "10+", label: "Years of Excellence", detail: "In Pune Real Estate & Asset Advisory" },
  { value: "100K+", label: "Satisfied Clients", detail: "And Footfalls Across Our Workspaces" },
  { value: "₹500M+", label: "Assets Advised & Managed", detail: "Across Commercial & Luxury Properties" },
  { value: "20%+", label: "Average Annual ROI", detail: "Delivered to Our Real Estate Partners" },
  { value: "1.2M", label: "Sq. Ft. Envisioned", detail: "In Prime Workspaces & Luxury Residences" },
];

const heroVideos = [
  "/gj-hero-film.mp4",
  "/gj-hero-film-3.mp4",
];

function Index() {
  const [hub, setHub] = useState<Hub>("Koregaon Park");
  const [brief, setBrief] = useState<Brief>("workspace");
  const [team, setTeam] = useState(8);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [booked, setBooked] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filmPlaying, setFilmPlaying] = useState(true);
  const [videoIndex, setVideoIndex] = useState(0);
  const [activeLightbox, setActiveLightbox] = useState<PortfolioItem | null>(null);

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSubject, setContactSubject] = useState("Workspace Inquiry");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const filmRef = useRef<HTMLVideoElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Cycle to next video sequentially on every page refresh
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("gj_hero_video_index");
      const current = stored !== null ? (parseInt(stored, 10) + 1) % heroVideos.length : 0;
      localStorage.setItem("gj_hero_video_index", current.toString());
      setVideoIndex(current);
    }

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quote = useMemo(() => {
    if (brief === "workspace") return Math.round(team * 11500 * (hub === "Koregaon Park" ? 1.12 : 1));
    return Math.round(team * 125 * 1800);
  }, [brief, team, hub]);

  const openBooking = () => {
    setBookingStep(1);
    setBooked(false);
    setBookingOpen(true);
  };

  const toggleFilm = () => {
    const film = filmRef.current;
    if (!film) return;
    if (film.paused) {
      void film.play();
      setFilmPlaying(true);
    } else {
      film.pause();
      setFilmPlaying(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setContactSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      {/* Header Navigation - Transparent on Hero, Slim Dark Glass Highlighted on Scroll */}
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 transition-all duration-300 md:px-12 ${
          isScrolled
            ? "bg-[#0e0f14]/95 py-2 text-primary-foreground backdrop-blur-md shadow-xl border-b border-primary-foreground/10"
            : "bg-transparent py-3.5 text-primary-foreground md:py-4"
        }`}
      >
        <a
          href="#top"
          aria-label="GJ SpaCes home"
          className="hero-logo font-display text-lg font-extrabold tracking-wider md:text-xl"
        >
          GJ Spa<span className="text-accent">C</span>es
        </a>
        <nav
          className="hidden items-center gap-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] lg:flex"
          aria-label="Main navigation"
        >
          <a href="#spaces" className="transition-colors hover:text-accent">Workspaces</a>
          <a href="#services" className="transition-colors hover:text-accent">Services</a>
          <a href="#studio" className="transition-colors hover:text-accent">Architecture</a>
          <a href="#portfolio" className="transition-colors hover:text-accent">Portfolio</a>
          <a href="#track-record" className="transition-colors hover:text-accent">Track Record</a>
          <a href="#testimonials" className="transition-colors hover:text-accent">Reviews</a>
          <a href="#team" className="transition-colors hover:text-accent">Leadership</a>
          <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
          <Button variant="glass" size="sm" className="h-8 px-4 text-[11px]" onClick={openBooking}>
            Book a tour
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-5 bg-primary px-8 text-primary-foreground lg:hidden">
          {[
            ["Workspaces", "#spaces"],
            ["Services", "#services"],
            ["Architecture", "#studio"],
            ["Portfolio", "#portfolio"],
            ["Track Record", "#track-record"],
            ["Reviews", "#testimonials"],
            ["Leadership", "#team"],
            ["Contact & Inquiries", "#contact"],
          ].map(([label, link]) => (
            <a
              key={link}
              href={link}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold tracking-tight text-primary-foreground/90 transition hover:text-accent sm:text-3xl"
            >
              {label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button variant="pearl" onClick={() => { setMobileOpen(false); openBooking(); }}>
              Book a private tour
            </Button>
            <a
              href="tel:+919921003458"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground/80 hover:text-accent"
            >
              <Phone size={14} /> +91 9921003458
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="top"
        className="hero-monolith relative grid min-h-[92svh] place-items-center overflow-hidden bg-primary px-5 pb-16 pt-24 text-primary-foreground md:min-h-screen md:px-12"
      >
        <video
          key={heroVideos[videoIndex]}
          ref={filmRef}
          className="hero-film absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 1.3;
          }}
          aria-label="Cinematic tour through the GJ SpaCes architectural spaces"
        >
          <source src={heroVideos[videoIndex]} type="video/mp4" />
        </video>
        <div className="hero-vignette absolute inset-0" />
        <div className="hero-grain absolute inset-0" />

        <div className="relative z-20 flex max-w-5xl flex-col items-center px-3 text-center">
          <div className="hero-kicker-reveal overflow-hidden">
            <p className="hero-kicker font-mono text-[9px] uppercase text-primary-foreground/60">
              Pune · India　/　Defined by design & asset advisory
            </p>
          </div>
          <h1 className="hero-title mt-7 font-display text-[clamp(3.6rem,10vw,9.5rem)] font-bold leading-[0.78]">
            <span className="hero-word">GJ</span>
            <span className="hero-word hero-word-outline">Spa<span className="text-accent">C</span>es</span>
          </h1>
          <div className="hero-rule my-7 h-px bg-primary-foreground/45 md:my-9" />
          <p className="hero-manifesto max-w-2xl font-body text-sm font-light leading-6 text-primary-foreground/75 md:text-lg md:leading-8">
            We choreograph light, material and human ambition into Pune&apos;s most considered places to work, live, and invest.
          </p>
          <div className="hero-paths mt-8 flex w-full max-w-xl flex-col justify-center gap-2 sm:flex-row md:mt-10">
            <Button variant="pearl" size="lg" asChild>
              <a href="#spaces">Enter workspaces <ArrowDownRight size={14} /></a>
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => {
                setBrief("residence");
                document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Enter interiors <ArrowDownRight size={14} />
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Direct Inquiries <ArrowDownRight size={14} /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="ticker border-y border-border bg-surface py-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        <div>
          Travertine Stone　/　Hand-Brushed Copper　/　Reclaimed Teak　/　Living Moss Walls　/　Fluted Glass　/　1 Gbps Dual Fiber　/　Real Estate Asset Advisory　/　Turnkey Luxury Residences　/　Pune Prime Locations　/　
        </div>
      </div>

      {/* Services & Advisory Solutions Section with Our Services Mark & Generated Imagery */}
      <section id="services" className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Comprehensive Real Estate & Spatial Solutions</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Our Services
            </h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-accent">
              Asset Management　/　Investment Strategies　/　Managed Workspaces　/　Luxury Interiors
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            GJ SpaCes provides an end-to-end ecosystem for property investors, corporate enterprises, and discerning homeowners in Pune.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.number}
                className="group relative flex flex-col justify-between border border-border bg-surface transition-all duration-500 hover:border-accent"
              >
                {/* Architectural Thematic Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                    <span className="border border-primary-foreground/20 bg-primary/75 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-md">
                      {srv.tag}
                    </span>
                    <span className="grid size-8 place-items-center bg-primary/85 font-mono text-xs font-semibold text-accent backdrop-blur-md">
                      {srv.number}
                    </span>
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold leading-snug">{srv.title}</h3>
                      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">{srv.short}</p>
                    </div>
                    <div className="grid size-12 shrink-0 place-items-center border border-border bg-background text-accent transition-colors group-hover:border-accent group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{srv.desc}</p>

                  <div className="mt-6 border-t border-border pt-6">
                    <ul className="space-y-2 font-mono text-[11px] text-foreground/85">
                      {srv.bullets.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check size={12} className="text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dual-Force Atelier Section */}
      <section id="studio" className="mx-auto grid max-w-[1440px] gap-12 px-6 py-14 md:grid-cols-12 md:px-12 md:py-20">
        <div className="md:col-span-5 md:pt-4">
          <p className="eyebrow">The dual-force atelier</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Environments that demand a higher level of presence.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-muted-foreground">
            GJ SpaCes curates boutique work ecosystems and turnkey private interiors. One studio. Two disciplines. Every detail resolved from first line to final light.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-background p-5">
              <strong className="block font-display text-3xl">08</strong>
              <span className="meta">Pune destinations</span>
            </div>
            <div className="bg-background p-5">
              <strong className="block font-display text-3xl">1.2M</strong>
              <span className="meta">Sq. ft. envisioned</span>
            </div>
          </div>
          <div className="mt-8">
            <Button variant="outline" size="default" asChild>
              <a href="#team">Meet our leadership <ArrowRight size={14} /></a>
            </Button>
          </div>
        </div>
        <figure className="relative md:col-span-7">
          <img
            src={atelierImage}
            width={1200}
            height={800}
            loading="lazy"
            alt="Material palette and architectural drawings for a GJ SpaCes project"
            className="aspect-[4/3] size-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-primary px-5 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground">
            Material study · Series 07 · Pune
          </figcaption>
        </figure>
      </section>

      {/* Spatial Explorer & Expanded Portfolio Gallery */}
      <section id="spaces" className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="px-6 md:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-accent">Spatial explorer · Pune</p>
              <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                {(Object.keys(hubs) as Hub[]).map((name) => (
                  <button
                    key={name}
                    onClick={() => setHub(name)}
                    className={`font-display text-3xl font-bold transition-opacity md:text-6xl ${
                      hub === name ? "border-b-2 border-accent opacity-100" : "opacity-25 hover:opacity-70"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground/60">
              <span>{hubs[hub].tone}</span> · <span>{hubs[hub].commute}</span> ·{" "}
              <span className="text-accent">{hubs[hub].suites} suites currently available</span>
            </div>
          </div>
        </div>

        {/* 6-Item Architectural Showcase with Lightbox Trigger */}
        <div id="portfolio" className="mt-16 grid gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioGallery.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-primary"
            >
              <img
                src={item.image}
                width={800}
                height={1200}
                loading="lazy"
                alt={`${item.title} at GJ SpaCes Pune`}
                className="size-full object-cover opacity-65 transition duration-1000 group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-card-shade" />
              <div className="absolute inset-x-7 top-7 flex items-center justify-between">
                <span className="border border-primary-foreground/20 bg-primary/60 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-primary-foreground/80 backdrop-blur-sm">
                  {item.location}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent opacity-0 transition group-hover:opacity-100">
                  Expand View ↗
                </span>
              </div>
              <div className="absolute inset-x-7 bottom-8 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">{item.label}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary-foreground">{item.title}</h3>
                </div>
                <div className="grid size-10 place-items-center border border-primary-foreground/20 bg-primary/40 text-primary-foreground backdrop-blur-sm transition duration-300 group-hover:border-accent group-hover:text-accent">
                  <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Track Record & In Numbers Section (NEW) */}
      <section id="track-record" className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Demonstrated Performance</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold md:text-6xl">Our Track Record</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-base">
            With over a decade of real estate asset advisory, workspace management, and architectural delivery across Pune, our numbers speak for themselves.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {trackRecordStats.map((stat) => (
            <div key={stat.label} className="flex flex-col justify-between bg-background p-8 transition hover:bg-surface">
              <strong className="block font-display text-5xl font-extrabold text-foreground tracking-tight">
                {stat.value}
              </strong>
              <div className="mt-6 border-t border-border pt-4">
                <span className="font-display text-base font-bold text-foreground">{stat.label}</span>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Spatial Brief Estimator */}
      <section id="estimator" className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl border border-border bg-surface md:grid-cols-[0.82fr_1.18fr]">
          <div className="border-b border-border p-7 md:border-b-0 md:border-r md:p-10">
            <p className="eyebrow">Interactive spatial brief</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold">Estimate your next chapter.</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A live preliminary model. Your final proposal is individually authored after private consultation.
            </p>
            <div className="mt-8 flex gap-px bg-border">
              <Button
                className="flex-1"
                variant={brief === "workspace" ? "atelier" : "outline"}
                onClick={() => setBrief("workspace")}
              >
                Workspace
              </Button>
              <Button
                className="flex-1"
                variant={brief === "residence" ? "atelier" : "outline"}
                onClick={() => setBrief("residence")}
              >
                Residence
              </Button>
            </div>
          </div>
          <div className="p-7 md:p-10">
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div>
                <span className="meta">{brief === "workspace" ? "Team size" : "Area in 100 sq.ft."}</span>
                <strong className="mt-2 block font-display text-5xl">{team}</strong>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Decrease"
                  onClick={() => setTeam(Math.max(2, team - 2))}
                >
                  <Minus size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Increase"
                  onClick={() => setTeam(Math.min(100, team + 2))}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            <label className="meta mt-6 block" htmlFor="location">
              Preferred Pune district
            </label>
            <select
              id="location"
              value={hub}
              onChange={(event) => setHub(event.target.value as Hub)}
              className="mt-2 h-12 w-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
            >
              {(Object.keys(hubs) as Hub[]).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <div className="mt-8 flex flex-col justify-between gap-6 border-t border-border pt-6 sm:flex-row sm:items-end">
              <div>
                <span className="meta">Indicative investment</span>
                <strong className="mt-2 block font-display text-3xl">
                  ₹{quote.toLocaleString("en-IN")}
                  <small className="ml-1 text-xs font-normal text-muted-foreground">
                    {brief === "workspace" ? "/ month" : "onwards"}
                  </small>
                </strong>
              </div>
              <Button onClick={openBooking}>
                Build my brief <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section with Original Downloaded Photos */}
      <section id="testimonials" className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-accent">Client Endorsements</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Hear from Our Clients</h2>
            <div className="mx-auto my-4 h-0.5 w-16 bg-accent" />
            <p className="text-sm text-primary-foreground/75 md:text-base">
              Read what others have to say about their experience with GJ SpaCes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonialsList.map((test, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between border border-primary-foreground/15 bg-primary/70 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent md:p-10"
              >
                <div>
                  <div className="mx-auto mb-6 flex size-12 items-center justify-center font-display text-4xl font-black text-accent">
                    “
                  </div>
                  <p className="text-sm font-light leading-relaxed text-primary-foreground/85">
                    &ldquo;{test.content}&rdquo;
                  </p>
                  <h3 className="mt-6 font-display text-lg font-bold text-accent">
                    {test.quote}
                  </h3>
                </div>
                <div className="mt-8 flex justify-center border-t border-primary-foreground/15 pt-6">
                  <div className="size-20 overflow-hidden rounded-full border-2 border-accent/60 bg-surface shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
                    <img
                      src={test.image}
                      alt={test.quote}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section with Original Photos & Roles */}
      <section id="team" className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Leadership & Specialists</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Meet Our Team</h2>
          <div className="mx-auto my-4 h-0.5 w-16 bg-accent" />
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Get to know our experienced and dedicated real estate professionals.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembersList.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center border border-border bg-surface p-8 text-center transition-all duration-300 hover:border-accent md:p-10"
            >
              {/* Team Member Photo */}
              <div className="relative size-36 overflow-hidden rounded-full border-2 border-border shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:border-accent md:size-44">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-6 font-display text-xl font-bold text-foreground md:text-2xl">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {member.role}
              </p>

              {/* Social Channels */}
              <div className="mt-6 flex items-center justify-center gap-3">
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Facebook`}
                    className="grid size-9 place-items-center border border-border bg-background text-muted-foreground transition hover:border-accent hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {'instagram' in member && member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className="grid size-9 place-items-center border border-border bg-background text-muted-foreground transition hover:border-accent hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {'x' in member && member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} X`}
                    className="grid size-9 place-items-center border border-border bg-background text-muted-foreground transition hover:border-accent hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="grid size-9 place-items-center border border-border bg-background text-muted-foreground transition hover:border-accent hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pune Constellation Map */}
      <section className="relative bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20">
        <div className="map-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-accent">A constellation across Pune</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-none md:text-7xl">
              Where ambition already lives.
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/60">
              Four carefully placed hubs connect Pune&apos;s strongest business, cultural and residential neighborhoods.
            </p>
          </div>
          <div className="relative aspect-square border border-primary-foreground/15">
            {(Object.keys(hubs) as Hub[]).map((name, index) => (
              <button
                key={name}
                onClick={() => setHub(name)}
                className={`map-pin pin-${index + 1} ${hub === name ? "is-active" : ""}`}
              >
                <MapPin size={16} />
                <span>{name}</span>
              </button>
            ))}
            <div className="absolute bottom-5 left-5 right-5 border border-primary-foreground/15 bg-primary/70 p-5 backdrop-blur-md">
              <span className="eyebrow text-accent">{hub}</span>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {hubs[hub].commute} · {hubs[hub].suites} suites available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Pillars */}
      <section className="grid border-b border-border bg-surface md:grid-cols-3">
        {["24/7 biometric access", "1 Gbps redundant fiber", "Concierge & artisan café"].map((item, index) => (
          <div key={item} className="flex items-center gap-5 border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
            <span className="font-mono text-xs text-accent">0{index + 1}</span>
            <strong className="font-display text-lg">{item}</strong>
          </div>
        ))}
      </section>

      {/* Contact & Inquiries Section (NEW) */}
      <section id="contact" className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Business Channels */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Direct Outreach</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">Get in Touch</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              Looking for expert assistance with your real estate assets or looking to reserve a bespoke private suite? Contact our team directly.
            </p>

            <div className="mt-8 space-y-5">
              <div className="border border-border bg-surface p-5">
                <span className="meta flex items-center gap-2 text-accent">
                  <MapPin size={14} /> Registered Head Office
                </span>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  5th Floor, Office no-9, Opposite Shrimati Kashibai Navale Medical College, Nobel Manchester Building, Narhe, Pune, Maharashtra 411041
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919921003458"
                  className="flex flex-col border border-border bg-surface p-4 transition hover:border-accent"
                >
                  <span className="meta flex items-center gap-2 text-accent">
                    <Phone size={14} /> Direct Telephone
                  </span>
                  <strong className="mt-1.5 font-display text-base">+91 9921003458</strong>
                </a>

                <a
                  href="mailto:gcjadhav@gmail.com"
                  className="flex flex-col border border-border bg-surface p-4 transition hover:border-accent"
                >
                  <span className="meta flex items-center gap-2 text-accent">
                    <Mail size={14} /> Official Email
                  </span>
                  <strong className="mt-1.5 font-display text-base">gcjadhav@gmail.com</strong>
                </a>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919921003458?text=Hello%20GJ%20SpaCes%2C%20I%20would%20like%20to%20inquire%20about%20your%20spaces%20and%20consulting%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#128C7E] px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#075E54]"
                >
                  <MessageSquare size={16} /> Instant WhatsApp Chat
                </a>
                <a
                  href="https://www.instagram.com/gj_spaces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-surface px-5 py-3.5 font-mono text-xs uppercase tracking-wider transition hover:border-accent hover:text-accent"
                >
                  Instagram @gj_spaces <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="border border-border bg-surface p-6 lg:col-span-7 lg:p-10">
            <p className="eyebrow">Consultation & Scheduling</p>
            <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">Send an Inquiry</h3>

            {contactSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid size-14 place-items-center border border-accent text-accent">
                  <Check size={24} />
                </div>
                <h4 className="mt-5 font-display text-2xl font-bold">Inquiry Received</h4>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Thank you, <strong>{contactName}</strong>. Mr. Ganesh Jadhav and our spatial consulting team will review your requirements and connect with you within 2 business hours.
                </p>
                <Button className="mt-6" onClick={() => { setContactSubmitted(false); setContactMessage(""); }}>
                  Submit Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="meta block" htmlFor="form-name">Your Name *</label>
                    <input
                      id="form-name"
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="mt-1.5 h-11 w-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="meta block" htmlFor="form-email">Your Email *</label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="mt-1.5 h-11 w-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="meta block" htmlFor="form-phone">Phone Number</label>
                    <input
                      id="form-phone"
                      type="tel"
                      placeholder="+91 98000 00000"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="mt-1.5 h-11 w-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="meta block" htmlFor="form-subject">Interest Area</label>
                    <select
                      id="form-subject"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="mt-1.5 h-11 w-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
                    >
                      <option>Boutique Managed Workspace</option>
                      <option>Turnkey Luxury Interior</option>
                      <option>Real Estate Asset Management</option>
                      <option>Investment Advisory</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="meta block" htmlFor="form-message">Your Requirements (Optional)</label>
                  <textarea
                    id="form-message"
                    rows={3}
                    placeholder="Tell us about your team size, target location, or interior scope..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="mt-1.5 w-full border border-border bg-background p-3.5 text-sm outline-none focus:border-accent"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Consultation Request <Send size={14} className="ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl font-extrabold">
              GJ Spa<span className="text-accent">C</span>es
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Boutique managed workspaces, turnkey luxury architectural interiors, and real estate asset management in Pune, Maharashtra.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
              <a href="tel:+919921003458" className="hover:text-accent">+91 9921003458</a>
              <span>·</span>
              <a href="mailto:gcjadhav@gmail.com" className="hover:text-accent">gcjadhav@gmail.com</a>
              <span>·</span>
              <a href="https://www.instagram.com/gj_spaces/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">@gj_spaces</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <span className="meta block text-accent">Destinations</span>
              <ul className="mt-4 space-y-2 font-mono text-xs text-muted-foreground">
                <li><a href="#spaces" onClick={() => setHub("Koregaon Park")} className="hover:text-foreground">Koregaon Park</a></li>
                <li><a href="#spaces" onClick={() => setHub("Baner")} className="hover:text-foreground">Baner Tech District</a></li>
                <li><a href="#spaces" onClick={() => setHub("Kharadi")} className="hover:text-foreground">Kharadi Hub</a></li>
                <li><a href="#spaces" onClick={() => setHub("Balewadi")} className="hover:text-foreground">Balewadi High St.</a></li>
              </ul>
            </div>

            <div>
              <span className="meta block text-accent">Solutions</span>
              <ul className="mt-4 space-y-2 font-mono text-xs text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground">Asset Management</a></li>
                <li><a href="#services" className="hover:text-foreground">Investment Strategies</a></li>
                <li><a href="#services" className="hover:text-foreground">Managed Workspaces</a></li>
                <li><a href="#services" className="hover:text-foreground">Luxury Interiors</a></li>
              </ul>
            </div>

            <div>
              <span className="meta block text-accent">Organization</span>
              <ul className="mt-4 space-y-2 font-mono text-xs text-muted-foreground">
                <li><a href="#team" className="hover:text-foreground">Leadership</a></li>
                <li><a href="#track-record" className="hover:text-foreground">Track Record</a></li>
                <li><a href="#testimonials" className="hover:text-foreground">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-foreground">Direct Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-border pt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row">
          <span>© 2026 GJ SpaCes · All Rights Reserved</span>
          <span>5th Floor, Nobel Manchester Building, Narhe, Pune 411041</span>
        </div>
      </footer>

      {/* Lightbox Modal for Portfolio Showcase */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-overlay/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightbox.title}
        >
          <div className="relative w-full max-w-4xl border border-border bg-background shadow-atelier">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-primary sm:aspect-[21/9]">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <Button
                variant="glass"
                size="icon"
                className="absolute right-4 top-4 text-primary-foreground"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close image preview"
              >
                <X size={18} />
              </Button>
            </div>
            <div className="p-6 md:p-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {activeLightbox.category} · {activeLightbox.location}
                  </span>
                  <h3 className="mt-1 font-display text-3xl font-extrabold">{activeLightbox.title}</h3>
                </div>
                <Button
                  onClick={() => {
                    setActiveLightbox(null);
                    openBooking();
                  }}
                >
                  Reserve This Space <ArrowRight size={14} />
                </Button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {activeLightbox.description}
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <span className="meta block">Key Architectural Specifications</span>
                <div className="mt-3 grid gap-2 sm:grid-cols-3 font-mono text-xs text-foreground/90">
                  {activeLightbox.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 border border-border bg-surface p-3">
                      <Check size={12} className="text-accent" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Quick Action Buttons (Official WhatsApp & Instagram Logos) - Vertically Stacked */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Instagram Official Logo FAB */}
        <a
          href="https://www.instagram.com/gj_spaces/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid size-12 place-items-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(225,48,108,0.45)]"
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          }}
          aria-label="Follow GJ SpaCes on Instagram"
          title="Follow GJ SpaCes on Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:scale-105"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* WhatsApp Official Logo FAB */}
        <a
          href="https://wa.me/919921003458?text=Hello%20GJ%20SpaCes%2C%20I%20would%20like%20to%20inquire%20about%20your%20spaces%20and%20consulting%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-[0_8px_25px_rgba(37,211,102,0.45)]"
          aria-label="Chat with GJ SpaCes on WhatsApp"
          title="Chat on WhatsApp (+91 9921003458)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
            className="transition-transform group-hover:scale-105"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.17 8.17 0 0 1-5.82 2.41c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.63c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
          </svg>
        </a>
      </aside>

      {/* Tour Booking Modal (Preserved & Enhanced) */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-overlay p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Book a GJ SpaCes visit"
        >
          <div className="w-full max-w-xl border border-border bg-background p-6 shadow-atelier md:p-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="eyebrow">Private appointment · 0{bookingStep}</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold">
                  {booked
                    ? "Your visit is reserved."
                    : bookingStep === 1
                      ? "Choose your experience."
                      : "Select a private slot."}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close booking"
                onClick={() => setBookingOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>
            {booked ? (
              <div className="py-14 text-center">
                <span className="mx-auto grid size-14 place-items-center border border-accent text-accent">
                  <Check />
                </span>
                <p className="mx-auto mt-6 max-w-sm text-muted-foreground">
                  Our concierge and Mr. Ganesh Jadhav&apos;s team will confirm the appointment details at{" "}
                  <strong>{hub}</strong> shortly.
                </p>
                <Button className="mt-8" onClick={() => setBookingOpen(false)}>
                  Return to site
                </Button>
              </div>
            ) : bookingStep === 1 ? (
              <div className="mt-9 grid gap-3">
                <button onClick={() => setBrief("workspace")} className="booking-choice">
                  <span>01</span>
                  <strong>Workspace tour · {hub}</strong>
                  <ChevronRight />
                </button>
                <button onClick={() => setBrief("residence")} className="booking-choice">
                  <span>02</span>
                  <strong>Turnkey design & asset consultation</strong>
                  <ChevronRight />
                </button>
                <Button className="mt-4" onClick={() => setBookingStep(2)}>
                  Continue
                </Button>
              </div>
            ) : (
              <div className="mt-9">
                <div className="grid grid-cols-3 gap-2">
                  {["10:30", "12:00", "15:30"].map((time) => (
                    <button
                      key={time}
                      className="border border-border py-4 font-mono text-xs transition hover:border-accent focus:border-accent"
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <input
                  aria-label="Your email"
                  placeholder="Email address"
                  type="email"
                  className="mt-5 h-13 w-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
                />
                <Button className="mt-4 w-full" onClick={() => setBooked(true)}>
                  Reserve private visit
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}