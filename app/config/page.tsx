import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { GatewayList } from "@/components/config/gateway-list"
import { DeviceTable } from "@/components/config/device-table"
import { SystemAlerts } from "@/components/config/system-alerts"
import { ProtocolMapping } from "@/components/config/protocol-mapping"
import { gateways, devices, systemAlerts } from "@/lib/mock-data"
import { Network, Cpu, AlertCircle, Database } from "lucide-react"

export default function ConfigPage() {
  const onlineGateways = gateways.filter((g) => g.status === "online").length
  const activeDevices = devices.filter((d) => d.status === "active").length
  const totalDataPoints = gateways.reduce((sum, g) => sum + g.dataPoints, 0)
  const unacknowledgedAlerts = systemAlerts.filter((a) => !a.acknowledged).length

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="System Configuration" subtitle="Gateway management and protocol mapping" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Gateways Online"
              value={onlineGateways}
              unit={`/ ${gateways.length}`}
              variant={onlineGateways < gateways.length ? "warning" : "success"}
              icon={<Network className="w-5 h-5" />}
            />
            <StatCard
              title="Active Devices"
              value={activeDevices}
              unit={`/ ${devices.length}`}
              icon={<Cpu className="w-5 h-5" />}
            />
            <StatCard
              title="Data Points"
              value={totalDataPoints.toLocaleString()}
              change={2.4}
              changeLabel="vs last week"
              icon={<Database className="w-5 h-5" />}
            />
            <StatCard
              title="Active Alerts"
              value={unacknowledgedAlerts}
              variant={unacknowledgedAlerts > 0 ? "danger" : "success"}
              icon={<AlertCircle className="w-5 h-5" />}
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Gateways */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Gateways</h3>
                <p className="text-sm text-muted-foreground">Protocol interfaces</p>
              </div>
              <GatewayList />
            </div>

            {/* Devices Table */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Registered Devices</h3>
                <p className="text-sm text-muted-foreground">Connected equipment and sensors</p>
              </div>
              <DeviceTable />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Protocol Mapping */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Protocol Mapping</h3>
                <p className="text-sm text-muted-foreground">Point name normalization</p>
              </div>
              <ProtocolMapping />
            </div>

            {/* System Alerts */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">System Alerts</h3>
                <p className="text-sm text-muted-foreground">Connection and data issues</p>
              </div>
              <SystemAlerts />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
