import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elemental | by امیرحسین بخشی",
  description: "جدول تناوبی سه‌بعدی سینمایی — ساخته شده توسط امیرحسین بخشی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}