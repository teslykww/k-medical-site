"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import styles from "./site.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    document.body.dataset.menuOpen = "true";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.wordmark} href="/" aria-label="K‑Medical, главная">
          K‑Medical
        </Link>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          className={styles.headerCta}
          href="/diagnostic#form"
          onClick={() => trackEvent("cta_click", { placement: "header" })}
        >
          Обсудить задачу
          <ArrowUpRight aria-hidden size={16} weight="regular" />
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden size={24} /> : <List aria-hidden size={24} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        aria-label="Мобильная навигация"
        hidden={!open}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link className={styles.mobileNavCta} href="/diagnostic#form" onClick={() => setOpen(false)}>
          Обсудить задачу
          <ArrowUpRight aria-hidden size={18} />
        </Link>
      </nav>
    </header>
  );
}
