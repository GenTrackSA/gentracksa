import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "why-nigs",
    title: "Why is non-invasive genetic sampling so useful?",
    excerpt: "Key benefits of using NIGS in wildlife and conservation management.",
    date: "2025-02-18",
  },
  {
    slug: "parentage-101",
    title: "Parentage testing 101 for game ranches",
    excerpt: "Microsats vs SNPs, sampling, and what reports should include.",
    date: "2025-01-24",
  },
  {
    slug: "edna-arid",
    title: "Getting started with eDNA in arid systems",
    excerpt: "When, where, and how to deploy water eDNA in drylands.",
    date: "2025-02-02",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#f6f2e8] text-[#1f1f1f]">
      <Navbar />

      {/* Warm safari background wash */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f6f2e8]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(214,199,166,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_20%,rgba(122,140,88,0.18),transparent_65%)]" />
      </div>

      <section className="container py-14 md:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#6b7a46]">Blog</p>
          <h1 className="mt-2 text-4xl font-bold text-[#1b1b1b]">Practical notes from the field & lab</h1>
          <p className="mt-3 text-[#3a3a3a]">
            Short, manager-friendly explainers on genetics, sampling, and decision-ready reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-3xl p-6 border border-black/10 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition block"
            >
              <div className="text-sm text-[#555]">
                {new Date(p.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>

              <h3 className="text-xl font-semibold mt-2 text-[#1b1b1b] group-hover:underline decoration-[#6b7a46]/60 underline-offset-4">
                {p.title}
              </h3>

              <p className="text-sm text-[#3a3a3a] mt-3">{p.excerpt}</p>

              <div className="text-[#6b7a46] text-sm mt-5 font-medium">
                Read more →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold shadow-sm hover:opacity-95 transition"
          >
            Discuss a project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
