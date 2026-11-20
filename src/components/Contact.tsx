"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, ArrowUp, CheckCircle, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050505] px-5 sm:px-8 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] bg-[#bf953f]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">04 // Contact</span>
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
              Whether you need to architect a custom enterprise POS, a high-performance cloud dashboard, or scale an ambitious vision—I am open for collaborations and high-impact software roles.
            </p>

            {/* Quick Touch Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/94770000000" // Generic or customizable link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#bf953f]/40 active:scale-[0.99] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Fast Response</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">Direct via WhatsApp</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">↗</span>
              </a>

              {/* Direct Email Card */}
              <a
                href="mailto:contact@pathmadewa.com"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#bf953f]/40 active:scale-[0.99] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#bf953f]/10 text-[#bf953f]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Official Inquiries</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">contact@pathmadewa.com</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">↗</span>
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <MapPin size={16} className="text-[#bf953f] shrink-0" />
                <span className="text-xs text-gray-300 font-light">
                  Sri Lanka • Available Worldwide for Remote Projects
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
              Fill out the details below and I will respond to your transmission promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#bf953f]/10 border border-[#bf953f]/30 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={36} className="text-[#bf953f]" />
                <h5 className="text-base font-bold text-white uppercase tracking-wider">Message Received</h5>
                <p className="text-xs text-gray-300">Thank you for reaching out. I will get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#bf953f] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@enterprise.com"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#bf953f] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">Project Brief or Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, requirements, or proposed timeline..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-[#bf953f] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-xs font-bold tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(191,149,63,0.2)]"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Next-Level Mobile & Desktop Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white text-sm font-bold tracking-wider uppercase">
              A H T K Pathmadewa<span className="text-[#bf953f]">.</span>
            </p>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase mt-1">
              &copy; {new Date().getFullYear()} A H T K Pathmadewa. All Rights Reserved.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95"
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