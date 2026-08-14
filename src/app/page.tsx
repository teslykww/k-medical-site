import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Cases } from "@/components/Cases";
import { ChannelTypewriter } from "@/components/ChannelTypewriter";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { HeroExperience } from "@/components/HeroExperience";
import { JsonLd } from "@/components/JsonLd";
import { MarketingStoryStack } from "@/components/MarketingStoryStack";
import { Pricing } from "@/components/Pricing";
import { ProductDetailsTrigger } from "@/components/ProductDetailsTrigger";
import { ReportPreview } from "@/components/ReportPreview";
import { Team } from "@/components/Team";
import { Reveal } from "@/components/motion/Reveal";
import { articles } from "@/content/articles";
import { productDetails } from "@/content/products";
import { baseUrl, clinicFaq, clinicPlans, siteName } from "@/content/site";
import type { ProductDetailId } from "@/content/types";
import styles from "./pages.module.css";

export const metadata: Metadata = {
  title: "Медицинский маркетинг для частных клиник",
  description:
    "K‑Medical помогает частным клиникам получать больше платящих пациентов: реклама, поиск, сайт, репутация, продвижение врачей, база и аналитика.",
  alternates: { canonical: "/" },
};

const focusArticles = [
  "svyazat-reklamu-i-oplaty",
  "gde-klinika-teryaet-pacienta",
  "vozvrat-pacientov-iz-bazy",
].map((slug) => articles.find((article) => article.slug === slug)).filter(Boolean);

const focusedProducts = [
  {
    detailId: "clinic-priorities",
    title: "Какие услуги стоит развивать",
    price: "150 000 ₽",
    text: "Выбираем 1–3 приоритетных направления и считаем разумные ориентиры по спросу, загрузке и маркетинговому бюджету.",
  },
  {
    detailId: "clinic-analytics",
    title: "Аналитика и атрибуция",
    price: "180 000 ₽",
    text: "Приводим в порядок источники, UTM, звонки, формы, основные стадии обращения и отчётность — чтобы было понятно, какие каналы приводят записи.",
  },
  {
    detailId: "clinic-conversion",
    title: "Входящие обращения и конверсия",
    price: "120 000 ₽",
    text: "Помогаем получать больше записей из уже оплаченных звонков и заявок: пропущенные, скорость ответа, повторные касания и контроль обработки.",
  },
] satisfies Array<{ detailId: ProductDetailId; title: string; price: string; text: string }>;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className={styles.heroV2}>
        <div className={`container ${styles.heroV2Grid}`}>
          <div className={styles.heroV2Copy}>
            <p className={styles.eyebrow}>Медицинский маркетинг для частных клиник</p>
            <h1>Приводим платящих пациентов, а не просто заявки</h1>
            <p>
              Выстраиваем системный маркетинг клиники: привлекаем новых пациентов из рекламы, поиска и медицинских площадок, усиливаем доверие к врачам и возвращаем пациентов из вашей базы.
            </p>
            <p>
              Вы видите, какие каналы дают обращения и записи, куда уходит рекламный бюджет и что стоит усиливать дальше.
            </p>
            <div className={styles.heroActions}>
              <ButtonLink href="/diagnostic#form">Обсудить продвижение клиники</ButtonLink>
              <ButtonLink href="#services" variant="secondary">Посмотреть, что берём на себя</ButtonLink>
            </div>
          </div>
          <HeroExperience />
        </div>
        <div className={`container ${styles.channelLine}`}><ChannelTypewriter /></div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Вам нужны не лиды. Вам нужны пациенты, которые записываются, приходят и платят</h2>
            <p>Можно получить красивый отчёт с низкой ценой заявки — и не почувствовать этого в клинике.</p>
            <p>Поэтому мы смотрим, откуда приходят обращения, сколько людей записываются, какие услуги и врачи получают больше спроса и какие каналы действительно стоит масштабировать.</p>
          </Reveal>
          <div className={styles.outcomeGrid}>
            <Reveal delay={0.04}><article><span>01</span><h3>Больше новых пациентов</h3><p>Привлекаем спрос через Яндекс, поиск, карты, медицинские сервисы и другие каналы, которые подходят вашей клинике.</p></article></Reveal>
            <Reveal delay={0.10}><article><span>02</span><h3>Больше записей из уже полученных обращений</h3><p>Настраиваем учёт звонков и заявок, чтобы входящие не терялись, а команда видела, с кем уже связались и кому нужно ответить или перезвонить.</p></article></Reveal>
            <Reveal delay={0.16}><article><span>03</span><h3>Больше повторных обращений</h3><p>Работаем с пациентской базой: повторные визиты, незавершённые планы лечения, напоминания, реактивация и персональные сценарии коммуникации.</p></article></Reveal>
          </div>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Три части маркетинга, которые должны работать вместе</h2>
            <p>Новый пациент редко приходит из одной рекламной кнопки. Сначала он вас находит, потом сравнивает, читает отзывы, смотрит врача и только после этого решает записаться. А после первого визита отношения с ним не должны заканчиваться.</p>
          </Reveal>
          <MarketingStoryStack />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <Reveal className={styles.reportIntro}>
            <div>
              <h2>Вы понимаете, за что платите и откуда приходят пациенты</h2>
              <p>Собственнику не нужен ещё один кабинет с графиками. Нужен понятный ответ: откуда пришли пациенты, сколько стоило привлечение и что делать с бюджетом дальше.</p>
            </div>
            <ul>
              <li>источники обращений</li><li>звонки и формы</li><li>запись на приём</li><li>рекламные расходы</li><li>отчётность по основным каналам</li><li>связка с CRM / МИС</li>
            </ul>
          </Reveal>
          <ReportPreview />
          <p className={styles.bigStatement}>Вы в любой момент понимаете, что сейчас работает, что мы тестируем и куда идут деньги.</p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal className={styles.sectionLead}><h2>Вы можете передать нам весь основной маркетинг клиники</h2></Reveal>
          <div className={styles.serviceColumns}>
            <article><h3>Привлечение</h3><p>Яндекс Директ, SEO и поисковое продвижение, Яндекс Карты / Бизнес и 2ГИС, медицинские агрегаторы, посадочные страницы, медийная и нативная реклама, блогеры, если это подходит задаче.</p></article>
            <article><h3>Доверие</h3><p>Сайт клиники, страницы услуг, упаковка врачей, отзывы и репутация, медицинские сервисы, SMM, YouTube, видео и экспертный контент.</p></article>
            <article><h3>База и аналитика</h3><p>CRM‑маркетинг, рассылки и напоминания, возврат пациентов, контроль обращений, коллтрекинг, CRM / МИС, дашборды и автоматизация коммуникаций.</p></article>
          </div>
          <p className={styles.serviceNote}>Не обязательно покупать всё сразу. Состав работы зависит от задачи клиники.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Вы не координируете пять подрядчиков. У вас одна команда по медицинскому маркетингу</h2>
            <p>Стратегия, реклама, SEO, сайт, аналитика, репутация и контент работают по одному плану. Вам не нужно отдельно объяснять задачу директологу, разработчику, SEO‑специалисту и SMM‑команде.</p>
          </Reveal>
          <Team />
        </div>
      </section>

      <section className="section" id="cases">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Что уже делала команда в медицинском маркетинге</h2>
            <p>Показываем публичные референсы рынка и структуру доказательств, по которой оформляются задачи, действия, период и результат.</p>
          </Reveal>
          <Cases />
        </div>
      </section>

      <section className="section section-muted">
        <div className={`container ${styles.auditOffer}`}>
          <div>
            <p className={styles.eyebrow}>Если пока неясно, с чего начинать</p>
            <h2>Диагностика маркетинга — 150 000 ₽</h2>
            <p>За 10 рабочих дней разберём рекламу, сайт, врачей, карты, отзывы, входящие обращения, аналитику и базу — и покажем, что действительно стоит менять первым. Диагностика не обязательна, если задача уже понятна и клиника готова сразу к сопровождению.</p>
            <ButtonLink href="/diagnostic">Посмотреть диагностику</ButtonLink>
          </div>
          <div className={styles.auditPrice}><strong>10 рабочих дней</strong><span>100 000 ₽ засчитываются при переходе в основное сопровождение</span></div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Три формата регулярной работы — в зависимости от масштаба задачи</h2>
            <p>Не нужно выбирать тариф по списку функций. Смотрим, сколько направлений вы хотите развивать и какой объём маркетинга действительно нужен клинике.</p>
          </Reveal>
          <Pricing plans={clinicPlans} />
          <article className={styles.supportingProduct}>
            <div>
              <span>Для сложной структуры</span>
              <h3>Enterprise</h3>
              <p>Для 3+ филиалов, нескольких регионов или брендов и сложной CRM / МИС‑архитектуры. Сначала обследование, затем индивидуальный состав команды.</p>
            </div>
            <div className={styles.supportingProductAside}>
              <strong>от 650 000 ₽/мес.</strong>
              <ProductDetailsTrigger detail={productDetails["clinic-enterprise"]} variant="compact" />
            </div>
          </article>
          <p className={styles.pricingNote}>Рекламный бюджет оплачивается отдельно.</p>
          <div className={styles.centerAction}><ButtonLink href="/diagnostic#form">Обсудить, какой формат подойдёт</ButtonLink></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Если полный маркетинг пока не нужен, можно решить одну конкретную задачу</h2>
            <p>Эти продукты нужны, когда проблема уже понятна и нет смысла покупать большое сопровождение ради одной точки.</p>
          </Reveal>
          <div className={styles.focusedProductsGrid}>
            {focusedProducts.map((product, index) => (
              <Reveal key={product.title} className={styles.focusedProductReveal} delay={index * 0.06}>
                <article className={styles.focusedProductCard}>
                  <span>Точечный продукт</span>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <div className={styles.focusedProductFooter}>
                    <strong className={styles.focusedProductPrice}>{product.price}</strong>
                    <ProductDetailsTrigger
                      detail={productDetails[product.detailId]}
                      variant={index === 0 ? "inverse" : "compact"}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <article className={`${styles.supportingProduct} ${styles.supportingProductWarm}`}>
            <div>
              <span>Комплексная подготовка</span>
              <h3>Готовность к росту</h3>
              <p>Приоритеты, аналитика и обработка входящих в одном проекте. Для клиник, которые хотят сначала собрать надёжную основу, а затем масштабировать продвижение.</p>
            </div>
            <div className={styles.supportingProductAside}>
              <strong>390 000 ₽</strong>
              <ProductDetailsTrigger detail={productDetails["clinic-readiness"]} variant="compact" />
            </div>
          </article>
          <div className={styles.centerAction}><ButtonLink href="/diagnostic#form" variant="secondary">Обсудить точечную задачу</ButtonLink></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionLead}><h2>Пишем о том, что влияет на поток пациентов и выручку клиники</h2></Reveal>
          <div className={styles.articleGridWide}>{focusArticles.map((article) => article ? <ArticleCard key={article.slug} article={article} /> : null)}</div>
          <div className={styles.centerAction}><ButtonLink href="/articles" variant="secondary">Все статьи</ButtonLink></div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className={styles.sectionLead}><h2>Частые вопросы</h2></Reveal>
          <FAQ items={clinicFaq} />
        </div>
      </section>

      <CTASection cta={{
        title: "Посмотрим, как сейчас устроен ваш маркетинг и где можно получить больше пациентов",
        description: "Покажите сайт и расскажите, какие направления хотите продвигать. На первой встрече разберём текущую ситуацию и скажем, какой формат работы здесь имеет смысл.",
        label: "Обсудить продвижение",
        href: "/diagnostic#form",
      }} />

      <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: siteName, url: baseUrl, description: metadata.description }} />
    </main>
  );
}
