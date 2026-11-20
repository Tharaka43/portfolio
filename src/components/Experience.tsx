"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Server, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend & Mobile",
    icon: Code2,
    skills: ["React", "Next.js", "Tailwind CSS", "Flutter", "TypeScript", "Vite", "Inertia.js"]
  },
  {
    category: "Backend & Systems",
    icon: Server,
    skills: ["Laravel", "Java Spring Boot", "Python", "FastAPI", "RESTful APIs"]
  },
  {
    category: "Database & Cloud Architecture",
    icon: Database,
    skills: ["MySQL", "Firebase", "Isar Local DB", "Multi-Tenant Architectures"]
  },
  {
    category: "Hardware & Edge AI",
    icon: Cpu,
    skills: ["OpenCV", "Machine Learning", "Raspberry Pi", "ESP32", "Arduino"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0a0a0a] px-5 sm:px-8 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">03 // Background</span>
          <div className="h-[1px] w-12 bg-[#bf953f]/30" />
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 uppercase tracking-tight">
          TECHNICAL ARSENAL &<br/>
          <span className="text-gradient-gold">PROFESSIONAL TRACK.</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Technical Arsenal (Interactive Chips) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 space-y-6"
          >
            <h4 className="text-xl font-bold uppercase text-white flex items-center gap-2 mb-6">
              <span>Core Stack Matrix</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bf953f]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="p-2 rounded-lg bg-[#bf953f]/10 text-[#bf953f]">
                        <Icon size={16} />
                      </div>
                      <h5 className="text-xs uppercase font-mono tracking-wider text-gray-200 font-bold">
                        {cat.category}
                      </h5>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[10px] sm:text-[11px] font-medium rounded-md bg-white/[0.04] text-gray-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Right Column: Experience & Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5"
          >
            <h4 className="text-xl font-bold uppercase text-white flex items-center gap-2 mb-6">
              <span>Experience & Milestone</span>
            </h4>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
              
              {/* Item 1 */}
              <div className="relative group">
                {/* Glowing Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] shadow-[0_0_12px_#bf953f]" />
                
                <span className="text-[10px] font-mono tracking-widest text-[#bf953f] uppercase font-bold">
                  2022 - Present
                </span>
                <h5 className="text-base sm:text-lg font-bold text-white mt-1">
                  Co-Founder & Software Engineer
                </h5>
                <p className="text-xs text-gray-400 font-mono">Pathmadewa Solution</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                  Directing software architectural design, lifecycle, and end-to-end development of proprietary solutions including Nexo POS and Resto Systems.
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white/20 border border-white/40" />
                
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
                  2018 - 2022
                </span>
                <h5 className="text-base sm:text-lg font-bold text-white mt-1">
                  Software Specialist
                </h5>
                <p className="text-xs text-gray-400 font-mono">Asian Group</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                  Contributed to enterprise business software and digital operational workflows.
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative group pt-2">
                <div className="absolute -left-[31px] sm:-left-[39px] top-3.5 w-3.5 h-3.5 rounded-full bg-white/20 border border-white/40" />
                
                <span className="text-[10px] font-mono tracking-widest text-[#bf953f] uppercase font-semibold">
                  Academic Degree
                </span>
                <h5 className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-2">
                  <GraduationCap size={16} className="text-[#bf953f]" />
                  <span>BEng (Hons) in Software Engineering</span>
                </h5>
                <p className="text-xs text-gray-400 font-mono">Java Institute for Advanced Technology (2026)</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}