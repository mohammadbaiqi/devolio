import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MotionNavLink } from "@/components/navigation";
import { NAV_LINKS, ROUTES } from "@/config/navigation";

export default function MainContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen overflow-x-hidden text-white font-jakarta selection:bg-purple-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      {/* HEADER */}
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <MotionNavLink
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.label}
                to={link.to}
                className="text-3xl font-shantell font-medium text-white hover:text-purple-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </MotionNavLink>
            ))}
            <MotionNavLink
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.1 }}
              to={ROUTES.contact}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-lg font-medium text-white hover:bg-white/20 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </MotionNavLink>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32 md:pt-40">
        <Outlet />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
