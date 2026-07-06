import { motion } from "framer-motion";
import { ArrowUpRight, Send, Star, Award, ShieldCheck } from "lucide-react";

const stats = [
  { value: "450+", label: "Project Completed" },
  { value: "120+", label: "Happy Clients" },
];

const filters = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

const projects = [
  { id: 1, img: "https://picsum.photos/seed/portfolio-1/600/450" },
  { id: 2, img: "https://picsum.photos/seed/portfolio-2/600/450" },
  { id: 3, img: "https://picsum.photos/seed/portfolio-3/600/450" },
];

const trustBadges = [
  { icon: <Star className="w-4 h-4" />, label: "4.9/5 Average Ratings" },
  { icon: <Award className="w-4 h-4" />, label: "25+ Winning Awards" },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "Certified Product Designer",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutUs() {
  return (
    <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-24 bg-[#0D0D0D] text-[#FFFFFF]">
      {/* Why Hire Me */}
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
            src="https://picsum.photos/seed/hero-profile/700/700"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-col gap-6">
          <h2 className="font-shantell font-medium text-3xl md:text-5xl leading-tight text-[#FFFFFF]">
            Why Hire me?
          </h2>
          <p className="text-[#A3A3A3] leading-relaxed max-w-md">
            I'm a passionate developer and designer focused on building
            scalable, beautiful, and user-centric applications. With a strong
            foundation in modern web technologies, I bridge the gap between
            design and engineering.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-shantell font-medium text-3xl md:text-4xl text-[#FFB000]">
                  {stat.value}
                </span>
                <span className="text-sm text-[#A3A3A3]">{stat.label}</span>
              </div>
            ))}
          </div>

          <button className="mt-2 w-fit px-8 py-3 rounded-full bg-[#FFB000] text-[#0D0D0D] hover:bg-[#E69E00] transition-colors font-medium">
            Hire me
          </button>
        </motion.div>
      </motion.div>

      {/* Portfolio */}
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
            Lets have a look at <br className="hidden md:block" /> my Portfolio
          </h2>
          <button className="shrink-0 px-6 py-3 rounded-full bg-[#FFB000] text-[#0D0D0D] text-sm font-medium hover:bg-[#E69E00] transition-colors">
            See All
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1C1C1E] border border-[#262629] hover:border-[#4A4A4D] transition-colors"
            >
              <img
                src={project.img}
                alt={`Portfolio project ${project.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="flex justify-center gap-2">
          {projects.map((project, idx) => (
            <span
              key={project.id}
              className={`h-1.5 rounded-full transition-all ${
                idx === 0 ? "w-6 bg-[#FFB000]" : "w-1.5 bg-[#4A4A4D]"
              }`}
            />
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full border text-sm transition-colors ${
                idx === 0
                  ? "border-[#FFB000] bg-[#FFB000]/10 text-[#FFB000]"
                  : "border-[#262629] text-[#A3A3A3] hover:border-[#4A4A4D]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <h3 className="font-shantell font-medium text-xl md:text-2xl text-[#FFFFFF]">
              Lirante - Food Delivery Solution
            </h3>
            <ArrowUpRight className="w-5 h-5 text-[#FFB000]" />
          </div>
          <p className="text-[#A3A3A3] leading-relaxed">
            A full-stack food delivery platform designed for speed and clarity,
            covering the ordering flow, live tracking, and a merchant dashboard
            built for daily use.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact CTA */}
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
          Have an Awsome Project Idea? Let's Discuss
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="w-full max-w-lg flex items-center gap-2 p-2 rounded-full bg-[#1C1C1E] border border-[#262629]"
        >
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 bg-transparent px-4 py-2 text-sm text-[#FFFFFF] placeholder:text-[#6B6B6E] outline-none"
          />
          <button className="shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFB000] text-[#0D0D0D] text-sm font-medium hover:bg-[#E69E00] transition-colors">
            Send
            <Send className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#A3A3A3]"
        >
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-[#FFB000]">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
