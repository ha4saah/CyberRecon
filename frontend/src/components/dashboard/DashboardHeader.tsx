import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function DashboardHeader() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 transition hover:opacity-80"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/30">
            CR
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              CyberRecon
            </h1>

            <p className="text-xs text-zinc-400">
              Network Reconnaissance Platform
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-6 md:flex">

          <Link
            to="/"
            className={`transition ${
              location.pathname === "/"
                ? "text-blue-400"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={`transition ${
              location.pathname === "/dashboard"
                ? "text-blue-400"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Dashboard
          </Link>

          <a
  href="https://github.com/ha4saah"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
>
  GitHub
</a>

        </nav>

        {/* Status */}

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <span className="hidden text-sm font-medium text-zinc-300 sm:block">
            System Online
          </span>

        </div>

      </div>
    </motion.header>
  );
}