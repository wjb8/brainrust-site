import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brainrustonline.com"),
  title: "Brainrust — Windsor, Ontario",
  description:
    "Brainrust is a four-piece rock band from Windsor, Ontario, crafting emotionally charged, exploratory music that blends elements of experimental, alternative, and post-hardcore traditions.",
  alternates: {
    canonical: "https://brainrustonline.com",
  },
  openGraph: {
    title: "Brainrust",
    description: "Emotionally charged, exploratory rock from Windsor, Ontario.",
    type: "website",
    url: "https://brainrustonline.com",
    images: ["/brainrust-promo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
