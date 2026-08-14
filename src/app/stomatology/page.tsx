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
  title: "Маркетинг стоматологий — платящие пациенты на нужные услуги",
  description:
    "Привлекаем платящих пациентов на имплантацию, ортопедию, ортодонтию и другие направления: реклама, поиск, карты, врачи, отзывы и аналитика.",
  alternates: { canonical: "/stomatology" },
};

export default function StomatologyPage() {
  return (
    <main id="main-content">
      <section className={styles.heroSimple}>
        <div className={styles.heroSimpleInner}>
          <div>
            <p className={styles.heroNote}>Маркетинг стоматологий</p>
            <h1>Приводим платящих пациентов в стоматологию — на услуги, которые вы хотите развивать</h1>
          </div>
          <div className={styles.heroSimpleAside}>
            <p>
              Имплантация, ортопедия, ортодонтия, эстетика или комплексное лечение. Собираем рекламу, поиск, карты, отзывы, сайт и продвижение врачей в одну систему — чтобы поток пациентов был стабильнее и понятнее.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="/diagnostic#form" eventLabel="hero-stomatology">Обсудить продвижение стоматологии</ButtonLink>
              <ButtonLink href="#scope" variant="secondary" eventLabel="stomatology-scope">Посмотреть, что входит</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Реклама стоматологии должна приводить не заявки в таблицу, а пациентов на приём и лечение</h2>
            <p>
              Между рекламой и лечением пациент успевает сравнить клиники, посмотреть врача, прочитать отзывы, узнать цену, задать вопросы и несколько раз передумать.
            </p>
            <p>
              Поэтому работаем не только с объявлением. Усиливаем весь путь до записи: где пациент вас находит, что он видит о клинике и враче, насколько понятно предложение и как быстро можно записаться.
            </p>
          </div>
          <div className={styles.servicePath}>
            <PatientJourney compact labels={["Поиск", "Клиника", "Врач", "Обращение", "Запись", "Консультация", "Лечение", "Оплата", "Повтор"]} />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            title="Продвигаем конкретные услуги и врачей, а не «стоматологию вообще»"
            description="Имплантация, брекеты и терапия — разные продукты, разная аудитория и разная конкуренция. Для каждого направления нужны свои объявления, страницы, врачи, доказательства и сценарий записи."
          />
          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <h3>Имплантация</h3>
              <p>Поиск и Яндекс Директ, отдельная страница услуги, хирург / ортопед и их карточки, кейсы и фотографии работ с согласиями, отзывы и понятный следующий шаг.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Ортодонтия</h3>
              <p>Запросы родителей и взрослых пациентов, страницы брекетов / элайнеров, профиль ортодонта, контент о выборе метода и повторные касания.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Другие направления</h3>
              <p>Ортопедия, эстетика, комплексное лечение и другие услуги — с отдельной логикой продвижения под реальный спрос и сильные стороны клиники.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="scope">
        <div className="container">
          <SectionHeading title="Что берём на себя в продвижении стоматологии" />
          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <h3>Привлечение новых пациентов</h3>
              <p>Яндекс Директ, SEO, карты и геосервисы, медицинские площадки, локальные посадочные и реклама конкретных услуг.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Сайт и доверие</h3>
              <p>Страницы направлений и врачей, отзывы, фото / видео, упаковка преимуществ клиники и ответы на основные вопросы до обращения.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Входящие обращения</h3>
              <p>Учёт звонков и заявок, коллтрекинг, контроль пропущенных и повторное касание с теми, кто не записался.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Работа с базой</h3>
              <p>Незавершённые планы лечения, повторная гигиена, контрольные визиты, реактивация пациентов и персональные напоминания.</p>
            </article>
          </div>
          <div className={styles.analyticsStrip}>
            <p>Настраиваем систему, в которой видно, кому уже ответили, какой запрос остался без ответа и с кем стоит связаться повторно.</p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.metricsStatement}>
            <h2>Вы видите не только стоимость заявки</h2>
            <p>
              В отчёте собираем понятные показатели: сколько обращений пришло по каждому направлению, сколько людей записалось и какие каналы дают лучший результат.
            </p>
            <p>
              Для дорогостоящего лечения дополнительно связываем маркетинг с консультацией и оплатой, чтобы оценивать не только количество обращений, но и реальный результат по направлению.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Сильный врач помогает продавать клинику ещё до разговора с администратором</h2>
            <p>
              Перед имплантацией, ортодонтией или большим планом лечения пациент почти всегда смотрит специалиста отдельно: опыт, отзывы, фотографии, видео, образование и то, как врач объясняет лечение.
            </p>
            <p>Поэтому страницы и внешние профили ключевых врачей — часть маркетинга стоматологии, а не раздел «для галочки».</p>
            <ButtonLink href="/doctor" variant="secondary" eventLabel="stomatology-doctor">Посмотреть K‑Medical Doctor</ButtonLink>
          </div>
          <div className={styles.metricsStatement}>
            <h3>Врач — отдельная точка доверия</h3>
            <p>Убедительный профиль специалиста помогает пациенту выбрать клинику ещё до первого звонка.</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading title="Формат зависит от количества филиалов и услуг, которые вы продвигаете" />
          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <h3>Dental Фокус — от 200 000 ₽/мес.</h3>
              <p>Для одной клиники и 1–2 приоритетных направлений.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Dental Рост — 300 000 ₽/мес.</h3>
              <p>Основной формат: 1–2 филиала и несколько направлений, где нужна постоянная работа с рекламой, сайтом, врачами, репутацией и аналитикой.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Dental Система — от 490 000 ₽/мес.</h3>
              <p>Для клиники с большим рекламным бюджетом, несколькими направлениями и расширенной маркетинговой командой.</p>
            </article>
          </div>
          <div className={styles.analyticsStrip}><p>Рекламный бюджет оплачивается отдельно.</p></div>
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
        title: "Расскажите, каких пациентов хотите привлекать больше",
        description: "Пришлите сайт стоматологии, город и направления, которые хотите развивать. Посмотрим текущую упаковку и рекламу и предложим следующий шаг.",
        label: "Обсудить продвижение стоматологии",
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
