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
              title="Active DR Event"
              value="1"
              changeLabel="Capacity constraint"
              variant="warning"
              icon={<Zap className="w-5 h-5" />}
            />
            <StatCard
              title="Current Grid Price"
              value="$0.142"
              unit="/kWh"
              change={18}
              changeLabel="above avg"
              variant="warning"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title="YTD DR Revenue"
              value="$26,330"
              change={24}
              changeLabel="vs last year"
              variant="success"
              icon={<Activity className="w-5 h-5" />}
            />
            <StatCard
              title="Automation Active"
              value="3"
              unit="rules"
              changeLabel="2 triggered today"
              icon={<Shield className="w-5 h-5" />}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Grid Signals */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Grid Signals</h3>
                <p className="text-sm text-muted-foreground">Real-time utility communications</p>
              </div>
              <GridSignals />
            </div>

            {/* Price Chart */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Electricity Price</h3>
                <p className="text-sm text-muted-foreground">24-hour price history and forecast</p>
              </div>
              <PriceChart />
              <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-chart-3 rounded" />
                  <span className="text-muted-foreground">Current Price</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-energy-yellow rounded" style={{ borderStyle: "dashed" }} />
                  <span className="text-muted-foreground">Average</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* DR Programs */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Demand Response Programs</h3>
                <p className="text-sm text-muted-foreground">Enrolled programs and performance</p>
              </div>
              <DRPrograms />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Revenue Calculator */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">Revenue Summary</h3>
                  <p className="text-sm text-muted-foreground">DR program earnings</p>
                </div>
                <RevenueCalculator />
              </div>

              {/* Automation Rules */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="mb-4">
                  <h3 className="font-semibold">Automation Rules</h3>
                  <p className="text-sm text-muted-foreground">Auto-response configuration</p>
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
