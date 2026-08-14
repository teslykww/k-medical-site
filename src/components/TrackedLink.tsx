"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  event?: AnalyticsEvent;
  eventLabel?: string;
};

export function TrackedLink({ event = "cta_click", eventLabel, onClick, ...props }: Props) {
  function handleClick(clickEvent: MouseEvent<HTMLAnchorElement>) {
    trackEvent(event, {
      label: eventLabel,
      href: typeof props.href === "string" ? props.href : undefined,
    });
    onClick?.(clickEvent);
  }

  return <Link {...props} onClick={handleClick} />;
}

