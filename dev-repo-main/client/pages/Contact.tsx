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

        <div className="flex flex-row gap-16 justify-beetween">
          <div className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
            
            
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#FFB000] sm:text-5xl">Get in Touch</h2>
              <p className="mt-2 text-lg/8 text-white-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label  className="block text-sm/6 font-semibold text-[#FFB000]">First name</label>
                  <div className="mt-2.5">
                    <input id="first-name" type="text" name="first-name"  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm/6 font-semibold text-[#FFB000]">Last name</label>
                  <div className="mt-2.5">
                    <input id="last-name" type="text" name="last-name"  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label  className="block text-sm/6 font-semibold text-[#FFB000]">Company</label>
                  <div className="mt-2.5">
                    <input id="company" type="text" name="company"  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label  className="block text-sm/6 font-semibold text-[#FFB000]">Email</label>
                  <div className="mt-2.5">
                    <input id="email" type="email" name="email"  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label  className="block text-sm/6 font-semibold text-[#FFB000]">Phone number</label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select id="country" name="country"  aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                          <option>US</option>
                          <option>IDN</option>
                          <option>CA</option>
                          <option>EU</option>
                          <option>UK</option>
                          <option>AU</option>
                          <option>IN</option>
                        </select>
                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                          <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                      </div>
                      <input id="phone-number" type="text" name="phone-number" placeholder="123-456-7890" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label  className="block text-sm/6 font-semibold text-[#FFB000]">Message</label>
                  <div className="mt-2.5">
                    <textarea id="message" name="message"    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
                  </div>
                </div>
                <div className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                      <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
                      <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" className="absolute inset-0 size-full appearance-none focus:outline-hidden" />
                    </div>
                  </div>
                  <label  className="text-sm/6 text-gray-600">
                    By selecting this, you agree to our
                    <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">privacy policy</a>.
                  </label>
                </div>
              </div>
              <div className="mt-10">
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
              </div>
            </form>
          </div>

          <div className=" max-w-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3966.2978393532476!2d106.807807!3d-6.2244037!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1783227241858!5m2!1sen!2sid" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">

            </iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
