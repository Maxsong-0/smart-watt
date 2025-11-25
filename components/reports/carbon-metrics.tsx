"use client"

import { useEffect, useState } from "react"
import { Leaf, TreeDeciduous, Car, Factory } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CarbonMetrics() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setProgress(78), 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    {
      icon: Leaf,
      label: "CO2 Avoided",
      value: "124.8",
      unit: "tons",
      color: "text-energy-green",
    },
    {
      icon: TreeDeciduous,
      label: "Trees Equivalent",
      value: "2,056",
      unit: "trees/year",
      color: "text-chart-2",
    },
    {
      icon: Car,
      label: "Cars Off Road",
      value: "27",
      unit: "vehicles",
      color: "text-chart-3",
    },
    {
      icon: Factory,
      label: "Clean Energy %",
      value: "34",
      unit: "%",
      color: "text-energy-cyan",
    },
  ]

  if (!mounted) return <div className="h-[200px] animate-pulse bg-muted rounded-lg" />

  return (
    <div className="space-y-4">
      {/* Annual Target Progress */}
      <div className="p-3 rounded-lg bg-energy-green/10 border border-energy-green/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Annual Carbon Goal</span>
          <span className="text-sm font-bold text-energy-green">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">124.8 of 160 tons target</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
            <p className="text-lg font-bold">{metric.value}</p>
            <p className="text-xs text-muted-foreground">{metric.unit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
