import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Instagram, Twitter } from "lucide-react";
import { NavLink } from "@/components/navigation";
import { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github": return <Github size={20} />;
    case "linkedin": return <Linkedin size={20} />;
    case "instagram": return <Instagram size={20} />;
    case "twitter": return <Twitter size={20} />;
    default: return <Github size={20} />;
  }
};

export default function Footer() {
  const { name } = usePortfolio();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!name) return;
    fetch(`/api/contact/${name}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error(err));
  }, [name]);

  if (!data) return null;

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
                {data.cta?.heading || "Let's Connect"}
              </h2>
              <p className="text-[#A3A3A3] text-lg leading-relaxed">
                {data.brand?.description}
              </p>

              <a
                href={`mailto:${data.contact?.email}`}
                className="inline-flex items-center gap-3 w-fit px-8 py-4 rounded-full bg-[#FFB000] text-[#0D0D0D] font-semibold text-lg hover:bg-[#E69E00] transition-colors"
              >
                {data.cta?.buttonLabel || "Start a conversation"}
                <Mail size={20} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:pt-4">
              <div className="flex flex-col gap-6">
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Socials</span>
                <div className="flex flex-col gap-4">
                  {data.brand?.socials?.map((social: any) => (
                    <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors capitalize">
                      {getSocialIcon(social.platform)} {social.platform}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[#A3A3A3] text-sm font-medium uppercase tracking-wider">Contact</span>
                <div className="flex flex-col gap-4">
                  <a href={`mailto:${data.contact?.email}`} className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <Mail size={20} /> {data.contact?.email}
                  </a>
                  <a href={`tel:${data.contact?.phone}`} className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#FFB000] transition-colors">
                    <Phone size={20} /> {data.contact?.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#262629] flex flex-col md:flex-row items-center justify-between gap-4 text-[#A3A3A3] text-sm">
            <p>© 2026 DevFolio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <NavLink to="#" className="hover:text-[#FFB000] transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="#" className="hover:text-[#FFB000] transition-colors">
                Terms of Service
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}