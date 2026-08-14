import Image from "next/image";
import { Check, LockKey, Path } from "@phosphor-icons/react/dist/ssr";
import { evidenceItems, measurementLevels } from "@/content/site";
import styles from "./site.module.css";

export function MeasurementDepth() {
  return (
    <div className={styles.measurementLayout}>
      <div className={styles.measurementCopy}>
        <h2>Измеряем настолько глубоко, насколько позволяют данные</h2>
        <p>
          Если сквозной атрибуции нет, мы не делаем вид, что она есть. Фиксируем текущую глубину и достраиваем следующий уровень.
        </p>
        <span className={styles.demonstrationLabel}>DEMONSTRATION / не клиентские данные</span>
      </div>
      <div className={styles.measurementImage}>
        <Image
          src="/images/measurement-depth.png"
          alt="Схема глубины измерения от обращения до оплаты"
          width={1600}
          height={980}
          sizes="(max-width: 767px) 100vw, 65vw"
        />
      </div>
      <div className={styles.measurementLevels}>
        {measurementLevels.map((level, index) => (
          <article key={level.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{level.title}</h3>
            <p>{level.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

const evidenceIcons = [Path, Check, LockKey];

export function EvidenceCards() {
  return (
    <div className={styles.evidenceCards}>
      {evidenceItems.map((item, index) => {
        const Icon = evidenceIcons[index];
        return (
          <article key={item.title} className={styles.evidenceCard}>
            <Icon aria-hidden size={28} weight="regular" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className={styles.evidenceStatus} data-status={item.status}>
              {item.status === "unconfirmed" ? "Требуются данные" : "Методика K‑Medical"}
            </span>
          </article>
        );
      })}
    </div>
  );
}
