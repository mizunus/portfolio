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

export const metadata = {
  title: "Siddharth Dangarh — Senior Software Developer",
  description:
    "Senior Software Developer specializing in agentic AI platforms, cloud-native systems, and scalable software architecture.",
  keywords: [
    "Siddharth Dangarh",
    "Software Developer",
    "Senior Developer",
    "AI Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Django",
    "Cloud Architecture",
  ],
  authors: [
    {
      name: "Siddharth Dangarh",
      url: "https://portfolio.siddharthdangarh.com",
    },
  ],
  creator: "Siddharth Dangarh",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Siddharth Dangarh — Senior Software Developer",
    description:
      "Senior Software Developer specializing in agentic AI platforms, cloud-native systems, and scalable software architecture.",
    url: "https://portfolio.siddharthdangarh.com",
    siteName: "Siddharth Dangarh",
    images: [
      {
        url: "https://portfolio.siddharthdangarh.com/images/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Siddharth Dangarh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
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
