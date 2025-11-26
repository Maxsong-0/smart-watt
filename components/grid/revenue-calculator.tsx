"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { drPrograms } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

function AnimatedValue({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const prevValueRef = useRef(0)

  useEffect(() => {
    const start = prevValueRef.current
    const end = value
    const duration = 500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.round(start + (end - start) * easeOut)
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        prevValueRef.current = end
      }
    }

    requestAnimationFrame(animate)
  }, [value])

  return (
    <>
      {prefix}
      {displayValue.toLocaleString()}
    </>
  )
}

export function RevenueCalculator() {
  const { t } = useTranslation()
  const [commitment, setCommitment] = useState(200)
  const [events, setEvents] = useState(12)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalEnrolled = drPrograms.filter((p) => p.enrolled).length
  const totalRevenue = drPrograms.reduce((sum, p) => sum + p.revenue, 0)

  // Simple estimation
  const avgIncentive = 50 // $/event/100kW
  const projectedRevenue = (commitment / 100) * events * avgIncentive

  if (!mounted) return <div className="h-64 animate-pulse bg-muted rounded-lg" />

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-secondary/50">
        <div className="animate-slide-in-up">
          <p className="text-xs text-muted-foreground mb-1">{t('grid.revenue.programsEnrolled')}</p>
          <p className="text-2xl font-bold font-mono">{totalEnrolled}</p>
        </div>
        <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-xs text-muted-foreground mb-1">{t('grid.revenue.ytd')}</p>
          <p className="text-2xl font-bold text-energy-green font-mono">
            <AnimatedValue value={totalRevenue} prefix={t('common.units.currency')} />
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium flex items-center gap-2">
          <Calculator className="w-4 h-4 text-energy-cyan" />
          {t('grid.revenue.estimator')}
        </h4>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">{t('grid.revenue.commitmentLabel')}</Label>
          <Input
            type="number"
            value={commitment}
            onChange={(e) => setCommitment(Number(e.target.value))}
            className="h-8 font-mono"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">{t('grid.revenue.eventsLabel')}</Label>
          <Input
            type="number"
            value={events}
            onChange={(e) => setEvents(Number(e.target.value))}
            className="h-8 font-mono"
          />
        </div>

        <div
          className={cn(
            "p-3 rounded-lg bg-energy-green/10 border border-energy-green/20",
            "transition-all duration-300 hover:shadow-[0_0_15px_var(--glow-green)]",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-energy-green" />
              <span className="text-sm text-muted-foreground">{t('grid.revenue.projectedAnnual')}</span>
            </div>
            <div className="flex items-center gap-1 text-lg font-bold text-energy-green font-mono">
              <DollarSign className="w-4 h-4" />
              <AnimatedValue value={projectedRevenue} prefix={t('common.units.currency')} />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <Sparkles className="w-3 h-3 text-energy-cyan" />
            <span>{t('grid.revenue.projectedFootnote')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
