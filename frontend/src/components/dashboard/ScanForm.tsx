import { motion } from "framer-motion";

type ScanFormProps = {
  target: string;
  setTarget: (value: string) => void;
  onScan: () => void;
  loading: boolean;
};

export default function ScanForm({
  target,
  setTarget,
  onScan,
  loading,
}: ScanFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10">

        <h2 className="text-3xl font-bold text-white">
          Network Scan
        </h2>

        <p className="mt-2 text-zinc-400">
          Enter a domain or IP address to begin reconnaissance.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="google.com or 8.8.8.8"
            className="
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-black/30
              px-5
              py-4
              text-white
              outline-none
              transition
              placeholder:text-zinc-500
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/20
            "
          />

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={onScan}
            disabled={loading}
            className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition
              hover:shadow-blue-500/40
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? "Scanning..." : "Start Scan"}
          </motion.button>

        </div>

      </div>
    </motion.div>
  );
}