type Subdomain = {
  subdomain: string;
  ip: string;
};

type Props = {
  subdomains?: Subdomain[];
};

export default function SubdomainCard({
  subdomains,
}: Props) {
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
            Discovered Subdomains
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Publicly discovered subdomains associated with the scanned domain.
          </p>

        </div>

        {!subdomains || subdomains.length === 0 ? (

          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6">

            <h3 className="text-lg font-semibold text-white">
              No Subdomains Found
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              No publicly discoverable subdomains were identified.
            </p>

          </div>

        ) : (

          <>
            {/* Summary */}

            <div className="mb-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">

              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Discovery Summary
              </p>

              <p className="mt-2 text-3xl font-bold text-white">
                {subdomains.length}
              </p>

              <p className="text-sm text-zinc-400">
                Subdomains identified
              </p>

            </div>

            {/* List */}

            <div className="space-y-4">

              {subdomains.map((item, index) => (

                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-950/70
                    p-5
                    transition
                    duration-300
                    hover:border-blue-500/30
                  "
                >

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      ACTIVE
                    </span>

                    <span className="text-xs text-zinc-500">
                      #{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-5 break-all font-mono text-lg text-white">
                    {item.subdomain}
                  </h3>

                  <div className="mt-5 border-t border-white/10 pt-4">

                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      IPv4 Address
                    </p>

                    <p className="mt-2 font-mono text-blue-400">
                      {item.ip}
                    </p>

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