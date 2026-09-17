import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ordo Mognus — Portal Institucional",
  description: "Portal interno da Ordo Mognus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
