"use client"

import { useState, useEffect } from "react"
import { drEvents, type DREvent } from "@/lib/mock-data"
import { Zap, Clock, DollarSign, Target, Activity } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function DRStatus() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeEvent = drEvents.find((e) => e.status === "active")
  const pendingEvents = drEvents.filter((e) => e.status === "pending")

  useEffect(() => {
    setMounted(true)
    // Animate progress on mount
    if (activeEvent) {
      const targetProgress = (activeEvent.actualReduction / activeEvent.targetReduction) * 100
      const timer = setTimeout(() => setProgress(targetProgress), 500)
      return () => clearTimeout(timer)
    }
  }, [activeEvent])

  const getStatusBadge = (status: DREvent["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-energy-cyan text-primary-foreground animate-pulse gap-1">
            <Activity className="w-3 h-3" />
            Active
          </Badge>
        )
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "completed":
        return <Badge variant="outline">Completed</Badge>
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
  }

  const getProgress = (event: DREvent) => {
    if (event.status !== "active") return 0
    const total = event.endTime.getTime() - event.startTime.getTime()
    const elapsed = Date.now() - event.startTime.getTime()
    return Math.min(100, Math.round((elapsed / total) * 100))
  }

  if (!mounted) return <div className="h-[200px] animate-pulse bg-muted rounded-lg" />

  return (
    <div className="space-y-4">
      {activeEvent && (
        <div
          className={cn(
            "p-4 rounded-lg border-2 border-energy-cyan/50 bg-energy-cyan/5",
            "relative overflow-hidden animate-slide-in-up",
          )}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-energy-cyan/50 to-transparent animate-scanner" />
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Zap className="w-5 h-5 text-energy-cyan" />
                <span className="absolute inset-0 bg-energy-cyan/30 rounded-full animate-ripple" />
              </div>
              <span className="font-semibold">Active DR Event</span>
            </div>
            {getStatusBadge(activeEvent.status)}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {formatTime(activeEvent.startTime)} - {formatTime(activeEvent.endTime)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="w-4 h-4 text-energy-green" />
              <span className="text-energy-green font-medium font-mono">${activeEvent.incentive}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Reduction Progress</span>
              </div>
              <span className="font-medium font-mono">
                {activeEvent.actualReduction} / {activeEvent.targetReduction} kW
              </span>
            </div>
            <div className="relative">
              <Progress value={progress} className="h-3" />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Event Progress</span>
              <span className="font-mono">{getProgress(activeEvent)}%</span>
            </div>
            <Progress value={getProgress(activeEvent)} className="h-1" />
          </div>
        </div>
      )}

      {pendingEvents.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Upcoming Events</h4>
          {pendingEvents.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "p-3 rounded-lg border border-border bg-card/50",
                "flex items-center justify-between",
                "hover:border-primary/30 hover:bg-card transition-all duration-300",
                "animate-slide-in-right",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <Zap className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium capitalize">{event.type} Event</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {formatTime(event.startTime)} - {formatTime(event.endTime)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-energy-green font-mono">${event.incentive}</p>
                <p className="text-xs text-muted-foreground">{event.targetReduction} kW</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
