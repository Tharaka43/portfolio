import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pathmadewa.dev"),
  title: {
    default: "A H T K PATHMADEWA — Full Stack Software Engineer & Product Creator",
    template: "%s | A H T K PATHMADEWA",
  },
  description:
    "Official portfolio of A H T K PATHMADEWA. Full Stack Software Engineer and Product Creator specializing in offline-first enterprise architectures (NEXO POS), zero-latency systems, and educational AI platforms.",
  keywords: [
    "A H T K PATHMADEWA",
    "Tharaka Kumara Pathmadewa",
    "Pathmadewa",
    "Full Stack Software Engineer",
    "Product Creator",
    "System Architect",
    "NEXO POS",
    "NexoPlay Game Cafe",
    "Resto Restaurant Management",
    "KoreanGuru",
    "NihongoGuru",
    "EnglishGuru",
    "Next.js App Router",
    "Flutter Desktop",
    "Offline-First Architecture",
    "Sri Lanka Software Engineer",
  ],
  authors: [{ name: "A H T K PATHMADEWA", url: "https://pathmadewa.dev" }],
  creator: "A H T K PATHMADEWA",
  publisher: "A H T K PATHMADEWA",
  alternates: {
    canonical: "https://pathmadewa.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pathmadewa.dev",
    siteName: "A H T K PATHMADEWA",
    title: "A H T K PATHMADEWA — Full Stack Software Engineer & Product Creator",
    description:
      "Architecting scalable offline-first desktop systems, real-time cloud synchronizations, and interactive educational platforms.",
    images: [
      {
        url: "/about-image.jpg",
        width: 1200,
        height: 630,
        alt: "A H T K PATHMADEWA — Full Stack Software Engineer & Product Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A H T K PATHMADEWA — Full Stack Software Engineer & Product Creator",
    description:
      "Architecting scalable offline-first systems, real-time cloud synchronizations, and interactive educational platforms.",
    images: ["/about-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#bf953f] selection:text-black">
        {children}
      </body>
    </html>
  );
}