import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { EnergyChart } from "@/components/dashboard/energy-chart"
import { CampusMap } from "@/components/dashboard/campus-map"
import { LoadBreakdown } from "@/components/dashboard/load-breakdown"
import { DRStatus } from "@/components/dashboard/dr-status"
import { getTotalCampusLoad, getTotalCapacity } from "@/lib/mock-data"
import { Zap, Thermometer, DollarSign, Leaf } from "lucide-react"

export default function DashboardPage() {
  const totalLoad = getTotalCampusLoad()
  const totalCapacity = getTotalCapacity()
  const utilizationPercent = Math.round((totalLoad / totalCapacity) * 100)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Campus Overview" subtitle="Real-time energy monitoring and control" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Campus Load"
              value={totalLoad.toLocaleString()}
              unit="kW"
              change={-3.2}
              changeLabel="vs yesterday"
              icon={<Zap className="w-5 h-5" />}
            />
            <StatCard
              title="Grid Utilization"
              value={utilizationPercent}
              unit="%"
              variant={utilizationPercent > 80 ? "warning" : "default"}
              icon={<Thermometer className="w-5 h-5" />}
            />
            <StatCard
              title="Today's Savings"
              value="$1,247"
              change={12.5}
              changeLabel="vs avg"
              variant="success"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title="Carbon Offset"
              value="2.4"
              unit="tons"
              change={8.3}
              changeLabel="this month"
              icon={<Leaf className="w-5 h-5" />}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Energy Chart */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Energy Consumption</h3>
                  <p className="text-sm text-muted-foreground">24-hour trend with AI predictions</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 bg-chart-1 rounded" />
                    <span className="text-muted-foreground">Actual</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 bg-chart-2 rounded border-dashed" style={{ borderStyle: "dashed" }} />
                    <span className="text-muted-foreground">Predicted</span>
                  </div>
                </div>
              </div>
              <EnergyChart />
            </div>

            {/* DR Status */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-4">Demand Response</h3>
              <DRStatus />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Campus Map */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Campus Map</h3>
                  <p className="text-sm text-muted-foreground">Building status and load distribution</p>
                </div>
              </div>
              <CampusMap />
            </div>

            {/* Load Breakdown */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-4">Load Breakdown</h3>
              <LoadBreakdown />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
