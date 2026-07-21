import type { SSLData } from "../../types/scan";

type Props = {
  ssl?: SSLData;
};

export default function SSLCard({ ssl }: Props) {
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
            SSL Certificate
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Certificate validation and encryption information.
          </p>
        </div>

        {!ssl ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-zinc-500">
            Run a scan to analyze the SSL certificate.
          </div>
        ) : (
          <div className="space-y-4">

            {/* Status */}

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Status
              </p>

              <p
                className={`mt-2 text-2xl font-bold ${
                  ssl.valid ? "text-green-400" : "text-red-400"
                }`}
              >
                {ssl.valid ? "Secure" : "Invalid"}
              </p>
            </div>

            {/* Issuer */}

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Certificate Issuer
              </p>

              <p className="mt-2 break-words font-mono text-white">
                {ssl.issuer || "Unknown"}
              </p>
            </div>

            {/* Expiration */}

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Expires
                </p>

                <p className="mt-2 text-white">
                  {ssl.expires || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Days Remaining
                </p>

                <p
                  className={`mt-2 text-2xl font-bold ${
                    (ssl.days_remaining ?? 0) > 30
                      ? "text-green-400"
                      : (ssl.days_remaining ?? 0) > 7
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {ssl.days_remaining ?? "--"}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}