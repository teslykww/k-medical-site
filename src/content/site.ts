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
  { label: "Статьи", href: "/articles" },
];

export const patientJourney: JourneyStep[] = [
  { key: "demand", label: "Спрос", shortLabel: "Спрос" },
  { key: "site", label: "Клиника / врач", shortLabel: "Выбор" },
  { key: "contact", label: "Обращение", shortLabel: "Контакт" },
  { key: "admin", label: "Ответ", shortLabel: "Ответ" },
  { key: "booking", label: "Запись", shortLabel: "Запись" },
  { key: "attendance", label: "Доходимость", shortLabel: "Доходимость" },
  { key: "visit", label: "Визит", shortLabel: "Визит" },
  { key: "payment", label: "Оплата", shortLabel: "Оплата" },
  { key: "repeat", label: "Повтор", shortLabel: "Повтор" },
];

export const growthEngines: GrowthEngine[] = [
  {
    title: "Привлекаем новых пациентов",
    description:
      "Яндекс Директ, SEO, карты, медицинские площадки, контент, нативные размещения и другие источники спроса.",
    detail:
      "Не подключаем каналы ради галочки. Выбираем те, где есть ваша аудитория и понятная задача.",
  },
  {
    title: "Помогаем выбрать клинику и врача",
    description:
      "Сайт, страницы услуг, карточки врачей, отзывы, фотографии, видео, контент и репутация отвечают пациенту на вопрос: почему идти именно сюда?",
    detail:
      "Сильные стороны клиники показываем там, где пациент принимает решение.",
  },
  {
    title: "Возвращаем пациентов, которые уже вас знают",
    description:
      "Повторные визиты, незавершённые планы лечения, пациенты, которые не дошли или давно не были в клинике, — отдельный источник записей.",
    detail:
      "Работаем с базой через понятные сценарии возврата и напоминаний.",
  },
];

export const measurementLevels = [
  {
    title: "Обращения",
    description: "Показываем, какие источники дают звонки и заявки.",
  },
  {
    title: "Записи",
    description: "Видим, сколько обращений превращается в запись на приём.",
  },
  {
    title: "Визиты",
    description: "Смотрим доходимость и реальный поток новых пациентов.",
  },
  {
    title: "Оплаты",
    description: "Для проектов с нужными данными связываем маркетинг с фактическим результатом по направлению.",
  },
];

export const evidenceItems: EvidenceItem[] = [
  {
    title: "Понятная отчётность",
    description:
      "Источники обращений, звонки и формы, записи, рекламные расходы и основные результаты по каналам.",
    status: "approach-diagram",
  },
  {
    title: "Контроль входящих",
    description:
      "Видно, кому уже ответили, какой запрос остался без ответа и с кем стоит связаться повторно.",
    status: "approach-diagram",
  },
  {
    title: "Артефакты работы",
    description:
      "Страницы услуг и врачей, рекламные материалы, карты, отзывы, отчёты и другие реальные результаты работы команды.",
    status: "confirmed-public",
  },
];

export const coreTeam: TeamMember[] = [
  {
    name: "Ксения Лукьянова",
    role: "Руководитель K‑Medical, маркетинговая стратегия",
    description:
      "Отвечает за стратегию продвижения, позиционирование, выбор каналов и общий результат проекта.",
    initials: "КЛ",
    status: "confirmed",
  },
  {
    name: "Владислав Тислюк",
    role: "IT, автоматизация и аналитика",
    description:
      "Отвечает за CRM / МИС, интеграции, коллтрекинг, аналитику и автоматизацию маркетинга.",
    initials: "ВТ",
    status: "confirmed",
  },
  {
    name: "Екатерина",
    role: "Продуктовый маркетолог, руководитель проектов",
    description:
      "Ведёт проект внутри команды: координирует специалистов, контент, задачи, согласования и запуск.",
    initials: "Е",
    status: "requires-confirmation",
  },
];

export const specialistRoles = [
  "Яндекс Директ и performance",
  "SEO и поисковое продвижение",
  "Карты и репутация",
  "Медицинская редактура",
  "UX/UI и разработка",
  "CRM/МИС-интеграции",
  "Видео и YouTube",
  "SMM и контент-дистрибуция",
];

export const doctorPlans: PricingPlan[] = [
  {
    name: "Присутствие",
    price: "110 000 ₽/мес.",
    launch: "Запуск — 60 000 ₽",
    term: "Минимум 3 месяца",
    description:
      "Приводим в порядок цифровой образ врача: позиционирование, страница, медицинские площадки, отзывы и регулярный экспертный контент.",
    features: [
      "Аудит цифрового присутствия",
      "Позиционирование и карта экспертности",
      "Страница врача и медицинские профили",
      "Отзывы и регулярный экспертный контент",
    ],
  },
  {
    name: "Рост",
    price: "220 000 ₽/мес.",
    launch: "Запуск — 90 000 ₽",
    term: "Минимум 4 месяца",
    description:
      "Добавляем системное привлечение: поиск, рекламные кампании по выбранным услугам, SEO‑контент, видео и аналитику записей.",
    features: [
      "Всё из «Присутствия»",
      "Структура услуг и посадочных страниц",
      "SEO, видео и платная реклама",
      "Маршрут записи и аналитика",
    ],
    highlighted: true,
  },
  {
    name: "Личный бренд как отдельное направление",
    price: "от 420 000 ₽/мес.",
    launch: "Запуск — от 150 000 ₽",
    term: "Минимум 6 месяцев",
    description:
      "Персональный сайт, большая контент‑система, YouTube / видео, PR, поиск, реклама, репутация и работа с текущей аудиторией.",
    features: [
      "Персональный сайт и большая контент‑система",
      "Видео, PR, SEO и платная реклама",
      "Репутация и работа с текущей аудиторией",
      "Аналитика и регулярное управление продвижением",
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
