import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/non-invasive-genetics";

export default function NonInvasiveGenetics() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Subtle warm background wash (matches warm home tone) */}
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
              name: "Non-Invasive Genetic Sampling",
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
          name: "Non-Invasive Genetic Sampling (NIGS)",
          url,
          description:
            "Genetic monitoring using dung, hair, or environmental samples to estimate abundance and diversity without disturbing wildlife.",
          provider: {
            "@type": "Organization",
            name: "Gen-Track SA",
            url: "https://www.gentracksa.co.za",
          },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife monitoring and genetics",
          brand: { "@type": "Brand", name: "Gen-Track SA" },
        }}
      />

      <main className="container py-14 md:py-16">
        <article className="mx-auto max-w-3xl">
          {/* Warm “card” */}
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 md:p-10 shadow-sm">
            <p className="text-sm font-medium text-[#6b7a46]">Service</p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1b1b1b]">
              Non-Invasive Genetic Sampling (NIGS)
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Collect DNA data without capturing animals. Non-invasive genetic sampling (NIGS) allows you to estimate
              abundance, sex ratios, and genetic diversity using dung, hair, or environmental samples — reducing stress on
              wildlife and improving ethical field monitoring.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Applications</h2>
              <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
                <li>Abundance estimation using genetic mark–recapture models.</li>
                <li>Sex determination through amelogenin gene markers.</li>
                <li>Monitoring elusive, threatened, or endangered species.</li>
                <li>Baseline genetic diversity assessments for long-term conservation planning.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">What you get</h2>
              <div className="mt-3 grid gap-3">
                {[
                  "Sampling protocol guidance (collection, storage, transport, contamination prevention).",
                  "Genotyping workflow for individual identification (capture–recapture readiness).",
                  "Clear reporting: abundance estimate, sex ratio, confidence intervals (where applicable).",
                  "Interpretation and management recommendations (decision-ready output).",
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

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Request a NIGS survey
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
