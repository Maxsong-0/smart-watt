"use client"

import { useState } from "react"
import { devices, gateways, type Device } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, ChevronRight, Circle, Plus, Loader2, Check, Settings, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { toast } from "sonner"

export function DeviceTable() {
  const [deviceList, setDeviceList] = useState<Device[]>(devices)
  const [search, setSearch] = useState("")
  const [filterGateway, setFilterGateway] = useState<string | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [newDevice, setNewDevice] = useState({
    name: "",
    type: "",
    gatewayId: "",
    address: "",
    points: "1",
  })

  const filteredDevices = deviceList.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(search.toLowerCase()) ||
      device.type.toLowerCase().includes(search.toLowerCase())
    const matchesGateway = !filterGateway || device.gatewayId === filterGateway
    return matchesSearch && matchesGateway
  })

  const getGatewayName = (gatewayId: string) => {
    return gateways.find((g) => g.id === gatewayId)?.name || "Unknown"
  }

  const getStatusBadge = (status: Device["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-energy-green/10 text-energy-green border-energy-green/30 text-xs">Active</Badge>
      case "inactive":
        return (
          <Badge variant="secondary" className="text-xs">
            Inactive
          </Badge>
        )
      case "error":
        return <Badge className="bg-energy-red/10 text-energy-red border-energy-red/30 text-xs">Error</Badge>
    }
  }

  const formatTime = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const minutes = Math.floor(diff / (60 * 1000))

    if (minutes < 1) return "Just now"
    if (minutes < 60) return `${minutes}m ago`
    return `${Math.floor(minutes / 60)}h ago`
  }

  const handleAddDevice = async () => {
    if (!newDevice.name || !newDevice.type || !newDevice.gatewayId || !newDevice.address) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    const device: Device = {
      id: `device-${Date.now()}`,
      name: newDevice.name,
      type: newDevice.type,
      gatewayId: newDevice.gatewayId,
      address: newDevice.address,
      points: Number.parseInt(newDevice.points),
      status: "active",
      lastReading: new Date(),
    }

    setDeviceList((prev) => [...prev, device])
    toast.success("Device added successfully", { description: newDevice.name })

    setIsSaving(false)
    setIsAddDialogOpen(false)
    setNewDevice({ name: "", type: "", gatewayId: "", address: "", points: "1" })
  }

  const handleViewDevice = (device: Device) => {
    setSelectedDevice(device)
  }

  const handleDeleteDevice = (device: Device) => {
    setDeviceList((prev) => prev.filter((d) => d.id !== device.id))
    setSelectedDevice(null)
    toast.success("Device removed", { description: device.name })
  }

  const handleToggleStatus = (device: Device) => {
    setDeviceList((prev) =>
      prev.map((d) =>
        d.id === device.id
          ? { ...d, status: d.status === "active" ? "inactive" : "active", lastReading: new Date() }
          : d,
      ),
    )
    toast.success(device.status === "active" ? "Device deactivated" : "Device activated", { description: device.name })
  }

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search devices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1">
          <Button
            variant={filterGateway === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterGateway(null)}
          >
            All
          </Button>
          {gateways.map((gw) => (
            <Button
              key={gw.id}
              variant={filterGateway === gw.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterGateway(gw.id)}
              className="text-xs"
            >
              {gw.type.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="text-xs">Device</TableHead>
              <TableHead className="text-xs">Gateway</TableHead>
              <TableHead className="text-xs">Address</TableHead>
              <TableHead className="text-xs">Points</TableHead>
              <TableHead className="text-xs">Last Reading</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDevices.map((device) => (
              <TableRow
                key={device.id}
                className="hover:bg-secondary/30 cursor-pointer"
                onClick={() => handleViewDevice(device)}
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Circle
                      className={cn(
                        "w-2 h-2 fill-current",
                        device.status === "active"
                          ? "text-energy-green"
                          : device.status === "error"
                            ? "text-energy-red"
                            : "text-muted-foreground",
                      )}
                    />
                    <div>
                      <p className="font-medium text-sm">{device.name}</p>
                      <p className="text-xs text-muted-foreground">{device.type}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{getGatewayName(device.gatewayId)}</TableCell>
                <TableCell>
                  <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">{device.address}</code>
                </TableCell>
                <TableCell className="text-sm">{device.points}</TableCell>
                <TableCell className={cn("text-sm", device.status === "error" && "text-energy-red")}>
                  {formatTime(device.lastReading)}
                </TableCell>
                <TableCell>{getStatusBadge(device.status)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewDevice(device)
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing {filteredDevices.length} of {deviceList.length} devices
        </span>
        <Button variant="outline" size="sm" onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-1" />
          Add Device
        </Button>
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Device</DialogTitle>
            <DialogDescription>Register a new device to your monitoring system.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="device-name">Device Name</Label>
              <Input
                id="device-name"
                placeholder="e.g., AHU-1 Main Building"
                value={newDevice.name}
                onChange={(e) => setNewDevice((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="device-type">Device Type</Label>
              <Select
                value={newDevice.type}
                onValueChange={(value) => setNewDevice((prev) => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AHU">Air Handling Unit (AHU)</SelectItem>
                  <SelectItem value="VAV">Variable Air Volume (VAV)</SelectItem>
                  <SelectItem value="Chiller">Chiller</SelectItem>
                  <SelectItem value="Boiler">Boiler</SelectItem>
                  <SelectItem value="Meter">Energy Meter</SelectItem>
                  <SelectItem value="Sensor">Sensor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gateway">Gateway</Label>
              <Select
                value={newDevice.gatewayId}
                onValueChange={(value) => setNewDevice((prev) => ({ ...prev, gatewayId: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gateway" />
                </SelectTrigger>
                <SelectContent>
                  {gateways.map((gw) => (
                    <SelectItem key={gw.id} value={gw.id}>
                      {gw.name} ({gw.type.toUpperCase()})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="address">Device Address</Label>
                <Input
                  id="address"
                  placeholder="e.g., 1001"
                  value={newDevice.address}
                  onChange={(e) => setNewDevice((prev) => ({ ...prev, address: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="points">Data Points</Label>
                <Input
                  id="points"
                  type="number"
                  placeholder="1"
                  value={newDevice.points}
                  onChange={(e) => setNewDevice((prev) => ({ ...prev, points: e.target.value }))}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddDevice} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Adding...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Add Device
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Sheet open={!!selectedDevice} onOpenChange={() => setSelectedDevice(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedDevice?.name}</SheetTitle>
            <SheetDescription>{selectedDevice?.type} Device Details</SheetDescription>
          </SheetHeader>
          {selectedDevice && (
            <div className="space-y-6 py-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Status</p>
                  {getStatusBadge(selectedDevice.status)}
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Gateway</p>
                  <p className="text-sm font-medium">{getGatewayName(selectedDevice.gatewayId)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Address</p>
                  <code className="text-sm bg-secondary px-2 py-1 rounded">{selectedDevice.address}</code>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Data Points</p>
                  <p className="text-sm font-medium">{selectedDevice.points}</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <p className="text-xs text-muted-foreground">Last Reading</p>
                  <p className="text-sm font-medium">{formatTime(selectedDevice.lastReading)}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => handleToggleStatus(selectedDevice)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {selectedDevice.status === "active" ? "Deactivate Device" : "Activate Device"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-energy-red hover:text-energy-red bg-transparent"
                  onClick={() => handleDeleteDevice(selectedDevice)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remove Device
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
