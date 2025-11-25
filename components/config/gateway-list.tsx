"use client"

import type React from "react"

import { useState } from "react"
import { gateways, type Gateway } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Network,
  Server,
  Radio,
  Cpu,
  Settings,
  RefreshCw,
  Circle,
  MoreVertical,
  Plus,
  Loader2,
  Check,
  Trash2,
  Power,
  PowerOff,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

const typeIcons: Record<Gateway["type"], React.ElementType> = {
  bacnet: Network,
  modbus: Server,
  mqtt: Radio,
  opcua: Cpu,
}

export function GatewayList() {
  const [gatewayData, setGatewayData] = useState<Gateway[]>(gateways)
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false)
  const [editingGateway, setEditingGateway] = useState<Gateway | null>(null)
  const [restartingId, setRestartingId] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [newGateway, setNewGateway] = useState({
    name: "",
    type: "bacnet" as Gateway["type"],
    ip: "",
    port: "47808",
  })

  const getStatusColor = (status: Gateway["status"]) => {
    switch (status) {
      case "online":
        return "text-energy-green"
      case "offline":
        return "text-muted-foreground"
      case "error":
        return "text-energy-red"
    }
  }

  const getStatusBadge = (status: Gateway["status"]) => {
    switch (status) {
      case "online":
        return <Badge className="bg-energy-green/10 text-energy-green border-energy-green/30">Online</Badge>
      case "offline":
        return <Badge variant="secondary">Offline</Badge>
      case "error":
        return <Badge className="bg-energy-red/10 text-energy-red border-energy-red/30">Error</Badge>
    }
  }

  const formatLastSeen = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(diff / (60 * 1000))

    if (seconds < 60) return `${seconds}s ago`
    if (minutes < 60) return `${minutes}m ago`
    return `${Math.floor(minutes / 60)}h ago`
  }

  const handleRestartGateway = async (gateway: Gateway) => {
    setRestartingId(gateway.id)
    toast.info("Restarting gateway...", { description: gateway.name })

    // Simulate restart - set to offline first
    setGatewayData((prev) => prev.map((g) => (g.id === gateway.id ? { ...g, status: "offline" as const } : g)))

    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Then bring back online
    setGatewayData((prev) =>
      prev.map((g) => (g.id === gateway.id ? { ...g, status: "online" as const, lastSeen: new Date() } : g)),
    )

    setRestartingId(null)
    toast.success("Gateway restarted successfully", { description: gateway.name })
  }

  const handleConfigureGateway = (gateway: Gateway) => {
    setEditingGateway(gateway)
    setNewGateway({
      name: gateway.name,
      type: gateway.type,
      ip: gateway.ip,
      port: gateway.port.toString(),
    })
    setIsConfigDialogOpen(true)
  }

  const handleSaveGateway = async () => {
    if (!newGateway.name || !newGateway.ip || !newGateway.port) {
      toast.error("Please fill in all fields")
      return
    }

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (editingGateway) {
      setGatewayData((prev) =>
        prev.map((g) =>
          g.id === editingGateway.id
            ? {
                ...g,
                name: newGateway.name,
                type: newGateway.type,
                ip: newGateway.ip,
                port: Number.parseInt(newGateway.port),
              }
            : g,
        ),
      )
      toast.success("Gateway configuration updated")
    } else {
      const gateway: Gateway = {
        id: `gw-${Date.now()}`,
        name: newGateway.name,
        type: newGateway.type,
        ip: newGateway.ip,
        port: Number.parseInt(newGateway.port),
        status: "offline",
        devices: 0,
        dataPoints: 0,
        lastSeen: new Date(),
      }
      setGatewayData((prev) => [...prev, gateway])
      toast.success("Gateway added successfully", { description: "Waiting for connection..." })
    }

    setIsSaving(false)
    setIsConfigDialogOpen(false)
    setEditingGateway(null)
    setNewGateway({ name: "", type: "bacnet", ip: "", port: "47808" })
  }

  const handleDeleteGateway = (gateway: Gateway) => {
    setGatewayData((prev) => prev.filter((g) => g.id !== gateway.id))
    toast.success("Gateway removed", { description: gateway.name })
  }

  const handleTogglePower = async (gateway: Gateway) => {
    const isOnline = gateway.status === "online"
    toast.info(isOnline ? "Shutting down..." : "Starting up...", { description: gateway.name })

    setGatewayData((prev) =>
      prev.map((g) =>
        g.id === gateway.id
          ? { ...g, status: isOnline ? ("offline" as const) : ("online" as const), lastSeen: new Date() }
          : g,
      ),
    )

    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success(isOnline ? "Gateway offline" : "Gateway online", { description: gateway.name })
  }

  return (
    <div className="space-y-3">
      {gatewayData.map((gateway) => {
        const Icon = typeIcons[gateway.type]
        const isRestarting = restartingId === gateway.id

        return (
          <div
            key={gateway.id}
            className={cn(
              "p-4 rounded-lg border transition-all",
              gateway.status === "online"
                ? "bg-card border-border hover:border-primary/30"
                : gateway.status === "error"
                  ? "bg-energy-red/5 border-energy-red/30"
                  : "bg-secondary/30 border-border/50",
              isRestarting && "animate-pulse",
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2 rounded-lg relative",
                    gateway.status === "online" ? "bg-energy-green/10" : "bg-secondary",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      gateway.status === "online" ? "text-energy-green" : "text-muted-foreground",
                      isRestarting && "animate-spin",
                    )}
                  />
                  <Circle
                    className={cn("w-2 h-2 absolute -top-0.5 -right-0.5 fill-current", getStatusColor(gateway.status))}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{gateway.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {gateway.ip}:{gateway.port}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {getStatusBadge(gateway.status)}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleConfigureGateway(gateway)}>
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleRestartGateway(gateway)}
                      disabled={isRestarting || gateway.status === "offline"}
                    >
                      <RefreshCw className={cn("w-4 h-4 mr-2", isRestarting && "animate-spin")} />
                      {isRestarting ? "Restarting..." : "Restart"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleTogglePower(gateway)}>
                      {gateway.status === "online" ? (
                        <>
                          <PowerOff className="w-4 h-4 mr-2" />
                          Shutdown
                        </>
                      ) : (
                        <>
                          <Power className="w-4 h-4 mr-2" />
                          Start
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-energy-red focus:text-energy-red"
                      onClick={() => handleDeleteGateway(gateway)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4 text-xs">
              <div>
                <p className="text-muted-foreground">Protocol</p>
                <p className="font-medium uppercase">{gateway.type}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Devices</p>
                <p className="font-medium">{gateway.devices}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Data Points</p>
                <p className="font-medium">{gateway.dataPoints.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Seen</p>
                <p className={cn("font-medium", gateway.status === "error" && "text-energy-red")}>
                  {formatLastSeen(gateway.lastSeen)}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => {
          setEditingGateway(null)
          setNewGateway({ name: "", type: "bacnet", ip: "", port: "47808" })
          setIsConfigDialogOpen(true)
        }}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Gateway
      </Button>

      <Dialog open={isConfigDialogOpen} onOpenChange={setIsConfigDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingGateway ? "Configure Gateway" : "Add Gateway"}</DialogTitle>
            <DialogDescription>
              {editingGateway ? "Modify the gateway configuration." : "Add a new gateway to your network."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="gateway-name">Gateway Name</Label>
              <Input
                id="gateway-name"
                placeholder="e.g., Main BACnet Gateway"
                value={newGateway.name}
                onChange={(e) => setNewGateway((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protocol">Protocol</Label>
              <Select
                value={newGateway.type}
                onValueChange={(value) => setNewGateway((prev) => ({ ...prev, type: value as Gateway["type"] }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bacnet">BACnet</SelectItem>
                  <SelectItem value="modbus">Modbus</SelectItem>
                  <SelectItem value="mqtt">MQTT</SelectItem>
                  <SelectItem value="opcua">OPC UA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="ip">IP Address</Label>
                <Input
                  id="ip"
                  placeholder="192.168.1.100"
                  value={newGateway.ip}
                  onChange={(e) => setNewGateway((prev) => ({ ...prev, ip: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="port">Port</Label>
                <Input
                  id="port"
                  placeholder="47808"
                  value={newGateway.port}
                  onChange={(e) => setNewGateway((prev) => ({ ...prev, port: e.target.value }))}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfigDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveGateway} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {editingGateway ? "Update" : "Add"}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
