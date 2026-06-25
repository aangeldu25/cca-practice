import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCA Practice — Cognitive Aptitude Test Trainer",
  description:
    "Timed practice tests in the style of the CriteriaCorp / SHL cognitive aptitude assessment used in the Revolut hiring process. 40 questions, 20 minutes, full answer review.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
