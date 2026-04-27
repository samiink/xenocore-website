import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "../../components/global/BackgroundVideo";
import CinematicScrollFX from "@/components/ui/CinematicScrollFX";
import { FactionThemeProvider } from "../context/FactionThemeContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "XENOCORE",
  description: "Last Human Protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} text-white`}>
        <FactionThemeProvider>
          <BackgroundVideo />
          <CinematicScrollFX />

          <div className="relative z-10 min-h-screen bg-transparent">
            {children}
          </div>
        </FactionThemeProvider>
      </body>
    </html>
  );
}