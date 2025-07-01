import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanzhen Chen | Portfolio",
  description: "Yanzhen Chen's online portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="be80316b-b3c0-4659-9eea-8f68076296f3"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
