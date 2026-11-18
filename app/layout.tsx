import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sooraj Nadarajan | AI/ML Engineer & Python Developer",
  description:
    "Sooraj Nadarajan is an AI/ML Engineer in Kochi, India, building practical applications with machine learning, generative AI, Python, and RAG.",
  keywords: [
    "Sooraj Nadarajan",
    "AI ML Engineer",
    "Machine Learning",
    "Python",
    "RAG",
    "FastAPI",
    "Next.js",
    "Generative AI",
    "Python Developer"
  ],
  openGraph: {
    title: "Sooraj Nadarajan | AI/ML Engineer",
    description:
      "Portfolio of Sooraj Nadarajan, an AI/ML Engineer building intelligent systems with Python, machine learning, RAG and modern AI technologies.",
    type: "website",
    siteName: "Sooraj Nadarajan Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sooraj Nadarajan — AI/ML Engineer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sooraj Nadarajan | AI/ML Engineer",
    description:
      "Portfolio of Sooraj Nadarajan, an AI/ML Engineer building intelligent systems with Python, machine learning, RAG and modern AI technologies.",
    images: ["/opengraph-image"]
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
