"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, ArrowUp, CheckCircle, Copy } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const emailAddress = "contact@pathmadewa.dev";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's default email client with prefilled subject and body
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Brief:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 8000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#050505] px-5 sm:px-8 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] bg-[#bf953f]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">
            04 // Transmission
          </span>
          <div className="h-[1px] w-12 bg-[#bf953f]/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Pitch & Fast Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.08]">
              LET&apos;S BUILD<br />
              <span className="text-gradient-gold">SOMETHING ICONIC.</span>
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Whether you need to architect a custom enterprise POS, a high-performance offline desktop system, an AI platform, or scale an ambitious vision—I am open for collaborations and high-impact engineering roles.
            </p>

            {/* Quick Touch Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Verified Professional Network Card */}
              <a
                href="https://www.linkedin.com/in/tharaka-kumara-1a171b260/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#bf953f]/40 active:scale-[0.99] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0077b5]/15 text-[#0077b5]">
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Professional Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">Connect on LinkedIn</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">↗</span>
              </a>

              {/* Direct Email Card with One-Click Copy */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#bf953f]/40 transition-all">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <div className="p-2.5 rounded-lg bg-[#bf953f]/10 text-[#bf953f] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Official Inquiries</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">{emailAddress}</p>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-xs flex items-center gap-1.5 ml-2 shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <MapPin size={16} className="text-[#bf953f] shrink-0" />
                <span className="text-xs text-gray-300 font-light">
                  Sri Lanka • Available Worldwide for Remote Architecture & Engineering
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Transmission Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#090909] border border-white/10 shadow-2xl relative"
          >
            <h4 className="text-lg sm:text-xl font-bold uppercase text-white mb-2">Send a Message</h4>
            <p className="text-gray-400 text-xs mb-6 font-light">
              Send your project specifications or inquiry directly to my communication channel.
            </p>

            {sentNotice && (
              <div className="p-4 mb-4 rounded-xl bg-[#bf953f]/10 border border-[#bf953f]/30 flex items-center gap-3">
                <CheckCircle size={18} className="text-[#bf953f] shrink-0" />
                <p className="text-xs text-gray-200">
                  Opening your default mail client with your prefilled transmission. If it did not open, reach out directly at{" "}
                  <strong className="text-white">{emailAddress}</strong>.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#bf953f] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@enterprise.com"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#bf953f] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                  Project Brief or Inquiry
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your application requirements, target systems, or enterprise timeline..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#bf953f] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-xs font-bold tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(191,149,63,0.2)] cursor-pointer"
              >
                <Send size={14} />
                <span>Initiate Transmission</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Next-Level Footer with Socials & Back to Top */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white text-sm font-bold tracking-wider uppercase">
              A H T K Pathmadewa<span className="text-[#bf953f]">.</span>
            </p>
            <p className="text-gray-400 text-xs mt-0.5">
              Full Stack Software Engineer &amp; Product Creator
            </p>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase mt-2">
              &copy; {new Date().getFullYear()} A H T K Pathmadewa. All Rights Reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/Tharaka43"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#bf953f]/40 transition-all"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tharaka-kumara-1a171b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#bf953f]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100084303407024"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#bf953f]/40 transition-all"
              aria-label="Facebook Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} className="text-[#bf953f]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}