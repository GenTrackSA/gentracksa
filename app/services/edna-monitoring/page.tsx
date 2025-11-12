import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/edna-monitoring";

export default function EDNAMonitoring() {
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
            { "@type": "ListItem", position: 2, name: "eDNA Monitoring", item: url }
          ]
        }}
      />

      {/* JSON-LD: Service */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Environmental DNA (eDNA) Monitoring",
          url,
          description:
            "Detection of species presence using environmental DNA in water or soil samples to monitor biodiversity and invasive species.",
          provider: { "@type": "Organization", name: "Gen-Track SA", url: "https://www.gentracksa.co.za" },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Biodiversity monitoring",
          brand: { "@type": "Brand", name: "Gen-Track SA" }
        }}
      />

      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Environmental DNA (eDNA) Monitoring</h1>
        <p className="text-slate-300 mt-3">
          Detect species from traces of DNA in water or soil. eDNA analysis provides rapid, non-intrusive biodiversity insights.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Use Cases</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Aquatic biodiversity assessments.</li>
            <li>Invasive species early detection.</li>
            <li>Post-release and reintroduction monitoring.</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">
          Schedule an eDNA survey
        </a>
      </article>

      <Footer />
    </div>
  );
}
