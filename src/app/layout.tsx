import type { Metadata } from "next";
import { Inter, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charlie Smith | Full Stack & Go Engineer, AI/ML Researcher",
  description: "Portfolio of Charlie Smith — Full Stack & Go (Golang) Software Engineer, AI/ML Research Intern (IIIT Vadodara, NIT Warangal), and Kaggle Silver Medalist. Building high-performance Go + Fiber backends, React/Next.js frontends, and AI systems.",
  keywords: [
    "Charlie Smith",
    "Software Engineer",
    "Full Stack Developer",
    "Go Developer",
    "Golang Backend Engineer",
    "AI ML Researcher",
    "Kaggle Silver Medalist",
    "IIIT Manipur",
    "Research Intern",
    "Next.js Portfolio",
    "Reversible Data Hiding"
  ],
  authors: [{ name: "Charlie Smith" }],
  metadataBase: new URL("https://charlie.dev"),
  openGraph: {
    title: "Charlie Smith | Full Stack & Go Engineer, AI/ML Researcher",
    description: "Full Stack & Go Software Engineer, AI/ML Research Intern, and Kaggle Silver Medalist.",
    url: "https://charlie.dev",
    siteName: "Charlie Smith Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} ${shareTech.variable} antialiased bg-cyber-black text-foreground font-sans`}
      >
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}
