"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./site.module.css";

const stories = [
  {
    label: "Привлечение",
    title: "Новые пациенты",
    text: "Подключаем спрос на выбранные услуги и ведём пациента к понятной точке обращения.",
  },
  {
    label: "Доверие",
    title: "Почему пациенты выбирают именно вашу клинику и врача",
    text: "Помогаем сравнить предложение, увидеть сильных специалистов и принять решение о записи.",
  },
  {
    label: "Возврат",
    title: "Повторные обращения и работа с базой",
    text: "Возвращаем пациентов к уместному следующему шагу и не оставляем базу без внимания.",
  },
];

export function MarketingStoryStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.storyFlow}>
      <div className={styles.storySequence}>
        {stories.map((story, index) => (
          <div className={styles.storySequenceItem} key={story.title}>
            <motion.article
              className={styles.storyStep}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.52, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.storyLabel}>{story.label}</span>
              <span className={styles.storyNumber} aria-hidden>0{index + 1}</span>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </motion.article>
            {index < stories.length - 1 ? (
              <motion.span
                className={styles.storyConnector}
                aria-hidden
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.38, delay: 0.2 + index * 0.08 }}
              >
                <ArrowRight size={22} weight="regular" />
              </motion.span>
            ) : null}
          </div>
        ))}
      </div>
      <motion.p
        className={styles.storyConclusion}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.46, delay: 0.16 }}
      >
        Если одна часть не работает, клиника теряет пациентов и маркетинговый бюджет.
      </motion.p>
    </div>
  );
}
