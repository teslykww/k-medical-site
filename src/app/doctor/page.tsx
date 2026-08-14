import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Pricing } from "@/components/Pricing";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/content/articles";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Продвижение и цифровое присутствие врача",
  description:
    "Позиционирование, профили, репутация, экспертный контент, трафик и аналитика записи без обязанности врачу становиться блогером.",
  alternates: { canonical: "/doctor" },
};

export default function DoctorPage() {
  return (
    <main id="main-content">
      <section className={styles.heroSimple}>
        <div className={styles.heroSimpleInner}>
          <h1>Сделаем экспертизу врача видимой там, где пациент ищет, сравнивает и выбирает специалиста</h1>
          <div className={styles.heroSimpleAside}>
            <p>
              Позиционирование, страницы врача, поиск и медицинские сервисы, отзывы, экспертный контент, видео, трафик, маршрут записи и аналитика — без обязанности врачу самому превращаться в блогера.
            </p>
            <div><ButtonLink href="#audit" eventLabel="hero-doctor">Разобрать цифровое присутствие врача</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Сильный врач может проигрывать просто потому, что его сложнее выбрать</h2>
            <p>
              До записи пациент обычно видит не вашу реальную практику, а цифровой след: выдачу по имени, карточку на сайте клиники, отзывы, профиль на медицинских площадках, информацию в Яндексе, видео, статьи, цены и то, насколько понятно объяснён подход.
            </p>
            <p>
              Если в одном месте стаж 12 лет, в другом 15, фотографии разные, специализация описана общими словами, отзывам никто не отвечает, а на странице врача три абзаца биографии — сильная экспертиза просто не успевает стать очевидной.
            </p>
          </div>
          <div className={styles.metricsStatement}>
            <h2>Собираем единую систему присутствия</h2>
            <p>
              Сайт клиники / персональный сайт → Яндекс → ПроДокторов → НаПоправку → СберЗдоровье → отзывы → контент / видео → запись
            </p>
            <p>
              На релевантных площадках факты должны совпадать: имя, специализация, стаж, услуги, место приёма, фото, подход, доказательства. Поэтому упаковка влияет не на «красоту профиля», а на реальный выбор пациента.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            title="Врач не обязан становиться блогером"
            description="Мы строим производство вокруг экспертизы врача, а не вокруг его свободного времени."
          />
          <div className={styles.processGrid}>
            {[
              ["01", "Интервью", "30–45 минут содержательной беседы с врачом."],
              ["02", "Редактура", "Редактор вынимает фактуру и делает статьи, посты, сценарии, FAQ и материалы для страниц услуг."],
              ["03", "Проверка", "Врач проверяет медицинскую точность и подтверждает факты."],
              ["04", "Публикация", "Команда публикует и распространяет готовые материалы."],
            ].map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <div className={styles.analyticsStrip}>
            <p>
              Одна содержательная беседа может превратиться в статью, несколько коротких видео, ответы на вопросы, блок FAQ и материалы для страницы услуги.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Что упаковываем" />
          <div className={styles.deliverables}>
            <article className={styles.deliverablePrimary}>
              <h3>Экспертиза, которую пациент может увидеть и проверить</h3>
              <p>
                Кому и с какими задачами помогает врач; ключевые направления и процедуры; реальные отличия, которые можно доказать; опыт, обучение, публикации, методики и оборудование.
              </p>
            </article>
            <div className={styles.deliverableList}>
              {[
                ["Доказательства", "Клинические случаи и отзывы — только с корректными согласиями."],
                ["Человеческий образ", "Понятный образ врача без искусственной «звёздности»."],
                ["Единые факты", "Согласованные данные на сайте, в поиске и медицинских сервисах."],
                ["Путь к записи", "Понятный следующий шаг для пациента после знакомства с экспертизой."],
              ].map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            title="Три формата работы"
            description="Рекламный бюджет, сложный продакшн и платные размещения — отдельно. Детальный состав фиксируется в коммерческом предложении."
          />
          <Pricing />
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Врач + клиника: заранее решаем, кому что принадлежит</h2>
          </div>
          <div className={styles.serviceRows}>
            <article className={styles.serviceRow}>
              <span>01</span>
              <h3>До старта</h3>
              <p>
                Если продвижение финансируется совместно, до старта фиксируем: кому принадлежат аккаунты, домен, исходники фото и видео, право использовать контент после ухода врача, куда приходят обращения и кому принадлежит пациентская база. Это не бюрократия, а защита обеих сторон.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="audit">
        <div className="container">
          <div className={styles.auditOffer}>
            <div>
              <h2>Посмотреть, что пациент видит о враче до записи</h2>
              <p>
                Поисковую видимость, профили, отзывы, переходы, обращения, записи и визиты. Оплаты и повторные обращения — если клиника может корректно передавать эти данные. Не обещаем «100 пациентов из личного бренда», если такую атрибуцию технически невозможно доказать.
              </p>
            </div>
            <div>
              <p className={styles.auditPrice}>80 000 ₽</p>
              <ButtonLink href="/diagnostic#form" event="pricing_cta_click" eventLabel="doctor-audit">Заказать Doctor Audit</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Материалы для врачей" />
          <div className={styles.articleGrid}>
            {articles.filter((article) => article.category === "Врач").map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <CTASection cta={{
        title: "Посмотреть, что пациент видит о враче до записи",
        description: "За 7–10 рабочих дней соберём карту цифрового присутствия, найдём разрывы и дадим 90-дневный план.",
        label: "Заказать Doctor Audit — 80 000 ₽",
        href: "/diagnostic#form",
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "K‑Medical Doctor",
        provider: { "@type": "Organization", name: "K‑Medical", url: baseUrl },
        url: `${baseUrl}/doctor`,
      }} />
    </main>
  );
}
