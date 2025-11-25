"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getBuildingEquipment, type Equipment } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wind, Lightbulb, ArrowUpDown, Server, Package, Power, Loader2, Settings, AlertTriangle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { toast } from "sonner"

const typeIcons: Record<Equipment["type"], React.ElementType> = {
  hvac: Wind,
  lighting: Lightbulb,
  elevator: ArrowUpDown,
  server: Server,
  other: Package,
}

interface EquipmentListProps {
  buildingId: string
}

export function EquipmentList({ buildingId }: EquipmentListProps) {
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [actioningId, setActioningId] = useState<string | null>(null)
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean
    equipment: Equipment | null
    action: "power" | "maintenance"
  }>({
    open: false,
    equipment: null,
    action: "power",
  })

  useEffect(() => {
    setEquipment(getBuildingEquipment(buildingId))
  }, [buildingId])

  const getStatusBadge = (status: Equipment["status"]) => {
    switch (status) {
      case "running":
        return <Badge className="bg-energy-green/10 text-energy-green border-energy-green/30">Running</Badge>
      case "idle":
        return <Badge variant="secondary">Idle</Badge>
      case "maintenance":
        return <Badge className="bg-energy-yellow/10 text-energy-yellow border-energy-yellow/30">Maintenance</Badge>
      case "fault":
        return <Badge className="bg-energy-red/10 text-energy-red border-energy-red/30">Fault</Badge>
    }
  }

  const handlePowerToggle = async (eq: Equipment) => {
    setConfirmDialog({ open: false, equipment: null, action: "power" })
    setActioningId(eq.id)

    const isRunning = eq.status === "running"
    toast.info(isRunning ? "Shutting down equipment..." : "Starting equipment...", {
      description: eq.name,
    })

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setEquipment((prev) => prev.map((e) => (e.id === eq.id ? { ...e, status: isRunning ? "idle" : "running" } : e)))

    setActioningId(null)
    toast.success(isRunning ? "Equipment stopped" : "Equipment started", {
      description: eq.name,
    })
  }

  const handleMaintenanceToggle = async (eq: Equipment) => {
    setConfirmDialog({ open: false, equipment: null, action: "maintenance" })
    setActioningId(eq.id)

    const inMaintenance = eq.status === "maintenance"
    toast.info(inMaintenance ? "Exiting maintenance mode..." : "Entering maintenance mode...", {
      description: eq.name,
    })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setEquipment((prev) =>
      prev.map((e) => (e.id === eq.id ? { ...e, status: inMaintenance ? "idle" : "maintenance" } : e)),
    )

    setActioningId(null)
    toast.success(inMaintenance ? "Maintenance complete" : "Maintenance mode activated", {
      description: eq.name,
    })
  }

  const handleButtonClick = (eq: Equipment) => {
    if (eq.status === "running") {
      setConfirmDialog({ open: true, equipment: eq, action: "power" })
    } else if (eq.status === "maintenance" || eq.status === "fault") {
      setConfirmDialog({ open: true, equipment: eq, action: "maintenance" })
    } else {
      // Idle - start directly
      handlePowerToggle(eq)
    }
  }

  return (
    <div className="space-y-2">
      {equipment.map((eq) => {
        const Icon = typeIcons[eq.type]
        const isActioning = actioningId === eq.id

        return (
          <div
            key={eq.id}
            className={cn(
              "flex items-center justify-between p-3 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all",
              isActioning && "opacity-70",
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "p-2 rounded-lg",
                  eq.status === "running" ? "bg-energy-green/10" : "bg-secondary",
                  isActioning && "animate-pulse",
                )}
              >
                {isActioning ? (
                  <Loader2 className="w-4 h-4 animate-spin text-energy-cyan" />
                ) : (
                  <Icon
                    className={cn("w-4 h-4", eq.status === "running" ? "text-energy-green" : "text-muted-foreground")}
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-sm">{eq.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{eq.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-medium">{eq.power} kW</p>
                <p className="text-xs text-muted-foreground">{eq.runtime}h today</p>
              </div>

              <div className="text-right w-16">
                <p
                  className={cn(
                    "text-sm font-medium",
                    eq.efficiency >= 90
                      ? "text-energy-green"
                      : eq.efficiency >= 80
                        ? "text-energy-yellow"
                        : "text-energy-red",
                  )}
                >
                  {eq.efficiency}%
                </p>
                <p className="text-xs text-muted-foreground">efficiency</p>
              </div>

              {getStatusBadge(eq.status)}

              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-8 w-8",
                  eq.status === "running" && "hover:bg-energy-red/10 hover:text-energy-red",
                  eq.status === "idle" && "hover:bg-energy-green/10 hover:text-energy-green",
                  (eq.status === "maintenance" || eq.status === "fault") &&
                    "hover:bg-energy-yellow/10 hover:text-energy-yellow",
                )}
                onClick={() => handleButtonClick(eq)}
                disabled={isActioning}
              >
                {eq.status === "running" ? (
                  <Power className="w-4 h-4" />
                ) : eq.status === "fault" ? (
                  <AlertTriangle className="w-4 h-4" />
                ) : eq.status === "maintenance" ? (
                  <Settings className="w-4 h-4" />
                ) : (
                  <Power className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        )
      })}

      <Dialog open={confirmDialog.open} onOpenChange={(open) => setConfirmDialog({ ...confirmDialog, open })}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {confirmDialog.action === "power"
                ? `Stop ${confirmDialog.equipment?.name}?`
                : `${confirmDialog.equipment?.status === "maintenance" ? "Exit" : "Enter"} Maintenance Mode?`}
            </DialogTitle>
            <DialogDescription>
              {confirmDialog.action === "power"
                ? "This will shut down the equipment. Make sure no critical operations are in progress."
                : confirmDialog.equipment?.status === "maintenance"
                  ? "This will bring the equipment back online."
                  : "This will take the equipment offline for maintenance."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialog({ ...confirmDialog, open: false })}>
              Cancel
            </Button>
            <Button
              variant={confirmDialog.action === "power" ? "destructive" : "default"}
              onClick={() => {
                if (confirmDialog.equipment) {
                  if (confirmDialog.action === "power") {
                    handlePowerToggle(confirmDialog.equipment)
                  } else {
                    handleMaintenanceToggle(confirmDialog.equipment)
                  }
                }
              }}
            >
              {confirmDialog.action === "power" ? "Stop Equipment" : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
