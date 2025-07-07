import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "HermitLog – Unofficial HermitCraft Fan Tracker",
  description: "Track Hermits, episodes, and lore — built with Next.js & ISR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased disableTransitionOnChange`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex justify-end p-4">
            <ThemeToggle />
          </header>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
