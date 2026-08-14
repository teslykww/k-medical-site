import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { AnalyticsEvent } from "@/lib/analytics";
import { TrackedLink } from "./TrackedLink";
import styles from "./site.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  event?: AnalyticsEvent;
  eventLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  event,
  eventLabel,
}: Props) {
  return (
    <TrackedLink
      className={`${styles.button} ${styles[`button${variant[0].toUpperCase()}${variant.slice(1)}`]}`}
      href={href}
      event={event}
      eventLabel={eventLabel}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden size={18} weight="regular" />
    </TrackedLink>
  );
}

