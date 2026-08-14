import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Article } from "@/content/types";
import { TrackedLink } from "./TrackedLink";
import styles from "./site.module.css";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`${styles.articleCard} ${featured ? styles.articleFeatured : ""}`}>
      <div className={styles.articleImage}>
        <Image
          src="/images/editorial-route-texture.png"
          alt="Абстрактная схема маршрута пациента"
          width={1400}
          height={1000}
          sizes={featured ? "(max-width: 767px) 100vw, 58vw" : "(max-width: 767px) 100vw, 31vw"}
        />
      </div>
      <div className={styles.articleCardContent}>
        <div className={styles.articleMeta}>
          <span>{article.category}</span>
          <span>{article.readingTime}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <TrackedLink
          className={styles.articleLink}
          href={`/articles/${article.slug}`}
          event="article_cta_click"
          eventLabel={article.slug}
        >
          Читать материал
          <ArrowRight aria-hidden size={17} />
        </TrackedLink>
      </div>
    </article>
  );
}

