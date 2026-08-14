"use client";

import { ArrowRight, Check, X } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import type { ProductDetail } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "./TrackedLink";
import styles from "./site.module.css";

type Props = {
  detail: ProductDetail;
  label?: string;
  variant?: "default" | "inverse" | "compact";
};

export function ProductDetailsTrigger({
  detail,
  label = "Что входит",
  variant = "default",
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isMounted) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (!dialog.open) dialog.showModal();
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isMounted]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  function openDetails() {
    triggerRef.current = document.activeElement as HTMLButtonElement;
    setIsClosing(false);
    setIsMounted(true);
    trackEvent("product_detail_open", { product: detail.id, label: detail.name });
  }

  function finishClose() {
    dialogRef.current?.close();
    setIsMounted(false);
    setIsClosing(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function closeDetails() {
    if (isClosing) return;
    if (reduceMotion) {
      finishClose();
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = setTimeout(finishClose, 340);
  }

  function handleBackdropClick(event: ReactMouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) closeDetails();
  }

  const motionInitial = reduceMotion ? false : { opacity: 0, y: 16 };
  const motionTransition = { duration: reduceMotion ? 0 : 0.48, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <>
      <button
        type="button"
        className={`${styles.productDetailTrigger} ${styles[`productDetailTrigger${variant[0].toUpperCase()}${variant.slice(1)}`]}`}
        onClick={openDetails}
        aria-haspopup="dialog"
      >
        <span>{label}</span>
        <ArrowRight aria-hidden size={17} />
      </button>

      {isMounted ? createPortal((
        <dialog
          ref={dialogRef}
          className={`${styles.productDialog} ${isClosing ? styles.productDialogClosing : ""}`}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onCancel={(event) => {
            event.preventDefault();
            closeDetails();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              closeDetails();
            }
          }}
          onClick={handleBackdropClick}
        >
          <div className={styles.productDrawer}>
            <header className={styles.productDrawerHero}>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.productDrawerClose}
                onClick={closeDetails}
                aria-label="Закрыть подробное описание"
                autoFocus
              >
                <X aria-hidden size={20} />
              </button>

              <motion.div initial={motionInitial} animate={{ opacity: 1, y: 0 }} transition={motionTransition}>
                <p className={styles.productDrawerSegment}>{detail.segment}</p>
                <p className={styles.productDrawerName}>{detail.name}</p>
                <h2 id={titleId}>{detail.title}</h2>
                <p id={descriptionId} className={styles.productDrawerLead}>{detail.lead}</p>
              </motion.div>

              <motion.div
                className={styles.productDrawerCommercial}
                initial={motionInitial}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionTransition, delay: reduceMotion ? 0 : 0.08 }}
              >
                <strong>{detail.price}</strong>
                <ul>
                  {detail.terms.map((term) => <li key={term}>{term}</li>)}
                </ul>
              </motion.div>
            </header>

            <div className={styles.productDrawerBody}>
              <motion.section
                className={styles.productDrawerIntro}
                initial={motionInitial}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...motionTransition, delay: reduceMotion ? 0 : 0.12 }}
              >
                <div>
                  <p className={styles.productDrawerKicker}>Кому подходит</p>
                  <p>{detail.audience}</p>
                </div>
                <aside>
                  <span>Результат</span>
                  <strong>{detail.outcome}</strong>
                </aside>
              </motion.section>

              <section className={styles.productDrawerSection}>
                <div className={styles.productDrawerSectionHeading}>
                  <span>01</span>
                  <h3>Что делает команда</h3>
                </div>
                <div className={styles.productScopeGrid}>
                  {detail.scope.map((group, index) => (
                    <motion.article
                      key={group.title}
                      initial={motionInitial}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ ...motionTransition, delay: reduceMotion ? 0 : index * 0.045 }}
                    >
                      <h4>{group.title}</h4>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}><Check aria-hidden size={15} weight="bold" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </motion.article>
                  ))}
                </div>
              </section>

              <section className={styles.productDrawerSection}>
                <div className={styles.productDrawerSectionHeading}>
                  <span>02</span>
                  <h3>Что будет на выходе</h3>
                </div>
                <div className={styles.productDeliverables}>
                  {detail.deliverables.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={motionInitial}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ ...motionTransition, delay: reduceMotion ? 0 : index * 0.04 }}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className={`${styles.productDrawerSection} ${styles.productDrawerNarrative}`}>
                <div className={styles.productDrawerSectionHeading}>
                  <span>03</span>
                  <h3>Как устроена работа</h3>
                </div>
                <dl>
                  <div><dt>Как начинаем</dt><dd>{detail.start}</dd></div>
                  <div><dt>Почему такой формат</dt><dd>{detail.rationale}</dd></div>
                  <div><dt>Когда выбрать другой</dt><dd>{detail.alternative}</dd></div>
                  {detail.exclusions ? <div><dt>Что считается отдельно</dt><dd>{detail.exclusions}</dd></div> : null}
                </dl>
              </section>
            </div>

            <footer className={styles.productDrawerFooter}>
              <div><span>Стоимость</span><strong>{detail.price}</strong></div>
              <TrackedLink
                href={detail.cta.href}
                className={`${styles.button} ${styles.buttonLight} ${styles.productDrawerCta}`}
                event="pricing_cta_click"
                eventLabel={`${detail.name}:drawer`}
                onClick={closeDetails}
              >
                <span>{detail.cta.label}</span>
                <ArrowRight aria-hidden size={18} />
              </TrackedLink>
            </footer>
          </div>
        </dialog>
      ), document.body) : null}
    </>
  );
}
