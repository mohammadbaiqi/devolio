import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[40px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-16 lg:p-24 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between">
          <div className="flex flex-col gap-8 max-w-xl">
            <h2 className="font-shantell font-semibold text-4xl md:text-5xl lg:text-[64px] leading-[1.1]">
              Let's create something <br />
              <span className="text-purple-400">extraordinary.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Have an idea in mind? Looking to build a digital product that scales and looks amazing? I'm currently open for new opportunities.
            </p>
            
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 w-fit px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-105 transition-transform"
            >
              Start a conversation
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:pt-4">
            <div className="flex flex-col gap-6">
              <span className="text-white/50 text-sm font-medium uppercase tracking-wider">Socials</span>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Github size={20} /> GitHub
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-white/50 text-sm font-medium uppercase tracking-wider">Contact</span>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail size={20} /> hello@example.com
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Phone size={20} /> +1 (555) 000-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
