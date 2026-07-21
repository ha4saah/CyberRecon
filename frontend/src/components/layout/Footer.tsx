import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090B]">

      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              CyberRecon
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              A professional cybersecurity reconnaissance platform
              built to analyze domains, identify security risks,
              inspect SSL configurations, detect technologies and
              generate comprehensive security reports.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-semibold">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-zinc-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/dashboard"
                className="text-zinc-400 transition hover:text-white"
              >
                Launch App
              </Link>

            </div>

          </div>

          {/* Developer */}

          <div>

            <h3 className="text-lg font-semibold">
              Developer
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="https://github.com/ha4saah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                GitHub
              </a>

              <p className="text-zinc-400">
                Hafsa Younis
              </p>

              <p className="text-zinc-500">
                React • Flask • Python
              </p>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">

          © 2026 CyberRecon. Developed by Hafsa Younis.

        </div>

      </div>

    </footer>
  );
}