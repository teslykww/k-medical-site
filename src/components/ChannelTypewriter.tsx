"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { channelLabels } from "@/content/site";
import styles from "./site.module.css";

export function ChannelTypewriter() {
  const reduceMotion = useReducedMotion();
  const fullText = channelLabels.join("  /  ");
  const [length, setLength] = useState(0);
  const visibleLength = reduceMotion ? fullText.length : length;

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setLength((value) => {
        if (value >= fullText.length) {
          window.clearInterval(timer);
          return value;
        }
        return value + 2;
      });
    }, 18);

    return () => window.clearInterval(timer);
  }, [fullText, reduceMotion]);

  return (
    <p className={styles.channelTypewriter} aria-label={channelLabels.join(", ")}>
      <span aria-hidden>{fullText.slice(0, visibleLength)}</span>
      {visibleLength < fullText.length ? <span className={styles.typeCursor} aria-hidden /> : null}
    </p>
  );
}
