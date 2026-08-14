"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="container section">
      <h1>Не удалось открыть страницу</h1>
      <p>Попробуйте ещё раз. Если ошибка повторяется, сообщите команде проекта.</p>
      <button type="button" onClick={reset}>
        Повторить
      </button>
    </main>
  );
}

