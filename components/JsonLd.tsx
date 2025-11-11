"use client";
import Script from "next/script";

export default function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <Script
      id={data["@type"] || "jsonld"}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
