import { motion } from "framer-motion";

type Props = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10">

        <p className="text-sm uppercase tracking-widest text-zinc-400">
          {title}
        </p>

        <h3 className="mt-4 text-4xl font-bold text-white">
          {value}
        </h3>

      </div>

    </motion.div>
  );
}