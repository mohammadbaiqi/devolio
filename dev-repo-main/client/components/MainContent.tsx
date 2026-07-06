import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MotionNavLink } from "@/components/navigation";
import { buildPersonNavLinks, buildPersonRoutes } from "@/config/navigation";
import { PortfolioContext } from "@/context/PortfolioContext";

export default function MainContent() {
  const { name = "raif" } = useParams<{ name: string }>();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navLinks, setNavLinks] = useState(buildPersonNavLinks(name));
  const [personRoutes, setPersonRoutes] = useState(buildPersonRoutes(name));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setNavLinks(buildPersonNavLinks(name));
    setPersonRoutes(buildPersonRoutes(name));
  }, [name]);

  return (
    <PortfolioContext.Provider value={{ name }}>
      <div className="bg-[#0D0D0D] min-h-screen overflow-x-hidden text-white font-jakarta selection:bg-[#FFB000]/30">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FFB000]/8 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#CC8A00]/8 blur-[120px]" />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#FFB000]/5 blur-[100px]" />
        </div>

        <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <MotionNavLink
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.label}
                  to={link.to}
                  className="text-3xl font-shantell font-medium text-white hover:text-[#FFB000] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </MotionNavLink>
              ))}
              <MotionNavLink
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                to={personRoutes.contact}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#FFB000]/30 bg-[#FFB000]/10 px-6 py-3 text-lg font-medium text-[#FFB000] hover:bg-[#FFB000]/20 transition-colors"
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
    </PortfolioContext.Provider>
  );
}
