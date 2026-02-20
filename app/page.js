import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.siddharthdangarh.com/#website",
        url: "https://www.siddharthdangarh.com",
        name: "Siddharth Dangarh - Senior Software Developer",
        description:
          "Portfolio of Siddharth Dangarh, a Senior Software Developer specializing in agentic AI platforms, cloud-native architecture, and scalable full-stack systems.",
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://www.siddharthdangarh.com/#person",
        name: "Siddharth Dangarh",
        url: "https://www.siddharthdangarh.com",
        jobTitle: "Senior Software Developer",
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
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.siddharthdangarh.com/#webpage",
        url: "https://www.siddharthdangarh.com",
        name: "Siddharth Dangarh - Senior Software Developer",
        isPartOf: {
          "@id": "https://www.siddharthdangarh.com/#website",
        },
        about: {
          "@id": "https://www.siddharthdangarh.com/#person",
        },
        description:
          "Portfolio of Siddharth Dangarh, a Senior Software Developer in Bengaluru specializing in agentic AI platforms, cloud-native architecture, and scalable full-stack systems.",
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
      <Navbar />
      <main>
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
