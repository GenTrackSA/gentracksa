// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gen-Track SA | Wildlife Genetics Consulting",
  description:
    "Wildlife genetics services: species ID, parentage, population genetics, NIGS, and eDNA for African wildlife managers and breeders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Organization JSON-LD */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gen-Track SA",
            url: "https://www.gentracksa.co.za",
            logo: "https://www.gentracksa.co.za/logo.png",
            email: "mailto:GenTrackSA@gmail.com",
            telephone: "+27-82-465-6983",
            address: { "@type": "PostalAddress", addressCountry: "ZA" },
            sameAs: ["https://www.gentracksa.co.za"],
          }}
        />

        {/* WebSite JSON-LD */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Gen-Track SA",
            url: "https://www.gentracksa.co.za",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.gentracksa.co.za/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }}
        />
      </body>
    </html>
  );
}
