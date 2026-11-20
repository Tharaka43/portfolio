"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: "easeOut" as const };

  return (
    <section className="relative min-h-[100dvh] flex items-start lg:items-center pt-28 sm:pt-32 lg:pt-28 pb-12 sm:pb-16 bg-[#050505] overflow-hidden px-5 sm:px-8 md:px-12 lg:px-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#bf953f]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Center Video (Z-0) - Translucent Luxury Watermark Framing (විනිවිද පෙනෙන සේ මුළු මුහුණම පසුබිමෙන් පෙනෙන සේ සැකසීම) */}
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2 }}
        className="absolute top-[48%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[130vw] sm:w-[100vw] md:w-[80vw] h-[85vh] sm:h-[95vh] md:h-[120vh] z-0 pointer-events-none flex justify-center items-center"
      >
        <video
          src="/gemini_generated_video_0ba9487d.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain opacity-25 sm:opacity-45 md:opacity-85 transition-opacity duration-700"
          style={{
            /* Smooth radial mask to feather out all edges and the bottom 'N' icon seamlessly into pure black */
            maskImage: "radial-gradient(ellipse 42% 46% at 50% 45%, black 20%, rgba(0,0,0,0.5) 45%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 42% 46% at 50% 45%, black 20%, rgba(0,0,0,0.5) 45%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content Container (Z-10 in front) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full mt-1 sm:mt-4 lg:mt-0">
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 w-full lg:w-[58%]">
          {/* Status Badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ...transitionConfig }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 sm:mb-5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-300 flex items-center gap-1.5">
              Available for Global Projects <Sparkles size={12} className="text-[#bf953f]" />
            </span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, ...transitionConfig }}
            className="text-[clamp(2.2rem,7.5vw,6.2rem)] leading-[0.95] font-extrabold tracking-tighter"
          >
            <span className="block text-white pb-1 sm:pb-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">I ARCHITECT</span>
            <span className="block text-gradient-gold pb-1 sm:pb-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">SCALABLE</span>
            <span className="block text-gradient-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">SYSTEMS.</span>
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, ...transitionConfig }}
            className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold drop-shadow-md"
          >
            <span className="text-white">Full Stack Software Engineer</span>
            <span className="text-[#bf953f]">•</span>
            <span className="text-white">Product Creator</span>
            <span className="text-[#bf953f]">•</span>
            <span className="text-gray-400">Co-founder @ 404Lab</span>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, ...transitionConfig }}
            className="mt-4 sm:mt-6 text-gray-200 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,1)] font-light"
          >
            Building digital products that solve real-world problems. Specialized in offline-first enterprise architectures, real-time cloud synchronizations, and AI-powered learning engines.
          </motion.p>

          {/* Action Buttons: 2-column grid on mobile */}
          <motion.div
            initial={shouldReduceMotion ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, ...transitionConfig }}
            className="mt-6 sm:mt-9 grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none"
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
              className="w-full sm:w-auto px-4 sm:px-7 py-3.5 sm:py-4 border border-white/20 bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-xl sm:rounded-none hover:bg-white hover:text-black active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={14} className="shrink-0" />
            </a>
          </motion.div>
        </div>

        {/* Right Column (Quote & Signature) - Hidden on Mobile */}
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

      {/* Floating Scroll cue */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-widest text-gray-400 font-mono">Explore</span>
          <div className="w-[1.5px] h-3.5 bg-gradient-to-b from-[#bf953f] to-transparent rounded-full" />
        </motion.div>
      )}
    </section>
  );
}