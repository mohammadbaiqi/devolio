import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NAV_LINKS, CONTACT_LINK } from "../lib/navigation";

const MotionLink = motion(Link);
const MOBILE_LINKS = [...NAV_LINKS, CONTACT_LINK];

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
            {MOBILE_LINKS.map(({ label, path }, i) => (
              <MotionLink
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={label}
                to={path}
                className="text-3xl font-shantell font-medium text-white hover:text-purple-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </MotionLink>
            ))}
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