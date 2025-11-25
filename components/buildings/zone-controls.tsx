"use client"

import { useState, useEffect } from "react"
import { getBuildingZones, type Zone } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Thermometer, Droplets, Users, Minus, Plus, Snowflake, Flame, CheckCircle2 } from "lucide-react"

interface ZoneControlsProps {
  buildingId: string
}

export function ZoneControls({ buildingId }: ZoneControlsProps) {
  const [zones, setZones] = useState<Zone[]>([])
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setMounted(true)
    const data = getBuildingZones(buildingId)
    setZones(data)
    if (data.length > 0) setSelectedZone(data[0].id)
  }, [buildingId])

  const activeZone = zones.find((z) => z.id === selectedZone)

  const adjustSetpoint = async (zoneId: string, delta: number) => {
    setIsSaving(true)
    setZones((prev) =>
      prev.map((z) => (z.id === zoneId ? { ...z, setpoint: Math.max(60, Math.min(80, z.setpoint + delta)) } : z)),
    )
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300))
    setIsSaving(false)
  }

  if (!mounted) return <div className="h-64 animate-pulse bg-muted rounded-lg" />

  return (
    <div className="space-y-4">
      {/* Zone Selector */}
      <div className="flex flex-wrap gap-2">
        {zones.map((zone, index) => {
          const tempDiff = Math.abs(zone.temperature - zone.setpoint)
          const hasIssue = tempDiff > 2

          return (
            <Button
              key={zone.id}
              variant={selectedZone === zone.id ? "default" : "outline"}
              size="sm"
              className={cn(
                "text-xs relative animate-slide-in-up transition-all",
                hasIssue && selectedZone !== zone.id && "border-energy-yellow/50",
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedZone(zone.id)}
            >
              {zone.name}
              {hasIssue && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-energy-yellow animate-pulse" />
              )}
            </Button>
          )
        })}
      </div>

      {/* Zone Details */}
      {activeZone && (
        <div
          className={cn(
            "p-4 rounded-lg border border-border bg-card/50 animate-slide-in-up",
            "transition-all duration-300",
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium">{activeZone.name}</h4>
            {Math.abs(activeZone.temperature - activeZone.setpoint) <= 1 ? (
              <span className="flex items-center gap-1 text-xs text-energy-green">
                <CheckCircle2 className="w-3 h-3" />
                At setpoint
              </span>
            ) : activeZone.temperature > activeZone.setpoint ? (
              <span className="flex items-center gap-1 text-xs text-energy-yellow animate-pulse">
                <Snowflake className="w-3 h-3" />
                Cooling...
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs text-energy-orange animate-pulse">
                <Flame className="w-3 h-3" />
                Heating...
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div
              className={cn(
                "p-3 rounded-lg bg-secondary/50 transition-all duration-300",
                Math.abs(activeZone.temperature - activeZone.setpoint) > 2 &&
                  "bg-energy-yellow/10 border border-energy-yellow/20",
              )}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Thermometer
                  className={cn(
                    "w-4 h-4",
                    Math.abs(activeZone.temperature - activeZone.setpoint) > 2 && "text-energy-yellow",
                  )}
                />
                <span className="text-xs">Temperature</span>
              </div>
              <p
                className={cn(
                  "text-xl font-bold font-mono transition-colors",
                  Math.abs(activeZone.temperature - activeZone.setpoint) > 2 ? "text-energy-yellow" : "text-foreground",
                )}
              >
                {activeZone.temperature}°F
              </p>
            </div>

            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Droplets className="w-4 h-4" />
                <span className="text-xs">Humidity</span>
              </div>
              <p className="text-xl font-bold font-mono">{activeZone.humidity}%</p>
            </div>

            <div className="p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs">Occupancy</span>
              </div>
              <p className="text-xl font-bold font-mono">
                {activeZone.occupancy}
                <span className="text-sm text-muted-foreground font-normal">/{activeZone.maxOccupancy}</span>
              </p>
            </div>
          </div>

          {/* Temperature Control */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Setpoint</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent hover:bg-energy-cyan/10 hover:border-energy-cyan/50"
                  onClick={() => adjustSetpoint(activeZone.id, -1)}
                  disabled={isSaving}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span
                  className={cn(
                    "w-16 text-center font-bold text-lg font-mono transition-all",
                    isSaving && "text-energy-cyan",
                  )}
                >
                  {activeZone.setpoint}°F
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent hover:bg-energy-cyan/10 hover:border-energy-cyan/50"
                  onClick={() => adjustSetpoint(activeZone.id, 1)}
                  disabled={isSaving}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Slider
              value={[activeZone.setpoint]}
              min={60}
              max={80}
              step={1}
              onValueChange={([value]) =>
                setZones((prev) => prev.map((z) => (z.id === activeZone.id ? { ...z, setpoint: value } : z)))
              }
              className="transition-opacity"
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Snowflake className="w-3 h-3 text-energy-cyan" />
                60°F
              </span>
              <span className="flex items-center gap-1">
                80°F
                <Flame className="w-3 h-3 text-energy-orange" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
