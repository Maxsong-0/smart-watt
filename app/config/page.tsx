"use client"

import { useTranslation } from "react-i18next"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { GatewayList } from "@/components/config/gateway-list"
import { DeviceTable } from "@/components/config/device-table"
import { SystemAlerts } from "@/components/config/system-alerts"
import { ProtocolMapping } from "@/components/config/protocol-mapping"
import { AuthGuard } from "@/components/auth/auth-guard"
import { gateways, devices, systemAlerts } from "@/lib/mock-data"
import { Network, Cpu, AlertCircle, Database } from "lucide-react"

export default function ConfigPage() {
  const { t } = useTranslation()
  const onlineGateways = gateways.filter((g) => g.status === "online").length
  const activeDevices = devices.filter((d) => d.status === "active").length
  const totalDataPoints = gateways.reduce((sum, g) => sum + g.dataPoints, 0)
  const unacknowledgedAlerts = systemAlerts.filter((a) => !a.acknowledged).length

  return (
    <AuthGuard allowedRoles={["facility-manager"]}>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={t('config.title')} subtitle={t('config.subtitle')} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title={t('config.stats.gatewaysOnline')}
              value={onlineGateways}
              unit={`/ ${gateways.length}`}
              variant={onlineGateways < gateways.length ? "warning" : "success"}
              icon={<Network className="w-5 h-5" />}
            />
            <StatCard
              title={t('config.stats.activeDevices')}
              value={activeDevices}
              unit={`/ ${devices.length}`}
              icon={<Cpu className="w-5 h-5" />}
            />
            <StatCard
              title={t('config.stats.dataPoints')}
              value={totalDataPoints.toLocaleString()}
              change={2.4}
              changeLabel={t('config.stats.changeLabel')}
              icon={<Database className="w-5 h-5" />}
            />
            <StatCard
              title={t('config.stats.activeAlerts')}
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
                <h3 className="font-semibold">{t('config.sections.gatewaysTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('config.sections.gatewaysDesc')}</p>
              </div>
              <GatewayList />
            </div>

            {/* Devices Table */}
            <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('config.sections.devicesTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('config.sections.devicesDesc')}</p>
              </div>
              <DeviceTable />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Protocol Mapping */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('config.sections.mappingTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('config.sections.mappingDesc')}</p>
              </div>
              <ProtocolMapping />
            </div>

            {/* System Alerts */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('config.sections.alertsTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('config.sections.alertsDesc')}</p>
              </div>
              <SystemAlerts />
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  )
}
