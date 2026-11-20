"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-start lg:items-center pt-28 sm:pt-32 lg:pt-28 pb-16 bg-[#050505] overflow-hidden px-5 sm:px-8 md:px-12 lg:px-24">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#bf953f]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Center Video (Z-0) - Optimized for both Mobile & Desktop */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute bottom-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-[45%] w-[160vw] sm:w-[110vw] md:w-[80vw] h-[65vh] md:h-[120vh] z-0 pointer-events-none flex justify-center items-end md:items-center"
      >
        <video
          src="/gemini_generated_video_0ba9487d.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover md:object-contain opacity-55 md:opacity-90"
          style={{
            maskImage: "radial-gradient(ellipse 45% 50% at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 45% 50% at 50% 50%, black 40%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Content Container (Z-10 in front) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full mt-2 sm:mt-4 lg:mt-0">
        
        {/* Left Column (Text & Buttons) */}
        <div className="flex-1 w-full lg:w-[58%]">
          
          {/* Status Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-300 flex items-center gap-1.5">
              Available for Global Projects <Sparkles size={12} className="text-[#bf953f]" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[clamp(2.3rem,8vw,6.2rem)] leading-[0.95] font-extrabold tracking-tighter"
          >
            <span className="block text-white pb-1.5 drop-shadow-2xl">I ARCHITECT</span>
            <span className="block text-gradient-gold pb-1.5 drop-shadow-2xl">SCALABLE</span>
            <span className="block text-gradient-gold drop-shadow-2xl">SYSTEMS</span>
          </motion.h1>

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-300 uppercase tracking-widest font-semibold"
          >
            <span className="text-white">Full Stack Engineer</span>
            <span className="text-[#bf953f]">•</span>
            <span className="text-white">Tech Entrepreneur</span>
            <span className="text-[#bf953f]">•</span>
            <span className="text-gray-400">Co-founder @ 404Lab</span>
          </motion.div>

          <motion.p
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-5 sm:mt-7 text-gray-300 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-md bg-[#050505]/50 md:bg-transparent p-3 sm:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-transparent"
          >
            Turning ambitious concepts into enterprise-grade offline & cloud solutions. Where high-performance architecture meets luxury digital interfaces.
          </motion.p>

          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-xs font-bold tracking-widest uppercase rounded-xl sm:rounded-none hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(191,149,63,0.3)]"
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-4 border border-white/20 bg-black/60 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase rounded-xl sm:rounded-none hover:bg-white hover:text-black active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Column (Quote & Signature) - Hidden on Mobile */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden lg:flex flex-col items-end flex-1 mt-32 pointer-events-none"
        >
          <div className="text-right">
            <p className="text-gray-300 text-[10px] tracking-widest uppercase mb-4 max-w-[200px] leading-loose drop-shadow-md">
              &quot;Code is my craft.<br/>Impact is my goal.&quot;
            </p>
            <span className="text-4xl text-gray-200 drop-shadow-lg" style={{ fontFamily: "cursive, serif", opacity: 0.9 }}>
              A H T K Pathmadewa
            </span>
          </div>
        </motion.div>

      </div>

      {/* Floating Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-mono">Explore</span>
        <div className="w-[1.5px] h-3.5 bg-gradient-to-b from-[#bf953f] to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}