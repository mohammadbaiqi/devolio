import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_LINKS, CONTACT_LINK } from "../lib/navigation";

const MotionLink = motion(Link);

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen }: NavbarProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 border-b ${scrolled
        ? "bg-[#0A0A0A]/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/50"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-[1344px] mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-shantell font-bold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
        >
          DevFolio<span className="text-[#FFB000]">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, path }, i) => (
            <MotionLink
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={label}
              to={path}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </MotionLink>
          ))}
          
          {/* BACKGROUND & TEXT LET'S TALK FIXED HERE */}
          <MotionLink
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            to={CONTACT_LINK.path}
            className="px-5 py-2.5 rounded-full bg-[#FFB000] hover:bg-[#E69E00] text-[#0D0D0D] text-sm font-semibold transition-all duration-300 shadow-md shadow-[#FFB000]/20"
          >
            Let's Talk
          </MotionLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}