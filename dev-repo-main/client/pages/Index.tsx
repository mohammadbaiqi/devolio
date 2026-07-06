import { motion } from "framer-motion";
import { ArrowRight, Code2, Monitor, Database, TerminalSquare, User, Briefcase, ChevronRight } from "lucide-react";
import { MotionNavLink } from "@/components/navigation";
import { buildPersonRoutes } from "@/config/navigation";
import { usePortfolio } from "@/context/PortfolioContext";
import { useEffect, useState } from "react";

// Fallback icons map for dynamic skills & experience
const skillIconMap: Record<string, any> = {
  "React": <Code2 className="w-6 h-6" />,
  "TypeScript": <TerminalSquare className="w-6 h-6" />,
  "Node.js": <Database className="w-6 h-6" />,
  "UI/UX Design": <Monitor className="w-6 h-6" />,
};

const getSkillIcon = (skill: string) => skillIconMap[skill] || <Code2 className="w-6 h-6" />;

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
  const { name } = usePortfolio();
  const personRoutes = buildPersonRoutes(name);
  
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    fetch(`/api/overview/${name}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load overview data", err);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 text-[#FFB000]">
        Loading...
      </div>
    );
  }

  if (!data) return <div className="min-h-screen pt-20 text-center">Data not found.</div>;

  const { header, aboutMe, workExperience, portfolio, contact } = data;

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
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1E] border border-[#262629] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-pulse" />
              <span className="text-xs font-medium text-[#A3A3A3] tracking-wide uppercase">Available for work</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-shantell font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.1] tracking-tight">
              {header.title.split(' ').slice(0, 2).join(' ')} <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#FFB000] via-[#FFC533] to-[#FFE299] bg-clip-text text-transparent">
                {header.title.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-[#A3A3A3] font-light max-w-2xl leading-relaxed mt-4">
              {header.subTitle}
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <MotionNavLink
                to={personRoutes.portfolio}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFB000] text-[#0D0D0D] font-semibold text-base hover:bg-[#E69E00] transition-colors"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MotionNavLink>
              <MotionNavLink
                to={personRoutes.contact}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1C1C1E] border border-[#262629] text-white font-medium text-base hover:bg-[#262629] transition-colors backdrop-blur-sm"
              >
                Contact Me
              </MotionNavLink>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full mt-20 md:mt-28 relative"
          >
            <div className="relative rounded-2xl md:rounded-[40px] overflow-hidden border border-[#262629] bg-[#1C1C1E] backdrop-blur-md aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-80 z-10" />
              <img
                src={header.mainImage}
                alt="Hero Showcase"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform"
              />

              {/* Floating elements inside hero */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/4 left-[10%] z-20 px-4 py-3 rounded-xl bg-[#0D0D0D]/60 backdrop-blur-md border border-[#262629] hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFB000]/20 flex items-center justify-center text-[#FFB000]">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Clean Code</p>
                  <p className="text-xs text-[#A3A3A3]">React & TypeScript</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-[10%] z-20 px-4 py-3 rounded-xl bg-[#0D0D0D]/60 backdrop-blur-md border border-[#262629] hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFB000]/20 flex items-center justify-center text-[#FFB000]">
                  <Monitor size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Pixel Perfect</p>
                  <p className="text-xs text-[#A3A3A3]">UI/UX Design</p>
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
                  {aboutMe.headerTitle}
                </h2>
              </motion.div>
              <motion.p variants={fadeIn} className="text-lg text-[#A3A3A3] font-light leading-relaxed">
                {aboutMe.subHeaderTitle}
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 mt-4">
                {aboutMe.skills.map((skill: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-[#1C1C1E] border border-[#262629] hover:border-[#4A4A4D] transition-colors">
                    <div className="text-[#FFB000]">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="font-medium text-sm md:text-base">{skill}</span>
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
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-[#1C1C1E] border border-[#262629]">
                <span className="text-5xl font-bold bg-gradient-to-br from-[#FFB000] to-[#FFC533] bg-clip-text text-transparent">{aboutMe.experience}</span>
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Experience</span>
              </div>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-[#1C1C1E] border border-[#262629] mt-8">
                <span className="text-5xl font-bold bg-gradient-to-br from-[#FFB000] to-[#FFC533] bg-clip-text text-transparent">{aboutMe.projectCount}+</span>
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Projects</span>
              </div>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-[#1C1C1E] border border-[#262629] -mt-8">
                <span className="text-5xl font-bold bg-gradient-to-br from-[#FFB000] to-[#FFC533] bg-clip-text text-transparent">100%</span>
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Client Match</span>
              </div>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-[#1C1C1E] border border-[#262629]">
                <span className="text-5xl font-bold bg-gradient-to-br from-[#FFB000] to-[#FFC533] bg-clip-text text-transparent">3</span>
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Awards</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="px-6 md:px-12 py-24 bg-[#0A0A0A] relative border-y border-[#262629]">
        <div className="max-w-[1024px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-shantell font-medium text-4xl md:text-5xl mb-4">My Journey</h2>
            <p className="text-[#A3A3A3] text-lg">A timeline of my professional career.</p>
          </motion.div>

          <div className="relative border-l border-[#262629] ml-4 md:ml-0 md:border-none">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#262629] -translate-x-1/2" />

            <div className="flex flex-col gap-12 md:gap-24">
              {workExperience.map((exp: any, i: number) => (
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
                  <div className="absolute -left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#0D0D0D] border-4 border-[#0A0A0A] flex items-center justify-center z-10 shadow-xl">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB000] to-[#E69E00] flex items-center justify-center text-[#0D0D0D]">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <div className={`flex flex-col gap-2 p-6 md:p-8 rounded-3xl bg-[#1C1C1E] border border-[#262629] hover:bg-[#262629] hover:border-[#4A4A4D] transition-all duration-300 ${i % 2 === 0 ? "text-left" : "md:text-right text-left"
                      }`}>
                      <span className="text-[#FFB000] font-medium text-sm tracking-widest uppercase mb-1">
                        {exp.period}
                      </span>
                      <h3 className="font-shantell text-2xl md:text-3xl font-semibold">
                        {exp.position}
                      </h3>
                      <p className="text-white font-medium mb-3">{exp.company}</p>
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
              <p className="text-[#A3A3A3] text-lg max-w-xl">
                A collection of my recent projects focusing on seamless user experiences and modern aesthetics.
              </p>
            </motion.div>
            <MotionNavLink
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              to={personRoutes.portfolio}
              className="inline-flex items-center gap-2 text-[#FFB000] hover:text-[#FFC533] font-medium group"
            >
              View all projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </MotionNavLink>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.slice(0, 3).map((project: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-3xl overflow-hidden bg-[#1C1C1E] border border-[#262629] hover:border-[#FFB000]/40 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0D0D0D]/70 backdrop-blur-md border border-[#262629] text-xs font-medium">
                      Project
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFB000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div>
                    <h3 className="font-shantell text-2xl font-semibold mb-2 group-hover:text-[#FFB000] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs text-[#A3A3A3] px-2 py-1 rounded-md bg-[#262629]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <MotionNavLink
                    to={personRoutes.portfolio}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A3A3] hover:text-[#FFB000] transition-colors"
                  >
                    View Project <ChevronRight size={16} />
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
