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
    <html
      lang="en"
      className={`${inter.className} overflow-x-hidden max-w-[100vw]`}
    >
      <body className="overflow-x-hidden max-w-full">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
