import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Cases } from "@/components/Cases";
import { ChannelServicesCatalog } from "@/components/ChannelServicesCatalog";
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
import type { CoreProductDetailId } from "@/content/types";
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
] satisfies Array<{ detailId: CoreProductDetailId; title: string; price: string; text: string }>;

const diagnosticOutcomes = [
  "Где клиника теряет пациентов",
  "Какие точки роста стоит использовать первыми",
  "Какие задачи поставить в приоритет",
  "Какие инструменты подходят под текущую ситуацию",
  "План действий на следующий период",
];

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

      <section className={`section ${styles.outcomeIntroSection}`}>
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Вам нужны не лиды. Вам нужны пациенты, которые записываются, приходят и платят</h2>
            <p>Можно получить красивый отчёт с низкой ценой заявки — и не почувствовать этого в клинике.</p>
            <p>Поэтому мы смотрим, откуда приходят обращения, сколько людей записываются, какие услуги и врачи получают больше спроса и какие каналы действительно стоит масштабировать.</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.medicineContextSection}>
        <div className="container">
          <Reveal>
            <article className={styles.medicineContext}>
              <h2>Почему медицина особенная</h2>
              <p className={styles.medicineContextLead}>В медицинском маркетинге недостаточно просто купить трафик.</p>
              <p>Пациент выбирает не только услугу. Он выбирает клинику и врача. Поэтому на решение влияют репутация, отзывы, экспертность и то, насколько легко сделать следующий шаг к записи.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <Reveal className={styles.sectionLead}>
            <h2>Три части маркетинга, которые должны работать вместе</h2>
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
            <article>
              <span className={styles.serviceCardLabel}>Привлечение</span>
              <h3>Привлекаем новых пациентов</h3>
              <p>Подключаем спрос на выбранные услуги и ведём пациента в понятную точку обращения.</p>
            </article>
            <article>
              <span className={styles.serviceCardLabel}>Сайт и доверие</span>
              <h3>Помогаем пациенту выбрать вашу клинику и врача</h3>
              <p>Помогаем пациенту понять предложение, увидеть сильных врачей и решиться на обращение.</p>
            </article>
            <article>
              <span className={styles.serviceCardLabel}>База и управление</span>
              <h3>Возвращаем пациентов и показываем, что реально работает</h3>
              <p>Связываем обращения, повторные коммуникации и данные, чтобы ни один канал не жил отдельно от клиники.</p>
            </article>
          </div>
          <p className={styles.serviceNote}><strong>Не обязательно подключать всё сразу. Начинаем с тех направлений и задач, которые сейчас дадут клинике наибольший эффект.</strong></p>
          <ChannelServicesCatalog />
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

      <section className={`section section-muted ${styles.diagnosticOfferSection}`}>
        <div className={`container ${styles.auditOffer} ${styles.auditOfferDetailed}`}>
          <div className={styles.auditOfferCopy}>
            <p className={styles.eyebrow}>Если пока неясно, с чего начинать</p>
            <h2>Диагностика маркетинга клиники</h2>
            <p>Разберём, где клиника теряет пациентов, что уже работает и куда направить усилия и бюджет в первую очередь.</p>
            <p>За 10 рабочих дней изучим маркетинг, путь пациента и ключевые точки контакта, а затем соберём конкретный план запуска.</p>
            <ButtonLink href="/diagnostic">Посмотреть диагностику</ButtonLink>
          </div>
          <aside className={styles.auditResult} aria-label="Результаты и условия диагностики">
            <p className={styles.auditResultLabel}>На выходе вы получаете</p>
            <ul>
              {diagnosticOutcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className={styles.auditTerms}>
              <strong>150 000 ₽</strong>
              <span>до 10 рабочих дней</span>
            </div>
            <p className={styles.auditCredit}>100 000 ₽ засчитываются при переходе в основное сопровождение.</p>
          </aside>
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
