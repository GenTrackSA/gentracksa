"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { features, steps } from "@/components/Sections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2e8] text-[#1f1f1f]">
      <Navbar />

{/* Hero */}
<section className="relative overflow-hidden isolate">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/hero-rhino1.jpeg"
      alt="Rhino in the bushveld"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center brightness-110 contrast-125 saturate-125"
    />
  </div>

  {/* Warm safari overlays (on top of image, but behind text) */}
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/15 via-transparent to-[#f6f2e8]/45" />
<div className="absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(214,199,166,0.12),transparent_80%)]" />
<div className="absolute inset-0 z-10 bg-[radial-gradient(50%_50%_at_80%_15%,rgba(122,140,88,0.10),transparent_80%)]" />

  {/* Content */}
  <div className="container relative z-20 py-20 md:py-28">
    <div className="max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1b1b1b]"
      >
        Wildlife genetics that turns{" "}
        <span className="text-[#6b7a46]">DNA</span> into decisions.
      </motion.h1>

      <p className="mt-6 text-[#2f2f2f] text-lg md:text-xl max-w-2xl">
        Evidence-based services for species ID, parentage, population structure,
        and non-invasive abundance — tailored for ranches, reserves, and NGOs
        across southern Africa.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-2xl px-6 py-3 bg-[#6b7a46] text-white font-semibold shadow-lg hover:translate-y-[-1px] transition"
        >
          Request a proposal
        </a>

        <a
          href="#services"
          className="rounded-2xl px-6 py-3 border border-[#6b7a46]/40 bg-white/60 hover:bg-white/80 text-[#1f1f1f]"
        >
          Explore services
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#2f2f2f]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6b7a46]" />
          Non-invasive sampling experts
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6b7a46]" />
          Manager-ready reporting
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Trust bar */}
      <section className="py-6 border-y border-black/10 bg-[#f1ebdc]">
        <div className="container flex flex-wrap items-center justify-center gap-6 text-[#2b2b2b] text-sm">
          <span className="opacity-90">Trusted by private ranches, nature reserves & NGOs</span>
          <span className="w-px h-4 bg-black/20" />
          <span className="opacity-90">South Africa • Namibia • Botswana</span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b]">
            Core services
          </h2>
          <a href="#contact" className="text-[#6b7a46] hover:underline">
            Need something bespoke?
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <a
              key={f.title}
              href={f.href}
              className="rounded-3xl p-6 border border-black/10 bg-white shadow-sm hover:shadow-md transition block"
            >
              <h3 className="mt-1 text-xl font-semibold text-[#1b1b1b]">{f.title}</h3>
              <p className="mt-2 text-[#3a3a3a]">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[#6b7a46] text-sm font-medium">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b]">
          How we work
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl p-6 border border-black/10 bg-[#fffdf8] shadow-sm"
            >
              <div className="text-sm text-[#6b7a46] font-semibold">{s.step}</div>
              <div className="mt-2 text-xl font-semibold text-[#1b1b1b]">{s.title}</div>
              <p className="mt-2 text-[#3a3a3a]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              tagline: "Small pilots & confirmations",
              price: "Project-based",
              bullets: ["Species ID / single assay", "Up to 10 samples", "1–2 week timeline", "Manager-ready PDF"],
            },
            {
              name: "Standard",
              tagline: "Most conservation projects",
              price: "Project-based",
              bullets: ["Parentage / population study", "10–100 samples", "Study design + analysis", "Report + debrief call"],
            },
            {
              name: "Enterprise",
              tagline: "Large, multi-site programs",
              price: "Custom",
              bullets: [">100 samples / annual MSA", "Permits & logistics", "Dashboards & GIS", "On-site training"],
            },
          ].map((p, i) => (
            <div
              key={p.name}
              className={`rounded-3xl p-6 border border-black/10 shadow-sm ${
                i === 1 ? "bg-[#6b7a46]/10" : "bg-white"
              }`}
            >
              <div className="text-sm text-[#555]">{p.tagline}</div>
              <div className="mt-1 text-2xl font-bold text-[#1b1b1b]">{p.name}</div>
              <div className="mt-2 text-[#6b7a46] font-medium">{p.price}</div>

              <ul className="mt-4 space-y-2 text-[#2b2b2b]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#6b7a46]" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex rounded-xl px-4 py-2 border border-[#6b7a46]/40 hover:bg-[#6b7a46]/10"
              >
                Get quote
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Teaser */}
      <section id="blog" className="container py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b]">
            From the blog
          </h2>
          <a href="/blog" className="text-[#6b7a46] hover:underline text-sm">
            View all posts
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "How reliable is NIGS for abundance?", href: "/blog/nigs-reliability", excerpt: "Key pitfalls and design tips for faecal DNA capture–recapture." },
            { title: "Parentage testing 101 for game ranches", href: "/blog/parentage-101", excerpt: "Microsats vs SNPs, sampling, and what reports should include." },
            { title: "Getting started with eDNA in arid systems", href: "/blog/edna-arid", excerpt: "When, where, and how to deploy water eDNA in drylands." },
          ].map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="rounded-3xl p-6 border border-black/10 bg-white shadow-sm hover:shadow-md transition block"
            >
              <h3 className="font-semibold text-[#1b1b1b]">{p.title}</h3>
              <p className="text-sm text-[#3a3a3a] mt-2">{p.excerpt}</p>
              <div className="text-[#6b7a46] text-sm mt-4 font-medium">
                Read more →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b]">Contact</h2>
            <p className="mt-3 text-[#3a3a3a] max-w-lg">
              Tell us about your species/system, sampling context, and the decision you need to make.
              We’ll reply with options and a ballpark quote.
            </p>

            <div className="mt-6 space-y-3 text-[#2b2b2b]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#6b7a46]/15 grid place-content-center">📧</span>
                <a className="hover:underline" href="mailto:GenTrackSA@gmail.com">
                  GenTrackSA@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#6b7a46]/15 grid place-content-center">📞</span>
                <a className="hover:underline" href="tel:+27824656983">
                  +27 82 465 6983
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#6b7a46]/15 grid place-content-center">🌍</span>
                <span>Bloemfontein, South Africa • Africa/Johannesburg</span>
              </div>
            </div>

            <div className="mt-8 text-sm text-[#555]">
              By sending this form you agree to be contacted about your enquiry.
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "loading" | "sent" | "error">(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl p-6 border border-black/10 bg-white shadow-sm"
    >
      <div className="grid grid-cols-1 gap-4">
        <label className="text-sm text-[#2b2b2b]">
          Your name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Dr Mokoena"
            className="mt-1 w-full rounded-xl bg-[#f6f2e8] border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#6b7a46]/40"
          />
        </label>

        <label className="text-sm text-[#2b2b2b]">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-xl bg-[#f6f2e8] border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#6b7a46]/40"
          />
        </label>

        <label className="text-sm text-[#2b2b2b]">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="What problem are you trying to solve?"
            className="mt-1 w-full rounded-2xl bg-[#f6f2e8] border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#6b7a46]/40"
          />
        </label>

        <button
          disabled={status === "loading"}
          className="mt-2 rounded-2xl px-5 py-3 bg-[#6b7a46] text-white font-semibold disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {status === "sent" && (
          <p className="text-[#6b7a46] font-medium">
            Thank you! We’ll be in touch at the email you provided.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 font-medium">
            Sorry, something went wrong. Please email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
