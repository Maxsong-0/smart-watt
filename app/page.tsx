"use client"

import { useTranslation } from "react-i18next"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { EnergyChart } from "@/components/dashboard/energy-chart"
import { CampusMap } from "@/components/dashboard/campus-map"
import { LoadBreakdown } from "@/components/dashboard/load-breakdown"
import { DRStatus } from "@/components/dashboard/dr-status"
import { AuthGuard } from "@/components/auth/auth-guard"
import { getTotalCampusLoad, getTotalCapacity } from "@/lib/mock-data"
import { Zap, Thermometer, DollarSign, Leaf } from "lucide-react"

export default function DashboardPage() {
  const { t } = useTranslation()
  const totalLoad = getTotalCampusLoad()
  const totalCapacity = getTotalCapacity()
  const utilizationPercent = Math.round((totalLoad / totalCapacity) * 100)

  return (
    <AuthGuard>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={t('dashboard.title')} subtitle={t('dashboard.subtitle')} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title={t('dashboard.totalLoad')}
              value={totalLoad.toLocaleString()}
              unit="kW"
              change={-3.2}
              changeLabel={t('dashboard.vsYesterday')}
              icon={<Zap className="w-5 h-5" />}
            />
            <StatCard
              title={t('dashboard.gridUtilization')}
              value={utilizationPercent}
              unit="%"
              variant={utilizationPercent > 80 ? "warning" : "default"}
              icon={<Thermometer className="w-5 h-5" />}
            />
            <StatCard
              title={t('dashboard.todaysSavings')}
              value="$1,247"
              change={12.5}
              changeLabel={t('dashboard.vsAvg')}
              variant="success"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title={t('dashboard.carbonOffset')}
              value="2.4"
              unit="tons"
              change={8.3}
              changeLabel={t('dashboard.thisMonth')}
              icon={<Leaf className="w-5 h-5" />}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Energy Chart */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{t('dashboard.energyConsumption')}</h3>
                  <p className="text-sm text-muted-foreground">{t('dashboard.energyConsumptionDesc')}</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 bg-chart-1 rounded" />
                    <span className="text-muted-foreground">{t('dashboard.actual')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 bg-chart-2 rounded border-dashed" style={{ borderStyle: "dashed" }} />
                    <span className="text-muted-foreground">{t('dashboard.predicted')}</span>
                  </div>
                </div>
              </div>
              <EnergyChart />
            </div>

            {/* DR Status */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-4">{t('dashboard.demandResponse')}</h3>
              <DRStatus />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Campus Map */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{t('dashboard.campusMap')}</h3>
                  <p className="text-sm text-muted-foreground">{t('dashboard.campusMapDesc')}</p>
                </div>
              </div>
              <CampusMap />
            </div>

            {/* Load Breakdown */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-4">{t('dashboard.loadBreakdown')}</h3>
              <LoadBreakdown />
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  )
}
