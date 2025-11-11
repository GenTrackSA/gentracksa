import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ParentageLineage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Parentage & Lineage Testing</h1>
        <p className="text-slate-300 mt-3">
          Resolve pedigrees and manage inbreeding risk with validated microsatellite or SNP panels and clear sire–dam assignments.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Studbook verification and herd management.</li>
            <li>Auction due-diligence and certificate support.</li>
            <li>Hybrid status checks alongside parentage calls.</li>
          </ul>
        </section>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Workflow</h3>
            <p className="text-slate-300 mt-2">Sampling kit → DNA extraction → genotyping (microsats/SNPs) → likelihood or exclusion analyses → report.</p>
          </div>
          <div>
            <h3 className="font-semibold">Deliverables</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Parentage table with confidence values.</li>
              <li>Kinship/relatedness summaries for breeding plans.</li>
              <li>Certificate-style PDF if required for transactions.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Turnaround</h2>
          <p className="text-slate-300 mt-2">10–15 working days for typical cohorts; multi-hundred sample sets by schedule.</p>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">Enquire about panels</a>
      </article>
      <Footer />
    </div>
  );
}
