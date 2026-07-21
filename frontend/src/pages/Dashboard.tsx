import { useState } from "react";
import type { ScanResponse } from "../types/scan";

import api from "../services/api";

import LoadingOverlay from "../components/dashboard/LoadingOverlay";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import ScanForm from "../components/dashboard/ScanForm";
import StatsGrid from "../components/dashboard/StatsGrid";
import DNSCard from "../components/dashboard/DNSCard";
import PortsCard from "../components/dashboard/PortsCard";
import SecurityHeadersCard from "../components/dashboard/SecurityHeadersCard";
import SSLCard from "../components/dashboard/SSLCard";
import WHOISCard from "../components/dashboard/WHOISCard";
import TechnologyCard from "../components/dashboard/TechnologyCard";
import FindingsCard from "../components/dashboard/FindingsCard";
import SubdomainCard from "../components/dashboard/SubdomainCard";
import RecommendationsCard from "../components/dashboard/RecommendationsCard";
import ReportButton from "../components/dashboard/ReportButton";

export default function Dashboard() {
  const [target, setTarget] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scanResult, setScanResult] = useState<ScanResponse | null>(null);

  async function handleScan() {
    if (!target.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await api.post("/api/scan", {
        target,
      });

      setScanResult(response.data);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to scan the target. Please verify the domain or ensure the backend server is running."
      );

      setScanResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">

      {/* Loading Overlay */}

      {loading && <LoadingOverlay />}

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-10 right-10 h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-[170px]" />

      </div>

      {/* Content */}

      <div className="relative z-10">

        <DashboardHeader />

        <div className="mx-auto max-w-7xl space-y-8 px-6 pt-28 pb-10">

          <ScanForm
            target={target}
            setTarget={setTarget}
            onScan={handleScan}
            loading={loading}
          />

          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-red-400">
                Scan Failed
              </h3>

              <p className="mt-2 text-red-200">
                {error}
              </p>
            </div>
          )}

          {!scanResult && !loading && (

            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

              <h2 className="text-4xl font-bold text-white">
                Welcome to CyberRecon
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                Analyze domains, inspect DNS records, discover open ports,
                validate SSL certificates, identify web technologies,
                review HTTP security headers and generate professional
                reconnaissance reports from a single dashboard.
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    DNS Intelligence
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Resolve DNS records and discover infrastructure.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Security Analysis
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Check SSL certificates, ports and HTTP security headers.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Professional Reports
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Export detailed reconnaissance reports as PDF.
                  </p>
                </div>

              </div>

            </div>

          )}

          {scanResult && (
            <>

              <ReportButton scan={scanResult} />

              <StatsGrid
                summary={scanResult.summary}
              />

              <div className="grid gap-6 lg:grid-cols-2">

                <DNSCard
                  dns={scanResult.dns}
                />

                <SSLCard
                  ssl={scanResult.ssl}
                />

                <WHOISCard
                  whois={scanResult.whois}
                />

                <TechnologyCard
                  technology={scanResult.technology}
                />

                <SecurityHeadersCard
                  headers={scanResult.headers}
                />

              </div>

              <PortsCard
                ports={scanResult.ports}
              />

              <div className="grid gap-6 lg:grid-cols-2">

                <SubdomainCard
                  subdomains={scanResult.subdomains}
                />

                <FindingsCard
                  findings={scanResult.findings}
                />

              </div>

              <RecommendationsCard
                recommendations={scanResult.recommendations}
              />

            </>
          )}

        </div>

      </div>

    </main>
  );
}