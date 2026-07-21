import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Resolving DNS...",
  "Scanning Open Ports...",
  "Inspecting SSL Certificate...",
  "Analyzing Security Headers...",
  "Collecting WHOIS Information...",
  "Detecting Technologies...",
  "Generating Findings...",
];

export default function LoadingOverlay() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
    >
      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-blue-500" />

        <h2 className="mt-8 text-3xl font-bold text-white">
          CyberRecon
        </h2>

        <p className="mt-2 text-zinc-400">
          Running Security Reconnaissance
        </p>

        <motion.p
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-lg font-medium text-blue-400"
        >
          {steps[step]}
        </motion.p>

      </div>
    </motion.div>
  );
}