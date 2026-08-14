import { Check } from "@phosphor-icons/react/dist/ssr";
import { doctorPlans } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import styles from "./site.module.css";

export function Pricing() {
  return (
    <div className={styles.pricingGrid}>
      {doctorPlans.map((plan) => (
        <article
          key={plan.name}
          className={`${styles.pricingCard} ${plan.highlighted ? styles.pricingHighlighted : ""}`}
        >
          {plan.highlighted ? <span className={styles.pricingMarker}>Основной продукт</span> : null}
          <h3>{plan.name}</h3>
          <p className={styles.price}>{plan.price}</p>
          <p>{plan.description}</p>
          <div className={styles.pricingMeta}>
            {plan.launch ? <span>{plan.launch}</span> : null}
            {plan.term ? <span>{plan.term}</span> : null}
          </div>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>
                <Check aria-hidden size={17} weight="bold" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="/diagnostic#form"
            variant={plan.highlighted ? "primary" : "secondary"}
            event="pricing_cta_click"
            eventLabel={plan.name}
          >
            Обсудить формат
          </ButtonLink>
        </article>
      ))}
    </div>
  );
}

