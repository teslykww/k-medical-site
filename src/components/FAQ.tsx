import type { FAQItem } from "@/content/types";
import styles from "./site.module.css";

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className={styles.faq}>
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

