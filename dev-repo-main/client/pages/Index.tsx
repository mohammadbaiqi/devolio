import { motion } from "framer-motion";
import { ArrowRight, Code2, Monitor, Database, TerminalSquare, User, Briefcase, ChevronRight } from "lucide-react";
import { MotionNavLink } from "@/components/navigation";
import { ROUTES } from "@/config/navigation";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "/images/dashboard_mockup_1782570304246.jpg",
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "FitTrack Pro",
    category: "Mobile UI Design",
    image: "/images/mobile_app_mockup_1782570315356.jpg",
    tags: ["React Native", "UI/UX", "Figma"],
  },
  {
    title: "Nexus Digitals",
    category: "Corporate Landing",
    image: "/images/corporate_site_mockup_1782570326008.jpg",
    tags: ["Next.js", "Framer Motion", "Shadcn"],
  },
];

const experiences = [
  {
    company: "Cognizant, Mumbai",
    period: "Sep 2016 – July 2020",
    role: "Experience Designer",
    desc: "Spearheaded user research and designed interactive prototypes. Improved user engagement by 40% through intuitive UI revamps.",
    icon: <User className="w-5 h-5" />,
  },
  {
    company: "Sugee Pvt limited, Mumbai",
    period: "Sep 2020 – July 2023",
    role: "UI/UX Designer",
    desc: "Led the design system creation from scratch. Collaborated with developers to ensure pixel-perfect implementation of high-fidelity mockups.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    company: "Cinetstox, Mumbai",
    period: "Sep 2023 – Present",
    role: "Lead UX Designer",
    desc: "Managing a team of 4 designers. Orchestrating the end-to-end user experience for a flagship streaming platform, boosting retention.",
    icon: <Monitor className="w-5 h-5" />,
  },
];

const skills = [
  { name: "Frontend Development", icon: <Code2 className="w-6 h-6" /> },
  { name: "Backend Architecture", icon: <Database className="w-6 h-6" /> },
  { name: "UI/UX Design", icon: <Monitor className="w-6 h-6" /> },
  { name: "DevOps & Deployment", icon: <TerminalSquare className="w-6 h-6" /> },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Index() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-[1344px] mx-auto flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center gap-6 max-w-4xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Available for work</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-shantell font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.1] tracking-tight">
              Crafting digital <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                experiences
              </span> that matter.
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed mt-4">
              I'm a Fullstack Developer & Designer focused on building modern, high-performance web applications with exceptional user interfaces.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <MotionNavLink
                to={ROUTES.portfolio}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-base hover:scale-105 transition-transform"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MotionNavLink>
              <MotionNavLink
                to={ROUTES.contact}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Contact Me
              </MotionNavLink>
            </motion.div>
          </motion.div>

          {/* Hero Image / Abstract Representation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full mt-20 md:mt-28 relative"
          >
            <div className="relative rounded-2xl md:rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80 z-10" />
              <img
                src="/images/dashboard_mockup_1782570304246.jpg"
                alt="Hero Showcase"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform"
              />

              {/* Floating elements inside hero */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/4 left-[10%] z-20 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Clean Code</p>
                  <p className="text-xs text-white/50">React & TypeScript</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-[10%] z-20 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Pixel Perfect</p>
                  <p className="text-xs text-white/50">UI/UX Design</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT & SKILLS SECTION */}
      <section id="about" className="px-6 md:px-12 py-20 relative">
        <div className="max-w-[1344px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              <motion.div variants={fadeIn}>
                <h2 className="font-shantell font-medium text-4xl md:text-5xl lg:text-[56px] leading-tight">
                  Innovating through <br />
                  <span className="text-white/50">design and code.</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeIn} className="text-lg text-white/70 font-light leading-relaxed">
                I bridge the gap between aesthetics and functionality. With a strong foundation in both design principles and technical architecture, I build products that are not just beautiful, but robust, accessible, and scalable.
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 mt-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="text-purple-400">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats / Numbers */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent">8+</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm mt-8">
                <span className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent">50+</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Projects</span>
              </div>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm -mt-8">
                <span className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent">100%</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Client Match</span>
              </div>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent">3</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Awards</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="px-6 md:px-12 py-24 bg-[#050505] relative border-y border-white/5">
        <div className="max-w-[1024px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-shantell font-medium text-4xl md:text-5xl mb-4">My Journey</h2>
            <p className="text-white/50 text-lg">A timeline of my professional career.</p>
          </motion.div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />

            <div className="flex flex-col gap-12 md:gap-24">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#0A0A0A] border-4 border-[#050505] flex items-center justify-center z-10 shadow-xl">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <div className={`flex flex-col gap-2 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${i % 2 === 0 ? "text-left" : "md:text-right text-left"
                      }`}>
                      <span className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-1">
                        {exp.period}
                      </span>
                      <h3 className="font-shantell text-2xl md:text-3xl font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-white/70 font-medium mb-3">{exp.company}</p>
                      <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="px-6 md:px-12 py-24">
        <div className="max-w-[1344px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-shantell font-medium text-4xl md:text-[56px] leading-tight mb-4">
                Selected Work
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                A collection of my recent projects focusing on seamless user experiences and modern aesthetics.
              </p>
            </motion.div>
            <MotionNavLink
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              to={ROUTES.portfolio}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium group"
            >
              View all projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </MotionNavLink>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div>
                    <h3 className="font-shantell text-2xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-white/50 px-2 py-1 rounded-md bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <MotionNavLink
                    to={ROUTES.contact}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    Discuss Project <ChevronRight size={16} />
                  </MotionNavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
