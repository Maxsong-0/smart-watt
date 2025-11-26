"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Leaf, TreeDeciduous, Car, Factory } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CarbonMetrics() {
  const { t } = useTranslation()
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
      label: t('reports.carbon.co2Avoided'),
      value: "124.8",
      unit: t('common.units.tons'),
      color: "text-energy-green",
    },
    {
      icon: TreeDeciduous,
      label: t('reports.carbon.treesEquivalent'),
      value: "2,056",
      unit: t('reports.carbon.treesPerYear'),
      color: "text-chart-2",
    },
    {
      icon: Car,
      label: t('reports.carbon.carsOffRoad'),
      value: "27",
      unit: t('reports.carbon.vehicles'),
      color: "text-chart-3",
    },
    {
      icon: Factory,
      label: t('reports.carbon.cleanEnergy'),
      value: "34",
      unit: t('common.units.percentage'),
      color: "text-energy-cyan",
    },
  ]

  if (!mounted) return <div className="h-[200px] animate-pulse bg-muted rounded-lg" />

  return (
    <div className="space-y-4">
      {/* Annual Target Progress */}
      <div className="p-3 rounded-lg bg-energy-green/10 border border-energy-green/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">{t('reports.carbon.annualGoal')}</span>
          <span className="text-sm font-bold text-energy-green">{progress}{t('common.units.percentage')}</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">{t('reports.carbon.goalProgress', { current: 124.8, total: 160 })}</p>
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