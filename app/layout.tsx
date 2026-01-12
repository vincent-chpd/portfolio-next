import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header"; // add your header

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "Vincent Chaussepied - Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} antialiased `}>
        <div className="grid grid-cols-[200px_1fr] h-[100vh]">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
