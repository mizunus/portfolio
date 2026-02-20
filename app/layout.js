import { Geist, Geist_Mono } from "next/font/google";
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
const TITLE = `${FULL_NAME} - Senior Software Developer`;
const DESCRIPTION =
  "Portfolio of Siddharth Dangarh, a Senior Software Developer in Bengaluru specializing in agentic AI platforms, cloud-native architecture (AWS, Azure), Python, Django, Next.js, and scalable full-stack systems.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Siddharth Dangarh",
    "Siddharth Dangarh portfolio",
    "Senior Software Developer",
    "Senior Software Developer Bengaluru",
    "AI Developer",
    "Full Stack Developer",
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
        url: "/images/preview.jpeg",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - Senior Software Developer Portfolio`,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/preview.jpeg"],
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
    "theme-color": "#0a0a0f",
    "color-scheme": "dark",
    "google-site-verification": "REPLACE_WITH_YOUR_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
