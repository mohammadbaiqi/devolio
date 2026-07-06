import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { MotionNavLink } from "@/components/navigation";
import { buildPortfolioDetailPath } from "@/lib/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";

const projects = [
  {
    id: "1",
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "/images/dashboard_mockup_1782570304246.jpg",
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: "2",
    title: "FitTrack Pro",
    category: "Mobile UI Design",
    image: "/images/mobile_app_mockup_1782570315356.jpg",
    tags: ["React Native", "UI/UX", "Figma"],
  },
  {
    id: "3",
    title: "Nexus Digitals",
    category: "Corporate Landing",
    image: "/images/corporate_site_mockup_1782570326008.jpg",
    tags: ["Next.js", "Framer Motion", "Shadcn"],
  },
];

export default function Portofolio() {
  const { name } = usePortfolio();

  return (
    <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-shantell font-medium text-4xl md:text-[56px] leading-tight mb-4">
          Selected Work
        </h1>
        <p className="text-[#A3A3A3] text-lg max-w-xl">
          A collection of my recent projects focusing on seamless user experiences and modern aesthetics.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                  {project.category}
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
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-[#A3A3A3] px-2 py-1 rounded-md bg-[#262629]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <MotionNavLink
                to={buildPortfolioDetailPath(name, project.id)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A3A3] hover:text-[#FFB000] transition-colors"
              >
                View Case Study <ChevronRight size={16} />
              </MotionNavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
