import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function SpeciesIdentification() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Services", "item": "https://www.gentracksa.co.za/services" },
            { "@type": "ListItem", "position": 2, "name": "Species Identification", "item": url }
          ]
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Species Identification",
          "url": url,
          "description": "DNA-based species confirmation and hybrid detection using mitochondrial and nuclear markers for compliance, trade, and forensic use.",
          "provider": { "@type": "Organization", "name": "Gen-Track SA", "url": "https://www.gentracksa.co.za" },
          "areaServed": { "@type": "Country", "name": "South Africa" },
          "serviceType": "Wildlife genetics testing",
          "termsOfService": "https://www.gentracksa.co.za",
          "availableChannel": { "@type": "ServiceChannel", "serviceUrl": url, "availableLanguage": ["en"] },
          "brand": { "@type": "Brand", "name": "Gen-Track SA" },
          "offers": { "@type": "Offer", "priceCurrency": "ZAR", "price": "0", "availability": "https://schema.org/InStock" }
        }}
      />
      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Species Identification</h1>
        <p className="text-slate-300 mt-3">
          Confirm species identity, detect hybridisation, and validate paperwork for trade, permitting, and compliance using mitochondrial (COI, cyt b) and nuclear markers.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">When to use</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Hybrid detection in antelope and other game species.</li>
            <li>Verification of studbook entries and auction documentation.</li>
            <li>Forensic confirmation for confiscated or imported material.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Methods</h2>
          <p className="text-slate-300 mt-2">
            DNA extraction → marker amplification (COI/cyt b ± nuclear loci) → sequencing or allele sizing → reference database matching → defensible report with confidence thresholds.
          </p>
        </section>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Deliverables</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>PDF report with call, methods, and chain-of-custody notes.</li>
              <li>FASTA/trace or genotype files if requested.</li>
              <li>Plain-language summary for non-technical stakeholders.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Typical timeline</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Sampling to result: 5–10 working days (project dependent).</li>
              <li>Rush options available by prior arrangement.</li>
            </ul>
          </div>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">Request a quote</a>
      </article>
      <Footer />
    </div>
  );
}
