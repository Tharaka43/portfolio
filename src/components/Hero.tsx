"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: "easeOut" as const };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between lg:flex-row lg:items-center pt-20 sm:pt-28 lg:pt-28 pb-10 sm:pb-12 lg:pb-16 bg-[#050505] overflow-hidden px-5 sm:px-8 md:px-12 lg:px-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#bf953f]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* DESKTOP Center Video (Z-0) - Only shown as background layer on lg+ screens */}
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2 }}
        className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[80vw] h-[120vh] z-0 pointer-events-none justify-center items-center"
      >
        <video
          src="/gemini_generated_video_0ba9487d.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain opacity-85"
          style={{
            maskImage:
              "radial-gradient(ellipse 45% 50% at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 45% 50% at 50% 50%, black 40%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Content Container (Z-10 in front) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between flex-1">
        {/* Left Column (Text, Buttons, Mobile Video Stage & Metrics) */}
        <div className="flex-1 w-full lg:w-[60%] flex flex-col justify-between h-full">
          <div>
            {/* Status Badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, ...transitionConfig }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3.5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-300 flex items-center gap-1.5">
                Available for Global Projects <Sparkles size={12} className="text-[#bf953f]" />
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, ...transitionConfig }}
              className="text-[clamp(2.3rem,7.8vw,6.2rem)] leading-[0.94] font-extrabold tracking-tighter"
            >
              <span className="block text-white pb-1">I ARCHITECT</span>
              <span className="block text-gradient-gold pb-1">SCALABLE</span>
              <span className="block text-gradient-gold">SYSTEMS.</span>
            </motion.h1>

            {/* Identity Subtitle */}
            <motion.div
              initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, ...transitionConfig }}
              className="mt-3 sm:mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold"
            >
              <span className="text-white">Full Stack Software Engineer</span>
              <span className="text-[#bf953f]">•</span>
              <span className="text-white">Product Creator</span>
              <span className="text-[#bf953f]">•</span>
              <span className="text-gray-400">Co-founder @ 404Lab</span>
            </motion.div>

            {/* Clean Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, ...transitionConfig }}
              className="mt-2.5 sm:mt-5 text-gray-300 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed font-light"
            >
              Building digital products that solve real-world problems. Specialized in offline-first enterprise architectures, real-time cloud synchronizations, and AI-powered learning engines.
            </motion.p>

            {/* Action Buttons: 2-column grid on mobile */}
            <motion.div
              initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, ...transitionConfig }}
              className="mt-4 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none relative z-20"
            >
              <a
                href="#products"
                className="w-full sm:w-auto px-4 sm:px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-xl sm:rounded-none hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(191,149,63,0.3)] cursor-pointer text-center"
              >
                <span>Explore Products</span>
                <ArrowUpRight size={14} className="shrink-0" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-4 sm:px-7 py-3.5 sm:py-4 border border-white/20 bg-white/[0.03] backdrop-blur-md text-white text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-xl sm:rounded-none hover:bg-white hover:text-black active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={14} className="shrink-0" />
              </a>
            </motion.div>
          </div>

          {/* MOBILE & TABLET DEDICATED CHARACTER VIDEO STAGE (Full head visible, smooth edges, zero clipping) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: shouldReduceMotion ? 0 : 1 }}
            className="relative lg:hidden w-full h-[275px] sm:h-[340px] my-1 flex justify-center items-center overflow-hidden pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 7%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 7%, black 88%, transparent 100%)",
            }}
          >
            {/* Subtle warm gold aura behind the character */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(191,149,63,0.16),transparent_60%)]" />
            <video
              src="/gemini_generated_video_0ba9487d.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-auto max-w-none object-contain opacity-95 contrast-110 brightness-95"
              style={{
                maskImage:
                  "radial-gradient(ellipse 36% 56% at 50% 44%, black 55%, rgba(0,0,0,0.5) 76%, transparent 94%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 36% 56% at 50% 44%, black 55%, rgba(0,0,0,0.5) 76%, transparent 94%)",
              }}
            />
          </motion.div>

          {/* High-Impact Proof Matrix: Anchors bottom of Hero section */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, ...transitionConfig }}
            className="relative z-20 -mt-2 lg:mt-10 pt-3 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg"
          >
            <div className="p-3 rounded-xl bg-[#0b0b0b]/90 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-1.5 text-[#bf953f] mb-1">
                <Cpu size={13} />
                <span className="text-base sm:text-xl font-extrabold text-gradient-gold">6+</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400">
                Flagship Systems
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0b0b0b]/90 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                <Zap size={13} />
                <span className="text-base sm:text-xl font-extrabold text-white">Dual</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400">
                Offline + Cloud
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0b0b0b]/90 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-1.5 text-[#bf953f] mb-1">
                <ShieldCheck size={13} />
                <span className="text-base sm:text-xl font-extrabold text-white">404Lab</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400">
                Co-Founder
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Quote & Signature) - Desktop Only */}
        <motion.div
          initial={shouldReduceMotion ? false : { x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, ...transitionConfig }}
          className="hidden lg:flex flex-col items-end flex-1 mt-32 pointer-events-none"
        >
          <div className="text-right">
            <p className="text-gray-300 text-[10px] tracking-widest uppercase mb-4 max-w-[200px] leading-loose drop-shadow-md">
              &quot;Code is my craft.<br />Impact is my goal.&quot;
            </p>
            <span
              className="text-4xl text-gray-200 drop-shadow-lg"
              style={{ fontFamily: "cursive, serif", opacity: 0.9 }}
            >
              A H T K Pathmadewa
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
