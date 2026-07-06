import { useState, useEffect } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { name } = usePortfolio();
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    if (!name) return;
    fetch(`/api/contact/${name}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error(err));
  }, [name]);

  const [agreed, setAgreed] = useState(false);
  const [countryCode, setCountryCode] = useState("+62");

  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // State untuk menyimpan status error tiap input
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    message: false,
    agreed: false,
  });

  // Fungsi untuk memantau perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Jika user mulai mengetik, hilangkan status error pada kolom tersebut
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  // Fungsi saat form di-submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Matikan refresh halaman bawaan browser

    // Validasi manual satu per satu
    const newErrors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@"), // Cek kosong & format email
      phoneNumber: formData.phoneNumber.trim() === "",
      message: formData.message.trim() === "",
      agreed: !agreed,
    };

    setErrors(newErrors);

    // Cek apakah ada salah satu input yang error
    const hasError = Object.values(newErrors).some((isError) => isError);

    if (hasError) {
      // Jika ada error, hentikan proses pengiriman
      return;
    }

    // Jika semua lolos validasi
    alert("Message sent successfully!");
    
    // Reset form setelah sukses (opsional)
    setFormData({ firstName: "", lastName: "", company: "", email: "", phoneNumber: "", message: "" });
    setAgreed(false);
  };

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
                {data?.cta?.heading || "Get in Touch"}
              </h2>
              <p className="mt-2 text-lg leading-8 text-[#A3A3A3]">
                {data?.brand?.description || "Let's connect and build something great together. Fill out the form below to get started."}
              </p>
              {data && data.contact && (
                <div className="mt-6 text-[#A3A3A3] text-sm font-medium flex flex-col items-center gap-2">
                  <p>Email: <span className="text-white">{data.contact.email}</span></p>
                  <p>Phone: <span className="text-white">{data.contact.phone}</span></p>
                </div>
              )}
            </div>
            
            {/* Ditambahkan noValidate agar popup bawaan browser tidak muncul */}
            <form onSubmit={handleSubmit} noValidate className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                
                {/* FIRST NAME */}
                <div>
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={`block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border transition-colors ${
                        errors.firstName ? "border-red-500 focus:border-red-500" : "border-[#333336] focus:border-[#FFB000]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 text-xs text-red-500">Please tell us how we can call you.</p>
                    )}
                  </div>
                </div>

                {/* LAST NAME */}
                <div>
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className={`block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border transition-colors ${
                        errors.lastName ? "border-red-500 focus:border-red-500" : "border-[#333336] focus:border-[#FFB000]"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1.5 text-xs text-red-500">We would really like to know your last name.</p>
                    )}
                  </div>
                </div>

                {/* COMPANY (OPSIONAL) */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Job title / Company (Optional)"
                      className="block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border border-[#333336] focus:border-[#FFB000] transition-colors"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border transition-colors ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-[#333336] focus:border-[#FFB000]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">Do you really want us to send to this address?</p>
                    )}
                  </div>
                </div>

                {/* PHONE NUMBER */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className={`flex rounded-md bg-[#262629] border transition-colors ${
                      errors.phoneNumber ? "border-red-500" : "border-[#333336] focus-within:border-[#FFB000]"
                    }`}>
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
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Mobile Phone"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white bg-transparent placeholder:text-[#6B6B6E] focus:outline-none sm:text-sm"
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1.5 text-xs text-red-500">Seems like there is an issue with the phone number.</p>
                    )}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#FFB000]">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`block w-full rounded-md bg-[#262629] px-3.5 py-2 text-base text-white placeholder:text-[#6B6B6E] outline-none border transition-colors ${
                        errors.message ? "border-red-500 focus:border-red-500" : "border-[#333336] focus:border-[#FFB000]"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">Please provide a short description or message.</p>
                    )}
                  </div>
                </div>

                {/* PRIVACY POLICY */}
                <div className="flex flex-col gap-y-1 sm:col-span-2">
                  <div className="flex gap-x-4">
                    <div className="flex h-6 items-center">
                      <button
                        type="button"
                        onClick={() => {
                          setAgreed(!agreed);
                          if (!agreed) setErrors((prev) => ({ ...prev, agreed: false }));
                        }}
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
                  {errors.agreed && (
                    <p className="text-xs text-red-500 mt-1">Please allow us to send you emails by agreeing to the policy.</p>
                  )}
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

          {/* GOOGLE MAPS */}
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