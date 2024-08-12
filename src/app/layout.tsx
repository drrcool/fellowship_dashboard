import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/utils/AppProviders";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
