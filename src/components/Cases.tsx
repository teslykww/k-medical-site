import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { referenceCases } from "@/content/site";
import { TrackedLink } from "./TrackedLink";
import { PerspectiveCard } from "./motion/PerspectiveCard";
import styles from "./site.module.css";

export function Cases({ compact = false }: { compact?: boolean }) {
  const cases = compact ? referenceCases.slice(0, 3) : referenceCases;

  return (
    <div className={styles.caseGrid}>
      {cases.map((item, index) => (
        <PerspectiveCard
          key={item.id}
          className={`${styles.caseCard} ${index === 0 ? styles.caseFeatured : ""}`}
        >
          <article>
            <div className={styles.caseImage}>
              <Image src={item.image} alt="" fill sizes={index === 0 ? "(max-width: 767px) 100vw, 58vw" : "(max-width: 767px) 100vw, 32vw"} />
              <span>Демонстрационный макет</span>
            </div>
            <div className={styles.caseContent}>
              <p className={styles.caseLabel}>{item.label}</p>
              <p className={styles.caseSegment}>{item.segment}</p>
              <strong>{item.result}</strong>
              <h3>{item.title}</h3>
              <p>{item.situation}</p>
              <ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul>
              <p className={styles.caseOutcome}>{item.outcome}</p>
              <div className={styles.caseSource}><span>{item.period}</span><span>{item.source}</span></div>
              <TrackedLink href="/diagnostic#form" eventLabel={`case-${item.id}`}>
                Разобрать похожую задачу <ArrowUpRight aria-hidden size={17} />
              </TrackedLink>
            </div>
          </article>
        </PerspectiveCard>
      ))}
    </div>
  );
}
