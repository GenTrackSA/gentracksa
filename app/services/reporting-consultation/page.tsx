import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/reporting-consultation";

export default function ReportingConsultation() {
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
            { "@type": "ListItem", position: 2, name: "Reporting & Consultation", item: url }
          ]
        }}
      />

      {/* JSON-LD: Service */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Reporting, Consultation & Data Management",
          url,
          description:
            "Comprehensive interpretation and visual reporting of genetic data, with direct consultation and long-term data management options.",
          provider: { "@type": "Organization", name: "Gen-Track SA", url: "https://www.gentracksa.co.za" },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Scientific consulting",
          brand: { "@type": "Brand", name: "Gen-Track SA" }
        }}
      />

      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Reporting, Consultation & Data Management</h1>
        <p className="text-slate-300 mt-3">
          We transform raw genetic results into clear, actionable insights with visual reports, consultations, and long-term data storage options.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Visual genetic summaries and management recommendations.</li>
            <li>One-on-one consultation for interpretation.</li>
            <li>Secure, cloud-based data archiving and metadata curation.</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">
          Request consultation
        </a>
      </article>

      <Footer />
    </div>
  );
}
