import type {
  EvidenceItem,
  GrowthEngine,
  JourneyStep,
  NavigationItem,
  PricingPlan,
  TeamMember,
} from "./types";

export const siteName = "K‑Medical";

export const navigation: NavigationItem[] = [
  { label: "Клиникам", href: "/" },
  { label: "Стоматологиям", href: "/stomatology" },
  { label: "Врачам", href: "/doctor" },
  { label: "Диагностика", href: "/diagnostic" },
  { label: "Материалы", href: "/articles" },
];

export const patientJourney: JourneyStep[] = [
  { key: "demand", label: "Спрос", shortLabel: "Спрос" },
  { key: "site", label: "Сайт / карточка", shortLabel: "Выбор" },
  { key: "contact", label: "Обращение", shortLabel: "Контакт" },
  { key: "admin", label: "Администратор", shortLabel: "Обработка" },
  { key: "booking", label: "Запись", shortLabel: "Запись" },
  { key: "attendance", label: "Доходимость", shortLabel: "Доходимость" },
  { key: "visit", label: "Визит", shortLabel: "Визит" },
  { key: "payment", label: "Оплата", shortLabel: "Оплата" },
  { key: "repeat", label: "Повтор", shortLabel: "Повтор" },
];

export const growthEngines: GrowthEngine[] = [
  {
    title: "Спрос",
    description:
      "Находим направления, где у клиники есть экономика и свободная мощность, и приводим туда спрос.",
    detail:
      "Под задачу используем Яндекс Директ, SEO, карты, медицинские площадки, посадочные страницы, контент и другие релевантные каналы.",
  },
  {
    title: "Доверие и выбор",
    description:
      "Пациент редко выбирает только услугу. Он сравнивает клинику, врача, отзывы, цены, подход, оборудование, понятность коммуникации.",
    detail:
      "Мы собираем эту картину так, чтобы сильные стороны были видны и доказаны, а не спрятаны внутри клиники.",
  },
  {
    title: "Повторная выручка",
    description:
      "Рост — это не только новые пациенты. В базе уже есть люди, которым нужен контрольный визит, продолжение лечения, профилактика или незавершённый план.",
    detail:
      "Помогаем сегментировать базу и строить корректные сценарии возврата.",
  },
];

export const measurementLevels = [
  {
    title: "Обращение",
    description: "Фиксируем источник и квалификацию обращения.",
  },
  {
    title: "Запись",
    description: "Связываем обращение с фактом записи и скоростью ответа.",
  },
  {
    title: "Визит",
    description: "Проверяем доходимость, если данные клиники доступны.",
  },
  {
    title: "Оплата",
    description: "Не приписываем выручку источнику без корректной связи.",
  },
];

export const evidenceItems: EvidenceItem[] = [
  {
    title: "Карта пути пациента",
    description:
      "Показывает этапы, точки потерь и текущую глубину данных без выдуманной сквозной атрибуции.",
    status: "approach-diagram",
  },
  {
    title: "90-дневный план",
    description:
      "Фиксирует приоритеты, ограничения, гипотезы и критерии следующего управленческого цикла.",
    status: "confirmed-public",
  },
  {
    title: "Собственные кейсы K‑Medical",
    description:
      "Будут опубликованы после подтверждения цифр, методики расчёта и разрешения клиента.",
    status: "unconfirmed",
  },
];

export const coreTeam: TeamMember[] = [
  {
    name: "Ксения Лукьянова",
    role: "Руководитель K‑Medical, стратегия и рост",
    description:
      "Отвечает за стратегию клиники, выбор приоритетных направлений, продуктовую упаковку и общую экономику проекта.",
    initials: "КЛ",
    status: "requires-confirmation",
  },
  {
    name: "Владислав Тислюк",
    role: "IT, автоматизация и медицинская аналитика",
    description:
      "Отвечает за CRM/МИС, интеграции, коллтрекинг, дашборды и связь маркетинга с реальным путём пациента.",
    initials: "ВТ",
    status: "requires-confirmation",
  },
  {
    name: "Екатерина",
    role: "Продуктовый маркетинг и ведение проектов",
    description:
      "Соединяет стратегию с реализацией, ведёт план проекта, синхронизирует специалистов и контролирует согласования.",
    initials: "Е",
    status: "requires-confirmation",
  },
];

export const specialistRoles = [
  "Performance и Яндекс Директ",
  "SEO-стратегия",
  "Карты и репутация",
  "Медицинская редактура",
  "UX/UI и разработка",
  "CRM/МИС-интеграции",
  "Видео и YouTube",
  "Контент-дистрибуция",
];

export const doctorPlans: PricingPlan[] = [
  {
    name: "Doctor Presence",
    price: "110 000 ₽/мес.",
    launch: "Запуск: 60 000 ₽",
    term: "Минимум 3 месяца",
    description:
      "Цифровая упаковка, профили, репутация, базовый контент и видимость. Для врача, которому нужно привести в порядок присутствие и регулярно накапливать доверие.",
    features: [
      "Аудит цифрового следа",
      "Позиционирование и карта экспертности",
      "Страница врача и медицинские профили",
      "Репутация, базовый контент и видимость",
    ],
  },
  {
    name: "Doctor Growth",
    price: "220 000 ₽/мес.",
    launch: "Запуск: 90 000 ₽",
    term: "Минимум 4 месяца",
    description:
      "Основной продукт: страницы и контент + поиск + медицинские площадки + реклама выбранных услуг + видео + аналитика записи.",
    features: [
      "Всё из Presence",
      "Структура услуг и посадочных страниц",
      "SEO, видео и реклама выбранных услуг",
      "Маршрут записи и аналитика до визита",
    ],
    highlighted: true,
  },
  {
    name: "Doctor Authority",
    price: "от 420 000 ₽/мес.",
    launch: "Запуск: от 150 000 ₽",
    term: "Минимум 6 месяцев",
    description:
      "Для врача-манимейкера или клиники, которая строит вокруг специалиста отдельное направление: персональный сайт, полный контент-контур, видео, PR, paid traffic, репутация, аналитика и работа с базой.",
    features: [
      "Персональный сайт и полный контент-контур",
      "Видео, PR, SEO и paid traffic",
      "Репутация и работа с базой",
      "Управленческий контур и аналитика",
    ],
  },
];

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  vercelProductionUrl ??
  "http://localhost:3000";
