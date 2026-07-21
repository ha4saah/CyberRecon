import type { Finding } from "../../types/scan";

type Props = {
  findings?: Finding[];
};

export default function FindingsCard({ findings }: Props) {
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
            Security Findings
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Potential security issues identified during reconnaissance.
          </p>

        </div>

        {!findings || findings.length === 0 ? (

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

            <h3 className="text-lg font-semibold text-green-400">
              No Critical Findings
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              No obvious security weaknesses were detected during this scan.
            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {findings.map((finding, index) => {

              const severityClass =
                finding.severity === "HIGH"
                  ? "border-red-500/20 bg-red-500/10 text-red-400"
                  : finding.severity === "MEDIUM"
                  ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                  : "border-blue-500/20 bg-blue-500/10 text-blue-400";

              return (

                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-lg font-semibold text-white">
                        {finding.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {finding.description}
                      </p>

                    </div>

                    <span
                      className={`rounded-full border px-4 py-1 text-xs font-bold uppercase ${severityClass}`}
                    >
                      {finding.severity}
                    </span>

                  </div>

                </div>

              );
            })}

          </div>

        )}

      </div>
    </div>
  );
}