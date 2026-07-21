import type { SecurityHeaders } from "../../types/scan";

type Props = {
  headers?: SecurityHeaders;
};

export default function SecurityHeadersCard({ headers }: Props) {
  if (!headers) {
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
        "
      >
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white">
            Security Headers
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Analyze important HTTP security headers.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-zinc-500">
            Run a scan to inspect HTTP response headers.
          </div>
        </div>
      </div>
    );
  }

  const present = Object.values(headers).filter(Boolean).length;
  const total = Object.keys(headers).length;

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
            Security Headers
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Evaluation of HTTP response security headers.
          </p>

        </div>

        {/* Summary */}

        <div className="mb-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-4">

          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Compliance
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {present} / {total}
          </p>

          <p className="mt-1 text-sm text-zinc-400">
            Required headers detected
          </p>

        </div>

        {/* Header List */}

        <div className="space-y-3">

          {Object.entries(headers).map(([header, enabled]) => (

            <div
              key={header}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-zinc-950/70
                px-5
                py-4
              "
            >

              <div>

                <p className="font-medium text-white">
                  {header}
                </p>

                <p className="text-xs text-zinc-500">
                  HTTP Response Header
                </p>

              </div>

              <div
                className={`rounded-full px-4 py-1 text-sm font-semibold ${
                  enabled
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {enabled ? "Present" : "Missing"}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}