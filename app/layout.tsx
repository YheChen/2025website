import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanzhen Chen | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
