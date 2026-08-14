import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { baseUrl, siteName } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-editorial",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "K‑Medical: медицинский маркетинг для частных клиник и врачей",
    template: "%s | K‑Medical",
  },
  description:
    "Помогаем частным клиникам получать больше платящих пациентов: привлечение, доверие к врачам, работа с базой и понятная аналитика.",
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName,
    title: "K‑Medical: приводим платящих пациентов, а не просто заявки",
    description:
      "Медицинский маркетинг одной командой: новые пациенты, доверие к клинике и врачам, работа с базой и аналитика.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} ${lora.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Перейти к содержанию
        </a>
        <div className="page-shell">
          <Header />
          {children}
          <Footer />
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: baseUrl,
            description: "Медицинский маркетинг для частных клиник и врачей.",
          }}
        />
      </body>
    </html>
  );
}
