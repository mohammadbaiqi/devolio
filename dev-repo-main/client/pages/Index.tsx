import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { title: "Brand Identity", category: "Graphic Design" },
  { title: "Brand Identity", category: "Graphic Design" },
  { title: "Brand Identity", category: "Graphic Design" },
  { title: "Brand Identity", category: "Graphic Design" },
  { title: "Social Media Campaign", category: "Marketing" },
  { title: "Corporate Website", category: "Web Development" },
];

const experiences = [
  {
    company: "Cognizant, Mumbai",
    period: "Sep 2016 – July 2020",
    role: "Experience Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Sugee Pvt limited, Mumbai",
    period: "Sep 2020 – July 2023",
    role: "UI/UX Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    company: "Cinetstox, Mumbai",
    period: "Sep 2023 – Present",
    role: "Lead UX Designer",
    desc: "",
  },
];

function TimelineCircle({ filled }: { filled: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="white" />
      <rect
        width="48"
        height="48"
        rx="24"
        stroke="#1D2939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="7 7"
      />
      <circle cx="24" cy="24" r="18" fill={filled ? "#344054" : "#1D2939"} />
    </svg>
  );
}

function PlaceholderCard({ title, category }: { title: string; category: string }) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <div className="flex items-center justify-center rounded-[4px] border-2 border-black/80 bg-[#EEE] overflow-hidden aspect-[4/3]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6da334d3d1e64ab0af7047c7821e807c6a249dfc?width=128"
          alt="placeholder"
          className="w-16 h-16"
        />
      </div>
      <div>
        <p className="font-shantell font-medium text-[15px] leading-5 text-black/80 truncate">{title}</p>
        <p className="font-flow text-[17px] leading-6 text-black/40 truncate">{category}</p>
      </div>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="px-6 md:px-12 bg-white relative">
        <div className="flex items-center justify-between py-4 relative">
          <div className="font-shantell font-bold text-3xl md:text-[42px] text-black/80 leading-none z-10">
            DevFolio
          </div>

          {/* Divider line behind header content */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-black/80 hidden md:block" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 z-10 bg-white pl-4">
            {["Home", "Portfolio", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-shantell font-normal text-xl lg:text-[28px] leading-8 text-black/80 hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden z-10 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-black/80 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-black/80 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-black/80 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 pb-4 border-t border-black/20">
            {["Home", "Portfolio", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-shantell font-normal text-2xl text-black/80 pt-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        )}

        {/* Bottom border of header */}
        <div className="h-[2px] bg-black/80" />
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="px-6 md:px-12 pb-8 md:pb-16"
        style={{
          background:
            "radial-gradient(193.34% 155.87% at 50% -1.55%, rgba(255,255,255,0.70) 31.17%, rgba(51,51,51,0.06) 100%), #FFF",
        }}
      >
        <div className="max-w-[1344px] mx-auto flex flex-col items-center gap-16 md:gap-24 pt-12 md:pt-24">
          {/* Hero text + CTA */}
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
            <h1 className="font-shantell font-medium text-center text-black/80 text-4xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] leading-tight">
              Hi, I'm a Fullstack Developer &amp; Data Scientist
            </h1>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-black/80 text-white font-shantell font-medium text-lg leading-6 hover:bg-black transition-colors"
            >
              Lihat Proyek Saya
            </a>
          </div>

          {/* Desktop App Mockup */}
          <div className="w-full max-w-[1024px] mx-auto px-0 md:px-8 lg:px-16">
            <div className="rounded-lg border-2 border-black/80 bg-white overflow-hidden w-full aspect-[1024/720] relative shadow-sm">
              {/* Mockup header */}
              <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-[4%] py-[3%]">
                <span className="font-shantell font-bold text-black/80" style={{ fontSize: "clamp(14px, 4vw, 42px)" }}>
                  DevFolio
                </span>
                <div className="flex items-center justify-center px-4 py-2 rounded bg-black/80">
                  <span className="text-white font-shantell font-medium" style={{ fontSize: "clamp(10px, 2vw, 20px)" }}>
                    Explore
                  </span>
                </div>
              </div>

              {/* Sidebar placeholders */}
              <div className="absolute left-[4%] top-[22%] flex flex-col gap-[2%] w-[14%]">
                <div className="rounded bg-black/20 opacity-50" style={{ height: "clamp(8px, 2vw, 42px)" }} />
                <div className="rounded bg-black/20 opacity-50" style={{ height: "clamp(8px, 2vw, 42px)", marginTop: "2%" }} />
                <div className="rounded bg-black/20 opacity-50" style={{ height: "clamp(8px, 2vw, 42px)", marginTop: "2%" }} />
                <div className="rounded bg-black/20 opacity-50" style={{ height: "clamp(8px, 2vw, 42px)", marginTop: "2%" }} />
              </div>

              {/* Main content placeholder */}
              <div
                className="absolute rounded-lg bg-black/20 opacity-30"
                style={{
                  left: "24%",
                  top: "18%",
                  right: "4%",
                  bottom: "4%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="px-6 md:px-12 py-12 md:py-16 bg-white">
        <div className="max-w-[1344px] mx-auto flex flex-col gap-6">
          <h2 className="font-shantell font-medium text-black/80 text-4xl md:text-5xl lg:text-[64px] leading-tight">
            About Me
          </h2>
          <p className="font-flow text-black/80 text-lg md:text-xl lg:text-2xl leading-8 max-w-4xl">
            NexusDigi Agency is a forward-thinking digital agency committed to delivering innovative solutions that empower businesses to thrive in the digital era. Our team of experts is dedicated to providing tailored strategies that drive growth and success.
          </p>
          <div className="flex flex-col gap-4 pt-6">
            <a href="#contact" className="font-flow text-black/40 text-lg md:text-2xl leading-8 hover:text-black/60 transition-colors">
              Contact Us
            </a>
            <a href="#" className="font-flow text-black/40 text-lg md:text-2xl leading-8 hover:text-black/60 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="font-flow text-black/40 text-lg md:text-2xl leading-8 hover:text-black/60 transition-colors">
              GitHub
            </a>
            <a href="#" className="font-flow text-black/40 text-lg md:text-2xl leading-8 hover:text-black/60 transition-colors">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="px-6 md:px-12 py-8 md:py-12 bg-white">
        <div className="max-w-[1344px] mx-auto">
          <div className="flex items-center justify-center py-10 md:py-16">
            <h2 className="font-lufga font-medium text-[#344054] text-4xl md:text-5xl lg:text-[64px] leading-none tracking-tight">
              My Work Experience
            </h2>
          </div>

          {/* Timeline - desktop 3-col, mobile stacked */}
          <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:items-stretch">
            {/* Left: Companies */}
            <div className="flex flex-col gap-10 md:gap-[102px]">
              {experiences.map((exp) => (
                <div key={exp.company} className="flex flex-col gap-3">
                  <p className="font-lufga font-semibold text-[#344054] text-2xl md:text-3xl lg:text-[40px] leading-none tracking-tight">
                    {exp.company}
                  </p>
                  <p className="font-lufga font-normal text-[#98A2B3] text-base md:text-lg lg:text-2xl leading-none tracking-tight">
                    {exp.period}
                  </p>
                </div>
              ))}
            </div>

            {/* Center: Timeline */}
            <div className="hidden md:flex flex-col items-center justify-between relative">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-[#344054]" />
              {experiences.map((exp, i) => (
                <div key={i} className="z-10">
                  <TimelineCircle filled={i !== 1} />
                </div>
              ))}
            </div>

            {/* Right: Roles */}
            <div className="flex flex-col gap-8 md:gap-12">
              {experiences.map((exp) => (
                <div key={exp.role} className="flex flex-col gap-3">
                  <p className="font-lufga font-semibold text-[#344054] text-2xl md:text-3xl lg:text-[40px] leading-none tracking-tight">
                    {exp.role}
                  </p>
                  {exp.desc && (
                    <p className="font-lufga font-medium text-[#98A2B3] text-base md:text-lg lg:text-xl leading-normal tracking-tight max-w-md">
                      {exp.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="px-6 md:px-12 py-8 md:py-12 bg-white">
        <div className="max-w-[1344px] mx-auto">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 pb-6 md:pb-8 pt-4 md:pt-12">
            {projects.slice(0, 3).map((p, i) => (
              <PlaceholderCard key={i} title={p.title} category={p.category} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 pb-8 md:pb-12">
            {projects.slice(3, 6).map((p, i) => (
              <PlaceholderCard key={i} title={p.title} category={p.category} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="mx-4 md:mx-8 rounded-t-3xl border border-black overflow-hidden"
        style={{ background: "rgba(0,0,0,0.50)" }}
      >
        {/* Connect CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-8 md:px-16 lg:px-24 pt-10 md:pt-16 pb-8">
          <h3 className="font-lufga font-semibold text-[#FCFCFD] text-3xl md:text-4xl lg:text-[64px] leading-tight tracking-tight">
            Lets Connect there
          </h3>
          <a
            href="mailto:Jaycrea36@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/80 bg-black/50 shadow text-white font-lufga font-medium text-lg lg:text-2xl tracking-tight flex-shrink-0 hover:bg-black/70 transition-colors"
          >
            Hire me
            <svg width="28" height="28" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 29.75L29.75 12.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.25 12.25H29.75V29.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="mx-8 md:mx-16 lg:mx-24 h-[2px] bg-[#475467]" />

        {/* Footer content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 px-8 md:px-16 lg:px-24 py-10 md:py-12">
          {/* Left: logo + desc + social */}
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="font-shantell font-bold text-black/80 text-3xl md:text-[42px] leading-none">
              DevFolio
            </span>
            <p className="font-lufga font-normal text-[#FCFCFD] text-base md:text-lg lg:text-xl leading-normal tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z" fill="white" />
              </svg>
              {/* YouTube */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z" fill="white" />
              </svg>
              {/* WhatsApp */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.98 11.41C21.64 5.60995 16.37 1.13996 10.3 2.13996C6.12004 2.82996 2.77005 6.21994 2.12005 10.3999C1.74005 12.8199 2.24007 15.1099 3.33007 16.9999L2.44006 20.3099C2.24006 21.0599 2.93004 21.7399 3.67004 21.5299L6.93005 20.63C8.41005 21.5 10.14 21.9999 11.99 21.9999C17.63 21.9999 22.31 17.03 21.98 11.41ZM16.8801 15.7199C16.7901 15.8999 16.68 16.07 16.54 16.23C16.29 16.5 16.02 16.7 15.72 16.82C15.42 16.95 15.09 17.01 14.74 17.01C14.23 17.01 13.68 16.89 13.11 16.64C12.53 16.39 11.9601 16.0599 11.3901 15.6499C10.8101 15.2299 10.2701 14.7599 9.75005 14.2499C9.23005 13.7299 8.77003 13.1799 8.35003 12.6099C7.94003 12.0399 7.61005 11.4699 7.37005 10.8999C7.13005 10.3299 7.01006 9.77996 7.01006 9.25996C7.01006 8.91996 7.07006 8.58996 7.19006 8.28996C7.31006 7.97996 7.50007 7.69996 7.77007 7.44996C8.09007 7.12996 8.44005 6.97996 8.81005 6.97996C8.95005 6.97996 9.09002 7.00995 9.22002 7.06995C9.35002 7.12995 9.47005 7.21995 9.56005 7.34995L10.72 8.98994C10.81 9.11994 10.88 9.22994 10.92 9.33994C10.97 9.44994 10.99 9.54994 10.99 9.64994C10.99 9.76994 10.9501 9.88996 10.8801 10.01C10.8101 10.13 10.72 10.2499 10.6 10.3699L10.22 10.7699C10.16 10.8299 10.1401 10.8899 10.1401 10.9699C10.1401 11.0099 10.15 11.0499 10.16 11.0899C10.18 11.1299 10.1901 11.16 10.2001 11.1899C10.2901 11.36 10.45 11.5699 10.67 11.8299C10.9 12.0899 11.1401 12.3599 11.4001 12.6199C11.6701 12.8899 11.9301 13.1299 12.2001 13.3599C12.4601 13.5799 12.68 13.73 12.85 13.82C12.88 13.83 12.9101 13.8499 12.9401 13.8599C12.9801 13.8799 13.0201 13.88 13.0701 13.88C13.1601 13.88 13.2201 13.85 13.2801 13.79L13.66 13.41C13.79 13.28 13.9101 13.19 14.0201 13.13C14.1401 13.06 14.2501 13.0199 14.3801 13.0199C14.4801 13.0199 14.5801 13.0399 14.6901 13.0899C14.8001 13.1399 14.92 13.2 15.04 13.29L16.7001 14.4699C16.8301 14.5599 16.92 14.67 16.98 14.79C17.03 14.92 17.0601 15.0399 17.0601 15.1799C17.0001 15.3499 16.9601 15.5399 16.8801 15.7199Z" fill="white" />
              </svg>
              {/* Instagram */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="white" />
              </svg>
              {/* Twitter/X */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1066 8.63423C20.0826 8.41077 20.0546 8.23168 20.0316 8.10405L21.9161 5.27735C22.0345 5.09962 22.027 4.86625 21.8974 4.6965C21.7677 4.52675 21.5446 4.45811 21.3419 4.52566L18.7212 5.39922C18.5827 5.19265 18.3773 4.92019 18.1036 4.64645C17.5491 4.09195 16.6794 3.5 15.5 3.5C14.2775 3.5 13.3727 3.84218 12.7266 4.40395C12.0872 4.95995 11.75 5.68869 11.5775 6.37873C11.4052 7.06789 11.3898 7.74611 11.4147 8.24372C11.422 8.38883 11.4327 8.52017 11.4444 8.63384C10.1893 8.90075 8.87591 8.49188 7.58934 7.72835C6.17064 6.88641 4.87015 5.66301 3.85358 4.64645C3.71259 4.50546 3.50131 4.46171 3.31593 4.53513C3.13054 4.60855 3.0065 4.78509 3.00027 4.98438C2.87287 9.0612 3.71338 13.9958 7.51119 16.498C5.9138 17.3622 4.34766 17.7652 2.43801 18.0039C2.21938 18.0312 2.04441 18.1984 2.00721 18.4156C1.97001 18.6328 2.07935 18.8487 2.27642 18.9472C7.43512 21.5266 14.1199 21.3401 17.9 16.3C19.467 14.2107 19.9921 12.1159 20.1233 10.5415C20.1888 9.7552 20.1563 9.09808 20.1066 8.63423Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* Right: Navigation + Contact columns */}
          <div className="flex flex-row gap-12 md:gap-20 lg:gap-28">
            {/* Navigation */}
            <div className="flex flex-col gap-6">
              <p className="font-lufga font-semibold text-black/50 text-base md:text-lg tracking-tight">
                Navigation
              </p>
              <div className="flex flex-col gap-4">
                {["Home", "About Us", "Service", "Resume", "Project"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="font-lufga font-normal text-[#FCFCFD] text-sm md:text-base tracking-tight hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6">
              <p className="font-lufga font-semibold text-black/50 text-base md:text-lg tracking-tight">
                Contact
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:Jaycrea36@gmail.com"
                  className="font-lufga font-normal text-[#FCFCFD] text-sm md:text-base tracking-tight hover:text-white transition-colors"
                >
                  Jaycrea36@gmail.com
                </a>
                <a
                  href="https://portfolio-jcrea.com"
                  className="font-lufga font-normal text-[#FCFCFD] text-sm md:text-base tracking-tight hover:text-white transition-colors"
                >
                  Portfolio-jcrea.com
                </a>
                <span className="font-lufga font-normal text-white text-sm md:text-base">
                  08953213123
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mx-8 md:mx-16 lg:mx-24 h-[2px] bg-[#475467] mb-6" />
      </footer>
    </div>
  );
}
