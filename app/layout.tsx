import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elvan Ünal | Ölçeklenebilir ve Performans Odaklı Yazılım Geliştirici",
  description:
    "C#, .NET teknolojileri ve modern JavaScript framework'leri konusunda güçlü bir altyapıya sahip Yazılım Geliştirici. ASP.NET Core, React ve Angular ile deneyimli.",
  keywords: [
    "software developer",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "angular",
    "ASP.NET Core",
    "problem çözücü",
    "geliştirici",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Elvan Ünal" }],
  creator: "Elvan Ünal",
  openGraph: {
    title: "Elvan Ünal | Ölçeklenebilir ve Performans Odaklı Yazılım Geliştirici",
    description:
      "C#, .NET teknolojileri ve modern JavaScript framework'leri konusunda güçlü bir altyapıya sahip Yazılım Geliştirici.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvan Ünal | Ölçeklenebilir ve Performans Odaklı Yazılım Geliştirici",
    description:
      "C#, .NET teknolojileri ve modern JavaScript framework'leri konusunda güçlü bir altyapıya sahip Yazılım Geliştirici.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

