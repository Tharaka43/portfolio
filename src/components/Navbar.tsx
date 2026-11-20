"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", num: "01" },
    { name: "Projects", href: "#projects", num: "02" },
    { name: "Experience", href: "#experience", num: "03" },
    { name: "Contact", href: "#contact", num: "04" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 md:px-12 py-4 md:py-6 ${
          scrolled || isOpen
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
            >
              <path
                d="M4 6 L36 6 L32 16 L24 16 L24 36 L16 36 L16 16 L8 16 Z"
                fill="url(#navbarLogoGradient)"
              />
              <defs>
                <linearGradient
                  id="navbarLogoGradient"
                  x1="0"
                  y1="0"
                  x2="40"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#bf953f" />
                  <stop offset="0.5" stopColor="#fcf6ba" />
                  <stop offset="1" stopColor="#aa771c" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-white font-bold tracking-[0.15em] uppercase text-sm sm:text-base md:text-lg mt-0.5">
              A H T K Pathmadewa<span className="text-[#bf953f]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 border border-[#bf953f]/40 bg-gradient-to-r from-[#bf953f]/10 to-transparent rounded-full text-white text-xs font-semibold tracking-widest uppercase hover:border-[#bf953f] hover:bg-[#bf953f] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(191,149,63,0.15)]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Hamburger & Quick CTA */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 border border-[#bf953f]/40 bg-[#bf953f]/10 rounded-full text-white text-[11px] font-bold tracking-wider uppercase"
            >
              Talk
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-white bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={20} className="text-[#bf953f]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 md:hidden overflow-y-auto"
          >
            {/* Status indicator on top of mobile menu */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-gray-300">
                Available for New Projects
              </span>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-bold tracking-tight text-gray-200 active:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#bf953f]">{link.num}</span>
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-gray-500" />
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact actions in mobile drawer */}
            <div className="pt-8 mt-6 border-t border-white/10 space-y-3">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">
                Direct Connection
              </p>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare size={16} />
                Start a Conversation
              </a>
              <div className="flex gap-2">
                <a
                  href="mailto:contact@pathmadewa.com"
                  className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2"
                >
                  <Mail size={14} className="text-[#bf953f]" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}