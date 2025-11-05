import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenTrack SA — Wildlife Genetics Consulting",
  description: "Wildlife genetics that turns DNA into decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
