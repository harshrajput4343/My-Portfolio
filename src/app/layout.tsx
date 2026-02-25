import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harsh Kumar | AI Engineer & ML Researcher",
  description: "Portfolio of Harsh Kumar, an Aspiring AI Engineer building intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden`}
      >
        <AnimatedBackground />
        <div className="ambient-background">
          <div className="ambient-orb w-[60vw] h-[60vw] -top-[10%] -left-[10%] bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_70%)] animate-drift" style={{ animationDuration: '30s' }} />
          <div className="ambient-orb w-[50vw] h-[50vw] top-[20%] right-[10%] bg-[radial-gradient(circle,rgba(167,139,250,0.15)_0%,transparent_70%)] animate-drift" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
          <div className="ambient-orb w-[40vw] h-[40vw] bottom-[10%] left-[20%] bg-[radial-gradient(circle,rgba(129,140,248,0.15)_0%,transparent_70%)] animate-drift" style={{ animationDuration: '35s' }} />
        </div>
        <div className="noise-overlay" />
        <div className="vignette" />
        {children}
      </body>
    </html>
  );
}
