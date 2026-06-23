"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  direction = "up",
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier easeOutExpo
      });
      return controls.stop;
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}
