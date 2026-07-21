import type { DNSData } from "../../types/scan";

type Props = {
  dns?: DNSData;
};

export default function DNSCard({ dns }: Props) {
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
            DNS Intelligence
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Domain Name System information collected during reconnaissance.
          </p>
        </div>

        {/* IP Address */}

        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">

          <p className="text-sm uppercase tracking-wider text-zinc-500">
            IPv4 Address
          </p>

          <p className="mt-2 break-all font-mono text-lg text-white">
            {dns?.ip || "--"}
          </p>

        </div>

        {/* MX Records */}

        <div className="mt-6">

          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            MX Records
          </h3>

          {dns?.mx?.length ? (
            <div className="space-y-2">

              {dns.mx.map((mx) => (

                <div
                  key={mx}
                  className="
                    rounded-xl
                    border
                    border-green-500/20
                    bg-green-500/10
                    px-4
                    py-3
                    font-mono
                    text-sm
                    text-green-400
                  "
                >
                  {mx}
                </div>

              ))}

            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-4 text-zinc-500">
              No MX records found.
            </div>
          )}

        </div>

        {/* Name Servers */}

        <div className="mt-6">

          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Name Servers
          </h3>

          {dns?.ns?.length ? (
            <div className="space-y-2">

              {dns.ns.map((ns) => (

                <div
                  key={ns}
                  className="
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-3
                    font-mono
                    text-sm
                    text-blue-400
                  "
                >
                  {ns}
                </div>

              ))}

            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-4 text-zinc-500">
              No Name Servers found.
            </div>
          )}

        </div>

      </div>
    </div>
  );
}