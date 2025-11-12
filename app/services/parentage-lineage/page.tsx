import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/parentage-lineage";

export default function ParentageLineage() {
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
            { "@type": "ListItem", position: 2, name: "Parentage & Lineage", item: url }
          ]
        }}
      />

      {/* Service JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Parentage & Lineage Testing",
          url,
          description:
            "Microsatellite/SNP-based parentage assignment and pedigree verification to manage inbreeding and prove lineage for game breeding and auctions.",
          provider: { "@type": "Organization", name: "Gen-Track SA", url: "https://www.gentracksa.co.za" },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife genetics testing",
          termsOfService: "https://www.gentracksa.co.za",
          availableChannel: { "@type": "ServiceChannel", serviceUrl: url, availableLanguage: ["en"] },
          brand: { "@type": "Brand", name: "Gen-Track SA" },
          offers: { "@type": "Offer", priceCurrency: "ZAR", price: "0", availability: "https://schema.org/InStock" }
        }}
      />

      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Parentage & Lineage Testing</h1>
        <p className="text-slate-300 mt-3">
          Resolve pedigrees and manage inbreeding risk with validated microsatellite or SNP panels and clear sire–dam assignments.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Studbook verification and herd management.</li>
            <li>Auction due-diligence and certificate support.</li>
            <li>Hybrid status checks alongside parentage calls.</li>
          </ul>
        </section>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Workflow</h3>
            <p className="text-slate-300 mt-2">
              Sampling kit → DNA extraction → genotyping (microsats/SNPs) → likelihood or exclusion analyses → report.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Deliverables</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Parentage table with confidence values.</li>
              <li>Kinship/relatedness summaries for breeding plans.</li>
              <li>Certificate-style PDF if required for transactions.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Turnaround</h2>
          <p className="text-slate-300 mt-2">10–15 working days for typical cohorts; multi-hundred sample sets by schedule.</p>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">
          Enquire about panels
        </a>
      </article>
      <Footer />
    </div>
  );
}
