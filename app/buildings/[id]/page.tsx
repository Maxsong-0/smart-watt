import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { EquipmentList } from "@/components/buildings/equipment-list"
import { ZoneControls } from "@/components/buildings/zone-controls"
import { BuildingChart } from "@/components/buildings/building-chart"
import { buildings } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { Zap, Thermometer, Users, Leaf } from "lucide-react"

interface BuildingDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BuildingDetailPage({ params }: BuildingDetailPageProps) {
  const { id } = await params
  const building = buildings.find((b) => b.id === id)

  if (!building) {
    notFound()
  }

  const loadPercent = Math.round((building.currentLoad / building.maxCapacity) * 100)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={building.name}
          subtitle={`${building.type.charAt(0).toUpperCase() + building.type.slice(1)} Building`}
        />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Current Load"
              value={building.currentLoad}
              unit="kW"
              change={-5.2}
              changeLabel="vs yesterday"
              icon={<Zap className="w-5 h-5" />}
              variant={loadPercent > 90 ? "danger" : loadPercent > 75 ? "warning" : "default"}
            />
            <StatCard
              title="Temperature"
              value={building.temperature}
              unit="°F"
              icon={<Thermometer className="w-5 h-5" />}
            />
            <StatCard
              title="Occupancy"
              value="156"
              unit="people"
              change={12}
              changeLabel="current"
              icon={<Users className="w-5 h-5" />}
            />
            <StatCard
              title="Energy Score"
              value="87"
              unit="/100"
              change={3}
              changeLabel="this month"
              variant="success"
              icon={<Leaf className="w-5 h-5" />}
            />
          </div>

          {/* Energy Chart */}
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Energy Consumption by Category</h3>
                <p className="text-sm text-muted-foreground">24-hour breakdown</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-chart-1 rounded" />
                  <span className="text-muted-foreground">HVAC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-chart-2 rounded" />
                  <span className="text-muted-foreground">Lighting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-chart-3 rounded" />
                  <span className="text-muted-foreground">Other</span>
                </div>
              </div>
            </div>
            <BuildingChart buildingId={building.id} />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Zone Controls */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Zone Controls</h3>
                <p className="text-sm text-muted-foreground">Temperature and HVAC management</p>
              </div>
              <ZoneControls buildingId={building.id} />
            </div>

            {/* Equipment List */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Equipment Status</h3>
                <p className="text-sm text-muted-foreground">Active systems and devices</p>
              </div>
              <EquipmentList buildingId={building.id} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
