import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NIGS() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Non-invasive Genetics (NIGS)</h1>
        <p className="text-slate-300 mt-3">
          Estimate abundance, sex ratios, and diversity using dung and hair DNA—ideal for elusive or sensitive species without capture stress.
        </p>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Design & Models</h3>
            <p className="text-slate-300 mt-2">Spatial sampling design → multi-occasion capture histories → POPAN/Jolly-Seber or SECR models for abundance/density.</p>
          </div>
          <div>
            <h3 className="font-semibold">Sampling kits</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Faecal tubes with preservative & barcodes.</li>
              <li>GPS form & chain-of-custody templates.</li>
              <li>Field protocol cards and training call.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Deliverables & timeline</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Estimator outputs with CIs and diagnostics.</li>
            <li>Map layers & effort summaries for reports.</li>
            <li>Typical pilot: 4–8 weeks depending on scale.</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">Scope a NIGS survey</a>
      </article>
      <Footer />
    </div>
  );
}
