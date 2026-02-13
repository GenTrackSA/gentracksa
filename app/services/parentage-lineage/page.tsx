import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const url = "https://www.gentracksa.co.za/services/parentage-lineage";

export default function ParentageLineage() {
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
              name: "Parentage & Lineage",
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
          name: "Parentage & Lineage Testing",
          url,
          description:
            "Microsatellite/SNP-based parentage assignment and pedigree verification to manage inbreeding and prove lineage for game breeding and auctions.",
          provider: {
            "@type": "Organization",
            name: "Gen-Track SA",
            url: "https://www.gentracksa.co.za",
          },
          areaServed: { "@type": "Country", name: "South Africa" },
          serviceType: "Wildlife genetics testing",
          brand: { "@type": "Brand", name: "Gen-Track SA" },
        }}
      />

      <main className="container py-14 md:py-16">
        <article className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 md:p-10 shadow-sm">
            <p className="text-sm font-medium text-[#6b7a46]">Service</p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1b1b1b]">
              Parentage & Lineage Testing
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Resolve pedigrees and manage inbreeding risk with validated microsatellite or SNP panels. Parentage testing
              provides clear sire–dam assignment and lineage verification, supporting breeding decisions, studbook
              integrity, and high-value wildlife transactions.
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Applications</h2>
              <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
                <li>Studbook verification and long-term herd genetic management.</li>
                <li>Auction due diligence and lineage confirmation for buyers.</li>
                <li>Breeding strategy planning to reduce inbreeding risk.</li>
                <li>Hybrid detection support alongside parentage calls (where applicable).</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[#1b1b1b]">Workflow</h2>
              <div className="mt-3 grid gap-3">
                {[
                  "Sampling kit or sample collection guidance (hair, tissue, blood, etc.).",
                  "DNA extraction and quality control.",
                  "Genotyping using microsatellite or SNP markers.",
                  "Likelihood/exclusion-based parentage assignment analysis.",
                  "Final report with confidence values and breeding recommendations.",
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
                <li>Parentage assignment table (sire/dam matches + confidence values).</li>
                <li>Relatedness summaries to support breeding decisions.</li>
                <li>Optional certificate-style PDF suitable for transactions and record keeping.</li>
              </ul>
            </section>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Enquire about panels
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
