"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Prediction", href: "/prediction" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090D0B]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
            <span className="text-lg font-bold text-emerald-400">Q</span>
          </div>

          <div>
            <p className="text-lg font-bold tracking-wide text-white">
              Tera<span className="text-emerald-400">QSAR</span>
            </p>
            <p className="text-[10px] tracking-[0.18em] text-gray-400">
              MOLECULAR RISK PREDICTION
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-emerald-400"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/prediction"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#090D0B] transition-colors duration-200 hover:bg-emerald-400"
          >
            Try Prediction
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-emerald-400/50 hover:text-emerald-400 md:hidden"
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090D0B] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/prediction"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-[#090D0B] transition-colors hover:bg-emerald-400"
            >
              Try Prediction
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}