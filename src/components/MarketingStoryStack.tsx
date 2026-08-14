"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./site.module.css";

const stories = [
  {
    title: "Привлекаем новых пациентов",
    text: "Яндекс Директ, SEO, карты, геосервисы, медицинские площадки, контент, нативные размещения и другие источники спроса.",
    detail: "Не подключаем каналы ради галочки. Выбираем те, где есть ваша аудитория и понятная задача.",
  },
  {
    title: "Помогаем выбрать вашу клинику и врача",
    text: "Сайт, страницы услуг, карточки врачей, отзывы, фотографии, видео, контент и репутация должны отвечать пациенту на простой вопрос: «Почему мне идти именно сюда?»",
    detail: "Не прячем сильные стороны клиники в разделе «О нас». Показываем их там, где пациент принимает решение.",
  },
  {
    title: "Возвращаем пациентов, которые уже вас знают",
    text: "Напоминания, повторные визиты, незавершённые планы лечения, пациенты, которые не дошли или давно не были в клинике, — отдельный источник записей внутри вашей базы.",
    detail: "Коммуникация строится вокруг уместного следующего шага, а не массовой скидки для всех.",
  },
];

export function MarketingStoryStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.storyStack}>
      {stories.map((story, index) => (
        <motion.article
          key={story.title}
          className={styles.storyCard}
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
          style={{ "--story-index": index } as CSSProperties}
        >
          <span aria-hidden>{index + 1}</span>
          <div>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
            <p>{story.detail}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
