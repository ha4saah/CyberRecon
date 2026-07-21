import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Enter a Target",
    description:
      "Provide a domain name to begin the reconnaissance process.",
  },
  {
    number: "02",
    title: "Automated Analysis",
    description:
      "CyberRecon performs DNS lookups, port scanning, SSL validation, WHOIS analysis, technology detection and more.",
  },
  {
    number: "03",
    title: "Review & Export",
    description:
      "Explore the findings, assess the risk score and download a professional PDF security report.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Workflow
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            How CyberRecon Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Three simple steps to perform a professional reconnaissance scan.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (

            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-blue-500/40"
            >

              <span className="text-5xl font-black text-blue-400">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}