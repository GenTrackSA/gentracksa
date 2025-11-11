import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PopulationGenetics() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Population Genetics & Diversity</h1>
        <p className="text-slate-300 mt-3">
          Quantify diversity, relatedness, and structure to inform translocations, introductions, and long-term herd resilience.
        </p>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Analyses</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Heterozygosity, inbreeding, relatedness.</li>
              <li>Population structure (PCA/STRUCTURE/adegenet).</li>
              <li>Gene flow/connectivity; bottleneck signals.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Outputs</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Manager-ready PDF with figures and maps.</li>
              <li>Appendix with methods and QC metrics.</li>
              <li>Actionable recommendations per site/herd.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Use cases</h2>
          <p className="text-slate-300 mt-2">Conservation plans, reintroduction design, metapopulation management, and responsible game breeding.</p>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">Plan a diversity study</a>
      </article>
      <Footer />
    </div>
  );
}
