import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/non-invasive-genetics";

export default function NonInvasiveGenetics() {
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
            { "@type": "ListItem", position: 2, name: "Non-Invasive Genetic Sampling", item: url }
          ]
        }}
      />

      {/* JSON-LD: Service */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Non-Invasive Genetic Sampling (NIGS)",
          url,
          description:
            "Genetic monitoring using dung, hair, or environmental samples to estimate abundance and diversity without disturbing wildlife.",
          provider: { "@type": "Organization", name: "Gen-Track SA", url: "https://www.gentracksa.co.za" },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife monitoring and genetics",
          brand: { "@type": "Brand", name: "Gen-Track SA" }
        }}
      />

      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Non-Invasive Genetic Sampling</h1>
        <p className="text-slate-300 mt-3">
          Collect DNA data without capturing animals. NIGS enables mark–recapture and sex ratio estimates with minimal disturbance.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Abundance estimation using genetic mark–recapture models.</li>
            <li>Sex determination through amelogenin gene markers.</li>
            <li>Monitoring elusive or endangered species.</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">
          Request a NIGS survey
        </a>
      </article>

      <Footer />
    </div>
  );
}
