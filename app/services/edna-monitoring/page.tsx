import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/edna-monitoring";

export default function EDNAMonitoring() {
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
            { "@type": "ListItem", position: 2, name: "eDNA Monitoring", item: url },
          ],
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
          brand: { "@type": "Brand", name: "Gen-Track SA" },
        }}
      />

      <main className="container py-14 md:py-16">
        <article className="mx-auto max-w-3xl">
          {/* Warm “card” */}
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 md:p-10 shadow-sm">
            <p className="text-sm font-medium text-[#6b7a46]">Service</p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1b1b1b]">
              Environmental DNA (eDNA) Monitoring
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Detect species from traces of DNA in water or soil. eDNA analysis provides rapid, non-intrusive biodiversity
              insights — ideal for early detection, presence/absence questions, and sensitive systems where physical capture
              isn’t practical.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Use cases</h2>
              <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
                <li>Aquatic biodiversity assessments.</li>
                <li>Invasive species early detection.</li>
                <li>Post-release and reintroduction monitoring.</li>
              </ul>
            </section>

            {/* Optional: add a small “What you get” section (feels premium) */}
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">What you get</h2>
              <div className="mt-3 grid gap-3">
                {[
                  "Sampling guidance (where/when to sample, volumes, preservation).",
                  "Laboratory analysis with clear detection reporting.",
                  "Interpretation notes (limits, detection confidence, recommended follow-ups).",
                ].map((x) => (
                  <div key={x} className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-[#2b2b2b]">
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
                Schedule an eDNA survey
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
