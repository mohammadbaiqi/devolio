import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MotionNavLink, NavLink } from "@/components/navigation";
import { buildPersonNavLinks, buildPersonRoutes } from "@/config/navigation";
import { usePortfolio } from "@/context/PortfolioContext";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen }: NavbarProps) {
  const { name } = usePortfolio();

  const [navLinks, setNavLinks] = useState(buildPersonNavLinks(name));
  const [personRoutes, setPersonRoutes] = useState(buildPersonRoutes(name));

  useEffect(() => {
    setNavLinks(buildPersonNavLinks(name));
    setPersonRoutes(buildPersonRoutes(name));
  }, [name]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 border-b ${
        scrolled ? "bg-[#0D0D0D]/80 backdrop-blur-md border-[#262629] shadow-lg shadow-black/50" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1344px] mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <NavLink
            to={personRoutes.home}
            className="inline-flex items-center font-shantell font-bold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          >
            DevFolio<span className="text-[#FFB000]">.</span>
          </NavLink>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <MotionNavLink
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-[#A3A3A3] hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFB000] transition-all duration-300 group-hover:w-full" />
            </MotionNavLink>
          ))}
          <MotionNavLink
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            to={personRoutes.contact}
            className="px-5 py-2.5 rounded-full bg-[#FFB000] hover:bg-[#E69E00] text-[#0D0D0D] text-sm font-semibold transition-all duration-300"
          >
            Let's Talk
          </MotionNavLink>
        </nav>

        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}