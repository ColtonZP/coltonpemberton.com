import { Analytics } from "@vercel/analytics/dist/react";

export const metadata = {
  title: "Colton Pemberton's Portfolio",
  description: "Colton Pemberton's Portfolio",
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
