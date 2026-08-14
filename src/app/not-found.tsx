import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="container section">
      <h1>Страница не найдена</h1>
      <p>Проверьте адрес или вернитесь к карте продуктов K‑Medical.</p>
      <Link href="/">Вернуться на главную</Link>
    </main>
  );
}

