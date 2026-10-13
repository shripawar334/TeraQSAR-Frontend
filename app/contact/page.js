"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#090D0B] text-[#F5F7F5]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.13),transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28 lg:px-8">
          <Link
            href="/"
            className="text-sm text-gray-500 transition hover:text-emerald-400"
          >
            ← Back to Home
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Get in Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact <span className="text-emerald-400">Us.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have questions about the TeraQSAR research project?
            Feel free to reach out to us through email or phone.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="group rounded-2xl border border-white/10 bg-[#111713] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-2xl text-emerald-400">
                ✉
              </div>

              <p className="mt-6 text-sm text-gray-500">Email Address</p>

              <h2 className="mt-2 break-all text-lg font-semibold text-white transition group-hover:text-emerald-400">
                YOUR_EMAIL@example.com
              </h2>

              <p className="mt-4 text-sm text-gray-400">
                Send us an email →
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="group rounded-2xl border border-white/10 bg-[#111713] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-2xl text-emerald-400">
                ☎
              </div>

              <p className="mt-6 text-sm text-gray-500">Phone Number</p>

              <h2 className="mt-2 text-lg font-semibold text-white transition group-hover:text-emerald-400">
                +91 XXXXX XXXXX
              </h2>

              <p className="mt-4 text-sm text-gray-400">
                Call us →
              </p>
            </a>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">
              About TeraQSAR
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              TeraQSAR is an educational research prototype that
              explores molecular descriptor-based predictions of
              grouped historical pregnancy-risk categories using
              machine learning.
            </p>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              This project is not a clinically validated drug-safety
              assessment tool and must not be used for medical decisions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}