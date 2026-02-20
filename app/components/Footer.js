export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <span>
          &copy; {new Date().getFullYear()} Siddharth Dangarh. All rights reserved.
        </span>
        <nav aria-label="Footer links" className="flex gap-6">
          <a
            href="https://in.linkedin.com/in/siddharth-dangarh-a896b61a7"
            target="_blank"
            rel="me noopener noreferrer"
            className="hover:text-slate-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:siddharthdangarh872@gmail.com"
            className="hover:text-slate-400 transition-colors duration-200"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
