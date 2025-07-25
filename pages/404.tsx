import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Страница не найдена | Dental Home</title>
        <meta
          name="description"
          content="Страница не найдена. Вернитесь на главную страницу стоматологической клиники Dental Home."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "0", color: "#333" }}>404</h1>
        <h2 style={{ fontSize: "1.5rem", margin: "20px 0", color: "#666" }}>
          Страница не найдена
        </h2>
        <p style={{ fontSize: "1rem", color: "#888", marginBottom: "30px" }}>
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Вернуться на главную
        </Link>
      </div>
    </>
  );
}
