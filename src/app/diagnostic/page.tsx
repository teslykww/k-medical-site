import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { ReportPreview } from "@/components/ReportPreview";
import { Reveal } from "@/components/motion/Reveal";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Диагностика маркетинга клиники за 10 рабочих дней",
  description:
    "Проверим рекламу, сайт, врачей, карты, отзывы, обращения, аналитику и базу пациентов. На выходе — приоритеты и конкретный план действий.",
  alternates: { canonical: "/diagnostic" },
};

const reasons = [
  ["Реклама работает нестабильно", "Каждый месяц результат меняется, а понятной причины нет."],
  ["Заявки есть, а записей хочется больше", "Нужно понять, где теряется часть входящих и что можно улучшить."],
  ["Несколько подрядчиков работают отдельно", "Реклама, сайт, SEO и CRM существуют сами по себе, а единой картины нет."],
  ["Запускаете новое направление или филиал", "Нужно понять спрос, конкурентов, упаковку и набор каналов до большого рекламного запуска."],
  ["Хотите поменять подрядчика", "Нужна независимая картина того, что уже работает и что не стоит ломать."],
];

const analysisGroups = [
  ["Привлечение", "рекламные кампании", "поисковый спрос", "SEO", "карты и медицинские площадки", "рекламные бюджеты"],
  ["Сайт и доверие", "первый экран", "страницы услуг", "страницы врачей", "отзывы", "цены и офферы", "формы и запись"],
  ["Входящие обращения", "звонки и заявки", "пропущенные", "скорость ответа", "повторные касания", "запись"],
  ["Данные", "Метрика", "коллтрекинг", "CRM / МИС", "источники обращений", "текущая отчётность"],
  ["База пациентов", "повторные визиты", "незавершённые обращения", "сценарии возврата", "коммуникации"],
];

const deliverables = [
  ["Список изменений в порядке приоритета", "Не 70 замечаний ради объёма, а то, что действительно стоит менять первым."],
  ["План по каналам", "Что оставить, что отключить, что протестировать и куда разумно направить следующий рекламный бюджет."],
  ["Список правок сайта и упаковки", "Какие страницы, врачи, отзывы и офферы мешают конверсии и что конкретно нужно переделать."],
  ["Схема учёта обращений", "Какие события и данные нужно видеть, чтобы управлять маркетингом."],
  ["Пошаговый план запуска", "Задачи, последовательность, ответственные и ориентир по бюджету."],
];

export default function DiagnosticPage() {
  return (
    <main id="main-content">
      <section className={`${styles.innerHeroV2} ${styles.diagnosticHeroV2}`}>
        <div className={`container ${styles.innerHeroGrid}`}>
          <div><p className={styles.eyebrow}>Диагностика маркетинга клиники</p><h1>За 10 рабочих дней покажем, что мешает получать больше пациентов</h1><p>Проверим рекламу, сайт, врачей, карты, отзывы, входящие обращения, аналитику и текущую базу пациентов. На выходе — конкретный список изменений, приоритеты и план действий.</p><div className={styles.heroActions}><ButtonLink href="#form">Обсудить диагностику</ButtonLink></div></div>
          <div className={styles.diagnosticPriceCard}><span>Стоимость</span><strong>150 000 ₽</strong><p>Практический маркетинговый разбор перед запуском или масштабированием.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Когда стоит сначала разобраться, а уже потом увеличивать рекламный бюджет</h2></Reveal><div className={styles.reasonGrid}>{reasons.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="section section-muted">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Разбираем всё, что влияет на поток пациентов</h2></Reveal><div className={styles.analysisMosaic}>{analysisGroups.map(([title, ...items]) => <article key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
      </section>

      <section className="section section-surface">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Что будет у вас на руках через 10 рабочих дней</h2></Reveal><div className={styles.deliverableList}>{deliverables.map(([title, text], index) => <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><ReportPreview src="/images/diagnostic-report-v2.webp" alt="Демонстрационный пример структуры диагностического отчёта" label="Пример структуры диагностического отчёта" /></div>
      </section>

      <section className="section">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Как проходит работа</h2></Reveal><div className={styles.processTimeline}><article><strong>Получаем доступы и исходные данные</strong></article><article><strong>Разбираем рекламу, сайт, спрос, репутацию, обращения и аналитику</strong></article><article><strong>Собираем выводы и конкретный план</strong></article><article><strong>Проводим встречу и защищаем рекомендации перед собственником / командой</strong></article></div><div className={styles.commercialTerms}><span><b>Срок</b>до 10 рабочих дней после получения материалов</span><span><b>Стоимость</b>150 000 ₽</span><span><b>Оплата</b>70% до старта, 30% перед финальной презентацией</span></div><p className={styles.bonusNote}>Если после диагностики вы начинаете основное сопровождение K‑Medical в течение 30 дней, 100 000 ₽ засчитываются в запуск или первый месяц.</p></div>
      </section>

      <section className="section section-muted"><div className={`container ${styles.twoColumnStatement}`}><h2>Диагностика должна окупиться правильным решением, а не красивым PDF</h2><div><p>Её задача — не продать вам как можно больше маркетинговых услуг. Задача — понять, что действительно стоит запускать сейчас, а что можно отложить.</p><p className={styles.bigStatement}>После диагностики у вас есть понятный список действий и бюджетов — независимо от того, продолжим мы работать вместе или нет.</p></div></div></section>

      <section className="section" id="form"><div className={`container ${styles.formSection}`}><div><p className={styles.eyebrow}>Первый шаг</p><h2>Покажите текущий маркетинг — скажем, есть ли смысл начинать с диагностики</h2><p>Пришлите сайт клиники и коротко опишите задачу. На первой встрече поймём, нужен ли полный разбор или вопрос можно решить проще.</p></div><div><h3>Расскажите, что хотите изменить в маркетинге</h3><LeadForm /></div></div></section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Диагностика маркетинга клиники", provider: { "@type": "Organization", name: "K‑Medical", url: baseUrl }, offers: { "@type": "Offer", priceCurrency: "RUB", price: "150000" }, description: metadata.description }} />
    </main>
  );
}
