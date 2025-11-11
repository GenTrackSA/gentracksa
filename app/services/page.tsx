import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { features } from "@/components/Sections";

export default function ServicesIndex() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-slate-300 mt-2 max-w-2xl">
          Practical genetics for wildlife managers, ranchers, and conservation teams. Click a service to learn more.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((f) => (
            <a key={f.title} href={f.href} className="rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/[0.07] block">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{f.desc}</p>
              <div className="text-emerald-300 text-sm mt-4">View details →</div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
