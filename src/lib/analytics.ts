export type AnalyticsEvent =
  | "cta_click"
  | "form_start"
  | "form_submit"
  | "phone_click"
  | "messenger_click"
  | "article_cta_click"
  | "pricing_cta_click";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const safePayload = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  );

  window.dataLayer?.push({ event, ...safePayload });

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics adapter]", event, safePayload);
  }
}

export function getAttributionParams(searchParams: URLSearchParams) {
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "referrer",
  ] as const;

  return Object.fromEntries(
    keys
      .map((key) => [key, searchParams.get(key)] as const)
      .filter(([, value]) => Boolean(value)),
  );
}

