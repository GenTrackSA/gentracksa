import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenTrack SA — Wildlife Genetics Consulting",
  description:
    "Wildlife genetics services for species ID, parentage, population structure, non-invasive abundance, and eDNA — tailored for ranches, reserves, and NGOs across southern Africa.",
  metadataBase: new URL("https://www.gentracksa.co.za"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f6f2e8] text-[#1f1f1f]">
        {children}
      </body>
    </html>
  );
}
