import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colton Pemberton's Portfolio",
  description: "Colton Pemberton's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
