type Props = {
  recommendations?: string[];
};

export default function RecommendationsCard({
  recommendations,
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
            Recommendations
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Suggested remediation steps based on the scan results.
          </p>
        </div>

        {!recommendations || recommendations.length === 0 ? (

          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6">

            <h3 className="text-lg font-semibold text-white">
              No Recommendations
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Run a scan to receive security recommendations.
            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {recommendations.map((item, index) => (

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

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-500/10
                      text-sm
                      font-bold
                      text-blue-400
                    "
                  >
                    {index + 1}
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Recommendation {index + 1}
                    </h3>

                    <p className="mt-2 leading-6 text-zinc-400">
                      {item}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  );
}