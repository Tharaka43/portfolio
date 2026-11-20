"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { ArrowUpRight, Cpu, CheckCircle2, ExternalLink, Layers, Sparkles } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Enterprise Software", "EdTech & AI Platforms"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#050505] px-5 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">
                02 // Product Portfolio
              </span>
              <div className="h-[1px] w-12 bg-[#bf953f]/30" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              PROPRIETARY PRODUCTS.<br />
              <span className="text-gradient-gold">ENGINEERED VALUE.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/5 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#bf953f] text-black font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((project, idx) => {
              const primaryScreenshot = project.screenshots[0];

              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 bg-[#090909] relative overflow-hidden group hover:border-[#bf953f]/40 transition-all duration-500 shadow-2xl"
                >
                  {/* Card background ambient glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#bf953f]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#bf953f]/10 transition-all duration-700" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left: Product Information */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Meta Category & Status Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-[#bf953f]/10 border border-[#bf953f]/25 text-gradient-gold text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] sm:text-xs font-mono font-medium tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {project.status}
                          </span>
                        </div>

                        {/* Title and Tagline */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-tight group-hover:text-gray-100 transition-colors">
                          <Link href={`/products/${project.slug}`} className="hover:text-gradient-gold transition-colors">
                            {project.name}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-sm font-mono text-[#bf953f]/90 mb-4 tracking-wide">
                          {project.tagline}
                        </p>

                        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                          {project.shortDescription}
                        </p>

                        {/* Top Features */}
                        <div className="space-y-2 mb-6">
                          {project.features.slice(0, 3).map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                              <CheckCircle2 size={15} className="text-[#bf953f] shrink-0 mt-0.5" />
                              <span className="font-light">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-[10px] sm:text-xs font-medium rounded-lg bg-white/[0.04] text-gray-300 border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-2">
                        <Link
                          href={`/products/${project.slug}`}
                          className="px-6 py-3.5 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-xs font-bold tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(191,149,63,0.2)]"
                        >
                          <span>System Specs &amp; Gallery</span>
                          <ArrowUpRight size={15} />
                        </Link>

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3.5 border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2"
                          >
                            <span>Live Platform</span>
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <a
                            href="#contact"
                            className="px-5 py-3.5 border border-white/10 bg-white/[0.02] hover:border-[#bf953f]/40 text-gray-300 hover:text-white text-xs font-mono tracking-wider uppercase rounded-xl transition-all flex items-center gap-2"
                          >
                            <span>Request Demo</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Authentic Screenshot Card */}
                    <div className="lg:col-span-5">
                      <Link href={`/products/${project.slug}`} className="block group/img">
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group-hover/img:border-[#bf953f]/50 transition-all duration-500 shadow-2xl bg-black">
                          {primaryScreenshot ? (
                            <Image
                              src={primaryScreenshot.src}
                              alt={primaryScreenshot.alt}
                              fill
                              loading="eager"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                              className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#111]">
                              <Layers size={36} className="text-[#bf953f] mb-2" />
                              <p className="text-white text-sm font-bold uppercase">{project.name}</p>
                              <p className="text-gray-500 text-xs font-mono mt-1">Live Enterprise Deployment</p>
                            </div>
                          )}

                          {/* Overlay indicator */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover/img:opacity-40 transition-opacity" />

                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-gray-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                            <span className="truncate">{primaryScreenshot?.caption || "View System Architecture"}</span>
                            <span className="text-[#bf953f] shrink-0 ml-2">Inspect ↗</span>
                          </div>
                        </div>
                      </Link>

                      {/* Thumbnail Gallery Preview if multiple screenshots */}
                      {project.screenshots.length > 1 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.screenshots.map((shot, sIdx) => (
                            <Link
                              key={sIdx}
                              href={`/products/${project.slug}`}
                              className="relative aspect-video w-24 sm:w-28 rounded-lg overflow-hidden border border-white/10 hover:border-[#bf953f]/60 transition-all group/sub shrink-0"
                            >
                              <Image
                                src={shot.src}
                                alt={shot.alt}
                                fill
                                loading="eager"
                                sizes="120px"
                                className="object-cover group-hover/sub:scale-110 transition-transform duration-500"
                              />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}