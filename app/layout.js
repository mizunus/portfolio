import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.siddharthdangarh.com";
const FULL_NAME = "Siddharth Dangarh";
const TITLE = `${FULL_NAME} - Lead Software Engineer`;
const DESCRIPTION =
  "Siddharth Dangarh is a Lead Software Engineer in Bengaluru who builds and ships production systems - commerce platforms, cloud-native backends and AI features. Python, Django, Next.js, React, AWS. Available for freelance and consulting work.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Siddharth Dangarh",
    "Siddharth Dangarh portfolio",
    "Lead Software Engineer",
    "Lead Software Engineer Bengaluru",
    "AI consultant India",
    "freelance AI developer",
    "AI Developer",
    "Full Stack Developer",
    "E-commerce SaaS",
    "Backend Engineer",
    "Agentic AI",
    "Cloud Architecture",
    "Python Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "AWS",
    "Azure",
    "Software Architect",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/portfolio-logo-icon.png",
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: FULL_NAME,
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - Lead Software Engineer Portfolio`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "color-scheme": "light dark",
  },
};

export const viewport = {
  themeColor: "#f6f5f1",
};

// Runs before first paint: applies the saved theme (light unless the visitor
// chose dark), tags <html class="js"> so reveal styles can hide content safely,
// and skips the intro curtain after the first view in a session.
const BOOT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("theme");d.dataset.theme=t==="dark"?"dark":"light";if(sessionStorage.getItem("intro-seen"))d.classList.add("intro-seen");else sessionStorage.setItem("intro-seen","1")}catch(e){d.dataset.theme="light"}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
