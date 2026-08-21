import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Makeon | Builder Development Infrastructure",
  description: "Makeon is India’s builder development infrastructure: structured academic learning through making, evidence and visible confidence.",
  keywords: ["Makeon", "builder development infrastructure", "hands-on learning", "math and science", "learning centres", "schools", "portfolio evidence"],
  openGraph: {
    title: "Makeon | Builder Development Infrastructure",
    description: "Think. Make. Build the future.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makeon | Builder Development Infrastructure",
    description: "Think. Make. Build the future.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
