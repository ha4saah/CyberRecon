import type { WhoisData } from "../../types/scan";

type Props = {
  whois?: WhoisData;
};

export default function WHOISCard({ whois }: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/60
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            Domain Intelligence
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            WHOIS registration information collected during reconnaissance.
          </p>
        </div>

        {!whois ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-zinc-500">
            Run a scan to retrieve WHOIS information.
          </div>
        ) : (
          <div className="space-y-4">

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Registrar
              </p>

              <p className="mt-2 break-words font-mono text-white">
                {whois.registrar || "Unknown"}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Created
                </p>

                <p className="mt-2 text-white">
                  {whois.creation_date || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Expires
                </p>

                <p className="mt-2 text-white">
                  {whois.expiration_date || "Unknown"}
                </p>
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Organization
              </p>

              <p className="mt-2 break-words text-white">
                {whois.organization || "Unknown"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Country
              </p>

              <p className="mt-2 text-white">
                {whois.country || "Unknown"}
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}