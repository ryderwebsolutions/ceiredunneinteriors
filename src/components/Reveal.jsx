import { useEffect, useRef, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const MOBILE_DELAY_SCALE = 0.68;
const MOBILE_DURATION_SCALE = 0.82;
const MOBILE_DISTANCE_SCALE = 0.86;

function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  duration = 860,
  distance = 22,
  easing = "cubic-bezier(0.2, 0.7, 0.2, 1)",
  style = {},
  threshold = 0.16,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold]);

  const effectiveDelay = isMobile ? Math.round(delay * MOBILE_DELAY_SCALE) : delay;
  const effectiveDuration = isMobile ? Math.max(560, Math.round(duration * MOBILE_DURATION_SCALE)) : duration;
  const effectiveDistance = isMobile ? Math.max(12, Math.round(distance * MOBILE_DISTANCE_SCALE)) : distance;

  return (
    <Tag
      ref={elementRef}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`.trim()}
      style={{
        transitionDelay: `${effectiveDelay}ms`,
        "--reveal-duration": `${effectiveDuration}ms`,
        "--reveal-distance": `${effectiveDistance}px`,
        "--reveal-easing": easing,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
