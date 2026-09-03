import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Cases } from "@/components/Cases";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Pricing } from "@/components/Pricing";
import { ReportPreview } from "@/components/ReportPreview";
import { Reveal } from "@/components/motion/Reveal";
import { baseUrl, dentalPlans } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Маркетинг стоматологий и привлечение пациентов",
  description:
    "Привлекаем платящих пациентов на имплантацию, ортопедию, ортодонтию и другие приоритетные услуги стоматологии.",
  alternates: { canonical: "/stomatology" },
};

const dentalServices = [
  ["Привлечение новых пациентов", "Яндекс Директ", "SEO", "карты и геосервисы", "медицинские площадки", "локальные посадочные", "реклама конкретных услуг"],
  ["Сайт и доверие", "страницы направлений", "страницы врачей", "отзывы", "фото / видео", "упаковка преимуществ", "ответы на вопросы до обращения"],
  ["Входящие обращения", "учёт звонков и заявок", "коллтрекинг", "понятная история обращения", "контроль пропущенных", "повторное касание"],
  ["Работа с базой", "незавершённые планы лечения", "повторная гигиена", "контрольные визиты", "реактивация пациентов", "персональные напоминания"],
];

export default function StomatologyPage() {
  return (
    <main id="main-content">
      <section className={styles.innerHeroV2}>
        <div className={`container ${styles.innerHeroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Маркетинг стоматологий</p>
            <h1>Приводим платящих пациентов в стоматологию — на услуги, которые вы хотите развивать</h1>
            <p>Имплантация, ортопедия, ортодонтия, эстетика или комплексное лечение. Собираем рекламу, поиск, карты, отзывы, сайт и продвижение врачей в одну систему — чтобы поток пациентов был стабильнее и понятнее.</p>
            <div className={styles.heroActions}>
              <ButtonLink href="/diagnostic#form">Обсудить продвижение стоматологии</ButtonLink>
              <ButtonLink href="#dental-services" variant="secondary">Посмотреть, что входит</ButtonLink>
            </div>
          </div>
          <div className={styles.innerHeroVisual}><ReportPreview src="/images/hero-system-v2.webp" alt="Абстрактная система продвижения стоматологии" label="Спрос, доверие и запись работают вместе" priority /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Реклама стоматологии должна приводить не заявки в таблицу, а пациентов на приём и лечение</h2>
            <p>Между рекламой и лечением пациент успевает сравнить клиники, посмотреть врача, прочитать отзывы, узнать цену, задать вопросы и несколько раз передумать.</p>
            <p>Поэтому мы работаем не только с объявлением. Усиливаем весь путь до записи: где пациент вас находит, что он видит о клинике и враче, насколько понятно предложение и как быстро можно записаться.</p>
          </Reveal>
          <div className={styles.routeRibbon}><span>Поиск</span><span>Клиника</span><span>Врач</span><span>Обращение</span><span>Запись</span><span>Консультация</span><span>Лечение</span></div>
          <p className={styles.routeCaption}>Каждый этап должен помогать пациенту сделать следующий шаг.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Продвигаем конкретные услуги и врачей, а не «стоматологию вообще»</h2>
            <p>Имплантация, брекеты и терапия — разные продукты, разная аудитория и разная конкуренция. Для каждого направления нужны свои объявления, посадочные страницы, врачи, доказательства и сценарий записи.</p>
          </Reveal>
          <div className={styles.directionPair}>
            <article><h3>Имплантация</h3><ul><li>поиск и Яндекс Директ</li><li>отдельная страница услуги</li><li>хирург / ортопед и их карточки</li><li>кейсы и фотографии работ с согласиями</li><li>отзывы</li><li>понятная консультация и следующий шаг</li></ul></article>
            <article><h3>Ортодонтия</h3><ul><li>запросы родителей и взрослых пациентов</li><li>страницы брекетов / элайнеров</li><li>профиль ортодонта</li><li>контент о выборе метода</li><li>длительный цикл решения и повторные касания</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section" id="dental-services">
        <div className="container">
          <Reveal className={styles.sectionLead}><h2>Что берём на себя в продвижении стоматологии</h2></Reveal>
          <div className={styles.capabilityMosaic}>
            {dentalServices.map(([title, ...items]) => <article key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
          <p className={styles.bigStatement}>Настраиваем систему, в которой видно, кому уже ответили, какой запрос остался без ответа и с кем стоит связаться повторно.</p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Вы видите не только стоимость заявки</h2>
            <p>В отчёте собираем понятные для бизнеса показатели: сколько обращений пришло по каждому направлению, сколько людей записалось и какие каналы дают лучший результат.</p>
            <p>Для дорогостоящего лечения при наличии данных клиники можно дополнительно связывать маркетинг с консультацией и оплатой.</p>
          </Reveal>
          <ReportPreview label="Пример отчётности стоматологии" />
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.doctorBridge}`}>
          <div><h2>Сильный врач помогает продавать клинику ещё до разговора с администратором</h2><p>Перед имплантацией, ортодонтией или большим планом лечения пациент почти всегда смотрит специалиста отдельно: опыт, отзывы, фотографии, видео, образование и то, как врач объясняет лечение.</p><p>Поэтому страницы и внешние профили ключевых врачей — часть маркетинга стоматологии, а не раздел «для галочки».</p><ButtonLink href="/doctor" variant="secondary">Посмотреть K‑Medical Doctor</ButtonLink></div>
          <div className={styles.doctorStoryCard}><span>Врач</span><strong>Экспертиза становится видимой до записи</strong><p>Один цельный образ на сайте, в поиске, отзывах и медицинских сервисах.</p></div>
        </div>
      </section>

      <section className="section section-muted" id="cases">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Примеры продвижения медицинских и стоматологических проектов</h2></Reveal><Cases compact /></div>
      </section>

      <section className="section">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Формат зависит от количества филиалов и услуг, которые вы продвигаете</h2></Reveal><Pricing plans={dentalPlans} /><p className={styles.pricingNote}>Рекламный бюджет — отдельно.</p><div className={styles.centerAction}><ButtonLink href="/diagnostic#form">Обсудить, какой формат подойдёт вашей стоматологии</ButtonLink></div></div>
      </section>

      <CTASection cta={{ title: "Расскажите, каких пациентов хотите привлекать больше", description: "Пришлите сайт стоматологии, город и направления, которые хотите развивать. Посмотрим текущую упаковку и рекламу и предложим следующий шаг.", label: "Обсудить продвижение стоматологии", href: "/diagnostic#form" }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Маркетинг стоматологий", provider: { "@type": "Organization", name: "K‑Medical", url: baseUrl }, description: metadata.description }} />
    </main>
  );
}
