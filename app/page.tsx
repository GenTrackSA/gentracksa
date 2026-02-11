"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { features, steps } from "@/components/Sections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image (served from /public) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-rhino1.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Overlay corrections (lighter so image is visible) */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-[#070605]/85" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_25%_12%,rgba(214,199,166,0.22),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_80%_18%,rgba(122,140,88,0.18),transparent_65%)]" />

        <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Wildlife genetics that turns{" "}
              <span className="text-[#d6c7a6]">DNA</span> into decisions.
            </motion.h1>

            <p className="mt-6 text-slate-200 text-lg md:text-xl max-w-xl">
              Evidence-based services for species ID, parentage, population structure,
              and non-invasive abundance — tailored for ranches, reserves, and NGOs
              across southern Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl px-5 py-3 bg-[#d6c7a6] text-black font-semibold shadow-lg hover:translate-y-[-1px] transition"
              >
                Request a proposal
              </a>
              <a
                href="#services"
                className="rounded-2xl px-5 py-3 border border-[rgba(214,199,166,0.35)] text-slate-100 hover:bg-white/5"
              >
                Explore services
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d6c7a6]" />
                Non-invasive sampling experts
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d6c7a6]" />
                Manager-ready reporting
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md p-6 shadow-2xl grid place-items-center">
              <Image
                src="/logo.png"
                width={420}
                height={420}
                alt="GenTrack SA Logo"
                className="object-contain w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6 border-y border-white/10 bg-black/25 backdrop-blur">
        <div className="container flex flex-wrap items-center justify-center gap-6 text-slate-200 text-sm">
          <span className="opacity-80">Trusted by private ranches, nature reserves & NGOs</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="opacity-80">South Africa • Namibia • Botswana</span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Core services</h2>
          <a href="#contact" className="text-[#d6c7a6] hover:underline">
            Need something bespoke?
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <a
              key={f.title}
              href={f.href}
              className="rounded-3xl p-6 border border-white/10 bg-black/25 backdrop-blur hover:bg-white/[0.06] block"
            >
              <h3 className="mt-1 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-200/80">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[#d6c7a6] text-sm">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold">How we work</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl p-6 border border-white/10 bg-black/20 backdrop-blur"
            >
              <div className="text-sm text-[#d6c7a6] font-semibold">{s.step}</div>
              <div className="mt-2 text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-slate-200/80">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="container py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Selected projects</h2>
          <span className="text-sm text-slate-200/70">Summaries available on request</span>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            "Non-invasive kudu abundance (NIGS + POPAN)",
            "Parentage testing for sable herd",
            "eDNA detection of rare amphibian",
          ].map((title) => (
            <article
              key={title}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-black/25 backdrop-blur"
            >
              <div className="aspect-[16/10] bg-[radial-gradient(circle_at_70%_30%,rgba(214,199,166,0.22),transparent_60%)]" />
              <div className="p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-200/80">
                  Outcomes: decision-ready estimates, method transfer, and practical protocols.
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-[#d6c7a6] text-sm">
                  Request summary →
                </div>
              </div>
            </article>
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
              className={`rounded-3xl p-6 border backdrop-blur ${
                i === 1 ? "border-[rgba(214,199,166,0.35)] bg-[#d6c7a6]/10" : "border-white/10 bg-black/25"
              }`}
            >
              <div className="text-sm text-slate-200/70">{p.tagline}</div>
              <div className="mt-1 text-2xl font-bold">{p.name}</div>
              <div className="mt-2 text-[#d6c7a6]">{p.price}</div>

              <ul className="mt-4 space-y-2 text-slate-100">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#d6c7a6]" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex rounded-xl px-4 py-2 border border-[rgba(214,199,166,0.35)] hover:bg-white/5"
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
          <h2 className="text-3xl md:text-4xl font-bold">From the blog</h2>
          <a href="/blog" className="text-[#d6c7a6] hover:underline text-sm">
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
              className="rounded-3xl p-6 border border-white/10 bg-black/25 backdrop-blur hover:bg-white/[0.06] block"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-200/80 mt-2">{p.excerpt}</p>
              <div className="text-[#d6c7a6] text-sm mt-4">Read more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <p className="mt-3 text-slate-200/80 max-w-lg">
              Tell us about your species/system, sampling context, and the decision you need to make.
              We’ll reply with options and a ballpark quote.
            </p>

            <div className="mt-6 space-y-3 text-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-white/10 grid place-content-center">📧</span>
                <a className="hover:underline" href="mailto:GenTrackSA@gmail.com">GenTrackSA@gmail.com</a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-white/10 grid place-content-center">📞</span>
                <a className="hover:underline" href="tel:+27824656983">+27 82 465 6983</a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-white/10 grid place-content-center">🌍</span>
                <span>Bloemfontein, South Africa • Africa/Johannesburg</span>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-200/60">
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
      className="rounded-3xl p-6 border border-white/10 bg-black/25 backdrop-blur"
    >
      <div className="grid grid-cols-1 gap-4">
        <label className="text-sm text-slate-100">
          Your name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Dr Mokoena"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(214,199,166,0.5)]"
          />
        </label>

        <label className="text-sm text-slate-100">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(214,199,166,0.5)]"
          />
        </label>

        <label className="text-sm text-slate-100">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="What problem are you trying to solve?"
            className="mt-1 w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[rgba(214,199,166,0.5)]"
          />
        </label>

        <button
          disabled={status === "loading"}
          className="mt-2 rounded-2xl px-5 py-3 bg-[#d6c7a6] text-black font-semibold disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {status === "sent" && (
          <p className="text-[#d6c7a6]">
            Thank you! We’ll be in touch at the email you provided.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-300">
            Sorry, something went wrong. Please email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
