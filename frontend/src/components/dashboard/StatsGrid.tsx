import ResultCard from "./ResultCard";
import type { SummaryData } from "../../types/scan";

type Props = {
  summary?: SummaryData;
};

export default function StatsGrid({ summary }: Props) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <ResultCard
        title="Risk Score"
        value={
          summary
            ? `${summary.risk_score}/100`
            : "--"
        }
      />

      <ResultCard
        title="Risk Level"
        value={
          summary
            ? summary.risk_level
            : "--"
        }
      />

      <ResultCard
        title="Open Ports"
        value={
          summary
            ? String(summary.open_ports)
            : "--"
        }
      />

      <ResultCard
        title="Scan Time"
        value={
          summary
            ? `${summary.scan_time}s`
            : "--"
        }
      />

    </section>
  );
}