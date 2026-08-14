import Image from "next/image";
import {
  CalendarCheck,
  ChartLineUp,
  CheckCircle,
  CreditCard,
  MapPin,
  Repeat,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react/dist/ssr";
import { patientJourney } from "@/content/site";
import styles from "./site.module.css";

const icons = [
  Target,
  ShieldCheck,
  ChartLineUp,
  CheckCircle,
  CalendarCheck,
  CheckCircle,
  MapPin,
  CreditCard,
  Repeat,
];

export function HeroRouteVisual() {
  return (
    <div className={styles.heroRouteVisual} aria-label="Схема пути пациента">
      <Image
        src="/images/patient-journey-route.png"
        alt="Маршрут пациента от спроса до повторного визита"
        width={1600}
        height={1120}
        priority
        sizes="(max-width: 767px) 100vw, 54vw"
      />
      <div className={styles.heroRouteLabels} aria-hidden>
        <span className={styles.routeLabelDemand}>Спрос</span>
        <span className={styles.routeLabelTrust}>Доверие</span>
        <span className={styles.routeLabelContact}>Обращение</span>
        <span className={styles.routeLabelBooking}>Запись</span>
        <span className={styles.routeLabelVisit}>Визит</span>
        <span className={styles.routeLabelPayment}>Оплата</span>
        <span className={styles.routeLabelRepeat}>Повтор</span>
      </div>
    </div>
  );
}

export function PatientJourney({
  compact = false,
  labels,
}: {
  compact?: boolean;
  labels?: string[];
}) {
  return (
    <ol className={`${styles.journey} ${compact ? styles.journeyCompact : ""}`}>
      {patientJourney.map((step, index) => {
        const Icon = icons[index];
        return (
          <li key={step.key}>
            <span className={styles.journeyIcon}>
              <Icon aria-hidden size={19} weight="regular" />
            </span>
            <span>{labels?.[index] ?? (compact ? step.shortLabel : step.label)}</span>
          </li>
        );
      })}
    </ol>
  );
}
