import type { CTA } from "@/content/types";
import { ButtonLink } from "./ButtonLink";
import styles from "./site.module.css";

export function CTASection({ cta }: { cta: CTA }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <div>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <ButtonLink href={cta.href} variant="light" eventLabel="final-cta">
          {cta.label}
        </ButtonLink>
      </div>
    </section>
  );
}

