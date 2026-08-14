import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/content/articles";
import { baseUrl, siteName } from "@/content/site";
import styles from "../../pages.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.description },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const coverByCategory = {
    Клиники: "/images/analytics-report-v2.webp",
    Стоматология: "/images/hero-system-v2.webp",
    Врачи: "/images/editorial-route-texture.png",
    Реклама: "/images/analytics-report-v2.webp",
    Репутация: "/images/hero-system-v2.webp",
    Аналитика: "/images/analytics-report-v2.webp",
    "База пациентов": "/images/diagnostic-report-v2.webp",
  } as const;

  return (
    <main id="main-content" className={styles.articlePage}>
      <article>
        <header className={styles.articleHeader}>
          <div className={styles.articleHeaderMeta}><span>{article.category}</span><span>{article.readingTime}</span></div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
        <div className={styles.articleCover}>
          <Image src={coverByCategory[article.category]} alt="Редакционная иллюстрация к статье" width={1400} height={1000} priority />
        </div>
        <div className={styles.articleBody}>
          {article.sections.map((section, index) => (
            <section key={`${section.heading ?? "intro"}-${index}`}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <aside className={styles.articleCta}>
            <h2>{article.cta.title}</h2>
            <p>{article.cta.description}</p>
            <ButtonLink href={article.cta.href} event="article_cta_click" eventLabel={article.slug}>{article.cta.label}</ButtonLink>
          </aside>
        </div>
      </article>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        author: { "@type": "Organization", name: siteName },
        publisher: { "@type": "Organization", name: siteName },
        mainEntityOfPage: `${baseUrl}/articles/${article.slug}`,
      }} />
    </main>
  );
}
