"use client"

import type React from "react"

import { useState } from "react"
import { systemAlerts, type SystemAlert } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Unplug, Database, Shield, Gauge, Check, X } from "lucide-react"

const typeIcons: Record<SystemAlert["type"], React.ElementType> = {
  connection: Unplug,
  data: Database,
  security: Shield,
  performance: Gauge,
}

const severityStyles: Record<SystemAlert["severity"], { bg: string; border: string; icon: string }> = {
  info: { bg: "bg-energy-cyan/5", border: "border-energy-cyan/30", icon: "text-energy-cyan" },
  warning: { bg: "bg-energy-yellow/5", border: "border-energy-yellow/30", icon: "text-energy-yellow" },
  error: { bg: "bg-energy-red/5", border: "border-energy-red/30", icon: "text-energy-red" },
}

export function SystemAlerts() {
  const [alerts, setAlerts] = useState(systemAlerts)

  const acknowledgeAlert = (id: string) => {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, acknowledged: true } : a)))
  }

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id))
  }

  const formatTime = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const minutes = Math.floor(diff / (60 * 1000))
    const hours = Math.floor(minutes / 60)

    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
  }

  const unacknowledgedCount = alerts.filter((a) => !a.acknowledged).length

  return (
    <div className="space-y-3">
      {unacknowledgedCount > 0 && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {unacknowledgedCount} unacknowledged alert{unacknowledgedCount > 1 ? "s" : ""}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setAlerts((prev) => prev.map((a) => ({ ...a, acknowledged: true })))}
          >
            Acknowledge All
          </Button>
        </div>
      )}

      {alerts.map((alert) => {
        const Icon = typeIcons[alert.type]
        const styles = severityStyles[alert.severity]

        return (
          <div
            key={alert.id}
            className={cn(
              "p-3 rounded-lg border transition-all",
              styles.bg,
              styles.border,
              alert.acknowledged && "opacity-60",
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn("p-1.5 rounded", styles.icon, "bg-background/50")}>
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium truncate">{alert.message}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{formatTime(alert.timestamp)}</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground capitalize">{alert.type}</span>
                  {!alert.acknowledged && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs"
                        onClick={() => acknowledgeAlert(alert.id)}
                      >
                        <Check className="w-3 h-3 mr-1" />
                        Acknowledge
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => dismissAlert(alert.id)}>
                        <X className="w-3 h-3 mr-1" />
                        Dismiss
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {alerts.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Check className="w-8 h-8 mx-auto mb-2 text-energy-green" />
          <p className="text-sm">No active alerts</p>
        </div>
      )}
    </div>
  )
}
