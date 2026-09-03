"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

export function PerspectiveCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-3.2, 3.2]), { stiffness: 160, damping: 22 });
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [3.2, -3.2]), { stiffness: 160, damping: 22 });

  function updatePointer(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  }

  function resetPointer() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.div
      className={className}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
    >
      {children}
    </motion.div>
  );
}
