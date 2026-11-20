"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Co-Founder", value: "404Lab", icon: Sparkles },
    { label: "Flagship Systems", value: "2+", icon: Cpu },
    { label: "Engineering", value: "Full Stack", icon: Code2 },
    { label: "Architecture", value: "Offline & Cloud", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0a0a0a] px-5 sm:px-8 md:px-12 lg:px-24 border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* Background subtle light */}
      <div className="absolute top-1/2 -right-24 w-72 h-72 bg-[#bf953f]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex-1 w-full"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">01 // Identity</span>
            <div className="h-[1px] w-12 bg-[#bf953f]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter leading-[1.08]">
            <span className="block text-white pb-1 sm:pb-2">I DON&apos;T JUST WRITE CODE.</span>
            <span className="block text-gradient-gold">I BUILD WHAT&apos;S NEXT.</span>
          </h2>
          
          <p className="text-gray-300 leading-relaxed mt-6 sm:mt-8 text-sm md:text-base max-w-2xl font-light">
            I am <strong className="text-white font-semibold">A H T K Pathmadewa</strong>, a Full Stack Software Engineer and Tech Entrepreneur specialized in building robust, scalable, and industry-specific software solutions. With a strong foundation in modern frameworks and architecture, I focus on delivering end-to-end digital products—from offline-first desktop applications to real-time cloud dashboards.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4 text-sm md:text-base max-w-2xl font-light">
            As the Co-founder of 404Lab and Lead Developer of Pathmadewa Solution, I architect and develop systems that streamline complex business operations, ensuring high performance, security, and seamless user experiences.
          </p>

          {/* Next Level Mobile Stat Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10 max-w-3xl">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#bf953f]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">{s.label}</span>
                    <Icon size={14} className="text-[#bf953f]" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{s.value}</h4>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="w-full sm:w-[380px] lg:w-[440px] relative mt-4 lg:mt-0 flex-shrink-0 flex justify-center group"
        >
          {/* Gold Offset Frame Background */}
          <div className="absolute inset-0 border-2 border-[#bf953f]/80 -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4 z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 rounded-xl" />
          
          {/* Inner Image Container */}
          <div className="relative z-10 bg-[#050505] p-2 w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
             <img 
               src="/about-image.jpg" 
               alt="A H T K Pathmadewa"
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg"
             />

             {/* Floating Badge on Image */}
             <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between">
                <div>
                   <p className="text-[10px] uppercase font-mono tracking-widest text-[#bf953f]">Role</p>
                   <p className="text-xs font-bold text-white uppercase">Co-Founder & System Architect</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}