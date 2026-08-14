import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Диагностика маркетинга клиники — 10 рабочих дней",
  description:
    "Проверим рекламу, сайт, врачей, карты, отзывы, входящие обращения, аналитику и базу пациентов. На выходе — приоритетный план изменений и запуска.",
  alternates: { canonical: "/diagnostic" },
};

const reasons = [
  ["Реклама работает нестабильно", "Каждый месяц результат меняется, а понятной причины нет."],
  ["Заявки есть, а записей хочется больше", "Нужно понять, где теряется часть входящих и что можно улучшить."],
  ["Несколько подрядчиков работают отдельно", "Реклама, сайт, SEO и CRM существуют сами по себе, а единой картины нет."],
  ["Запускаете новое направление или филиал", "Нужно понять спрос, конкурентов, упаковку и набор каналов до большого рекламного запуска."],
  ["Хотите поменять подрядчика", "Нужна независимая картина того, что уже работает и что не стоит ломать."],
];

export default function DiagnosticPage() {
  return (
    <main id="main-content">
      <section className={styles.heroSimple}>
        <div className={styles.heroSimpleInner}>
          <div>
            <p className={styles.heroNote}>Диагностика маркетинга клиники</p>
            <h1>За 10 рабочих дней покажем, что мешает получать больше пациентов</h1>
          </div>
          <div className={styles.heroSimpleAside}>
            <p>
              Проверим рекламу, сайт, врачей, карты, отзывы, входящие обращения, аналитику и текущую базу пациентов. На выходе — конкретный список изменений, приоритеты и план действий.
            </p>
            <p className={styles.auditPrice}>150 000 ₽</p>
            <div><ButtonLink href="#form" eventLabel="hero-diagnostic">Обсудить диагностику</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Когда стоит сначала разобраться, а уже потом увеличивать рекламный бюджет</h2>
          </div>
          <div className={styles.serviceRows}>
            {reasons.map(([title, text], index) => (
              <article className={styles.serviceRow} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading title="Разбираем всё, что влияет на поток пациентов" />
          <div className={styles.processGrid}>
            <article><span>01</span><h3>Привлечение</h3><p>Рекламные кампании, поисковый спрос, SEO, карты, медицинские площадки и рекламные бюджеты.</p></article>
            <article><span>02</span><h3>Сайт и доверие</h3><p>Первый экран, страницы услуг и врачей, отзывы, цены, офферы, формы и запись.</p></article>
            <article><span>03</span><h3>Входящие обращения</h3><p>Звонки и заявки, пропущенные, скорость ответа, повторные касания и запись.</p></article>
            <article><span>04</span><h3>Данные</h3><p>Метрика, коллтрекинг, CRM / МИС, источники обращений и текущая отчётность.</p></article>
            <article><span>05</span><h3>База пациентов</h3><p>Повторные визиты, незавершённые обращения, сценарии возврата и коммуникации.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Что будет у вас на руках через 10 рабочих дней" />
          <div className={styles.deliverables}>
            <article className={styles.deliverablePrimary}>
              <h3>Список изменений в порядке приоритета</h3>
              <p>Не 70 замечаний ради объёма, а то, что действительно стоит менять первым.</p>
            </article>
            <div className={styles.deliverableList}>
              <article><h3>План по каналам</h3><p>Что оставить, что отключить, что протестировать и куда разумно направить следующий рекламный бюджет.</p></article>
              <article><h3>Список правок сайта и упаковки</h3><p>Какие страницы, врачи, отзывы и офферы мешают конверсии и что конкретно нужно переделать.</p></article>
              <article><h3>Схема учёта обращений</h3><p>Какие события и данные нужно видеть, чтобы управлять маркетингом.</p></article>
              <article><h3>Пошаговый план запуска</h3><p>Задачи, последовательность, ответственные и ориентир по бюджету.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading title="Как проходит работа" />
          <div className={styles.processGrid}>
            <article><span>01</span><h3>Получаем доступы и исходные данные</h3></article>
            <article><span>02</span><h3>Разбираем рекламу, сайт, спрос, репутацию, обращения и аналитику</h3></article>
            <article><span>03</span><h3>Собираем выводы и конкретный план</h3></article>
            <article><span>04</span><h3>Проводим встречу и защищаем рекомендации перед собственником / командой</h3></article>
          </div>
          <div className={styles.termsBox}>
            <div className={styles.termsGrid}>
              <article><strong>до 10 рабочих дней</strong><p>После получения материалов.</p></article>
              <article><strong>150 000 ₽</strong><p>70% до старта, 30% перед финальной презентацией.</p></article>
              <article><strong>100 000 ₽ в зачёт</strong><p>Если в течение 30 дней после диагностики вы начинаете основное сопровождение K‑Medical, сумма засчитывается в запуск или первый месяц.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.metricsStatement}>
            <h2>Диагностика должна окупиться правильным решением, а не красивым PDF</h2>
            <p>Её задача — понять, что действительно стоит запускать сейчас, а что можно отложить.</p>
            <p><strong>После диагностики у вас есть понятный список действий и бюджетов — независимо от того, продолжим мы работать вместе или нет.</strong></p>
          </div>
        </div>
      </section>

      <section className="section section-surface" id="form">
        <div className={`container ${styles.formLayout}`}>
          <div className={styles.formIntro}>
            <h2>Покажите текущий маркетинг — скажем, есть ли смысл начинать с диагностики</h2>
            <p>Пришлите сайт клиники и коротко опишите задачу. На первой встрече поймём, нужен ли полный разбор или вопрос можно решить проще.</p>
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
