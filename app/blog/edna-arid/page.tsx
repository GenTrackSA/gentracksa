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
              Getting started with eDNA in arid systems
            </h1>

            <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
              Environmental DNA (eDNA) lets you detect species from genetic traces left behind in water, wet sediment, or soil.
              In arid environments, the challenge isn’t whether eDNA “works”—it’s designing sampling around scarce water,
              short-lived signals, and high contamination risk so results are defensible for management decisions.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              What questions eDNA can answer in drylands
            </h2>
            <div className="mt-3 grid gap-3">
              {[
                "Presence/absence: Is species X using this waterpoint or drainage line?",
                "Early warning: Are invasive or high-risk species appearing before sightings confirm it?",
                "Biodiversity snapshots: What is using a pan, seep, or trough when direct observation is difficult?",
                "Post-release monitoring: Did a reintroduced species persist and spread to nearby points?",
                "For cryptic taxa: Amphibians, small fish, invertebrates, and elusive mammals near water.",
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
              The arid-system reality: where to sample
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              In dry landscapes, eDNA concentrates where animals and water intersect. Start with “DNA funnels”:
              waterpoints, pans after rain, seep lines, small dams, overflow channels, and troughs.
              If there’s no standing water, wet sediment and soil at the waterline (or in shaded seep areas) can still carry signal.
            </p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 p-4 text-[#2b2b2b]">
              <p className="font-semibold">Good starter sampling targets</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-[#3a3a3a]">
                <li>Permanent waterpoints (dams, borehole troughs, springs)</li>
                <li>Seasonal pans immediately after rain events</li>
                <li>Drainage lines (pools, shaded seeps, slow-moving sections)</li>
                <li>Waterpoint edges: wet sediment + water column (when present)</li>
              </ul>
            </div>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Timing matters more than you think
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              eDNA doesn’t last forever—heat, UV, and microbial activity can degrade it quickly. In arid zones, the best window is often:
              <strong> early morning</strong>, <strong>cooler days</strong>, and especially <strong>soon after rainfall</strong> when water
              has pooled and animals have visited. If your question is “who used this waterpoint recently?”, sampling shortly after peak
              use (or after rainfall concentrates activity) is usually the most informative.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              A simple, defensible sampling design (beginner-friendly)
            </h2>
            <ol className="mt-3 list-decimal pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Select 5–15 sites</strong> (waterpoints/pans/seeps) that represent management units.
              </li>
              <li>
                <strong>Replicate per site</strong>: take 2–3 independent samples per site (spaced around the edge / different micro-areas).
              </li>
              <li>
                <strong>Repeat over time</strong>: 2–4 rounds across the season (e.g., early wet, mid wet, late wet, dry).
              </li>
              <li>
                <strong>Include controls</strong>: field blanks + filtration blanks + lab negatives to show results aren’t contamination.
              </li>
            </ol>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Water vs sediment vs soil in arid systems
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>Water:</strong> great when present; often represents recent activity in that water body.
              </li>
              <li>
                <strong>Wet sediment:</strong> can hold DNA longer and may be more reliable when water is shallow or intermittent.
              </li>
              <li>
                <strong>Soil:</strong> possible near seeps/edges, but inhibitors are common—method selection and QC matter.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              Common mistakes (and how to avoid them)
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>
                <strong>No replication:</strong> single samples are fragile. Use 2–3 replicates per site.
              </li>
              <li>
                <strong>Ignoring contamination:</strong> eDNA is sensitive—controls are non-negotiable.
              </li>
              <li>
                <strong>Over-interpreting “absence”:</strong> non-detection isn’t proof of absence; it may reflect timing, dilution, or inhibitors.
              </li>
              <li>
                <strong>Not recording metadata:</strong> date/time, rainfall, turbidity, GPS, and site notes dramatically improve interpretation.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[#1b1b1b]">
              What you should expect in the final output
            </h2>
            <ul className="mt-3 list-disc pl-5 text-[#3a3a3a] space-y-2">
              <li>Site-by-site detection table (with replicate support).</li>
              <li>Clear notes on confidence and controls (what was checked, what passed).</li>
              <li>Maps of detections by management unit (optional but recommended).</li>
              <li>Practical recommendations: which sites to resample, when to repeat, and how to scale the program.</li>
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
                Discuss an eDNA survey
              </a>
            </div>

            <p className="mt-8 text-sm text-[#555]">
              If you tell us your target species (or taxonomic group), your water availability (permanent vs seasonal),
              and your main decision (invasive detection, reintroduction monitoring, biodiversity baseline), we can recommend
              the simplest sampling plan that still gives reliable, management-grade results.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
