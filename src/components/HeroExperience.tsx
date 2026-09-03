"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./site.module.css";

const moments = ["Новый пациент", "Доверие", "Повторный визит"];

export function HeroExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.heroExperience}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.975, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src="/images/hero-system-v2.webp"
        alt="Абстрактная система, в которой путь пациента проходит через последовательные точки контакта"
        fill
        fetchPriority="high"
        loading="eager"
        sizes="(max-width: 767px) 100vw, 54vw"
      />
      <div className={styles.heroGlass} aria-hidden />
      <div className={styles.heroMomentStack}>
        {moments.map((moment, index) => (
          <motion.span
            key={moment}
            initial={reduceMotion ? false : { opacity: 0, x: 18, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.45, delay: 0.48 + index * 0.13 }}
          >
            {moment}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
