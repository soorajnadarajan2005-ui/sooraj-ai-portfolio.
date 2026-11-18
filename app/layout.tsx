import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sooraj Nadarajan | AI/ML Engineer",
  description:
    "Portfolio of Sooraj Nadarajan, an AI/ML Engineer building intelligent systems with Python, machine learning, RAG and modern AI technologies.",
  keywords: [
    "Sooraj Nadarajan",
    "AI ML Engineer",
    "Machine Learning",
    "Python",
    "RAG",
    "FastAPI",
    "Next.js"
  ],
  openGraph: {
    title: "Sooraj Nadarajan | AI/ML Engineer",
    description:
      "Portfolio of Sooraj Nadarajan, an AI/ML Engineer building intelligent systems with Python, machine learning, RAG and modern AI technologies.",
    type: "website",
    siteName: "Sooraj Nadarajan Portfolio"
  },
  twitter: {
    card: "summary",
    title: "Sooraj Nadarajan | AI/ML Engineer",
    description:
      "Portfolio of Sooraj Nadarajan, an AI/ML Engineer building intelligent systems with Python, machine learning, RAG and modern AI technologies."
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
