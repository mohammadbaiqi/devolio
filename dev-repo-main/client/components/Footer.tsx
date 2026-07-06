import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { NavLink } from "@/components/navigation";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "@/config/navigation";

export default function Footer() {
  return (
    <section id="contact" className="px-4 md:px-8 pb-8">
      <div className="max-w-[1344px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-[#1C1C1E] border border-[#262629] p-8 md:p-16 lg:p-24 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#FFB000]/6 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between">
            <div className="flex flex-col gap-8 max-w-xl">
              <h2 className="font-shantell font-semibold text-4xl md:text-5xl lg:text-[64px] leading-[1.1]">
                Let's create something <br />
                <span className="text-[#FFB000]">extraordinary.</span>
              </h2>
              <p className="text-[#A3A3A3] text-lg leading-relaxed">
                Have an idea in mind? Looking to build a digital product that scales and looks amazing? I'm currently open for new opportunities.
              </p>

              <a
                href={CONTACT_EMAIL_HREF}
                className="inline-flex items-center gap-3 w-fit px-8 py-4 rounded-full bg-[#FFB000] text-[#0D0D0D] font-semibold text-lg hover:bg-[#E69E00] transition-colors"
              >
                Start a conversation
                <Mail size={20} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:pt-4">
              <div className="flex flex-col gap-6">
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Socials</span>
                <div className="flex flex-col gap-4">
                  <a href={SOCIAL_LINKS[0].href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <Github size={20} /> GitHub
                  </a>
                  <a href={SOCIAL_LINKS[1].href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                  <a href={SOCIAL_LINKS[2].href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <path d="M22.46 6.00004C21.69 6.35004 20.86 6.58004 20 6.69004C20.88 6.16004 21.56 5.32004 21.88 4.31004C21.05 4.81004 20.13 5.16004 19.16 5.36004C18.37 4.50004 17.26 4.00004 16 4.00004C13.65 4.00004 11.73 5.92004 11.73 8.29004C11.73 8.63004 11.77 8.96004 11.84 9.27004C8.28 9.09004 5.11 7.38004 3 4.79004C2.63 5.42004 2.42 6.16004 2.42 6.94004C2.42 8.43004 3.18 9.75004 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10.1V10.11C2.38 12.11 3.81 13.81 5.79 14.21C5.43 14.31 5.05 14.36 4.65 14.36C4.38 14.36 4.11 14.34 3.84 14.29C4.37 15.93 5.89 17.12 7.7 17.16C6.28 18.28 4.49 18.94 2.54 18.94C2.19 18.94 1.84 18.92 1.5 18.88C3.34 20.06 5.53 20.75 7.89 20.75C15.54 20.75 19.74 14.42 19.74 8.94004C19.74 8.76004 19.74 8.58004 19.73 8.40004C20.54 7.81004 21.25 7.08004 21.8 6.22004L22.46 6.00004Z" />
                    </svg> Twitter
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Contact</span>
                <div className="flex flex-col gap-4">
                  <a href={CONTACT_EMAIL_HREF} className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <Mail size={20} /> {CONTACT_EMAIL}
                  </a>
                  <a href={CONTACT_PHONE_HREF} className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <Phone size={20} /> {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#262629] flex flex-col md:flex-row items-center justify-between gap-4 text-[#A3A3A3] text-sm">
            <p>© 2026 DevFolio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {LEGAL_LINKS.map((link) => (
                <NavLink key={link.label} to={link.to} className="hover:text-[#FFB000] transition-colors">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}