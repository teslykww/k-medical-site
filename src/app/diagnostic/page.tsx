import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Диагностика маркетинга частной клиники",
  description:
    "Находим главное ограничение в экономике, спросе, загрузке, обработке обращений и данных клиники и собираем план на 90 дней.",
  alternates: { canonical: "/diagnostic" },
};

const reasons = [
  "Реклама идёт, но непонятно, почему выручка не растёт.",
  "Подрядчик говорит про лиды, а клиника — про пустые записи.",
  "Хотите увеличить бюджет, но боитесь масштабировать неэффективность.",
  "Открываете новый филиал или направление.",
  "Есть спор: проблема в маркетинге, администраторах или врачах.",
  "Данные есть в нескольких системах, но единой картины нет.",
];

const analysisAreas = [
  ["Экономика", "Выручку и экономику приоритетных медицинских продуктов."],
  ["Спрос", "Спрос и конкурентное поле."],
  ["Мощность", "Свободную мощность врачей, кабинетов и оборудования."],
  ["Привлечение", "Текущие каналы привлечения и рекламные бюджеты."],
  ["Доверие", "Сайт, страницы услуг и врачей, карты, отзывы и медицинские площадки."],
  ["Обработка", "Звонки, формы, скорость ответа, запись и доходимость."],
  ["Данные", "CRM/МИС, коллтрекинг и качество источников."],
  ["База", "Повторную выручку и возможности существующей базы."],
];

export default function DiagnosticPage() {
  return (
    <main id="main-content">
      <section className={styles.heroSimple}>
        <div className={styles.heroSimpleInner}>
          <h1>Найдём главное ограничение маркетинга клиники и определим, что имеет смысл делать в следующие 90 дней</h1>
          <div className={styles.heroSimpleAside}>
            <p>
              Не аудит рекламного кабинета. Разбираем экономику направлений, спрос, загрузку врачей, сайт и доверие, обработку обращений, CRM/МИС и существующую базу пациентов.
            </p>
            <div><ButtonLink href="#form" eventLabel="hero-diagnostic">Записаться на диагностическую встречу</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Когда диагностика нужна больше, чем ещё один рекламный запуск</h2>
          </div>
          <div className={styles.serviceRows}>
            {reasons.map((text, index) => (
              <article className={styles.serviceRow} key={text}>
                <span>0{index + 1}</span><h3>{text}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading title="Что анализируем" />
          <div className={styles.serviceRows}>
            {analysisAreas.map(([title, text], index) => (
              <article className={styles.serviceRow} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Что получите физически" />
          <div className={styles.deliverables}>
            <article className={styles.deliverablePrimary}>
              <h3>Карту текущей системы привлечения и потерь</h3>
              <p>
                Приоритет 1–3 направлений для следующего цикла и список критических ограничений: что мешает росту сейчас.
              </p>
            </article>
            <div className={styles.deliverableList}>
              <article><h3>Модель измерения</h3><p>Что считаем сегодня и что нужно достроить.</p></article>
              <article><h3>90-дневный план действий</h3><p>Конкретная последовательность работы после диагностики.</p></article>
              <article><h3>Рекомендованный маршрут</h3><p>Подготовительный модуль, пилот или основной тариф.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className={styles.termsBox}>
            <h2>Как проходит</h2>
            <div className={styles.termsGrid}>
              <article><strong>до 10 рабочих дней</strong><p>После получения исходных данных.</p></article>
              <article><strong>150 000 ₽</strong><p>Оплата 70% до старта, 30% после подготовки отчёта и до финальной презентации.</p></article>
              <article><strong>100 000 ₽ в зачёт</strong><p>Если в течение 30 дней после диагностики клиника начинает основной контракт, 100 000 ₽ засчитываются в запуск или первый месяц; 50 000 ₽ остаются стоимостью диагностики.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}><h2>Что не входит</h2></div>
          <div className={styles.serviceRows}>
            <article className={styles.serviceRow}>
              <span>01</span>
              <h3>Границы диагностики</h3>
              <p>
                Запуск рекламных кампаний, полноценная разработка сайта, внедрение CRM/МИС с нуля, юридическое заключение и гарантия роста выручки. Диагностика отвечает на вопрос «что делать и в каком порядке», а не маскирует внедрение под аудит.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-surface" id="form">
        <div className={`container ${styles.formLayout}`}>
          <div className={styles.formIntro}>
            <h2>Понять, что ограничивает рост прямо сейчас</h2>
            <p>
              На короткой квалификационной встрече посмотрим, подходит ли вам полная диагностика или задача решается проще.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Диагностика маркетинга клиники",
        provider: { "@type": "Organization", name: "K‑Medical", url: baseUrl },
        offers: { "@type": "Offer", price: "150000", priceCurrency: "RUB" },
        url: `${baseUrl}/diagnostic`,
      }} />
    </main>
  );
}
