import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#09090B] pt-28">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute right-20 top-60 h-72 w-72 rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute left-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-8 text-center">

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400"
        >
          Professional Cybersecurity Assessment Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl"
        >
          Professional Security
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Reconnaissance Platform
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Analyze domains, discover exposed services, inspect SSL
          certificates, identify web technologies, evaluate security
          headers, and generate professional reconnaissance reports—
          all from one streamlined interface.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate("/dashboard")}
          className="mt-12 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
        >
          Launch CyberRecon
          <ArrowRight size={20} />
        </motion.button>

        {/* Feature Cards */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid w-full gap-6 md:grid-cols-3"
        >

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
            <h3 className="text-xl font-semibold">
              Comprehensive Recon
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Perform DNS lookups, WHOIS analysis, technology detection,
              SSL validation and open port discovery in one scan.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
            <h3 className="text-xl font-semibold">
              Intelligent Analysis
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Automatically calculate risk scores, identify security
              findings and generate actionable recommendations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
            <h3 className="text-xl font-semibold">
              Professional Reports
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Export detailed PDF security reports suitable for
              documentation, demonstrations and portfolio projects.
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}