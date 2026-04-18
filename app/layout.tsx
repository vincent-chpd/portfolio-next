import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vincent Chaussepied - Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${poppins.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <Navbar />
          <main className="flex-1 min-w-0 overflow-x-hidden pt-16 md:pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
