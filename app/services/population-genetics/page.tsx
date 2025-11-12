import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/population-genetics";

export default function PopulationGenetics() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* JSON-LD: Breadcrumbs */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Services", item: "https://www.gentracksa.co.za/services" },
            { "@type": "ListItem", position: 2, name: "Population Genetics & Diversity", item: url }
          ]
        }}
      />

      {/* JSON-LD: Service */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Population Genetics & Diversity Assessment",
          url,
          description:
            "Evaluate genetic variation, inbreeding, and population structure to guide translocations and breeding strategies in wildlife populations.",
          provider: { "@type": "Organization", name: "Gen-Track SA", url: "https://www.gentracksa.co.za" },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife genetics consulting",
          brand: { "@type": "Brand", name: "Gen-Track SA" }
        }}
      />

      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Population Genetics & Diversity</h1>
        <p className="text-slate-300 mt-3">
          Understand your herds at the DNA level. We measure genetic variation and relatedness to maintain diversity and prevent inbreeding.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Insights Delivered</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Heterozygosity and allelic richness metrics.</li>
            <li>F-statistics and relatedness indices.</li>
            <li>Population clustering and gene flow visualizations.</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">
          Request diversity analysis
        </a>
      </article>

      <Footer />
    </div>
  );
}
