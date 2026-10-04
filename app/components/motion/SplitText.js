"use client";
import { useMemo } from "react";
import { useInView } from "../../hooks/useInView";

// Word segmentation that also works for languages without spaces (ja, zh),
// so a heading in any locale still wraps naturally.
function segment(text) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "word" });
    return Array.from(seg.segment(text), (s) => s.segment);
  }
  return text.split(/(\s+)/);
}

/**
 * Splits text into masked words (or 3D-flipping chars) that ride up into
 * place when scrolled into view. Screen readers get the plain string.
 */
export default function SplitText({
  text,
  as: Tag = "span",
  mode = "words",
  delay = 0,
  stagger,
  className = "",
  ...props
}) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const parts = useMemo(() => {
    let i = 0;
    return segment(text).map((piece, key) => {
      if (/^\s+$/.test(piece)) return piece;
      if (mode === "chars") {
        return (
          <span key={key} className="inline-block whitespace-nowrap">
            {Array.from(piece).map((ch, k) => (
              <span key={k} className="split__inner" style={{ "--i": i++ }}>
                {ch}
              </span>
            ))}
          </span>
        );
      }
      return (
        <span key={key} className="split__word">
          <span className="split__inner" style={{ "--i": i++ }}>
            {piece}
          </span>
        </span>
      );
    });
  }, [text, mode]);

  return (
    <Tag
      ref={ref}
      className={`split ${mode === "chars" ? "split--chars" : ""} ${inView ? "is-in" : ""} ${className}`}
      style={{
        "--d": `${delay}ms`,
        ...(stagger != null && { "--stagger": `${stagger}ms` }),
      }}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{parts}</span>
    </Tag>
  );
}
