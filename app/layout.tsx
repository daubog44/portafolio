import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { AnalyticsWrapper } from "./components/analytics";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
