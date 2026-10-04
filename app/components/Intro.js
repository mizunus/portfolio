const NAME = "Siddharth Dangarh";

/**
 * First-visit curtain: the name rises letter by letter, a rule draws across,
 * then the panel lifts away. Entirely CSS-driven (see .intro in globals.css)
 * and skipped for the rest of the session via <html class="intro-seen">.
 */
export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="flex flex-col items-center">
        <div className="intro__name">
          {Array.from(NAME).map((ch, i) => (
            <span key={i} className="intro__char" style={{ "--i": i }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </div>
        <div className="intro__bar" />
      </div>
    </div>
  );
}
