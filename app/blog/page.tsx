import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { slug: "nigs-reliability", title: "How reliable is NIGS for abundance?", excerpt: "Key pitfalls and design tips for faecal DNA capture–recapture.", date: "2025-01-10" },
  { slug: "parentage-101", title: "Parentage testing 101 for game ranches", excerpt: "Microsats vs SNPs, sampling, and what reports should include.", date: "2025-01-24" },
  { slug: "edna-arid", title: "Getting started with eDNA in arid systems", excerpt: "When, where, and how to deploy water eDNA in drylands.", date: "2025-02-02" },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="container py-16">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-slate-300 mt-2">Practical notes from the field and lab.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 block">
              <div className="text-sm text-slate-400">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="text-xl font-semibold mt-1">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.excerpt}</p>
              <div className="text-emerald-300 text-sm mt-4">Read more →</div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
