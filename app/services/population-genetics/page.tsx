import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/population-genetics";

export default function PopulationGenetics() {
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
              name: "Population Genetics & Diversity",
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
          name: "Population Genetics & Diversity Assessment",
          url,
          description:
            "Evaluate genetic variation, inbreeding, and population structure to guide translocations and breeding strategies in wildlife populations.",
          provider: {
            "@type": "Organization",
            name: "Gen-Track SA",
            url: "https://www.gentracksa.co.za",
          },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife genetics consulting",
          brand: { "@type": "Brand", name: "Gen-Track SA" },
        }}
      />

      <main className="container py-14 md:py-16">
        <article className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 md:p-10 shadow-sm">
            <p className="text-sm font-medium text-[#6b7a46]">Service</p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1b1b1b]">
              Population Genetics & Diversity
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Understand your herd at the DNA level. Population genetics analysis helps you measure genetic variation,
              detect hidden relatedness, quantify inbreeding risk, and identify population structuring. These insights
              support smarter translocations, breeding plans, and long-term conservation outcomes.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Insights Delivered</h2>
              <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
                <li>Heterozygosity, allelic richness, and diversity summaries.</li>
                <li>F-statistics (Fis, Fst) and relatedness / inbreeding indices.</li>
                <li>Population clustering, assignment tests, and gene flow visualisations.</li>
                <li>Actionable recommendations for breeding and stocking decisions.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Typical Use Cases</h2>
              <div className="mt-3 grid gap-3">
                {[
                  "Evaluating breeding herds for inbreeding risk and genetic bottlenecks.",
                  "Assessing diversity before buying/selling high-value animals.",
                  "Supporting translocation decisions between reserves or ranches.",
                  "Monitoring long-term genetic health of managed populations.",
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
                <li>Summary report with clear interpretation and management recommendations.</li>
                <li>Tables and figures suitable for internal records or conservation submissions.</li>
                <li>Optional consultation call to interpret results and guide decision-making.</li>
              </ul>
            </section>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Request diversity analysis
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
