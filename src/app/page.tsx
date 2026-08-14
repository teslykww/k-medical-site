import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { EvidenceCards, MeasurementDepth } from "@/components/Evidence";
import { GrowthEngines } from "@/components/GrowthEngines";
import { HeroRouteVisual, PatientJourney } from "@/components/PatientJourney";
import { SectionHeading } from "@/components/SectionHeading";
import { Team } from "@/components/Team";
import { articles } from "@/content/articles";
import styles from "./pages.module.css";

export const metadata: Metadata = {
  title: "Маркетинг частной клиники от спроса до оплаты",
  description:
    "Помогаем клинике выбрать направления, привлекать пациентов и видеть путь от обращения до записи, визита, оплаты и повтора.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1>Маркетинг частной клиники — от спроса до пациента и оплаты</h1>
            <p>
              Помогаем выбрать направления, которые действительно имеет смысл масштабировать, привлекать пациентов, усиливать доверие к клинике и врачам и видеть, что происходит дальше заявки: запись, визит, оплата и повтор.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="/diagnostic#form" eventLabel="hero-home">
                Разобрать текущую систему привлечения пациентов
              </ButtonLink>
              <ButtonLink href="#approach" variant="secondary" eventLabel="hero-approach">
                Посмотреть, как мы работаем
              </ButtonLink>
            </div>
            <p className={`${styles.heroNote} ${styles.heroSegments}`}>
              <span>Клиники</span><span>Стоматологии</span><span>Сильные врачи</span><span>Маркетинг + аналитика + автоматизация</span>
            </p>
          </div>
          <div className={styles.heroVisual}><HeroRouteVisual /></div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.problemLayout}`}>
          <div className={styles.problemStatement}>
            <h2>Лиды сами по себе не лечат экономику клиники</h2>
            <p>
              Наша задача — найти главное ограничение в этой цепочке и работать сначала с ним, а не «подключать всё подряд».
            </p>
          </div>
          <div className={styles.problemExamples}>
            <article><strong>Реклама</strong><p>Можно снизить стоимость заявки — и не получить больше денег.</p></article>
            <article><strong>Обработка</strong><p>Можно привести больше звонков — и потерять их у администратора.</p></article>
            <article><strong>Мощность</strong><p>Можно рекламировать направление, у которого нет свободных окон.</p></article>
            <article><strong>Доверие</strong><p>Можно сделать красивый сайт врача — но пациент всё равно увидит противоречивые отзывы и уйдёт сравнивать дальше.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-surface" id="approach">
        <div className="container">
          <SectionHeading
            title="Весь путь пациента, а не только заявка"
            description="Спрос → сайт / карточка → обращение → администратор → запись → доходимость → визит → оплата → повтор"
          />
          <div className={styles.journeyPanel}>
            <p>
              Мы смотрим на весь путь пациента. Каждая точка маршрута может стать ограничением, поэтому сначала определяем главное из них, а не подключаем инструменты без приоритета.
            </p>
            <PatientJourney />
          </div>
          <div className={styles.analyticsStrip}>
            <h3>Сквозной слой — конверсия и аналитика</h3>
            <p>
              Коллтрекинг, CRM/МИС, источники, записи, визиты и оплаты. Настолько глубоко, насколько позволяют данные клиники. Если сквозной атрибуции нет, мы не делаем вид, что она есть. Сначала строим измеримый контур.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Три двигателя роста K‑Medical" />
          <GrowthEngines />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container"><MeasurementDepth /></div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="С чего начинаем" />
          <div className={styles.processGrid}>
            <article><span>01</span><h3>Диагностика</h3><p>Экономика направлений, спрос, загрузка врачей, сайт, реклама, отзывы, обработка обращений, CRM/МИС и база пациентов.</p></article>
            <article><span>02</span><h3>Приоритет</h3><p>Выбираем 1–3 направления, а не пытаемся одновременно «продвигать всю клинику».</p></article>
            <article><span>03</span><h3>90-дневный цикл</h3><p>Подготавливаем контур, запускаем гипотезы, измеряем, усиливаем рабочее.</p></article>
            <article><span>04</span><h3>Масштабирование</h3><p>Добавляем бюджет, направления и инструменты только после появления понятной экономики.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className={`container ${styles.fitLayout}`}>
          <article>
            <h3>Когда мы особенно полезны</h3>
            <ul>
              <li>Клиника уже тратит деньги на рекламу, но собственник не понимает, что происходит после обращения.</li>
              <li>Нужно загрузить конкретные маржинальные направления.</li>
              <li>Есть сильные врачи, но они почти не работают как актив маркетинга.</li>
              <li>Маркетинг, администраторы и CRM живут отдельно друг от друга.</li>
              <li>Есть база пациентов, но с ней системно не работают.</li>
              <li>Планируется новый филиал или рост бюджета, и важно не масштабировать хаос.</li>
            </ul>
          </article>
          <article>
            <h3>Когда не советуем наращивать рекламу</h3>
            <p>
              Если у врача нет свободных окон, клиника не знает экономику направления, обращения обрабатываются слишком медленно или невозможно понять источник пациента, сначала устраняем это. Дополнительный трафик в сломанную систему обычно просто делает потери дороже.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.metricsStatement}>
            <h2>Управляем маркетингом по деньгам, а не по ощущениям</h2>
            <p>
              Обращения → квалифицированные обращения → записи → визиты → новые пациенты → оплаты → повторные оплаты. Набор метрик зависит от систем клиники. На старте фиксируем, что реально можно измерить сейчас и что нужно добавить, чтобы управлять маркетингом по деньгам, а не по ощущениям.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            title="Не один маркетолог. Команда вокруг пути пациента"
            description="Под задачу подключаем performance, SEO, репутацию и карты, медицинскую редактуру, дизайн и разработку, CRM/МИС-интеграции, SMM и видеопродакшн."
          />
          <Team />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Доказательства без приписывания чужих результатов"
            description="Пока собственные кейсы K‑Medical не подтверждены, показываем методику и артефакты процесса. Публичные кейсы других компаний не выдаём за свои."
          />
          <EvidenceCards />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading title="Материалы для собственников клиник" />
          <div className={styles.articleGrid}>
            {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <CTASection cta={{
        title: "Разобрать, где сейчас теряются пациенты и что имеет смысл масштабировать первым",
        description: "На первой встрече не будем продавать вам «всё агентство». Сначала разберём текущую ситуацию, приоритетные направления и данные, которые уже есть.",
        label: "Записаться на диагностическую встречу",
        href: "/diagnostic#form",
      }} />
    </main>
  );
}
