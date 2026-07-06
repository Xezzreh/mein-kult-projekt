import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K.U.L.T. e.V. | Berlin",
  description: "Gemeinnütziger Verein für integrative Kinder-, Jugend-, Bildungs- und Kulturarbeit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* min-h-screen und flex-col sind wichtig, damit der Footer nach unten gedrückt wird */}
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}