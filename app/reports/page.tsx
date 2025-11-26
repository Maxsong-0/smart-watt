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
              title={t('reports.stats.totalSavingsYTD')}
              value={t('common.units.currency') + "87,450"}
              change={18.5}
              changeLabel={t('reports.stats.vsLastYear')}
              variant="success"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title={t('reports.stats.energyReduction')}
              value="23.4"
              unit={t('common.units.percentage')}
              change={5.2}
              changeLabel={t('reports.stats.vsBaseline')}
              variant="success"
              icon={<TrendingDown className="w-5 h-5" />}
            />
            <StatCard
              title={t('reports.stats.carbonOffset')}
              value="124.8"
              unit={t('common.units.tons')}
              change={32}
              changeLabel={t('reports.stats.co2eAvoided')}
              icon={<Leaf className="w-5 h-5" />}
            />
            <StatCard
              title={t('reports.stats.paybackPeriod')}
              value="2.3"
              unit={t('reports.roi.years')}
              changeLabel={`${t('reports.stats.roi')} 43%`}
              icon={<Calendar className="w-5 h-5" />}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Savings Chart */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{t('reports.sections.monthlySavingsTrend')}</h3>
                  <p className="text-sm text-muted-foreground">{t('reports.sections.monthlySavingsTrendDesc')}</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-chart-1 rounded" />
                    <span className="text-muted-foreground">{t('reports.savingsChart.actualSavings')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-chart-2 rounded" />
                    <span className="text-muted-foreground">{t('reports.savingsChart.projected')}</span>
                  </div>
                </div>
              </div>
              <SavingsChart />
            </div>

            {/* ROI Calculator */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('reports.sections.roiCalculator')}</h3>
                <p className="text-sm text-muted-foreground">{t('reports.sections.roiCalculatorDesc')}</p>
              </div>
              <ROICalculator />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Comparison */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('reports.sections.monthlyEnergyComparison')}</h3>
                <p className="text-sm text-muted-foreground">{t('reports.sections.monthlyEnergyComparisonDesc')}</p>
              </div>
              <MonthlyComparison />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Carbon Metrics */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">{t('reports.sections.carbonImpact')}</h3>
                  <p className="text-sm text-muted-foreground">{t('reports.sections.carbonImpactDesc')}</p>
                </div>
                <CarbonMetrics />
              </div>

              {/* Export Panel */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">{t('reports.sections.exportReports')}</h3>
                  <p className="text-sm text-muted-foreground">{t('reports.sections.exportReportsDesc')}</p>
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