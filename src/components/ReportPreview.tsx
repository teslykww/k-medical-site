import Image from "next/image";
import styles from "./site.module.css";

export function ReportPreview({
  src = "/images/analytics-report-v2.webp",
  alt = "Демонстрационный пример отчётности по маркетингу клиники",
  label = "Пример отчётности",
  priority = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  priority?: boolean;
}) {
  return (
    <figure className={styles.reportPreview}>
      <div className={styles.reportImage}>
        <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 767px) 100vw, 66vw" />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
