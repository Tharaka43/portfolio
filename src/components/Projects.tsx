"use client";
import { motion } from "framer-motion";
import { Layers, ShieldAlert, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "NEXO POS SYSTEM",
    subtitle: "OFFLINE-FIRST RETAIL SOLUTION",
    role: "Lead Developer & Creator",
    target: "Supermarkets, Pharmacies, Hardware Stores & Boutiques",
    description: "A dual-component architecture featuring an Offline-First Desktop App (Flutter/Isar) and a Real-Time Cloud Dashboard (Next.js/Firebase). Engineered for uninterrupted retail operation.",
    features: [
      "Rapid barcode billing & GRN inventory with low-stock alerts",
      "Hardware-Locked DRM Security (tied to Motherboard Serial)",
      "Real-time cloud sync for live net profit & remote analytics",
      "Comprehensive customer credit & daily expenses tracking"
    ],
    stack: ["Flutter", "Isar DB", "Next.js", "Firebase", "Desktop DRM"],
    metrics: [
      { label: "Architecture", value: "Offline-First Dual Mode" },
      { label: "Security", value: "Motherboard DRM Locked" },
      { label: "Sync Engine", value: "Real-time Firebase Cloud" }
    ]
  },
  {
    title: "RESTO",
    subtitle: "RESTAURANT MANAGEMENT SYSTEM",
    role: "Lead Developer & Creator",
    target: "Fine Dining, Cafes & Food Chains",
    description: "A comprehensive end-to-end management solution tailored specifically for the food service industry, seamlessly bridging the gap between front-of-house hospitality and kitchen operations.",
    features: [
      "Intuitive POS billing & dynamic table reservation management",
      "Real-time Kitchen Display System (KDS) for chef order queues",
      "Precise ingredient-level stock control & daily wastage logging",
      "Role-based PIN login for Cashiers, Waiters, and Chefs"
    ],
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS", "KDS Engine"],
    metrics: [
      { label: "Platforms", value: "Web & POS Tablet Optimized" },
      { label: "Order Flow", value: "Zero-Latency KDS Sync" },
      { label: "Access Control", value: "Multi-Role PIN Security" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#050505] px-5 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">02 // Selected Works</span>
          <div className="h-[1px] w-12 bg-[#bf953f]/30" />
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 uppercase tracking-tight">
          PROPRIETARY PRODUCTS.<br/>
          <span className="text-gradient-gold">ENGINEERED VALUE.</span>
        </h3>

        <div className="space-y-10 sm:space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
              className="border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#090909] relative overflow-hidden group hover:border-[#bf953f]/30 transition-all duration-500 shadow-2xl"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#bf953f]/10 transition-all duration-700" />

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
                
                {/* Left project details */}
                <div className="flex-1">
                  
                  {/* Category Tag & Index */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#bf953f]/10 border border-[#bf953f]/20 text-gradient-gold text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                      {`0${idx + 1} // ${project.subtitle}`}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase">{project.role}</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-tight">
                    {project.title}
                  </h4>
                  
                  <p className="text-[11px] sm:text-xs text-gray-400 uppercase font-mono tracking-wider mb-4">
                    Market: <span className="text-gray-300">{project.target}</span>
                  </p>

                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base mb-6 font-light">
                    {project.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="mb-6 space-y-2.5">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-semibold">Core Architecture Highlights</p>
                    {project.features.map((feature, i) => (
                      <div key={i} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#bf953f] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white/[0.04] border border-white/10 rounded-lg text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Architecture Metrics (Mobile Optimized) */}
                <div className="lg:w-[340px] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-[#bf953f]" />
                    <p className="text-[11px] text-gray-400 uppercase tracking-widest font-mono font-semibold">
                      System Metrics
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {project.metrics.map(metric => (
                      <div key={metric.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest font-mono">{metric.label}</span>
                        <span className="text-white text-xs sm:text-sm font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs text-[#bf953f] font-semibold tracking-wider uppercase">
                      <span>Enterprise Ready Architecture</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}