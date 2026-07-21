import type { TechnologyData } from "../../types/scan";

type Props = {
  technology?: TechnologyData;
};

export default function TechnologyCard({ technology }: Props) {
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
            Technology Stack
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Technologies identified from HTTP headers and server responses.
          </p>
        </div>

        {!technology ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-zinc-500">
            Run a scan to detect web technologies.
          </div>
        ) : (
          <div className="grid gap-4">

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Server
              </p>
              <p className="mt-2 font-mono text-white">
                {technology.server || "Unknown"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Powered By
              </p>
              <p className="mt-2 font-mono text-white">
                {technology.powered_by || "Not Detected"}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  CDN
                </p>
                <p className="mt-2 text-white">
                  {technology.cdn || "Not Detected"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  CMS
                </p>
                <p className="mt-2 text-white">
                  {technology.cms || "Not Detected"}
                </p>
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Framework
              </p>
              <p className="mt-2 text-white">
                {technology.framework || "Not Detected"}
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}