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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${poppins.variable} antialiased`}>
        <div className="">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
