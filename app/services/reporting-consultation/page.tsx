import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReportingConsultation() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Reporting & Decision Support</h1>
        <p className="text-slate-300 mt-3">
          Turn raw genetics into clear, actionable decisions. We deliver manager-ready reports, visualisations, and consultation aligned to your goals.
        </p>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">What’s included</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Plain-language executive summary.</li>
              <li>Figures, tables, and GIS layers.</li>
              <li>Recommendations and next-step options.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Options</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
              <li>Slide deck + live debrief.</li>
              <li>Data stewardship & backups.</li>
              <li>Template SOPs for future sampling.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <p className="text-slate-300 mt-2">Most reports delivered within 2–3 weeks of lab completion; expedited options available.</p>
        </section>

        <a href="/#contact" className="inline-block mt-10 rounded-2xl px-5 py-3 bg-emerald-500 text-slate-950 font-semibold">Book a consult</a>
      </article>
      <Footer />
    </div>
  );
}
