import type { PortData } from "../../types/scan";

type Props = {
  ports?: PortData[];
};

export default function PortsCard({ ports }: Props) {
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
            Open Ports
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Network services discovered during the reconnaissance scan.
          </p>

        </div>

        {!ports || ports.length === 0 ? (

          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 text-center text-zinc-500">
            No open ports detected.
          </div>

        ) : (

          <>
            {/* Summary */}

            <div className="mb-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">

              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Scan Summary
              </p>

              <p className="mt-2 text-3xl font-bold text-white">
                {ports.length}
              </p>

              <p className="text-sm text-zinc-400">
                Open ports detected
              </p>

            </div>

            {/* Port List */}

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

              {ports.map((port) => (

                <div
                  key={port.port}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-950/70
                    p-5
                    transition
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-zinc-900
                  "
                >

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                      OPEN
                    </span>

                    <span className="text-sm text-zinc-500">
                      TCP
                    </span>

                  </div>

                  <h3 className="mt-5 text-4xl font-black text-blue-400">
                    {port.port}
                  </h3>

                  <p className="mt-2 text-lg text-white">
                    {port.service}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4">

                    <div className="flex justify-between text-sm">

                      <span className="text-zinc-500">
                        State
                      </span>

                      <span className="font-semibold text-green-400">
                        Open
                      </span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </div>
  );
}