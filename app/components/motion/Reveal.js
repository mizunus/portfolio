"use client";
import { useInView } from "../../hooks/useInView";

/**
 * Fades/slides its children in the first time they scroll into view.
 * Variants (see globals.css): up | blur | left | clip | scale.
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}) {
  const [ref, inView] = useInView({ threshold: 0.12 });

  // IntersectionObserver measures the clipped box, so a clip reveal would
  // never "enter" view. Observe an unclipped wrapper and clip the inside.
  if (variant === "clip") {
    return (
      <Tag ref={ref} className={className} style={style} {...props}>
        <div
          data-reveal="clip"
          className={`h-full rounded-[inherit] ${inView ? "is-in" : ""}`}
          style={{ "--d": `${delay}ms` }}
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`${inView ? "is-in " : ""}${className}`}
      style={{ "--d": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
