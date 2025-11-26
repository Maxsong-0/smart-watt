"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()
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
    const name = gateways.find((g) => g.id === gatewayId)?.name
    return name ? t(name) : t('config.ui.unknown')
  }

  const getStatusBadge = (status: Device["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-energy-green/10 text-energy-green border-energy-green/30 text-xs">{t('config.deviceTable.status.active')}</Badge>
      case "inactive":
        return (
          <Badge variant="secondary" className="text-xs">
            {t('config.deviceTable.status.inactive')}
          </Badge>
        )
      case "error":
        return <Badge className="bg-energy-red/10 text-energy-red border-energy-red/30 text-xs">{t('config.deviceTable.status.error')}</Badge>
    }
  }

  const formatTime = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const minutes = Math.floor(diff / (60 * 1000))

    if (minutes < 1) return t('config.ui.ago', { time: `0${t('config.ui.m')}` }) // Or just "Just now" translation
    if (minutes < 60) return t('config.ui.ago', { time: `${minutes}${t('config.ui.m')}` })
    return t('config.ui.ago', { time: `${Math.floor(minutes / 60)}${t('config.ui.h')}` })
  }

  const handleAddDevice = async () => {
    if (!newDevice.name || !newDevice.type || !newDevice.gatewayId || !newDevice.address) {
      toast.error(t('config.deviceTable.messages.fillRequired'))
      return
    }

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    const selectedGateway = gateways.find((g) => g.id === newDevice.gatewayId)
    const protocol = selectedGateway ? selectedGateway.type.toUpperCase() : "UNKNOWN"

    const device: Device = {
      id: `device-${Date.now()}`,
      name: newDevice.name,
      type: newDevice.type,
      gatewayId: newDevice.gatewayId,
      protocol,
      address: newDevice.address,
      points: Number.parseInt(newDevice.points),
      status: "active",
      lastReading: new Date(),
    }

    setDeviceList((prev) => [...prev, device])
    toast.success(t('config.deviceTable.messages.added'), { description: newDevice.name })

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
    toast.success(t('config.deviceTable.messages.removed'), { description: device.name })
  }

  const handleToggleStatus = (device: Device) => {
    setDeviceList((prev) =>
      prev.map((d) =>
        d.id === device.id
          ? { ...d, status: d.status === "active" ? "inactive" : "active", lastReading: new Date() }
          : d,
      ),
    )
    toast.success(device.status === "active" ? t('config.deviceTable.messages.deactivated') : t('config.deviceTable.messages.activated'), { description: device.name })
  }

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={t('config.deviceTable.searchPlaceholder')}
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
            {t('config.deviceTable.all')}
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
              <TableHead className="text-xs">{t('config.deviceTable.headers.device')}</TableHead>
              <TableHead className="text-xs">{t('config.deviceTable.headers.gateway')}</TableHead>
              <TableHead className="text-xs">{t('config.deviceTable.headers.address')}</TableHead>
              <TableHead className="text-xs">{t('config.deviceTable.headers.points')}</TableHead>
              <TableHead className="text-xs">{t('config.deviceTable.headers.lastReading')}</TableHead>
              <TableHead className="text-xs">{t('config.deviceTable.headers.status')}</TableHead>
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
                      <p className="font-medium text-sm">{t(device.name)}</p>
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
          {t('config.deviceTable.showing', { count: filteredDevices.length, total: deviceList.length })}
        </span>
        <Button variant="outline" size="sm" onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-1" />
          {t('config.deviceTable.addDevice')}
        </Button>
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('config.deviceTable.addNewDevice')}</DialogTitle>
            <DialogDescription>{t('config.deviceTable.addNewDeviceDesc')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="device-name">{t('config.deviceTable.deviceName')}</Label>
              <Input
                id="device-name"
                placeholder="e.g., AHU-1 Main Building"
                value={newDevice.name}
                onChange={(e) => setNewDevice((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="device-type">{t('config.deviceTable.deviceType')}</Label>
              <Select
                value={newDevice.type}
                onValueChange={(value) => setNewDevice((prev) => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('config.deviceTable.selectType')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AHU">{t('config.deviceTable.types.AHU')}</SelectItem>
                  <SelectItem value="VAV">{t('config.deviceTable.types.VAV')}</SelectItem>
                  <SelectItem value="Chiller">{t('config.deviceTable.types.Chiller')}</SelectItem>
                  <SelectItem value="Boiler">{t('config.deviceTable.types.Boiler')}</SelectItem>
                  <SelectItem value="Meter">{t('config.deviceTable.types.Meter')}</SelectItem>
                  <SelectItem value="Sensor">{t('config.deviceTable.types.Sensor')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gateway">{t('config.deviceTable.headers.gateway')}</Label>
              <Select
                value={newDevice.gatewayId}
                onValueChange={(value) => setNewDevice((prev) => ({ ...prev, gatewayId: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('config.deviceTable.selectGateway')} />
                </SelectTrigger>
                <SelectContent>
                  {gateways.map((gw) => (
                    <SelectItem key={gw.id} value={gw.id}>
                      {t(gw.name)} ({gw.type.toUpperCase()})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="address">{t('config.deviceTable.deviceAddress')}</Label>
                <Input
                  id="address"
                  placeholder="e.g., 1001"
                  value={newDevice.address}
                  onChange={(e) => setNewDevice((prev) => ({ ...prev, address: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="points">{t('config.deviceTable.dataPoints')}</Label>
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
              {t('common.cancel')}
            </Button>
            <Button onClick={handleAddDevice} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('config.deviceTable.adding')}
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {t('config.deviceTable.addDevice')}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Sheet open={!!selectedDevice} onOpenChange={() => setSelectedDevice(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selectedDevice ? t(selectedDevice.name) : ''}</SheetTitle>
            <SheetDescription>{selectedDevice ? `${selectedDevice.type} ${t('config.deviceTable.deviceDetails')}` : ''}</SheetDescription>
          </SheetHeader>
          {selectedDevice && (
            <div className="space-y-6 py-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{t('config.deviceTable.headers.status')}</p>
                  {getStatusBadge(selectedDevice.status)}
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{t('config.deviceTable.headers.gateway')}</p>
                  <p className="text-sm font-medium">{getGatewayName(selectedDevice.gatewayId)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{t('config.deviceTable.headers.address')}</p>
                  <code className="text-sm bg-secondary px-2 py-1 rounded">{selectedDevice.address}</code>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{t('config.deviceTable.headers.points')}</p>
                  <p className="text-sm font-medium">{selectedDevice.points}</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <p className="text-xs text-muted-foreground">{t('config.deviceTable.headers.lastReading')}</p>
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
                  {selectedDevice.status === "active" ? t('config.deviceTable.deactivate') : t('config.deviceTable.activate')}
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-energy-red hover:text-energy-red bg-transparent"
                  onClick={() => handleDeleteDevice(selectedDevice)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  {t('config.deviceTable.remove')}
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
