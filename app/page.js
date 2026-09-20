import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Ambient from "./components/Ambient";

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
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 overflow-x-hidden">
      <JsonLd />
      <Ambient />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
