"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { Building } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Building2, Thermometer, Wind, ChevronRight, Zap } from "lucide-react"

interface BuildingCardProps {
  building: Building
  index?: number
}

export function BuildingCard({ building, index = 0 }: BuildingCardProps) {
  const [mounted, setMounted] = useState(false)
  const [liveLoad, setLiveLoad] = useState(building.currentLoad)
  const [loadTrend, setLoadTrend] = useState<"up" | "down" | "stable">("stable")

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setLiveLoad((prev) => {
        const variation = Math.random() * 10 - 5
        const newLoad = Math.max(0, Math.min(building.maxCapacity, prev + variation))
        setLoadTrend(newLoad > prev ? "up" : newLoad < prev ? "down" : "stable")
        return newLoad
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [building.maxCapacity])

  const loadPercent = Math.round((liveLoad / building.maxCapacity) * 100)

  const getStatusColor = (status: Building["status"]) => {
    switch (status) {
      case "normal":
        return "bg-energy-green"
      case "warning":
        return "bg-energy-yellow"
      case "critical":
        return "bg-energy-red"
      case "dr-active":
        return "bg-energy-cyan"
    }
  }

  const getStatusLabel = (status: Building["status"]) => {
    switch (status) {
      case "normal":
        return "Normal"
      case "warning":
        return "Warning"
      case "critical":
        return "Critical"
      case "dr-active":
        return "DR Active"
    }
  }

  const hvacStatusColors = {
    on: "text-energy-green",
    off: "text-muted-foreground",
    eco: "text-energy-cyan",
  }

  if (!mounted) return <div className="h-40 animate-pulse bg-muted rounded-lg" />

  return (
    <Link
      href={`/buildings/${building.id}`}
      className={cn(
        "block p-4 rounded-lg border border-border bg-card",
        "hover:border-primary/30 transition-all duration-300 group card-hover",
        "animate-slide-in-up",
        building.status === "dr-active" && "border-energy-cyan/50 shadow-[0_0_15px_var(--glow-cyan)]",
        building.status === "critical" && "border-energy-red/50 animate-pulse",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "p-2 rounded-lg bg-secondary relative",
              building.status === "dr-active" && "bg-energy-cyan/20",
            )}
          >
            <Building2
              className={cn("w-5 h-5 text-muted-foreground", building.status === "dr-active" && "text-energy-cyan")}
            />
            <span
              className={cn(
                "absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-card",
                getStatusColor(building.status),
                building.status === "dr-active" && "animate-pulse",
              )}
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{building.name}</h3>
            <p className="text-xs text-muted-foreground capitalize">{building.type}</p>
          </div>
        </div>
        <Badge
          variant="outline"
          className={cn(
            "text-xs",
            building.status === "normal" && "border-energy-green/50 text-energy-green",
            building.status === "warning" && "border-energy-yellow/50 text-energy-yellow",
            building.status === "critical" && "border-energy-red/50 text-energy-red animate-pulse",
            building.status === "dr-active" && "border-energy-cyan/50 text-energy-cyan animate-pulse",
          )}
        >
          {getStatusLabel(building.status)}
        </Badge>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-muted-foreground flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Load
            </span>
            <span
              className={cn(
                "font-medium font-mono flex items-center gap-1",
                loadTrend === "up" && "text-energy-yellow",
                loadTrend === "down" && "text-energy-green",
              )}
            >
              {Math.round(liveLoad)} / {building.maxCapacity} kW
              {loadTrend === "up" && <span className="text-energy-yellow">↑</span>}
              {loadTrend === "down" && <span className="text-energy-green">↓</span>}
            </span>
          </div>
          <Progress
            value={loadPercent}
            className={cn(
              "h-2 transition-all duration-500",
              loadPercent > 90 && "[&>div]:bg-energy-red",
              loadPercent > 75 && loadPercent <= 90 && "[&>div]:bg-energy-yellow",
            )}
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <Thermometer className="w-3 h-3 text-muted-foreground" />
            <span className="font-mono">{building.temperature}°F</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wind className={cn("w-3 h-3", hvacStatusColors[building.hvacStatus])} />
            <span className={hvacStatusColors[building.hvacStatus]}>HVAC {building.hvacStatus.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-3 text-xs text-muted-foreground group-hover:text-primary transition-colors">
        <span>View Details</span>
        <ChevronRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
