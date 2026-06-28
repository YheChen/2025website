import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://yanzhenchen.ca"),
  title: {
    default: "Yanzhen Chen | Portfolio",
    template: "%s | Yanzhen Chen",
  },
  description:
    "Yanzhen Chen — Computer Science, Mathematics & Statistics student at the University of Toronto, building software, machine learning, and thoughtful products.",
  keywords: [
    "Yanzhen Chen",
    "Software Developer",
    "University of Toronto",
    "Computer Science",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Yanzhen Chen" }],
  creator: "Yanzhen Chen",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://yanzhenchen.ca",
    title: "Yanzhen Chen | Portfolio",
    description:
      "Computer Science, Mathematics & Statistics student at the University of Toronto, building software, machine learning, and thoughtful products.",
    siteName: "Yanzhen Chen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanzhen Chen | Portfolio",
    description:
      "Computer Science, Mathematics & Statistics student at the University of Toronto.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="be80316b-b3c0-4659-9eea-8f68076296f3"
        ></script>
        <script defer src="https://webring.ca/embed.js"></script>
      </head>
      <body className="min-h-screen font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="portfolio-theme"
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
