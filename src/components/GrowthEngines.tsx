import { ArrowsClockwise, MagnifyingGlass, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { growthEngines } from "@/content/site";
import styles from "./site.module.css";

const icons = [MagnifyingGlass, ShieldCheck, ArrowsClockwise];

export function GrowthEngines() {
  return (
    <div className={styles.engines}>
      {growthEngines.map((engine, index) => {
        const Icon = icons[index];
        return (
          <article key={engine.title} className={styles.engine}>
            <div className={styles.engineNumber}>0{index + 1}</div>
            <Icon className={styles.engineIcon} aria-hidden size={30} weight="regular" />
            <h3>{engine.title}</h3>
            <p>{engine.description}</p>
            {engine.detail ? <p className={styles.engineDetail}>{engine.detail}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

