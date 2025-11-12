import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/species-identification";

export default function SpeciesIdentification() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumbs JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Services", item: "https://www.gentracksa.co.za/services" },
            { "@type": "ListItem", position: 2, name: "Species Identification", item: url },
          ],
        }}
      />

      {/* Service JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Species Identification",
          url,
          description:
            "DNA-based species confirmation and hybrid detection using mitochondrial and nuclear markers for compliance, trade, and forensic use.",
          provider: { "@type": "Organization", name: "Gen-Track SA", url: "https://www.gentracksa.co.za" },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife genetics testing",
          brand: { "@type": "Brand", name: "Gen-Track SA" },
        }}
      />

      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Species Identification</h1>
        <p className="text-slate-300 mt-3">
          Confirm wildlife species with certainty. Our assays detect hybrids and validate species origin using mitochondrial and
          nuclear DNA markers.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Hybrid detection in antelope and other game species.</li>
            <li>Trade and CITES compliance verification.</li>
            <li>Forensic identification of seized wildlife material.</li>
          </ul>
        </section>

        <a
          href="/#contact"
          className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold"
        >
          Request species verification
        </a>
      </article>

      <Footer />
    </div>
  );
}
