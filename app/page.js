import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    number: "01",
    title: "Molecular Descriptors",
    description:
      "Uses five molecular descriptors to represent important physicochemical properties of a compound.",
    icon: "⌬",
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "A Random Forest classification model generates predictions from the selected molecular features.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Prediction Insights",
    description:
      "Displays a predicted historical pregnancy-risk category alongside the model's class probabilities.",
    icon: "↗",
  },
];

const workflow = [
  {
    step: "01",
    title: "Enter Molecular Data",
    description:
      "Provide the five molecular descriptor values required by the model.",
  },
  {
    step: "02",
    title: "Run the Model",
    description:
      "The descriptors are processed by the trained Random Forest classifier.",
  },
  {
    step: "03",
    title: "Review the Output",
    description:
      "Review the predicted category and class probabilities as research-oriented model outputs.",
  },
];

const riskCategories = [
  {
    title: "Clinically Acceptable Risk",
    description: "Historical categories A and B",
    color: "bg-green-400",
    textColor: "text-green-400",
    borderColor: "border-green-400/20",
  },
  {
    title: "Moderate Risk",
    description: "Historical category C",
    color: "bg-amber-400",
    textColor: "text-amber-400",
    borderColor: "border-amber-400/20",
  },
  {
    title: "Clinically Unacceptable Risk",
    description: "Historical categories D and X",
    color: "bg-red-400",
    textColor: "text-red-400",
    borderColor: "border-red-400/20",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090D0B] text-[#F5F7F5]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-emerald-700/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0b_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium tracking-wide text-emerald-300 sm:text-sm">
                AI-POWERED QSAR RESEARCH
              </span>
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Understanding Molecular Risk Through{" "}
              <span className="text-emerald-400">AI & Science.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Explore a machine-learning approach that uses molecular
              descriptors to predict historical pregnancy-risk categories for
              research and educational purposes.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/prediction"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-[#090D0B] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Explore Prediction
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 font-semibold text-white transition-colors hover:border-emerald-400/40 hover:bg-white/5"
              >
                Learn About the Model
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Molecular descriptors
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Random Forest model
              </span>
            </div>
          </div>

          {/* Scientific Preview Panel */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-400/5 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#111713]/95 p-5 shadow-2xl shadow-black/30 sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                    Model Overview
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Molecular Analysis
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-2xl text-emerald-400">
                  ⌬
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-gray-400">
                Five molecular descriptors are used as input features for the
                trained classification model.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["a_acc", "H-Bond Acceptors"],
                  ["a_don", "H-Bond Donors"],
                  ["b_rotN", "Rotatable Bonds"],
                  ["SlogP", "Lipophilicity"],
                  ["Weight", "Molecular Weight"],
                ].map(([name, label]) => (
                  <div
                    key={name}
                    className="rounded-xl border border-white/10 bg-[#090D0B] p-4"
                  >
                    <p className="text-sm font-semibold text-emerald-300">
                      {name}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-xl text-emerald-400">
                    ◈
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Random Forest Classifier
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Supervised machine learning
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-400">Output</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                    3-class prediction
                  </span>
                </div>
              </div>

              <p className="mt-5 text-xs leading-5 text-gray-500">
                Illustrative interface preview — not a live prediction or an
                assessment of a specific drug.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="border-y border-white/10 bg-[#0D120F]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-3 sm:gap-6 lg:px-8">
          {[
            ["05", "Molecular descriptors", "Selected model input features"],
            ["01", "Random Forest model", "Trained classification algorithm"],
            ["03", "Prediction categories", "Grouped historical risk labels"],
          ].map(([value, title, description]) => (
            <div key={title} className="text-center">
              <p className="text-3xl font-bold text-emerald-400">{value}</p>
              <h3 className="mt-2 font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Research Approach
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Molecular Features to Model Predictions
          </h2>
          <p className="mt-5 leading-7 text-gray-400">
            The project combines molecular descriptor data with a supervised
            machine-learning model to explore patterns in historical
            pregnancy-risk classifications.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-2xl border border-white/10 bg-[#111713] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  {feature.number}
                </span>
                <span className="text-3xl text-emerald-400">
                  {feature.icon}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="border-y border-white/10 bg-[#0D120F]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A Simple Research Workflow
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              The interface will guide users through input, model inference,
              and interpretation of the generated output.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {workflow.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-[#111713] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 font-bold text-emerald-400">
                  {item.step}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                {index < workflow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-12 z-10 hidden text-xl text-emerald-400 md:block"
                  >
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Prediction Output
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three Historical Risk Categories
          </h2>
          <p className="mt-5 leading-7 text-gray-400">
            The model groups historical pregnancy-risk labels into three
            project-specific classes. These categories are not clinically
            validated estimates of fetal harm.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {riskCategories.map((category) => (
            <div
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
                  <p className="mt-2 text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
          <p className="text-sm leading-7 text-amber-100/80">
            <strong className="text-amber-300">Research disclaimer:</strong>{" "}
            These outputs reflect historical pregnancy-risk categories used in
            this project. They do not establish that a drug is safe or harmful
            during pregnancy and must not be used for medical decisions.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 pb-20 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#111713] px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Explore the Model
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover the Role of Molecular Descriptors
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Explore the model workflow and its research-oriented predictions
              through the project interface.
            </p>

            <Link
              href="/prediction"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-[#090D0B] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Go to Prediction
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}