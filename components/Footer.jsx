"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Prediction", href: "/prediction" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#090D0B] text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
                <span className="text-lg font-bold text-emerald-400">
                  Q
                </span>
              </div>

              <div>
                <p className="text-lg font-bold tracking-wide text-white">
                  Tera<span className="text-emerald-400">QSAR</span>
                </p>
                <p className="text-[10px] tracking-[0.18em] text-gray-500">
                  MOLECULAR RISK PREDICTION
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              An AI-based QSAR research project exploring molecular descriptors
              for predicting historical pregnancy-risk categories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              About This Project
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              Molecular descriptors and a Random Forest model generate
              research-oriented category predictions.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">
                Research Prototype
              </span>
            </div>
          </div>
        </div>

        {/* Scientific Disclaimer */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-6 text-gray-500">
            <span className="font-semibold text-gray-400">
              Disclaimer:
            </span>{" "}
            Predictions are based on historical pregnancy-risk categories and
            are not clinically validated assessments of fetal harm or drug
            safety. This research prototype must not be used to make medical
            decisions.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} TeraQSAR. Academic research project.
          </p>

          <p className="text-gray-500">
            Built with Next.js, Tailwind CSS & Machine Learning
          </p>
        </div>
      </div>
    </footer>
  );
}