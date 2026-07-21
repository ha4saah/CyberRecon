import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <main className="bg-[#09090B] text-white">

      <Navbar />

      <Hero />

      {/* Footer */}

      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-10 md:flex-row">

          <div>

            <h3 className="text-xl font-bold">
              CyberRecon
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
              Professional network reconnaissance platform built with
              React, TypeScript, Flask and Python for cybersecurity
              analysis and reporting.
            </p>

          </div>

          <div className="flex items-center gap-8 text-sm">

            <a
              href="https://github.com/ha4saah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition duration-300 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hafsa-younis-00178a330/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition duration-300 hover:text-white"
            >
              LinkedIn
            </a>

<a
  href="https://www.linkedin.com/in/hafsa-younis-00178a330/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-400 transition duration-300 hover:text-white"
>
  Connect
</a>

          </div>

        </div>

        <div className="border-t border-white/5">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-5 text-sm text-zinc-500 md:flex-row">

            <p>
              © 2026 CyberRecon. All rights reserved.
            </p>

            <p>
              Designed & Developed by <span className="text-white">Hafsa Younis</span>
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}