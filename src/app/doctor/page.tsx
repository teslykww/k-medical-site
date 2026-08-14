import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { Pricing } from "@/components/Pricing";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/content/articles";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Продвижение врача — записи, репутация и цифровое присутствие",
  description:
    "Превращаем экспертизу врача в поток записей: сайт, медицинские площадки, отзывы, поиск, контент, видео и реклама без обязанности жить в соцсетях.",
  alternates: { canonical: "/doctor" },
};

export default function DoctorPage() {
  return (
    <main id="main-content">
      <section className={styles.heroSimple}>
        <div className={styles.heroSimpleInner}>
          <div>
            <p className={styles.heroNote}>Продвижение врачей</p>
            <h1>Превращаем экспертизу врача в поток записей — без обязанности жить в соцсетях</h1>
          </div>
          <div className={styles.heroSimpleAside}>
            <p>
              Сайт, медицинские площадки, отзывы, поиск, контент, видео и реклама работают вокруг одного специалиста — так, чтобы пациент понял, почему записаться именно к нему.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="#audit" eventLabel="hero-doctor">Получить план продвижения врача</ButtonLink>
              <ButtonLink href="#formats" variant="secondary" eventLabel="doctor-formats">Посмотреть форматы</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading title="Если вы врач — строим поток записей вокруг вашего имени. Если вы клиника — усиливаем врача как точку привлечения пациентов" />
          <div className={styles.fitLayout}>
            <article id="for-doctor">
              <h3>Я врач</h3>
              <p>Хочу больше записей и сильное профессиональное имя, но не хочу превращать продвижение во вторую работу.</p>
              <p><strong>Превращаем вашу экспертизу в поток записей — без обязанности жить в соцсетях.</strong></p>
              <ButtonLink href="#formats" variant="secondary" eventLabel="doctor-self">Посмотреть продвижение для врача</ButtonLink>
            </article>
            <article id="for-clinic">
              <h3>Я представляю клинику</h3>
              <p>Хочу загрузить сильного специалиста и развивать направление через его имя, экспертизу и репутацию.</p>
              <p><strong>Помогаем превратить сильного врача в отдельную точку привлечения пациентов и роста направления.</strong></p>
              <ButtonLink href="#clinic" variant="secondary" eventLabel="doctor-clinic">Посмотреть продвижение врача для клиники</ButtonLink>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>До записи пациент видит не вашу практику. Он видит то, что нашёл в интернете</h2>
            <p>
              Даже сильный врач может выглядеть слабее конкурента, если на сайте три строки биографии, в одном сервисе старое фото, в другом неверный стаж, отзывам никто не отвечает, а по имени врача почти ничего не находится.
            </p>
            <p>Мы приводим эту картину в порядок и собираем вокруг врача понятный цифровой образ.</p>
          </div>
          <div className={styles.serviceRows}>
            {[
              "Единое позиционирование",
              "Сильная страница врача",
              "Актуальные профили на медицинских площадках",
              "Отзывы",
              "Статьи и видео",
              "Поиск по имени и услугам",
              "Понятный путь к записи",
            ].map((title, index) => (
              <article className={styles.serviceRow} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            title="Врач не обязан становиться блогером"
            description="Главный источник контента — сама врачебная экспертиза. Наша задача — забрать производство на себя."
          />
          <div className={styles.processGrid}>
            {[
              ["01", "Интервью", "30–45 минут содержательной беседы с врачом."],
              ["02", "Редактура", "Редактор собирает фактуру и делает сценарии, статьи, посты и материалы для страниц."],
              ["03", "Проверка", "Врач проверяет медицинскую точность и подтверждает факты."],
              ["04", "Публикация", "Команда публикует и распространяет готовые материалы."],
            ].map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <div className={styles.analyticsStrip}><p>Одна нормальная беседа с врачом может дать контент на несколько недель.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Что пациент должен понять о враче до записи" />
          <div className={styles.processGrid}>
            <article><span>01</span><h3>С чем этот врач действительно работает</h3><p>Не общая специальность, а конкретные проблемы, процедуры и типы пациентов.</p></article>
            <article><span>02</span><h3>Почему ему можно доверять</h3><p>Опыт, обучение, клиническая практика, методики, оборудование, публикации, реальные случаи и отзывы.</p></article>
            <article><span>03</span><h3>Как он работает</h3><p>Понятный подход, отношение к пациенту, этапы консультации и лечения.</p></article>
            <article><span>04</span><h3>Как к нему попасть</h3><p>Актуальное место приёма, расписание, стоимость первого шага и простая запись.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.metricsStatement}>
            <h2>Пациент встречает имя врача в разных местах — везде должно быть одинаково убедительно</h2>
            <p>Сайт клиники / персональный сайт · Яндекс · ПроДокторов · НаПоправку · СберЗдоровье · поисковая выдача · YouTube · социальные сети · экспертные статьи · платная реклама.</p>
            <p><strong>Пациент должен видеть одну и ту же сильную картину независимо от того, где впервые встретил имя врача.</strong></p>
          </div>
        </div>
      </section>

      <section className="section" id="formats">
        <div className="container">
          <SectionHeading
            title="Три уровня продвижения врача"
            description="Рекламный бюджет, студийные съёмки и платные размещения считаются отдельно."
          />
          <Pricing />
        </div>
      </section>

      <section className="section section-muted" id="clinic">
        <div className={`container ${styles.serviceColumns}`}>
          <div className={styles.serviceIntro}>
            <h2>Для клиники сильный врач может стать отдельной точкой привлечения пациентов</h2>
          </div>
          <div className={styles.metricsStatement}>
            <p>
              Клиника получает больше возможностей привлекать пациентов на конкретное направление через имя и экспертизу специалиста. Врач получает сильное профессиональное присутствие, которое помогает ему быть заметнее и получать больше записей.
            </p>
            <p>При совместном проекте заранее фиксируем правила работы с аккаунтами, контентом и обращениями.</p>
          </div>
        </div>
      </section>

      <section className="section" id="audit">
        <div className="container">
          <div className={styles.auditOffer}>
            <div>
              <h2>Посмотрим, что пациент видит о враче прямо сейчас</h2>
              <p>
                Проверим поиск по имени, сайт, медицинские площадки, отзывы, контент и путь к записи. После аудита будет понятно, что исправить первым и какие каналы стоит подключать дальше.
              </p>
            </div>
            <div>
              <p className={styles.auditPrice}>80 000 ₽</p>
              <p>7–10 рабочих дней</p>
              <ButtonLink href="/diagnostic#form" event="pricing_cta_click" eventLabel="doctor-audit">Заказать аудит врача</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading title="Материалы для врачей" />
          <div className={styles.articleGrid}>
            {articles.filter((article) => article.category === "Врач").map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className={styles.metricsStatement}>
            <h2>Хотите, чтобы имя врача само помогало приводить пациентов?</h2>
            <p>Пришлите ФИО врача, специализацию, город и ссылки на текущие страницы. Посмотрим цифровое присутствие и предложим формат продвижения.</p>
            <div className={styles.heroActions}>
              <ButtonLink href="/diagnostic#form" eventLabel="doctor-final-self">Обсудить своё продвижение</ButtonLink>
              <ButtonLink href="/diagnostic#form" variant="secondary" eventLabel="doctor-final-clinic">Обсудить продвижение врача клиники</ButtonLink>
            </div>
          </div>
        </div>
      </section>

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
