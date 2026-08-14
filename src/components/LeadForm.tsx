"use client";

import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { FormEvent, useRef, useState } from "react";
import { getAttributionParams, trackEvent } from "@/lib/analytics";
import styles from "./site.module.css";

type FormState = "idle" | "submitting" | "success" | "error" | "not-configured";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const started = useRef(false);

  function handleStart() {
    if (started.current) return;
    started.current = true;
    trackEvent("form_start", { form: "diagnostic" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const endpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT;
    if (!endpoint) {
      setState("not-configured");
      setMessage(
        "Это предварительная версия формы, поэтому заявка сейчас не отправлена. Перед запуском мы подключим подтверждённый контакт команды.",
      );
      return;
    }

    setState("submitting");
    const data = Object.fromEntries(new FormData(form));
    const attribution = getAttributionParams(new URLSearchParams(window.location.search));

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, attribution }),
      });

      if (!response.ok) throw new Error("Delivery failed");

      setState("success");
      setMessage("Спасибо. Получили заявку. Свяжемся с вами и договоримся о коротком знакомстве.");
      trackEvent("form_submit", { form: "diagnostic", status: "success" });
      form.reset();
    } catch {
      setState("error");
      setMessage("Не удалось доставить запрос. Попробуйте ещё раз или используйте подтверждённый контакт команды.");
      trackEvent("form_submit", { form: "diagnostic", status: "error" });
    }
  }

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit} onFocus={handleStart}>
      <div className={styles.formRow}>
        <label>
          <span>Ваше имя</span>
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label>
          <span>Телефон или Telegram</span>
          <input name="contact" autoComplete="tel" required minLength={5} />
        </label>
      </div>
      <label>
        <span>Клиника или город</span>
        <input name="clinic" autoComplete="organization" required minLength={2} />
      </label>
      <label>
        <span>Что хотите улучшить?</span>
        <textarea
          name="context"
          rows={5}
          required
          minLength={10}
          placeholder="Например: хотим увеличить поток на имплантацию; реклама есть, но результат нестабилен; хотим продвинуть нескольких врачей."
        />
      </label>
      <div className={styles.formHoneypot} aria-hidden>
        <label>
          Компания
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className={styles.consent}>
        <input name="consent" type="checkbox" required />
        <span>
          Я согласен на обработку данных для ответа на запрос.
        </span>
      </label>
      <button className={styles.formSubmit} type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Отправляем…" : "Обсудить задачу"}
        <ArrowRight aria-hidden size={18} />
      </button>
      {message ? (
        <p
          className={`${styles.formMessage} ${state === "success" ? styles.formSuccess : styles.formWarning}`}
          role={state === "success" ? "status" : "alert"}
        >
          {state === "success" ? (
            <CheckCircle aria-hidden size={20} weight="fill" />
          ) : (
            <WarningCircle aria-hidden size={20} weight="fill" />
          )}
          {message}
        </p>
      ) : null}
    </form>
  );
}
