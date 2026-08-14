import Link from "next/link";
import { footerNavigation, siteName } from "@/content/site";
import styles from "./site.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <Link className={styles.footerWordmark} href="/">
            {siteName}
          </Link>
          <p className={styles.footerDescription}>
            Системный маркетинг для частных клиник и врачей.
          </p>
        </div>

        <nav className={styles.footerNav} aria-label="Навигация в подвале">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.footerMeta}>
          <div className={styles.footerContacts}>
            <span>+7 (000) 000-00-00</span>
            <span>WhatsApp: @kmedical</span>
            <span>Telegram: @kmedical</span>
          </div>
          <p>Привлечение пациентов · сайты и поиск · репутация · продвижение врачей · CRM‑маркетинг · аналитика</p>
          <p>© {new Date().getFullYear()} K‑Medical</p>
        </div>
      </div>
    </footer>
  );
}
