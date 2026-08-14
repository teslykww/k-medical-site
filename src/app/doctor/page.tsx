import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Pricing } from "@/components/Pricing";
import { Reveal } from "@/components/motion/Reveal";
import { baseUrl } from "@/content/site";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Продвижение врачей и цифровое присутствие",
  description:
    "Превращаем экспертизу врача в поток записей: сайт, поиск, медицинские площадки, отзывы, контент, видео и реклама.",
  alternates: { canonical: "/doctor" },
};

const doctorChannels = ["Сайт клиники / персональный сайт", "Яндекс", "ПроДокторов", "НаПоправку", "СберЗдоровье", "поисковая выдача", "YouTube / короткие видео", "социальные сети", "экспертные статьи", "платная реклама — если она нужна"];

export default function DoctorPage() {
  return (
    <main id="main-content">
      <section className={`${styles.innerHeroV2} ${styles.doctorHeroV2}`}>
        <div className={`container ${styles.innerHeroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Продвижение врачей</p>
            <h1>Превращаем экспертизу врача в поток записей — без обязанности жить в соцсетях</h1>
            <p>Сайт, медицинские площадки, отзывы, поиск, контент, видео и реклама работают вокруг одного специалиста — так, чтобы пациент понял, почему записаться именно к нему.</p>
            <div className={styles.heroActions}><ButtonLink href="/diagnostic#form">Получить план продвижения врача</ButtonLink><ButtonLink href="#doctor-pricing" variant="secondary">Посмотреть форматы</ButtonLink></div>
          </div>
          <div className={styles.storyProfileStack} aria-label="Состав цифрового присутствия врача">
            <article><span>01</span><strong>Понятная специализация</strong><p>Пациент сразу узнаёт свою ситуацию.</p></article>
            <article><span>02</span><strong>Доказательства доверия</strong><p>Отзывы, опыт, видео и реальные случаи.</p></article>
            <article><span>03</span><strong>Простой путь к записи</strong><p>Актуальное место приёма и следующий шаг.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionLead}><h2>До записи пациент видит не вашу практику. Он видит то, что нашёл в интернете</h2><p>Даже сильный врач может выглядеть слабее конкурента, если на сайте три строки биографии, в одном сервисе старое фото, в другом неверный стаж, отзывам никто не отвечает, а по имени врача почти ничего не находится.</p><p>Мы приводим эту картину в порядок и собираем вокруг врача понятный цифровой образ.</p></Reveal>
          <div className={styles.doctorChecklist}>{["единое позиционирование", "сильная страница врача", "актуальные профили на медицинских площадках", "отзывы", "статьи и видео", "поиск по имени и услугам", "понятный путь к записи"].map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className={styles.sectionLead}><h2>Врач не обязан становиться блогером</h2><p>Главный источник контента — сама врачебная экспертиза. Наша задача — забрать производство на себя.</p></Reveal>
          <div className={styles.contentFlow}>{["30–45 минут интервью", "редактор собирает фактуру", "сценарии, статьи, посты и короткие видео", "врач проверяет медицинскую точность", "команда публикует и распространяет"].map((item) => <span key={item}>{item}</span>)}</div>
          <p className={styles.bigStatement}>Одна нормальная беседа с врачом может дать контент на несколько недель.</p>
        </div>
      </section>

      <section className="section">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Что пациент должен понять о враче до записи</h2></Reveal><div className={styles.outcomeGrid}><article><span>01</span><h3>С чем этот врач действительно работает</h3><p>Не общая специальность, а конкретные проблемы, процедуры и типы пациентов.</p></article><article><span>02</span><h3>Почему ему можно доверять</h3><p>Опыт, обучение, клиническая практика, методики, оборудование, публикации, реальные случаи и отзывы.</p></article><article><span>03</span><h3>Как он работает</h3><p>Понятный подход, отношение к пациенту, этапы консультации и лечения.</p></article><article><span>04</span><h3>Как к нему попасть</h3><p>Актуальное место приёма, расписание, стоимость первого шага и простая запись.</p></article></div></div>
      </section>

      <section className="section section-surface">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Пациент встречает имя врача в разных местах — везде должно быть одинаково убедительно</h2><p>Пациент должен видеть одну и ту же сильную картину независимо от того, где впервые встретил имя врача.</p></Reveal><div className={styles.channelCloud}>{doctorChannels.map((channel) => <span key={channel}>{channel}</span>)}</div></div>
      </section>

      <section className="section" id="doctor-pricing">
        <div className="container"><Reveal className={styles.sectionLead}><h2>Три уровня продвижения врача</h2></Reveal><Pricing /><p className={styles.pricingNote}>Рекламный бюджет, студийные съёмки и платные размещения считаются отдельно.</p></div>
      </section>

      <section className="section section-muted">
        <div className={`container ${styles.twoColumnStatement}`}><h2>Продвигать сильного врача выгодно и клинике, и самому врачу</h2><div><p>Клиника получает более сильное направление и специалиста, которого проще выбирать пациентам. Врач получает актив, который усиливает его репутацию и профессиональное имя.</p><p>При совместном проекте заранее фиксируем правила работы с аккаунтами, контентом и обращениями — без вынесения юридических деталей в продающий экран.</p></div></div>
      </section>

      <section className="section">
        <div className={`container ${styles.auditOffer}`}><div><p className={styles.eyebrow}>Doctor Audit</p><h2>Посмотрим, что пациент видит о враче прямо сейчас</h2><p>Проверим поиск по имени, сайт, медицинские площадки, отзывы, контент и путь к записи. После аудита будет понятно, что исправить первым и какие каналы стоит подключать дальше.</p><ButtonLink href="/diagnostic#form">Заказать аудит врача</ButtonLink></div><div className={styles.auditPrice}><strong>80 000 ₽</strong><span>7–10 рабочих дней</span></div></div>
      </section>

      <CTASection cta={{ title: "Хотите, чтобы имя врача само помогало приводить пациентов?", description: "Пришлите ФИО врача, специализацию, город и ссылки на текущие страницы. Посмотрим цифровое присутствие и предложим формат продвижения.", label: "Обсудить продвижение врача", href: "/diagnostic#form" }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "K‑Medical Doctor", provider: { "@type": "Organization", name: "K‑Medical", url: baseUrl }, description: metadata.description }} />
    </main>
  );
}
