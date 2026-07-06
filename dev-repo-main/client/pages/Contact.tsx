import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [countryCode, setCountryCode] = useState("+62");

  return (
    <div className="relative z-10 max-w-[1344px] mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[40px] bg-[#1C1C1E] border border-[#262629] p-8 md:p-16 lg:p-24 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#FFB000]/6 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#FFB000] sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-2 text-lg leading-8 text-[#A3A3A3]">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      className="block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border border-[#333336] focus:border-[#FFB000] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      className="block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border border-[#333336] focus:border-[#FFB000] transition-colors"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      type="text"
                      name="company"
                      className="block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border border-[#333336] focus:border-[#FFB000] transition-colors"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border border-[#333336] focus:border-[#FFB000] transition-colors"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-[#262629] border border-[#333336] focus-within:border-[#FFB000] transition-colors">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="col-start-1 row-start-1 w-full appearance-none rounded-l-md py-2 pr-7 pl-3.5 text-base text-[#A3A3A3] bg-transparent focus:outline-none sm:text-sm"
                        >
                          <option value="+62">🇮🇩 (+62)</option>
                          <option value="+1">🇺🇸 (+1)</option>
                          <option value="+44">🇬🇧 (+44)</option>
                          <option value="+61">🇦🇺 (+61)</option>
                          <option value="+91">🇮🇳 (+91)</option>
                          <option value="+65">🇸🇬 (+65)</option>
                          <option value="+60">🇲🇾 (+60)</option>
                        </select>
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#6B6B6E] sm:size-4"
                        >
                          <path
                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="phone-number"
                        type="tel"
                        name="phone-number"
                        placeholder={`${countryCode} 81234567890`}
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white bg-transparent placeholder:text-[#6B6B6E] focus:outline-none sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border border-[#333336] focus:border-[#FFB000] transition-colors"
                    ></textarea>
                  </div>
                </div>
                <div className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <button
                      type="button"
                      onClick={() => setAgreed(!agreed)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        agreed ? "bg-[#FFB000]" : "bg-[#333336]"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          agreed ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <label className="text-sm leading-6 text-[#A3A3A3]">
                    By selecting this, you agree to our{" "}
                    <a
                      href="#"
                      className="font-semibold whitespace-nowrap text-[#FFB000] hover:text-[#FFC533] transition-colors"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#FFB000] px-3.5 py-2.5 text-center text-sm font-semibold text-[#0D0D0D] hover:bg-[#E69E00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB000] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-xl self-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3966.2978393532476!2d106.807807!3d-6.2244037!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1783227241858!5m2!1sen!2sid"
              className="w-[600px] h-[450px] rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
