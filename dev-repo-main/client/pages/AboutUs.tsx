import { motion } from "framer-motion";
import { ArrowUpRight, Send, Star, Award, ShieldCheck, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

type Stat = { value: string; label: string };

type TrustBadge = { icon: string; text: string };

type HighlightedProject = {
  id: number;
  title: string;
  link: string;
  description: string;
};

type PortfolioProject = {
  id: number;
  title: string;
  image: string;
  tags: string[];
};

type AboutData = {
  whyHireMe: {
    image: string;
    title: string;
    description: string;
    stats: Stat[];
    ctaLabel: string;
    ctaLink: string;
  };
  portfolioPreview: {
    heading: string;
    seeAllLabel: string;
    seeAllLink: string;
    featuredProjectIds: number[];
    filterTags: string[];
    highlightedProject: HighlightedProject;
  };
  cta: {
    heading: string;
    emailPlaceholder: string;
    submitLabel: string;
    trustBadges: TrustBadge[];
  };
};

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function BadgeIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "star":
      return <Star className="w-4 h-4" />;
    case "trophy":
      return <Trophy className="w-4 h-4" />;
    case "badge-check":
      return <ShieldCheck className="w-4 h-4" />;
    default:
      return <Award className="w-4 h-4" />;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutUs() {
  const { name } = useParams<{ name: string }>();

  const [about, setAbout] = useState<AboutData | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [activeFilter, setActiveFilter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [aboutRes, portoRes] = await Promise.all([
          fetch(`/api/about/${name}`),
          fetch(`/api/portofolio/${name}`),
        ]);

        if (!aboutRes.ok) throw new Error(`Data untuk "${name}" tidak ditemukan.`);

        const aboutData = (await aboutRes.json()) as AboutData;
        setAbout(aboutData);

        if (portoRes.ok) {
          const portoData = (await portoRes.json()) as { projects: PortfolioProject[] };
          setProjects(portoData.projects ?? []);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  // ── Loading State ───────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-24 flex flex-col items-center gap-4 text-[#FFFFFF]">
        <div className="w-12 h-12 rounded-full border-2 border-[#FFB000] border-t-transparent animate-spin" />
        <p className="text-[#A3A3A3]">Loading profile…</p>
      </div>
    );
  }

  // ── Error / Not Found State ─────────────────────────────────────────────────
  if (error || !about) {
    return (
      <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-24 flex flex-col items-center gap-4 text-[#FFFFFF]">
        <p className="text-2xl font-shantell font-medium text-[#FFB000]">Oops!</p>
        <p className="text-[#A3A3A3]">{error ?? "Data tidak ditemukan."}</p>
      </div>
    );
  }

  // Featured project images from portfolio list
  const featuredProjects = about.portfolioPreview.featuredProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as PortfolioProject[];

  const { whyHireMe, portfolioPreview, cta } = about;

  return (
    <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-24 bg-[#0D0D0D] text-[#FFFFFF]">
      {/* ── Why Hire Me ──────────────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        <motion.div
          variants={fadeIn}
          className="aspect-square w-full rounded-3xl overflow-hidden bg-[#1C1C1E] border border-[#262629]"
        >
          <img
            src={whyHireMe.image}
            alt={`Profile of ${name}`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-col gap-6">
          <h2 className="font-shantell font-medium text-3xl md:text-5xl leading-tight text-[#FFFFFF]">
            {whyHireMe.title}
          </h2>
          <p className="text-[#A3A3A3] leading-relaxed max-w-md">
            {whyHireMe.description}
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-sm">
            {whyHireMe.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-shantell font-medium text-3xl md:text-4xl text-[#FFB000]">
                  {stat.value}
                </span>
                <span className="text-sm text-[#A3A3A3]">{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href={whyHireMe.ctaLink}
            className="mt-2 w-fit px-8 py-3 rounded-full bg-[#FFB000] text-[#0D0D0D] hover:bg-[#E69E00] transition-colors font-medium"
          >
            {whyHireMe.ctaLabel}
          </a>
        </motion.div>
      </motion.div>

      {/* ── Portfolio Preview ─────────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="flex flex-col gap-10"
      >
        <motion.div
          variants={fadeIn}
          className="flex items-start justify-between gap-6"
        >
          <h2 className="font-shantell font-medium text-3xl md:text-5xl leading-tight text-[#FFFFFF]">
            {portfolioPreview.heading.includes("my Portfolio")
              ? <>Lets have a look at <br className="hidden md:block" />my Portfolio</>
              : portfolioPreview.heading}
          </h2>
          <a
            href={portfolioPreview.seeAllLink}
            className="shrink-0 px-6 py-3 rounded-full bg-[#FFB000] text-[#0D0D0D] text-sm font-medium hover:bg-[#E69E00] transition-colors"
          >
            {portfolioPreview.seeAllLabel}
          </a>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {featuredProjects.length > 0
            ? featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1C1C1E] border border-[#262629] hover:border-[#4A4A4D] transition-colors"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            : // Fallback placeholders if no portfolio images
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1C1C1E] border border-[#262629]"
                />
              ))}
        </motion.div>

        {/* Dot indicators */}
        <motion.div variants={fadeIn} className="flex justify-center gap-2">
          {(featuredProjects.length > 0 ? featuredProjects : [1, 2, 3]).map(
            (_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === 0 ? "w-6 bg-[#FFB000]" : "w-1.5 bg-[#4A4A4D]"
                }`}
              />
            )
          )}
        </motion.div>

        {/* Filter tags */}
        <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
          {portfolioPreview.filterTags.map((filter, idx) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(idx)}
              className={`px-5 py-2 rounded-full border text-sm transition-colors ${
                activeFilter === idx
                  ? "border-[#FFB000] bg-[#FFB000]/10 text-[#FFB000]"
                  : "border-[#262629] text-[#A3A3A3] hover:border-[#4A4A4D]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Highlighted project */}
        <motion.div variants={fadeIn} className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <h3 className="font-shantell font-medium text-xl md:text-2xl text-[#FFFFFF]">
              {portfolioPreview.highlightedProject.title}
            </h3>
            <a
              href={portfolioPreview.highlightedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open project"
            >
              <ArrowUpRight className="w-5 h-5 text-[#FFB000]" />
            </a>
          </div>
          <p className="text-[#A3A3A3] leading-relaxed">
            {portfolioPreview.highlightedProject.description}
          </p>
        </motion.div>
      </motion.div>

      {/* ── Contact CTA ───────────────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="flex flex-col items-center gap-8 text-center"
      >
        <motion.h2
          variants={fadeIn}
          className="font-shantell font-medium text-3xl md:text-5xl leading-tight max-w-2xl text-[#FFFFFF]"
        >
          {cta.heading}
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="w-full max-w-lg flex items-center gap-2 p-2 rounded-full bg-[#1C1C1E] border border-[#262629]"
        >
          <input
            type="email"
            placeholder={cta.emailPlaceholder}
            className="flex-1 bg-transparent px-4 py-2 text-sm text-[#FFFFFF] placeholder:text-[#6B6B6E] outline-none"
          />
          <button className="shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFB000] text-[#0D0D0D] text-sm font-medium hover:bg-[#E69E00] transition-colors">
            {cta.submitLabel}
            <Send className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#A3A3A3]"
        >
          {cta.trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-[#FFB000]">
                <BadgeIcon icon={badge.icon} />
              </span>
              {badge.text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
