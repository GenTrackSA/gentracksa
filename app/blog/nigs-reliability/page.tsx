import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Post() {
  return (
    <div className="min-h-screen bg-[#f6f2e8] text-[#1f1f1f]">
      <Navbar />

      {/* Warm safari background wash */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f6f2e8]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(214,199,166,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_20%,rgba(122,140,88,0.18),transparent_65%)]" />
      </div>

      <main className="container py-14 md:py-16">
        <article className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 md:p-10 shadow-sm">
            <p className="text-sm font-medium text-[#6b7a46]">Blog</p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1b1b1b]">
              Why NIGS is so useful for game & conservation management
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Non-Invasive Genetic Sampling (NIGS) uses DNA from dung, hair, feathers, or other trace samples
              to answer management questions without capturing, darting, or stressing animals. In practice,
              it’s one of the most cost-effective ways to turn “we think the population is doing okay”
              into measurable, defensible numbers and trends.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              What problems does it solve?
            </h2>

            <div className="mt-3 grid gap-3">
              {[
                "Abundance: How many animals are actually on the property or in a block?",
                "Trends: Is the population increasing, stable, or declining over time?",
                "Sex ratio: Are we managing a balanced breeding structure?",
                "Connectivity: Are sub-groups mixing, or are they becoming genetically isolated?",
                "Individual ID: Are the same animals being detected across seasons/areas?",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-[#2b2b2b]"
                >
                  {x}
                </div>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Why managers like it
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Low disturbance:</strong> no captures, lower risk, and fewer operational headaches.
              </li>
              <li>
                <strong>Decision-ready outputs:</strong> abundance estimates, confidence intervals, and clear recommendations.
              </li>
              <li>
                <strong>Works when sightings don’t:</strong> useful for elusive species, thick bush, rugged terrain, or nocturnal behavior.
              </li>
              <li>
                <strong>Auditable evidence:</strong> DNA-based individual IDs create a traceable basis for claims and reporting.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Where it fits into a real workflow
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              NIGS is most powerful when paired with a simple sampling plan (e.g., transects or road networks),
              repeated over multiple short occasions. That allows genetic “mark–recapture” style modelling:
              each unique genotype acts like a “mark”, and re-detections across occasions drive abundance estimates.
              In the same dataset, you can often extract additional value: sex ratios, relatedness signals, and early warnings
              of reduced diversity in small or intensively managed herds.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Practical tips to get reliable results
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Prioritize fresh samples:</strong> fresher dung/hair dramatically improves DNA success rates.
              </li>
              <li>
                <strong>Consistency beats intensity:</strong> repeated, consistent sampling occasions are better than one big push.
              </li>
              <li>
                <strong>Track metadata:</strong> GPS location, date, habitat notes, and collector notes improve interpretation.
              </li>
              <li>
                <strong>Report uncertainty:</strong> good reports include confidence intervals and assumptions, not just a single number.
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-black/15 bg-white/50 text-[#1b1b1b] font-semibold hover:bg-white/70 transition"
              >
                Back to blog
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Discuss a NIGS project
              </a>
            </div>

            <p className="mt-8 text-sm text-[#555]">
              If you tell us your species, site size, and what decision you need to make (stocking, removals, translocations,
              monitoring targets), we can recommend a sampling design and what level of precision to expect.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
