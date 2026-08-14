import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PatientJourney } from "@/components/PatientJourney";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/content/articles";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Маркетинг стоматологии с аналитикой до лечения",
  description:
    "Выбираем прибыльные направления стоматологии, привлекаем пациентов и считаем путь от спроса до консультации, лечения и повтора.",
  alternates: { canonical: "/stomatology" },
};

const serviceRows = [
  ["Спрос", "Яндекс Директ, SEO, карты, медицинские и локальные площадки, посадочные страницы — под выбранные направления и географию."],
  ["Врачи и доверие", "Пересобираем страницы имплантологов, ортопедов и ортодонтов. Выносим реальные доказательства: опыт, подход, кейсы пациентов с согласиями, видео, отзывы, понятное объяснение этапов лечения."],
  ["Конверсия в запись", "Смотрим звонки, скорость ответа, пропущенные, сценарии администраторов, запись и доходимость. Часто именно здесь прячется «неработающая реклама»."],
  ["Конверсия в лечение", "Если клиника даёт данные, смотрим путь от первичной консультации к плану лечения и договору. Без этого нельзя понять реальный CAC по дорогим направлениям."],
  ["База", "Незавершённые планы лечения, гигиена, контрольные визиты, профилактика, повторные пациенты — отдельный двигатель выручки, а не «рассылка когда-нибудь потом»."],
];

export default function StomatologyPage() {
  return (
    <main id="main-content">
      <section className={styles.heroSimple}>
        <div className={styles.heroSimpleInner}>
          <h1>Загружаем прибыльные направления стоматологии пациентами — и считаем результат дальше заявки</h1>
          <div className={styles.heroSimpleAside}>
            <p>
              Имплантация, ортопедия, ортодонтия и другие направления выбираем не по моде, а по спросу, марже и реальной мощности вашей клиники.
            </p>
            <div><ButtonLink href="/diagnostic#form" eventLabel="hero-stomatology">Разобрать маркетинг стоматологии</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>В стоматологии легко купить дорогой трафик. Сложнее — превратить его в лечение</h2>
            <p>
              Пациент может кликнуть по рекламе, посмотреть сайт, сравнить врача, прочитать отзывы, позвонить, записаться, не прийти, прийти на консультацию — и ещё несколько недель принимать решение по плану лечения. Если считать только заявку, большая часть экономики остаётся за кадром.
            </p>
          </div>
          <div className={styles.servicePath}>
            <PatientJourney compact labels={["Поиск", "Сайт / карты", "Врач", "Звонок", "Консультация", "План лечения", "Решение", "Лечение", "Повтор"]} />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Не рекламируем всё меню</h2>
            <p>
              На старте выбираем 1–3 направления, где сходятся четыре вещи: достаточный спрос, нормальная маржа, сильный врач или продукт и свободная мощность. Только после этого решаем, какие каналы покупать и какие страницы строить.
            </p>
            <p>
              Чаще всего это имплантация, ортопедия, ортодонтия, эстетическая стоматология, комплексные планы лечения — но конкретный выбор всегда зависит от вашей клиники.
            </p>
          </div>
          <div className={styles.serviceRows}>
            {serviceRows.map(([title, description], index) => (
              <article className={styles.serviceRow} key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Первые 90 дней" />
          <div className={styles.timeline}>
            {[
              ["Дни 1–14", "Диагностика", "Экономика, загрузка врачей, данные, аудит рекламы, сайта, отзывов и звонков."],
              ["Дни 15–30", "Подготовка", "Подготовка офферов, страниц, аналитики и рекламного контура."],
              ["Дни 31–60", "Запуск", "Запуск и тестирование 1–3 направлений."],
              ["Дни 61–90", "Оптимизация", "Оптимизация по качеству обращений, записи, визитам и деньгам — насколько позволяют данные."],
            ].map(([period, title, text]) => (
              <article key={period}><span>{period}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className={`container ${styles.fitLayout}`}>
          <article>
            <h3>Кому подходит</h3>
            <ul>
              <li>Есть минимум одно направление, которое клиника хочет и может загрузить.</li>
              <li>Есть бюджет отдельно на работу команды и отдельно на медиа.</li>
              <li>Собственник готов смотреть не только CPL, но и записи, визиты и лечение.</li>
              <li>Клиника готова дать доступ к ключевым данным.</li>
            </ul>
          </article>
          <article>
            <h3>Кому не подходит</h3>
            <p>
              Если все врачи забиты на месяц вперёд, клиника хочет рекламировать 15 направлений сразу или никто не готов разбирать звонки и воронку — сначала исправляем систему, потом добавляем трафик.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Материалы по стоматологии" />
          <div className={styles.articleGrid}>
            {articles.filter((article) => article.category === "Стоматология").map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <CTASection cta={{
        title: "Понять, какое направление стоматологии масштабировать первым",
        description: "Разберём спрос, маржу, врачей, текущий трафик и путь пациента.",
        label: "Записаться на диагностику",
        href: "/diagnostic#form",
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Маркетинг стоматологии",
        provider: { "@type": "Organization", name: "K‑Medical", url: baseUrl },
        areaServed: "RU",
        url: `${baseUrl}/stomatology`,
      }} />
    </main>
  );
}
