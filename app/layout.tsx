import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { AnalyticsWrapper } from "../components/analytics";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
