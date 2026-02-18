import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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
              Parentage testing 101 for game ranches & breeders
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Parentage testing uses DNA to confirm who the sire and dam are for a given animal. For game ranches,
              this supports studbook integrity, breeding decisions, buyer confidence, and risk management—especially
              when animals move between properties or are prepared for auction.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Why do parentage testing at all?
            </h2>
            <div className="mt-3 grid gap-3">
              {[
                "Prove lineage for high-value animals (sales, auctions, and due diligence).",
                "Reduce inbreeding risk by tracking relatedness and preventing close-pair matings.",
                "Validate breeding outcomes (especially in multi-sire camps).",
                "Resolve disputes or uncertainty where records are incomplete or animals were mixed.",
                "Build a defensible studbook over time—backed by genetic evidence.",
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
              Microsatellites vs SNPs (quick, practical view)
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              Both approaches can work well. The “best” choice depends on what marker panels exist for your species,
              turnaround time, and the scale of your program.
            </p>

            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Microsatellites:</strong> often cheaper per sample for smaller runs, widely used historically,
                and good for many species when a validated panel exists.
              </li>
              <li>
                <strong>SNPs:</strong> typically more scalable and consistent across labs/platforms, strong performance on
                larger pedigrees, and useful when a robust SNP panel exists for the species.
              </li>
              <li>
                <strong>Key point:</strong> marker quality and reference data matter more than the buzzword. A validated panel
                and good lab QA is what makes results defensible.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              What samples do you need?
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              Most ranch programs use blood or tissue (high DNA quality). Hair follicles can work if collected correctly,
              and ear notches are common where handled. Non-invasive samples are possible, but parentage usually benefits
              from high-quality DNA to avoid dropouts and ambiguous calls.
            </p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 p-4 text-[#2b2b2b]">
              <p className="font-semibold">Minimum set for parentage</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-[#3a3a3a]">
                <li>Offspring sample</li>
                <li>Dam sample (recommended)</li>
                <li>Sire sample (recommended)</li>
                <li>
                  If sires are unknown: samples from <strong>all candidate males</strong> in the breeding camp
                </li>
              </ul>
            </div>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              How parentage is assigned (what the lab actually does)
            </h2>
            <ol className="mt-3 list-decimal pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Genotyping:</strong> Each animal is genotyped at a set of markers (microsats or SNPs).
              </li>
              <li>
                <strong>Quality control:</strong> Replicates/controls are used to detect contamination, dropouts, and sample swaps.
              </li>
              <li>
                <strong>Parentage analysis:</strong> Software compares the offspring genotype to candidate parents using
                exclusion rules and/or likelihood scores.
              </li>
              <li>
                <strong>Confidence reporting:</strong> Results are provided with confidence/likelihood metrics—not just a name.
              </li>
            </ol>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              What a good report should include
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>Clear sample list (IDs, metadata, collection date).</li>
              <li>Parentage table (offspring → assigned dam/sire) with confidence values.</li>
              <li>Notes on exclusions / ambiguous cases and what would resolve them (e.g., “sample candidate male X”).</li>
              <li>QA notes (missing data rate, reruns, controls passed).</li>
              <li>Optional: relatedness summary to guide future breeding decisions.</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Practical tips to avoid common headaches
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Use consistent IDs:</strong> sample labels should match studbook IDs exactly.
              </li>
              <li>
                <strong>Sample all candidate sires:</strong> multi-sire camps create ambiguity unless candidates are included.
              </li>
              <li>
                <strong>Prioritize DNA quality:</strong> poor samples lead to rework, delays, and lower-confidence calls.
              </li>
              <li>
                <strong>Plan for growth:</strong> if you want a long-term studbook, set up a repeatable workflow now.
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-black/15 bg-white/50 text-[#1b1b1b] font-semibold hover:bg-white/70 transition"
              >
                Back to blog
              </Link>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
              >
                Discuss a parentage project
              </a>
            </div>

            <p className="mt-8 text-sm text-[#555]">
              If you share your species, camp structure (single-sire vs multi-sire), approximate number of animals, and whether
              this is for routine studbook management or auction due diligence, we can recommend the best marker approach and a
              sampling plan.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
