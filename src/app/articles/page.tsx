import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/content/articles";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Практика медицинского маркетинга",
  description:
    "Разбираем рекламу, сайты, врачей, репутацию, аналитику и работу с пациентской базой — на конкретных примерах и без рекламного жаргона.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <main id="main-content">
      <section className={styles.articlesHero}>
        <div className="container">
          <p className={styles.eyebrow}>Статьи K‑Medical</p>
          <h1>Практика медицинского маркетинга: как привлекать пациентов и не сливать бюджет</h1>
          <p>
            Разбираем рекламу, сайты, врачей, репутацию, аналитику и работу с пациентской базой — на конкретных примерах и без рекламного жаргона.
          </p>
          <div className={styles.categoryChips} aria-label="Категории статей">
            {["Клиники", "Стоматология", "Врачи", "Реклама", "Репутация", "Аналитика", "База пациентов"].map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-surface">
        <div className="container">
          <div className={styles.articleGridWide}>
            {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
