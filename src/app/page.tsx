import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { Team } from "@/components/Team";
import { articles } from "@/content/articles";
import styles from "./pages.module.css";

export const metadata: Metadata = {
  title: "Медицинский маркетинг для частных клиник",
  description:
    "K‑Medical помогает частным клиникам получать больше платящих пациентов: привлечение, доверие к врачам, работа с базой и понятная аналитика.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroNote}>Медицинский маркетинг для частных клиник</p>
            <h1>Приводим платящих пациентов, а не просто заявки</h1>
            <p>
              Выстраиваем системный маркетинг клиники: привлекаем новых пациентов из рекламы, поиска и медицинских площадок, усиливаем доверие к врачам и возвращаем пациентов из вашей базы.
            </p>
            <p>
              Вы видите, какие каналы дают обращения и записи, куда уходит рекламный бюджет и что стоит усиливать дальше.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="/diagnostic#form" eventLabel="hero-home">
                Обсудить продвижение клиники
              </ButtonLink>
              <ButtonLink href="#what-we-do" variant="secondary" eventLabel="hero-what-we-do">
                Посмотреть, что берём на себя
              </ButtonLink>
            </div>
            <p className={`${styles.heroNote} ${styles.heroSegments}`}>
              <span>Яндекс Директ</span><span>SEO</span><span>Карты</span><span>Медицинские площадки</span><span>Сайт</span><span>Репутация</span><span>Врачи</span><span>CRM‑маркетинг</span><span>Аналитика</span>
            </p>
          </div>
          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.metricsStatement}>
              <h2>Новые пациенты + доверие + база + аналитика</h2>
              <p>Одна команда связывает основные задачи маркетинга клиники в понятную систему.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.problemLayout}`}>
          <div className={styles.problemStatement}>
            <h2>Вам нужны не лиды. Вам нужны пациенты, которые записываются, приходят и платят</h2>
            <p>
              Можно получить красивый отчёт с низкой ценой заявки — и не почувствовать этого в клинике. Поэтому смотрим не на одну цифру из рекламного кабинета, а на то, что происходит дальше.
            </p>
          </div>
          <div className={styles.problemExamples}>
            <article><strong>Больше новых пациентов</strong><p>Привлекаем спрос через Яндекс, поиск, карты, медицинские сервисы и другие каналы, которые подходят вашей клинике.</p></article>
            <article><strong>Больше записей из обращений</strong><p>Настраиваем учёт звонков и заявок, чтобы команда видела, кому уже ответили и с кем нужно связаться.</p></article>
            <article><strong>Больше повторных обращений</strong><p>Работаем с пациентской базой: повторные визиты, незавершённые планы лечения, напоминания и реактивация.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading
            title="Три части маркетинга, которые должны работать вместе"
            description="Пациент сначала находит клинику, затем сравнивает, смотрит врача и отзывы, принимает решение о записи — а после первого визита отношения с ним не должны заканчиваться."
          />
          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <h3>Привлекаем новых пациентов</h3>
              <p>Яндекс Директ, SEO, карты, геосервисы, медицинские площадки, контент, нативные размещения и другие источники спроса.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Помогаем выбрать вашу клинику и врача</h3>
              <p>Сайт, страницы услуг, карточки врачей, отзывы, фотографии, видео, контент и репутация отвечают пациенту на вопрос: «Почему мне идти именно сюда?»</p>
            </article>
            <article>
              <span>03</span>
              <h3>Возвращаем пациентов, которые уже вас знают</h3>
              <p>Повторные визиты, незавершённые планы лечения, пациенты, которые не дошли или давно не были в клинике, — отдельный источник записей.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.metricsStatement}>
            <h2>Вы понимаете, за что платите и откуда приходят пациенты</h2>
            <p>
              Собственнику не нужен ещё один кабинет с графиками. Нужен понятный ответ: откуда пришли обращения и записи, сколько стоило привлечение и что делать с бюджетом дальше.
            </p>
            <p>
              Настраиваем источники обращений, звонки и формы, запись на приём, рекламные расходы, отчётность по основным каналам и связку с CRM / МИС там, где она нужна проекту.
            </p>
            <p><strong>Вы в любой момент понимаете, что сейчас работает, что мы тестируем и куда идут деньги.</strong></p>
          </div>
        </div>
      </section>

      <section className="section section-surface" id="what-we-do">
        <div className="container">
          <SectionHeading title="Вы можете передать нам весь основной маркетинг клиники" />
          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <h3>Привлечение</h3>
              <p>Яндекс Директ, SEO, Яндекс Карты / Бизнес и 2ГИС, медицинские агрегаторы, посадочные страницы, медийная и нативная реклама.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Доверие</h3>
              <p>Сайт клиники, страницы услуг и врачей, отзывы и репутация, медицинские площадки, SMM, YouTube, видео и экспертный контент.</p>
            </article>
            <article>
              <span>03</span>
              <h3>База и аналитика</h3>
              <p>CRM‑маркетинг, рассылки и напоминания, возврат пациентов, контроль обращений, коллтрекинг, CRM / МИС, дашборды и автоматизация коммуникаций.</p>
            </article>
          </div>
          <div className={styles.analyticsStrip}>
            <p>Не обязательно покупать всё сразу. Состав работы зависит от задачи клиники.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Вы не координируете пять подрядчиков. У вас одна команда по медицинскому маркетингу"
            description="Стратегия, реклама, SEO, сайт, аналитика, репутация и контент работают по одному плану."
          />
          <Team />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading title="Можно начать с одной задачи или передать нам маркетинг клиники целиком" />
          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <h3>Диагностика — 150 000 ₽</h3>
              <p>Разбираем текущий маркетинг и показываем, что имеет смысл менять в первую очередь. Срок — до 10 рабочих дней.</p>
              <ButtonLink href="/diagnostic" variant="secondary" eventLabel="home-diagnostic">Подробнее о диагностике</ButtonLink>
            </article>
            <article>
              <span>02</span>
              <h3>Сопровождение — от 200 000 ₽/мес.</h3>
              <p>Берём на себя основные задачи маркетинга по одному или нескольким направлениям. Рекламный бюджет оплачивается отдельно.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Основной формат — 300 000 ₽/мес.</h3>
              <p>Для клиник, которым нужен регулярный поток новых пациентов и одна команда, отвечающая за основные каналы продвижения, сайт, репутацию и аналитику.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Расширенная команда — от 490 000 ₽/мес.</h3>
              <p>Для многопрофильных клиник и небольших сетей, где одновременно работают несколько направлений и большой рекламный бюджет.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <SectionHeading title="Пишем о том, что влияет на поток пациентов и выручку клиники" />
          <div className={styles.articleGrid}>
            {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <CTASection cta={{
        title: "Посмотрим, как сейчас устроен ваш маркетинг и где можно получить больше пациентов",
        description: "Покажите сайт и расскажите, какие направления хотите продвигать. На первой встрече разберём текущую ситуацию и предложим подходящий формат работы.",
        label: "Обсудить продвижение",
        href: "/diagnostic#form",
      }} />
    </main>
  );
}
