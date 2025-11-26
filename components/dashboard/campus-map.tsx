"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { buildings, type Building } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export function CampusMap() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)
  const [liveData, setLiveData] = useState<Record<string, number>>({})

  useEffect(() => {
    setMounted(true)

    // Initialize live data
    const initialData: Record<string, number> = {}
    buildings.forEach((b) => {
      initialData[b.id] = b.currentLoad
    })
    setLiveData(initialData)

    // Simulate real-time data updates
    const interval = setInterval(() => {
      setLiveData((prev) => {
        const newData = { ...prev }
        buildings.forEach((b) => {
          const variation = Math.random() * 10 - 5
          newData[b.id] = Math.max(0, Math.min(b.maxCapacity, (prev[b.id] || b.currentLoad) + variation))
        })
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
      default:
        return "bg-muted"
    }
  }

  const getStatusAnimation = (status: Building["status"]) => {
    switch (status) {
      case "dr-active":
        return "animate-pulse-glow"
      case "warning":
        return "animate-pulse-glow-yellow"
      case "critical":
        return "animate-pulse"
      default:
        return ""
    }
  }

  const getLoadPercentage = (building: Building) => {
    const currentLoad = liveData[building.id] || building.currentLoad
    return Math.round((currentLoad / building.maxCapacity) * 100)
  }

  if (!mounted) return <div className="h-[400px] animate-pulse bg-muted rounded-lg" />

  return (
    <TooltipProvider>
      <div className="relative w-full h-[400px] bg-secondary/50 rounded-lg border border-border overflow-hidden">
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="text-border">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--energy-cyan)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--energy-cyan)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--energy-cyan)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Connection lines */}
          <line
            x1="30%"
            y1="25%"
            x2="50%"
            y2="20%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-flow-line"
          />
          <line
            x1="50%"
            y1="20%"
            x2="70%"
            y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-flow-line"
            style={{ animationDelay: "0.2s" }}
          />
          <line
            x1="25%"
            y1="55%"
            x2="45%"
            y2="65%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-flow-line"
            style={{ animationDelay: "0.4s" }}
          />
          <line
            x1="45%"
            y1="65%"
            x2="60%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-flow-line"
            style={{ animationDelay: "0.6s" }}
          />
          <line
            x1="60%"
            y1="50%"
            x2="80%"
            y2="60%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-flow-line"
            style={{ animationDelay: "0.8s" }}
          />
        </svg>

        {/* Campus label with scanner effect */}
        <div className="absolute top-4 left-4 text-xs text-muted-foreground font-mono uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-energy-cyan animate-pulse" />
          {t('dashboard.campusMapUI.overview')}
        </div>

        {/* Total power indicator */}
        <div className="absolute top-4 right-4 text-right">
          <p className="text-xs text-muted-foreground font-mono">{t('dashboard.campusMapUI.totalLoad')}</p>
          <p className="text-xl font-bold text-energy-cyan font-mono">
            {Math.round(Object.values(liveData).reduce((a, b) => a + b, 0)).toLocaleString()} {t('common.units.kw')}
          </p>
        </div>

        {/* Buildings */}
        {buildings.map((building, index) => {
          const loadPercent = getLoadPercentage(building)
          const isSelected = selectedBuilding === building.id

          return (
            <Tooltip key={building.id}>
              <TooltipTrigger asChild>
                <Link
                  href={`/buildings/${building.id}`}
                  className={cn(
                    "absolute w-14 h-14 rounded-lg border-2 transition-all duration-300",
                    "flex flex-col items-center justify-center text-xs font-bold",
                    "hover:scale-125 hover:z-20 cursor-pointer",
                    getStatusColor(building.status),
                    getStatusAnimation(building.status),
                    isSelected && "scale-125 z-20 ring-2 ring-white/50",
                    "animate-slide-in-up",
                  )}
                  style={{
                    left: `${building.coordinates.x}%`,
                    top: `${building.coordinates.y}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${index * 0.1}s`,
                    borderColor:
                      loadPercent > 90
                        ? "var(--energy-red)"
                        : loadPercent > 75
                          ? "var(--energy-yellow)"
                          : "var(--border)",
                  }}
                  onMouseEnter={() => setSelectedBuilding(building.id)}
                  onMouseLeave={() => setSelectedBuilding(null)}
                >
                  <span className="text-primary-foreground drop-shadow-md text-sm">{loadPercent}%</span>
                  <span className="text-[9px] text-primary-foreground/80 truncate max-w-full px-1">
                    {Math.round(liveData[building.id] || building.currentLoad)}{t('common.units.kw')}
                  </span>

                  {/* Ripple effect for DR active */}
                  {building.status === "dr-active" && (
                    <span className="absolute inset-0 rounded-lg bg-energy-cyan/30 animate-ripple" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold">{t(building.name)}</p>
                  <div className="text-xs space-y-0.5 text-muted-foreground">
                    <p>
                      {t('dashboard.campusMapUI.tooltip.load')}: {Math.round(liveData[building.id] || building.currentLoad)} / {building.maxCapacity} {t('common.units.kw')}
                    </p>
                    <p>{t('dashboard.campusMapUI.tooltip.temperature')}: {building.temperature}{t('common.units.f')}</p>
                    <p>{t('dashboard.campusMapUI.tooltip.hvac')}: {t(`status.${building.hvacStatus}`)}</p>
                    <p className="capitalize">{t('dashboard.campusMapUI.tooltip.status')}: {t(`buildings.card.status.${building.status}`)}</p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          )
        })}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border">
          <p className="text-xs font-medium mb-2 text-foreground">{t('dashboard.campusMapUI.legend.title')}</p>
          <div className="space-y-1.5">
            {[
              { status: "normal", label: "normal" },
              { status: "warning", label: "warning" },
              { status: "critical", label: "critical" },
              { status: "dr-active", label: "drActive" },
            ].map(({ status, label }) => (
              <div key={status} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-3 h-3 rounded-sm",
                    getStatusColor(status as Building["status"]),
                    status === "dr-active" && "animate-pulse",
                  )}
                />
                <span className="text-xs text-muted-foreground">{t(`dashboard.campusMapUI.legend.${label}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}