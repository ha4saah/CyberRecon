import { motion } from "framer-motion";

export default function LoadingState() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="mb-4 text-zinc-300">Scanning target...</p>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}