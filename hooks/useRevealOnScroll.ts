"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const optionsRef = useRef(options);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            break;
          }
        }
      },
      { threshold: 0.1, ...optionsRef.current },
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}

