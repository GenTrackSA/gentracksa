import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/reporting-consultation";

export default function ReportingConsultation() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Warm safari background wash */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f6f2e8]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(214,199,166,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_20%,rgba(122,140,88,0.18),transparent_65%)]" />
      </div>

      {/* JSON-LD: Breadcrumbs */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Services",
              item: "https://www.gentracksa.co.za/services",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Reporting & Consultation",
              item: url,
            },
          ],
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
          provider: {
            "@type": "Organization",
            name: "Gen-Track SA",
            url: "https://www.gentracksa.co.za",
          },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Scientific consulting",
          brand: { "@type": "Brand", name: "Gen-Track SA" },
        }}
      />

      <main className="container py-14 md:py-16">
        <article className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 md:p-10 shadow-sm">
            <p className="text-sm font-medium text-[#6b7a46]">Service</p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1b1b1b]">
              Reporting, Consultation & Data Management
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Genetic testing only becomes valuable when results are clearly understood and turned into decisions.
              We provide professional reporting, interpretation, and long-term data organisation so that ranch owners,
              reserve managers, and conservation organisations can confidently act on genetic insights.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">What We Provide</h2>
              <div className="mt-3 grid gap-3">
                {[
                  "Clear, manager-friendly reports with visual summaries and key findings.",
                  "Interpretation of population genetic statistics and breeding implications.",
                  "Recommendations for translocations, breeding strategy, or genetic monitoring plans.",
                  "Data packaging and structured outputs for internal records or external stakeholders.",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-[#2b2b2b]"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Deliverables</h2>
              <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
                <li>Professionally formatted PDF report (graphs, tables, and interpretation).</li>
                <li>Consultation call or in-person debrief (optional).</li>
                <li>Genetic database summaries and metadata structuring.</li>
                <li>Secure data archiving and long-term project continuity support.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Ideal For</h2>
              <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
                <li>Breeding operations needing interpretation for auction or studbook decisions.</li>
                <li>Reserves planning translocations or genetic rescue interventions.</li>
                <li>NGOs and consultants needing publication-quality reporting outputs.</li>
                <li>Long-term monitoring programs requiring clean data continuity.</li>
              </ul>
            </section>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Request consultation
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-black/15 bg-white/50 text-[#1b1b1b] font-semibold hover:bg-white/70 transition"
              >
                Back to services
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
