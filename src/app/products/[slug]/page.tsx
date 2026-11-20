import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/data/products";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically generate all product routes for Hostinger Premium static export
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic SEO metadata per product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | A H T K PATHMADEWA",
    };
  }

  return {
    title: `${product.name} — Architecture & Case Study`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://pathmadewa.dev/products/${product.slug}/`,
    },
    openGraph: {
      title: `${product.name} | A H T K PATHMADEWA`,
      description: product.shortDescription,
      url: `https://pathmadewa.dev/products/${product.slug}/`,
      siteName: "A H T K PATHMADEWA Portfolio",
      images: [
        {
          url: product.screenshots[0]?.src || "/about-image.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "article",
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#bf953f] selection:text-black">
      <Navbar />

      {/* Hero Section of Product Page */}
      <section className="pt-32 sm:pt-40 pb-16 px-5 sm:px-8 md:px-12 lg:px-24 border-b border-white/5 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#bf953f]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb / Back Navigation */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Products</span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="px-3.5 py-1 rounded-full bg-[#bf953f]/10 border border-[#bf953f]/30 text-gradient-gold text-xs font-bold tracking-widest uppercase">
              {product.category}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {product.status}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
              {product.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-4">
            {product.name}
          </h1>

          <p className="text-base sm:text-xl font-mono text-[#bf953f] mb-6 max-w-3xl leading-relaxed">
            {product.tagline}
          </p>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl font-light mb-10">
            {product.shortDescription}
          </p>

          {/* Top CTA Row */}
          <div className="flex flex-wrap items-center gap-4">
            {product.liveUrl && (
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-xs font-bold tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(191,149,63,0.3)]"
              >
                <span>Launch Live Platform</span>
                <ExternalLink size={15} />
              </a>
            )}

            <Link
              href="/#contact"
              className="px-6 py-3.5 border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2"
            >
              <span>Request System Demo / Architecture Review</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Product Content */}
      <section className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Architecture Metrics Grid */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2 font-semibold">
              <Cpu size={16} className="text-[#bf953f]" />
              <span>Architectural Specifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#bf953f]/30 transition-all"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">
                    {m.label}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Solved & Target Market */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#090909] border border-white/10">
              <h2 className="text-lg sm:text-xl font-bold uppercase text-white mb-4 flex items-center gap-2">
                <Target size={18} className="text-[#bf953f]" />
                <span>The Problem It Solves</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                {product.problemSolved}
              </p>
              <h3 className="text-sm font-bold uppercase text-white mb-2">Target Deployments</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-mono leading-relaxed">
                {product.targetMarket}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#090909] border border-white/10">
              <h2 className="text-lg sm:text-xl font-bold uppercase text-white mb-4 flex items-center gap-2">
                <Layers size={18} className="text-[#bf953f]" />
                <span>Verified Tech Stack</span>
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {product.architectureOverview}
              </p>
            </div>
          </div>

          {/* Genuine Screenshots Gallery */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#bf953f] tracking-widest uppercase">
                Visual Proof // Authentic Application UI
              </span>
              <div className="h-[1px] w-12 bg-[#bf953f]/30" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-8">
              SYSTEM SCREENSHOTS &amp; INTERFACES
            </h2>

            <div className="space-y-12">
              {product.screenshots.map((shot, idx) => (
                <figure
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#090909] shadow-2xl"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="p-4 sm:p-6 bg-[#0a0a0a] border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm text-gray-300 font-mono">
                      <span className="text-[#bf953f] font-bold mr-2">#{idx + 1}</span>
                      {shot.caption}
                    </p>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 bg-white/5 px-2.5 py-1 rounded">
                      Verified UI Asset
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#090909] border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-white mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#bf953f]" />
              <span>Full System Feature Matrix</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <CheckCircle2 size={16} className="text-[#bf953f] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121008] to-[#0a0a0a] border border-[#bf953f]/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mb-2">
                Need a Similar Architecture for Your Business?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm max-w-xl font-light">
                Consult with A H T K Pathmadewa for custom POS systems, hardware licensing, offline-first architectures, or educational AI platforms.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/#contact"
                className="px-7 py-4 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black text-xs font-bold tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Initiate Inquiry</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#050505] border-t border-white/5 text-center px-6">
        <p className="text-gray-500 text-xs tracking-widest uppercase font-mono">
          &copy; {new Date().getFullYear()} A H T K Pathmadewa. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}