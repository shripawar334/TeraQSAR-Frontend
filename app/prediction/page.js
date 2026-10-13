"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const initialForm = {
  a_acc: "",
  a_don: "",
  b_rotN: "",
  SlogP: "",
  Weight: "",
};

const descriptorFields = [
  {
    name: "a_acc",
    label: "H-Bond Acceptors",
    description: "Hydrogen-bond acceptor sites",
    icon: "A",
    min: 0,
    step: "1",
    placeholder: "e.g. 5",
  },
  {
    name: "a_don",
    label: "H-Bond Donors",
    description: "Hydrogen-bond donor sites",
    icon: "D",
    min: 0,
    step: "1",
    placeholder: "e.g. 2",
  },
  {
    name: "b_rotN",
    label: "Rotatable Bonds",
    description: "Molecular flexibility descriptor",
    icon: "R",
    min: 0,
    step: "1",
    placeholder: "e.g. 4",
  },
  {
    name: "SlogP",
    label: "SlogP",
    description: "Molecular lipophilicity descriptor",
    icon: "P",
    step: "any",
    placeholder: "e.g. 1.25",
  },
  {
    name: "Weight",
    label: "Molecular Weight",
    description: "Molecular weight in g/mol",
    icon: "M",
    min: 0.000001,
    step: "any",
    placeholder: "e.g. 250.35",
  },
];

const riskStyles = {
  "Clinically Acceptable Risk": {
    color: "text-green-400",
    border: "border-green-400/25",
    background: "bg-green-400/10",
    bar: "bg-green-400",
    dot: "bg-green-400",
    short: "Class 1",
  },
  "Moderate Risk": {
    color: "text-amber-400",
    border: "border-amber-400/25",
    background: "bg-amber-400/10",
    bar: "bg-amber-400",
    dot: "bg-amber-400",
    short: "Class 2",
  },
  "Clinically Unacceptable Risk": {
    color: "text-red-400",
    border: "border-red-400/25",
    background: "bg-red-400/10",
    bar: "bg-red-400",
    dot: "bg-red-400",
    short: "Class 3",
  },
};

export default function PredictionPage() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  }

  function handleReset() {
    setForm(initialForm);
    setResult(null);
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setResult(null);

    const payload = {};

    for (const field of descriptorFields) {
      const value = form[field.name].trim();

      if (value === "") {
        setError(`Please enter ${field.label}.`);
        return;
      }

      const number = Number(value);

      if (!Number.isFinite(number)) {
        setError(`${field.label} must be a valid number.`);
        return;
      }

      if (field.min !== undefined && number < field.min) {
        setError(
          `${field.label} must be ${field.min === 0 ? "zero or greater" : "greater than zero"}.`
        );
        return;
      }

      payload[field.name] = number;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(
          `API request failed (${response.status}). ${details.slice(0, 180)}`
        );
      }

      const data = await response.json();

      if (!data.predicted_risk_category) {
        throw new Error("The API response did not contain a prediction.");
      }

      setResult(data);
    } catch (err) {
      console.error("Prediction request failed:", err);

      if (err instanceof TypeError) {
        setError(
          "Could not connect to the prediction API. Make sure the FastAPI backend is running. If it is running, the backend may need CORS configuration."
        );
      } else {
        setError(
          err.message || "Something went wrong while generating the prediction."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  const resultStyle = result
    ? riskStyles[result.predicted_risk_category] || {
        color: "text-emerald-400",
        border: "border-emerald-400/25",
        background: "bg-emerald-400/10",
        bar: "bg-emerald-400",
        dot: "bg-emerald-400",
        short: "Model Output",
      }
    : null;

  const probabilities = result?.class_probabilities
    ? Object.entries(result.class_probabilities).sort(
        ([, probabilityA], [, probabilityB]) =>
          probabilityB - probabilityA
      )
    : [];

  return (
    <main className="min-h-screen overflow-hidden bg-[#090D0B] text-[#F5F7F5]">
      <Navbar />

      {/* Page Header */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.13),_transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-emerald-400"
          >
            <span aria-hidden="true">←</span> Back to Home
          </Link>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  QSAR Research Workspace
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Molecular Risk{" "}
                <span className="text-emerald-400">Analysis.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                Enter molecular descriptors to explore the output of the
                trained Random Forest classification model.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-[#111713] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-xl text-emerald-400">
                ◈
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Random Forest
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Three-class classifier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8">
        <div className="grid items-start gap-7 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Input Form */}
          <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#101511]">
            <div className="border-b border-white/10 px-6 py-6 sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    Step 01
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Molecular Descriptors
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    All five values are required by the trained model.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#090D0B] text-2xl text-emerald-400 sm:flex">
                  ⌬
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
                {descriptorFields.map((field, index) => (
                  <div
                    key={field.name}
                    className={index === 4 ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field.name}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-200"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/5 text-xs font-bold text-emerald-300">
                        {field.icon}
                      </span>
                      {field.label}
                      <span className="text-red-400">*</span>
                    </label>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {field.description}
                    </p>

                    <input
                      id={field.name}
                      name={field.name}
                      type="number"
                      inputMode="decimal"
                      min={field.min}
                      step={field.step}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      required
                      className="mt-3 w-full rounded-xl border border-white/10 bg-[#090D0B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-white/20 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10"
                    />
                  </div>
                ))}
              </div>

              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm leading-6 text-red-300"
                >
                  <span className="font-semibold">Unable to proceed:</span>{" "}
                  {error}
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 font-semibold text-[#090D0B] transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#090D0B]/30 border-t-[#090D0B]" />
                      Processing Descriptors...
                    </>
                  ) : (
                    <>
                      Generate Prediction
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={loading}
                  className="rounded-xl border border-white/10 px-6 py-4 text-sm font-semibold text-gray-300 transition-colors hover:border-emerald-400/30 hover:text-white disabled:opacity-50"
                >
                  Reset Form
                </button>
              </div>

              <p className="mt-5 text-xs leading-6 text-gray-500">
                Enter descriptor values from a reliable molecular data source.
                Do not use arbitrary values to assess a real drug.
              </p>
            </form>
          </section>

          {/* Results Panel */}
          <section
            aria-live="polite"
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#101511]"
          >
            <div className="border-b border-white/10 px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Step 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Prediction Results
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                The result panel updates after a successful API response.
              </p>
            </div>

            {!result && !loading && (
              <div className="p-6 sm:p-8">
                <div className="flex min-h-52 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#090D0B] px-6 py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/5 text-3xl text-emerald-400">
                    ◈
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    Awaiting Analysis
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                    Complete all five fields and generate a prediction to view
                    the model output here.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-[#090D0B] p-4">
                    <p className="text-xs text-gray-500">Input Features</p>
                    <p className="mt-2 text-2xl font-bold text-white">05</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#090D0B] p-4">
                    <p className="text-xs text-gray-500">Output Classes</p>
                    <p className="mt-2 text-2xl font-bold text-white">03</p>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="flex min-h-80 flex-col items-center justify-center p-8 text-center">
                <div className="h-12 w-12 animate-spin rounded-full border-2 border-emerald-400/20 border-t-emerald-400" />
                <h3 className="mt-6 font-semibold text-white">
                  Analyzing Molecular Features
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Waiting for the prediction API response...
                </p>
              </div>
            )}

            {result && resultStyle && (
              <div className="p-6 sm:p-8">
                <div
                  className={`rounded-2xl border ${resultStyle.border} ${resultStyle.background} p-5 sm:p-6`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                      Predicted Category
                    </p>
                    <span className={`text-xs font-semibold ${resultStyle.color}`}>
                      {resultStyle.short}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 text-2xl font-bold leading-tight sm:text-3xl ${resultStyle.color}`}
                  >
                    {result.predicted_risk_category}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    This is the class selected by the trained model for the
                    submitted descriptor values.
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">
                      Class Probabilities
                    </h3>
                    <span className="text-xs text-gray-500">
                      Model output
                    </span>
                  </div>

                  {probabilities.length > 0 ? (
                    <div className="mt-5 space-y-6">
                      {probabilities.map(([label, probability]) => {
                        const style = riskStyles[label] || {
                          color: "text-gray-300",
                          bar: "bg-gray-400",
                          dot: "bg-gray-400",
                        };

                        const percentage = Math.max(
                          0,
                          Math.min(100, probability * 100)
                        );

                        return (
                          <div key={label}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-2">
                                <span
                                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${style.dot}`}
                                />
                                <p className="text-sm leading-5 text-gray-300">
                                  {label}
                                </p>
                              </div>

                              <span
                                className={`shrink-0 text-sm font-semibold ${style.color}`}
                              >
                                {percentage.toFixed(2)}%
                              </span>
                            </div>

                            <div
                              className="mt-3 h-2 overflow-hidden rounded-full bg-white/5"
                              role="progressbar"
                              aria-label={`${label} probability`}
                              aria-valuenow={percentage}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${style.bar}`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-gray-500">
                      The API did not return class probabilities.
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 w-full rounded-xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:border-emerald-400/30 hover:text-white"
                >
                  Start New Prediction
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg text-amber-400">!</span>
            <div>
              <h3 className="font-semibold text-amber-300">
                Research Prototype — Important Disclaimer
              </h3>
              <p className="mt-2 text-sm leading-7 text-amber-100/70">
                This model predicts grouped historical pregnancy-risk
                categories. Its output is not a clinically validated
                assessment of teratogenicity, fetal harm, or drug safety.
                Probabilities represent the model's class outputs, not the
                probability that a drug will harm a fetus. Do not use this
                interface to make medical decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}