import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/content/articles";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Материалы о маркетинге частной медицины",
  description:
    "Практические материалы K‑Medical о пути пациента, маркетинге стоматологии, цифровом присутствии врача, аналитике и базе пациентов.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <main id="main-content">
      <section className={styles.articlesHero}>
        <div className="container">
          <h1>Материалы для собственников клиник и сильных врачей</h1>
          <p>
            Разбираем маркетинг по механике: от спроса и выбора направления до записи, лечения, оплаты и повторного визита.
          </p>
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
