import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <title>CMA Fellowship Survey 2024</title>
        <meta
          name="description"
          content="Dashboard view for the CMA 2024 Fellowship Survey.  Please see http://crystalmeth.org for more information."
        />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
