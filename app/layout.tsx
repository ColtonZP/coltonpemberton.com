import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colton Pemberton's Portfolio",
  description: "Colton Pemberton's Portfolio",
};

export default function RootLayout({
  children,
}: {
  // noinspection TypeScriptUMDGlobal
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
