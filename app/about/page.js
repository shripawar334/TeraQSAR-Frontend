import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const descriptors = [
  {
    symbol: "a_acc",
    title: "Hydrogen Bond Acceptors",
    description:
      "Represents the number of hydrogen-bond acceptor sites in a molecule.",
  },
  {
    symbol: "a_don",
    title: "Hydrogen Bond Donors",
    description:
      "Represents the number of hydrogen-bond donor sites in a molecule.",
  },
  {
    symbol: "b_rotN",
    title: "Rotatable Bonds",
    description:
      "Describes molecular flexibility through the number of rotatable bonds.",
  },
  {
    symbol: "SlogP",
    title: "Lipophilicity",
    description:
      "A descriptor related to the partitioning tendency of a molecule between hydrophobic and aqueous environments.",
  },
  {
    symbol: "Weight",
    title: "Molecular Weight",
    description:
      "Represents the molecular weight of the compound.",
  },
];

const methodology = [
  {
    number: "01",
    title: "Dataset Preparation",
    description:
      "A dataset of 609 drug records was prepared with five molecular descriptors and grouped historical pregnancy-risk labels.",
  },
  {
    number: "02",
    title: "Feature Selection",
    description:
      "Five descriptor features— a_acc, a_don, b_rotN, SlogP and Weight—were selected as model inputs.",
  },
  {
    number: "03",
    title: "Model Training",
    description:
      "A Random Forest classifier was trained, with GridSearchCV used to explore model hyperparameters.",
  },
  {
    number: "04",
    title: "Prediction API",
    description:
      "The trained model is loaded by a FastAPI backend, which accepts descriptor values and returns a predicted category with class probabilities.",
  },
];

const categories = [
  {
    title: "Clinically Acceptable Risk",
    source: "Historical categories A and B",
    color: "bg-green-400",
    textColor: "text-green-400",
    borderColor: "border-green-400/20",
  },
  {
    title: "Moderate Risk",
    source: "Historical category C",
    color: "bg-amber-400",
    textColor: "text-amber-400",
    borderColor: "border-amber-400/20",
  },
  {
    title: "Clinically Unacceptable Risk",
    source: "Historical categories D and X",
    color: "bg-red-400",
    textColor: "text-red-400",
    borderColor: "border-red-400/20",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090D0B] text-[#F5F7F5]">
      <Navbar />

      {/* Page Hero */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium tracking-wide text-emerald-300 sm:text-sm">
                ABOUT THE RESEARCH
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Science Behind{" "}
              <span className="text-emerald-400">the Model.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              This project explores how molecular descriptors and machine
              learning can be used to predict grouped historical
              pregnancy-risk categories in a research setting.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Development & Validation of an AI-Based QSAR Model
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Quantitative Structure–Activity Relationship (QSAR) modelling
              explores relationships between molecular structure and a
              biological or toxicological endpoint. In this project, selected
              molecular descriptors are used as input features for a
              supervised classification model.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              The model uses grouped historical pregnancy-risk categories as
              its target labels. Its outputs represent model predictions based
              on those labels—not clinically established conclusions about
              fetal harm or drug safety.
            </p>

            <Link
              href="/prediction"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-[#090D0B] transition-colors hover:bg-emerald-400"
            >
              Explore Prediction
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111713] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Project Snapshot
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {[
                ["609", "Drug records"],
                ["05", "Molecular descriptors"],
                ["03", "Output categories"],
                ["01", "Random Forest model"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#090D0B] p-5"
                >
                  <p className="text-3xl font-bold text-emerald-400">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5">
              <p className="font-semibold text-white">
                Research Prototype
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Developed to demonstrate a descriptor-based machine-learning
                workflow and its prediction API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Molecular Descriptors */}
      <section className="border-y border-white/10 bg-[#0D120F]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Model Inputs
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Five Molecular Descriptors
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              The classifier receives five numerical features representing
              different molecular properties. These features are used together
              to generate the model output.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {descriptors.map((item) => (
              <article
                key={item.symbol}
                className="rounded-2xl border border-white/10 bg-[#111713] p-6 transition-colors hover:border-emerald-400/30"
              >
                <span className="inline-flex rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-mono text-sm font-semibold text-emerald-300">
                  {item.symbol}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Methodology
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            From Dataset to Prediction
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            The project follows a structured workflow from preparing model
            inputs through training, evaluation and serving predictions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {methodology.map((item) => (
            <article
              key={item.number}
              className="flex gap-5 rounded-2xl border border-white/10 bg-[#111713] p-6 sm:p-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 font-bold text-emerald-400">
                {item.number}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Risk Categories */}
      <section className="border-y border-white/10 bg-[#0D120F]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Target Labels
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Three Grouped Categories
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Historical categories A, B, C, D and X were grouped into three
              project-specific target classes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className={`rounded-2xl border ${category.borderColor} bg-[#111713] p-6`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${category.color}`}
                  />

                  <div>
                    <h3 className={`font-semibold ${category.textColor}`}>
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-400">
                      {category.source}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
            <p className="text-sm leading-7 text-amber-100/80">
              <strong className="text-amber-300">Important limitation:</strong>{" "}
              These labels are derived from historical pregnancy-risk
              categories. They are not clinically validated teratogenicity
              outcomes and must not be interpreted as definitive drug-safety
              assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#111713] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Responsible Use
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Scope and Limitations
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-400">
            <p>
              <span className="font-semibold text-white">
                Historical labels:
              </span>{" "}
              The model learns from grouped historical pregnancy-risk
              categories. It does not establish causal effects or clinically
              confirmed fetal outcomes.
            </p>

            <p>
              <span className="font-semibold text-white">
                Descriptor scope:
              </span>{" "}
              Predictions depend on five selected molecular descriptors and
              may not capture all factors relevant to developmental toxicity.
            </p>

            <p>
              <span className="font-semibold text-white">
                Intended use:
              </span>{" "}
              This is an academic research prototype, not a diagnostic tool or
              a substitute for qualified medical and toxicological assessment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore the Model Workflow
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Continue to the prediction interface to explore how molecular
            descriptor inputs are processed by the trained model.
          </p>

          <Link
            href="/prediction"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-[#090D0B] transition-colors hover:bg-emerald-400"
          >
            Go to Prediction
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}