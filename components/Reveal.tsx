"use client";

import type { ReactNode } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

type RevealProps = {
  className?: string;
  children: ReactNode;
};

export function Reveal({ className = "", children }: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

