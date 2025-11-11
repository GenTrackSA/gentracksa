import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EDNA() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Environmental DNA (eDNA) Monitoring</h1>
        <p className="text-slate-300 mt-3">
          Detect species presence from water or soil DNA for rapid occupancy surveys, invasive detection, and post-release monitoring.
        </p>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Approaches</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>qPCR/ddPCR assays for target species.</li>
              <li>Metabarcoding for community snapshots.</li>
              <li>Decontamination and field blanks by default.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Use cases</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Aquatic biodiversity baselines.</li>
              <li>Early detection of invasives.</li>
              <li>Post-release presence/absence checks.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>PDF report with detection probabilities.</li>
            <li>FASTQ/BIOM and pipeline notes on request.</li>
            <li>GIS layers for site comparisons.</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">Start an eDNA survey</a>
      </article>
      <Footer />
    </div>
  );
}
