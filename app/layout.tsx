import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Edwyn Wylly | Full Stack Developer",

  description:
    "Portfólio de Edwyn Wylly Horácio da Silva — Desenvolvedor Full Stack com experiência em Next.js, React, Node.js, APIs REST e bancos de dados.",

  keywords: [
    "Edwyn Wylly",
    "Edwyn Wylly Horácio da Silva",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "Desenvolvedor Júnior",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "API REST",
    "Desenvolvedor São Paulo",
    "Desenvolvedor Bastos SP",
  ],

  authors: [
    {
      name: "Edwyn Wylly Horácio da Silva",
    },
  ],

  creator: "Edwyn Wylly Horácio da Silva",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Edwyn Wylly | Full Stack Developer",

    description:
      "Desenvolvedor Full Stack criando aplicações web, APIs e soluções para problemas reais.",

    type: "website",

    locale: "pt_BR",

    siteName: "Edwyn Wylly | Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Edwyn Wylly | Full Stack Developer",

    description:
      "Desenvolvedor Full Stack criando aplicações web, APIs e soluções para problemas reais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Barra verde mostrando o progresso da página */}
        <ScrollProgress />

        {/* Cursor personalizado */}
        <CustomCursor />

        {/* Conteúdo do portfólio */}
        {children}
      </body>
    </html>
  );
}