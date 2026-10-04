import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Ambient from "./components/Ambient";
import Intro from "./components/Intro";
import Marquee from "./components/motion/Marquee";
import SmoothScroll from "./components/motion/SmoothScroll";
import Cursor from "./components/motion/Cursor";
import { LanguageProvider } from "./i18n/LanguageProvider";

const STACK = ["Python", "Django", "Next.js", "React", "Node.js", "AWS", "Azure", "Postgres", "Redis", "LLMs"];
const CRAFT = ["Commerce Platforms", "Agentic AI", "Cloud Architecture", "Systems That Ship"];

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.siddharthdangarh.com/#website",
        url: "https://www.siddharthdangarh.com",
        name: "Siddharth Dangarh - Lead Software Engineer",
        description:
          "Portfolio of Siddharth Dangarh, a Lead Software Engineer who builds production commerce platforms, cloud-native architecture, and scalable full-stack systems.",
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://www.siddharthdangarh.com/#person",
        name: "Siddharth Dangarh",
        url: "https://www.siddharthdangarh.com",
        jobTitle: "Lead Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Saara Inc.",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Python",
          "Django",
          "Next.js",
          "React",
          "Node.js",
          "AWS",
          "Azure",
          "Artificial Intelligence",
          "Cloud Architecture",
          "Full Stack Development",
        ],
        sameAs: [
          "https://in.linkedin.com/in/siddharth-dangarh-a896b61a7",
          "https://discuvr.in",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.siddharthdangarh.com/#webpage",
        url: "https://www.siddharthdangarh.com",
        name: "Siddharth Dangarh - Lead Software Engineer",
        isPartOf: {
          "@id": "https://www.siddharthdangarh.com/#website",
        },
        about: {
          "@id": "https://www.siddharthdangarh.com/#person",
        },
        description:
          "Portfolio of Siddharth Dangarh, a Lead Software Engineer in Bengaluru who builds production commerce platforms, cloud-native architecture, and scalable full-stack systems.",
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen bg-canvas text-fg-soft overflow-x-clip">
      <JsonLd />
      <Intro />
      <SmoothScroll />
      <Cursor />
      <Ambient />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="relative py-10 -rotate-2 scale-105 border-y border-line bg-canvas/60 backdrop-blur-sm">
          <Marquee items={STACK} />
          <Marquee items={CRAFT} reverse outline />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      </div>
    </LanguageProvider>
  );
}
