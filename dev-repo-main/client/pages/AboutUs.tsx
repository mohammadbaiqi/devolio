import { motion } from "framer-motion";
import { Code2, Database, Monitor, TerminalSquare } from "lucide-react";

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

export default function AboutUs() {
  return (
    <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }} className="flex flex-col gap-8">
        <motion.h1 variants={fadeIn} className="font-shantell font-medium text-4xl md:text-6xl leading-tight">
          About Me
        </motion.h1>
        <motion.p variants={fadeIn} className="text-lg text-white/70 max-w-3xl leading-relaxed">
          I'm a passionate developer and designer focused on building scalable, beautiful, and user-centric applications. With a strong foundation in modern web technologies, I bridge the gap between design and engineering.
        </motion.p>
        
        <motion.h2 variants={fadeIn} className="font-shantell font-medium text-2xl md:text-3xl mt-8">
          My Expertise
        </motion.h2>
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-purple-400">
                {skill.icon}
              </div>
              <span className="font-medium text-lg">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
