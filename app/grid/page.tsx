"use client"

import { useTranslation } from "react-i18next"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { GridSignals } from "@/components/grid/grid-signals"
import { DRPrograms } from "@/components/grid/dr-programs"
import { AutomationRules } from "@/components/grid/automation-rules"
import { PriceChart } from "@/components/grid/price-chart"
import { RevenueCalculator } from "@/components/grid/revenue-calculator"
import { AuthGuard } from "@/components/auth/auth-guard"
import { Zap, DollarSign, Activity, Shield } from "lucide-react"

export default function GridPage() {
  const { t } = useTranslation()

  return (
    <AuthGuard>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={t('grid.title')} subtitle={t('grid.subtitle')} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title={t('grid.stats.activeEvent')}
              value="1"
              changeLabel={t('grid.stats.capacityConstraint')}
              variant="warning"
              icon={<Zap className="w-5 h-5" />}
            />
            <StatCard
              title={t('grid.stats.currentPrice')}
              value={`${t('common.units.currency')}0.142`}
              unit="/kWh"
              change={18}
              changeLabel={t('grid.stats.priceChange')}
              variant="warning"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title={t('grid.stats.ytdRevenue')}
              value={`${t('common.units.currency')}26,330`}
              change={24}
              changeLabel={t('grid.stats.vsLastYear')}
              variant="success"
              icon={<Activity className="w-5 h-5" />}
            />
            <StatCard
              title={t('grid.stats.automation')}
              value="3"
              unit={t('grid.stats.automationDesc')}
              changeLabel={t('grid.stats.todayTriggers')}
              icon={<Shield className="w-5 h-5" />}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Grid Signals */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('grid.sections.signalsTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('grid.sections.signalsDesc')}</p>
              </div>
              <GridSignals />
            </div>

            {/* Price Chart */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('grid.sections.priceTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('grid.sections.priceDesc')}</p>
              </div>
              <PriceChart />
              <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-chart-3 rounded" />
                  <span className="text-muted-foreground">{t('grid.sections.priceLegendCurrent')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-energy-yellow rounded" style={{ borderStyle: "dashed" }} />
                  <span className="text-muted-foreground">{t('grid.sections.priceLegendAverage')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* DR Programs */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('grid.sections.programsTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('grid.sections.programsDesc')}</p>
              </div>
              <DRPrograms />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Revenue Calculator */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">{t('grid.sections.revenueTitle')}</h3>
                  <p className="text-sm text-muted-foreground">{t('grid.sections.revenueDesc')}</p>
                </div>
                <RevenueCalculator />
              </div>

              {/* Automation Rules */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">{t('grid.sections.automationTitle')}</h3>
                  <p className="text-sm text-muted-foreground">{t('grid.sections.automationDesc')}</p>
                </div>
                <AutomationRules />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  )
}
