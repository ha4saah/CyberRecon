import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          CyberRecon
        </Link>

        <div className="flex items-center gap-4">

          <a
  href="https://github.com/ha4saah"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
>
  GitHub
</a>

          <Link
            to="/dashboard"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500"
          >
            Launch App
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}