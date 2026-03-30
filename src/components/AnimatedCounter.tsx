import { useEffect, useState, useRef } from 'react';

interface Props {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedCounter = ({ value, className = '', style }: Props) => {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateValue = () => {
    // Extract the numeric part and the suffix (e.g., "30%" -> 30, "%")
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2]; // e.g., "%", "K+", "M+", "×"
    const prefix = value.match(/^([^\d]*)/)?.[1] || ''; // e.g., "$"
    const cleanMatch = value.match(/^([^\d]*)([\d.]+)(.*)$/);

    if (!cleanMatch) {
      setDisplay(value);
      return;
    }

    const pre = cleanMatch[1];
    const num = parseFloat(cleanMatch[2]);
    const suf = cleanMatch[3];
    const isDecimal = cleanMatch[2].includes('.');
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;

      if (isDecimal) {
        setDisplay(`${pre}${current.toFixed(1)}${suf}`);
      } else {
        setDisplay(`${pre}${Math.floor(current)}${suf}`);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    setDisplay(`${pre}0${suf}`);
    requestAnimationFrame(step);
  };

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
};

export default AnimatedCounter;
