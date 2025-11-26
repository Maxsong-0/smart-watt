"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, ArrowRight, Check, X, Edit2, Trash2, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface Mapping {
  id: string
  sourceProtocol: string
  sourcePoint: string
  targetName: string
  unit: string
  transform?: string
}

const initialMappings: Mapping[] = [
  {
    id: "m1",
    sourceProtocol: "BACnet",
    sourcePoint: "AV:1001",
    targetName: "ahu1_supply_temp",
    unit: "°F",
    transform: undefined,
  },
  {
    id: "m2",
    sourceProtocol: "BACnet",
    sourcePoint: "AV:1002",
    targetName: "ahu1_return_temp",
    unit: "°F",
    transform: undefined,
  },
  {
    id: "m3",
    sourceProtocol: "Modbus",
    sourcePoint: "40001",
    targetName: "main_power",
    unit: "kW",
    transform: "x * 0.1",
  },
  {
    id: "m4",
    sourceProtocol: "Modbus",
    sourcePoint: "40002",
    targetName: "main_voltage",
    unit: "V",
    transform: undefined,
  },
  {
    id: "m5",
    sourceProtocol: "MQTT",
    sourcePoint: "sensors/temp/1",
    targetName: "zone1_temp",
    unit: "°C",
    transform: "(x * 9/5) + 32",
  },
]

export function ProtocolMapping() {
  const { t } = useTranslation()
  const [mappings, setMappings] = useState<Mapping[]>(initialMappings)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [newMapping, setNewMapping] = useState<Omit<Mapping, "id">>({
    sourceProtocol: "BACnet",
    sourcePoint: "",
    targetName: "",
    unit: "",
    transform: "",
  })

  const handleSaveMapping = async () => {
    if (!newMapping.sourcePoint || !newMapping.targetName || !newMapping.unit) {
      toast.error(t("config.protocolMapping.required"))
      return
    }

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (editingId) {
      setMappings((prev) =>
        prev.map((m) =>
          m.id === editingId ? { ...m, ...newMapping, transform: newMapping.transform || undefined } : m,
        ),
      )
      toast.success(t("common.success"))
    } else {
      const mapping: Mapping = {
        id: `m${Date.now()}`,
        ...newMapping,
        transform: newMapping.transform || undefined,
      }
      setMappings((prev) => [...prev, mapping])
      toast.success(t("config.protocolMapping.added"), { description: newMapping.targetName })
    }

    setIsSaving(false)
    setIsAdding(false)
    setEditingId(null)
    setNewMapping({
      sourceProtocol: "BACnet",
      sourcePoint: "",
      targetName: "",
      unit: "",
      transform: "",
    })
  }

  const handleEditMapping = (mapping: Mapping) => {
    setEditingId(mapping.id)
    setNewMapping({
      sourceProtocol: mapping.sourceProtocol,
      sourcePoint: mapping.sourcePoint,
      targetName: mapping.targetName,
      unit: mapping.unit,
      transform: mapping.transform || "",
    })
    setIsAdding(true)
  }

  const handleDeleteMapping = (id: string) => {
    const mapping = mappings.find((m) => m.id === id)
    setMappings((prev) => prev.filter((m) => m.id !== id))
    toast.success(t("config.protocolMapping.delete"), { description: mapping?.targetName })
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    setNewMapping({
      sourceProtocol: "BACnet",
      sourcePoint: "",
      targetName: "",
      unit: "",
      transform: "",
    })
  }

  return (
    <div className="space-y-4">
      {/* Mappings List */}
      <div className="space-y-2">
        {mappings.map((mapping) => (
          <div
            key={mapping.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all group",
              editingId === mapping.id && "border-primary/50 bg-primary/5",
            )}
          >
            <Badge variant="outline" className="text-xs font-mono">
              {mapping.sourceProtocol}
            </Badge>

            <code className="text-xs bg-secondary px-2 py-1 rounded">{mapping.sourcePoint}</code>

            <ArrowRight className="w-4 h-4 text-muted-foreground" />

            <div className="flex-1">
              <span className="font-medium text-sm">{mapping.targetName}</span>
              {mapping.transform && <span className="ml-2 text-xs text-muted-foreground">({mapping.transform})</span>}
            </div>

            <Badge variant="secondary" className="text-xs">
              {mapping.unit}
            </Badge>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleEditMapping(mapping)}>
                <Edit2 className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-energy-red hover:text-energy-red"
                onClick={() => handleDeleteMapping(mapping.id)}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Mapping Form */}
      {isAdding ? (
        <div className="p-4 rounded-lg border border-primary/30 bg-card space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">{t("config.protocolMapping.sourceProtocol")}</Label>
              <Select
                value={newMapping.sourceProtocol}
                onValueChange={(value) => setNewMapping((prev) => ({ ...prev, sourceProtocol: value }))}
              >
                <SelectTrigger className="h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BACnet">BACnet</SelectItem>
                  <SelectItem value="Modbus">Modbus</SelectItem>
                  <SelectItem value="MQTT">MQTT</SelectItem>
                  <SelectItem value="OPC-UA">OPC-UA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">{t("config.protocolMapping.sourcePoint")}</Label>
              <Input
                placeholder="AV:1003"
                className="h-8"
                value={newMapping.sourcePoint}
                onChange={(e) => setNewMapping((prev) => ({ ...prev, sourcePoint: e.target.value }))}
              />
            </div>
            <div>
              <Label className="text-xs">{t("config.protocolMapping.targetName")}</Label>
              <Input
                placeholder="my_point_name"
                className="h-8"
                value={newMapping.targetName}
                onChange={(e) => setNewMapping((prev) => ({ ...prev, targetName: e.target.value }))}
              />
            </div>
            <div>
              <Label className="text-xs">{t("config.protocolMapping.unit")}</Label>
              <Input
                placeholder={t("common.units.f")}
                className="h-8"
                value={newMapping.unit}
                onChange={(e) => setNewMapping((prev) => ({ ...prev, unit: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <Label className="text-xs">{t("config.protocolMapping.transform")}</Label>
            <Input
              placeholder="x * 0.1"
              className="h-8"
              value={newMapping.transform}
              onChange={(e) => setNewMapping((prev) => ({ ...prev, transform: e.target.value }))}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              <X className="w-4 h-4 mr-1" />
              {t("common.cancel")}
            </Button>
            <Button size="sm" onClick={handleSaveMapping} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                  {t("config.protocolMapping.saving")}
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  {editingId ? t("config.protocolMapping.update") : t("config.protocolMapping.save")}
                </>
              )}
            </Button>
          </div>
        </div>
      ) : (
        <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsAdding(true)}>
          <Plus className="w-4 h-4 mr-2" />
          {t("config.protocolMapping.add")}
        </Button>
      )}
    </div>
  )
}
