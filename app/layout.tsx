import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Colton Pemberton's Portfolio",
  description: "Colton Pemberton's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}
