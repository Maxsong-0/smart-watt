"use client"

import { useTranslation } from "react-i18next"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ROICalculator } from "@/components/reports/roi-calculator"
import { SavingsChart } from "@/components/reports/savings-chart"
import { MonthlyComparison } from "@/components/reports/monthly-comparison"
import { CarbonMetrics } from "@/components/reports/carbon-metrics"
import { ExportPanel } from "@/components/reports/export-panel"
import { AuthGuard } from "@/components/auth/auth-guard"
import { DollarSign, TrendingDown, Leaf, Calendar } from "lucide-react"

export default function ReportsPage() {
  const { t } = useTranslation()

  return (
    <AuthGuard>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={t('reports.title')} subtitle={t('reports.subtitle')} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Savings (YTD)"
              value="$87,450"
              change={18.5}
              changeLabel="vs last year"
              variant="success"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title="Energy Reduction"
              value="23.4"
              unit="%"
              change={5.2}
              changeLabel="vs baseline"
              variant="success"
              icon={<TrendingDown className="w-5 h-5" />}
            />
            <StatCard
              title="Carbon Offset"
              value="124.8"
              unit="tons"
              change={32}
              changeLabel="CO2e avoided"
              icon={<Leaf className="w-5 h-5" />}
            />
            <StatCard
              title="Payback Period"
              value="2.3"
              unit="years"
              changeLabel="ROI 43%"
              icon={<Calendar className="w-5 h-5" />}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Savings Chart */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Monthly Savings Trend</h3>
                  <p className="text-sm text-muted-foreground">Energy cost savings over time</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-chart-1 rounded" />
                    <span className="text-muted-foreground">Actual Savings</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-chart-2 rounded" />
                    <span className="text-muted-foreground">Projected</span>
                  </div>
                </div>
              </div>
              <SavingsChart />
            </div>

            {/* ROI Calculator */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">ROI Calculator</h3>
                <p className="text-sm text-muted-foreground">Investment return analysis</p>
              </div>
              <ROICalculator />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Comparison */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Monthly Energy Comparison</h3>
                <p className="text-sm text-muted-foreground">This year vs baseline</p>
              </div>
              <MonthlyComparison />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Carbon Metrics */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">Carbon Impact</h3>
                  <p className="text-sm text-muted-foreground">Environmental metrics</p>
                </div>
                <CarbonMetrics />
              </div>

              {/* Export Panel */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">Export Reports</h3>
                  <p className="text-sm text-muted-foreground">Download data and reports</p>
                </div>
                <ExportPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  )
}
