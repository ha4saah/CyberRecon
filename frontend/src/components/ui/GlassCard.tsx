import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function GlassCard({
  title,
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10">
        <h2 className="mb-6 text-xl font-bold text-white">
          {title}
        </h2>

        {children}
      </div>
    </motion.div>
  );
}