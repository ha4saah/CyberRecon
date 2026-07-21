import { motion } from "framer-motion";

const features = [
  {
    title: "DNS Intelligence",
    description:
      "Retrieve A, MX and NS records to understand the target's DNS infrastructure.",
  },
  {
    title: "Port Scanning",
    description:
      "Discover exposed services and identify open ports commonly targeted during reconnaissance.",
  },
  {
    title: "SSL Analysis",
    description:
      "Inspect SSL certificates and verify encryption validity for secure communication.",
  },
  {
    title: "WHOIS Lookup",
    description:
      "Gather domain registration details including registrar, organization and expiration dates.",
  },
  {
    title: "Technology Detection",
    description:
      "Identify web servers, frameworks and technologies powering the target website.",
  },
  {
    title: "Professional Reports",
    description:
      "Generate clean PDF security reports containing findings, recommendations and scan results.",
  },
];

export default function Features() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Core Capabilities
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Everything You Need for
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Security Reconnaissance
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            CyberRecon combines multiple reconnaissance modules into one
            streamlined dashboard, helping you analyze targets faster and
            generate professional security assessments.
          </p>

        </motion.div>



        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:bg-white/10
              "
            >

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}