"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { gridSignals, type GridSignal } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, AlertTriangle, Gauge, Sun, Clock, Radio, Check, X, Loader2, Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { toast } from "sonner"

const typeIcons: Record<GridSignal["type"], React.ElementType> = {
  price: DollarSign,
  emergency: AlertTriangle,
  capacity: Gauge,
  renewable: Sun,
}

const severityStyles: Record<GridSignal["severity"], { bg: string; border: string; icon: string; glow: string }> = {
  info: {
    bg: "bg-energy-cyan/10",
    border: "border-energy-cyan/30",
    icon: "text-energy-cyan",
    glow: "hover:shadow-[0_0_15px_var(--glow-cyan)]",
  },
  warning: {
    bg: "bg-energy-yellow/10",
    border: "border-energy-yellow/30",
    icon: "text-energy-yellow",
    glow: "hover:shadow-[0_0_15px_var(--glow-yellow)]",
  },
  critical: {
    bg: "bg-energy-red/10",
    border: "border-energy-red/30",
    icon: "text-energy-red",
    glow: "hover:shadow-[0_0_15px_rgba(255,100,100,0.3)]",
  },
}

export function GridSignals() {
  const { t } = useTranslation()
  const [signals, setSignals] = useState<GridSignal[]>([])
  const [mounted, setMounted] = useState(false)
  const [, setTick] = useState(0)
  const [selectedSignal, setSelectedSignal] = useState<GridSignal | null>(null)
  const [respondingId, setRespondingId] = useState<string | null>(null)
  const [respondedIds, setRespondedIds] = useState<Set<string>>(new Set())
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
    setSignals(gridSignals)

    const interval = setInterval(() => {
      setTick((t) => t + 1)
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const getTimeRemaining = (expiresAt: Date) => {
    const diff = expiresAt.getTime() - Date.now()
    if (diff <= 0) return t('grid.ui.expired')
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    if (hours > 0) return `${hours}h ${minutes}m ${t('grid.ui.remaining')}`
    return `${minutes}m ${t('grid.ui.remaining')}`
  }

  const handleRespond = async (signal: GridSignal) => {
    setSelectedSignal(null)
    setRespondingId(signal.id)

    toast.info(t('grid.ui.initiating'), {
      description: t('grid.ui.initiatingDesc', { type: t(`grid.types.${signal.type}`) }),
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setRespondedIds((prev) => new Set([...prev, signal.id]))
    setRespondingId(null)

    toast.success(t('grid.ui.responseSuccess'), {
      description: t('grid.ui.responseSuccessDesc', { type: t(`grid.types.${signal.type}`) }),
    })
  }

  const handleDismiss = (signal: GridSignal) => {
    setSelectedSignal(null)
    setDismissedIds((prev) => new Set([...prev, signal.id]))
    toast.info(t('grid.ui.dismissed'), {
      description: t(signal.message),
    })
  }

  if (!mounted)
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 animate-pulse bg-muted rounded-lg" />
        ))}
      </div>
    )

  const visibleSignals = signals.filter((s) => !dismissedIds.has(s.id))

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <Radio className="w-3 h-3 text-energy-cyan animate-pulse" />
        <span>{t('grid.ui.receiving')}</span>
      </div>

      {visibleSignals.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <Check className="w-8 h-8 mx-auto mb-2 text-energy-green" />
          <p className="text-sm">{t('grid.ui.allHandled')}</p>
        </div>
      ) : (
        visibleSignals.map((signal, index) => {
          const Icon = typeIcons[signal.type]
          const styles = severityStyles[signal.severity]
          const isResponding = respondingId === signal.id
          const hasResponded = respondedIds.has(signal.id)

          return (
            <div
              key={signal.id}
              className={cn(
                "p-4 rounded-lg border transition-all duration-300 cursor-pointer",
                "animate-slide-in-right",
                styles.bg,
                styles.border,
                styles.glow,
                signal.severity === "critical" && !hasResponded && "animate-pulse",
                hasResponded && "opacity-60",
                isResponding && "ring-2 ring-energy-cyan",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => !isResponding && !hasResponded && setSelectedSignal(signal)}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "p-2 rounded-lg bg-background/50 relative",
                    styles.icon,
                    signal.severity === "critical" && !hasResponded && "animate-bounce",
                  )}
                >
                  {isResponding ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : hasResponded ? (
                    <Check className="w-4 h-4 text-energy-green" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  {signal.severity === "critical" && !hasResponded && (
                    <span className="absolute inset-0 rounded-lg bg-energy-red/30 animate-ripple" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm capitalize">
                        {t('grid.ui.signalType', { type: t(`grid.types.${signal.type}`) })}
                      </span>
                      {hasResponded ? (
                        <Badge className="bg-energy-green/10 text-energy-green border-energy-green/30 text-xs">
                          {t('grid.ui.responded')}
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs capitalize",
                            signal.severity === "critical" && "border-energy-red text-energy-red animate-pulse",
                            signal.severity === "warning" && "border-energy-yellow text-energy-yellow",
                            signal.severity === "info" && "border-energy-cyan text-energy-cyan",
                          )}
                        >
                          {t(`grid.severity.${signal.severity}`)}
                        </Badge>
                      )}
                    </div>
                    {signal.priceMultiplier && (
                      <Badge className="bg-energy-red text-primary-foreground font-mono animate-pulse">
                        {signal.priceMultiplier}x {t('grid.ui.priceMultiplier')}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{t(signal.message)}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="font-mono">{getTimeRemaining(signal.expiresAt)}</span>
                    </div>

                    {!hasResponded && !isResponding && (
                      <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs hover:bg-energy-green/10 hover:text-energy-green"
                          onClick={() => handleRespond(signal)}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          {t('grid.ui.respond')}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => handleDismiss(signal)}>
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}

      <Dialog open={!!selectedSignal} onOpenChange={() => setSelectedSignal(null)}>
        <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="capitalize">
                      {t('grid.ui.signalType', { type: t(`grid.types.${selectedSignal?.type}`) })} {t('grid.ui.signalDetails')}
                    </DialogTitle>
                    <DialogDescription>{selectedSignal && t(selectedSignal.message)}</DialogDescription>
                  </DialogHeader>
                  {selectedSignal && (
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">{t('grid.ui.severityLabel')}</p>
                          <p className="font-medium capitalize">{t(`grid.severity.${selectedSignal.severity}`)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('grid.ui.timeRemaining')}</p>
                          <p className="font-medium font-mono">{getTimeRemaining(selectedSignal.expiresAt)}</p>
                        </div>
                        {selectedSignal.priceMultiplier && (
                          <div>
                            <p className="text-muted-foreground">{t('grid.ui.priceMultiplier')}</p>
                            <p className="font-medium text-energy-red">{selectedSignal.priceMultiplier}x</p>
                          </div>
                        )}
              </div>

              <div className="p-3 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
                <p className="font-medium text-foreground mb-1">{t('grid.ui.recommendedActions')}:</p>
                <ul className="list-disc list-inside space-y-1">
                  {selectedSignal.type && (
                    <>
                      <li>{t(`grid.actions.${selectedSignal.type}.1`)}</li>
                      <li>{t(`grid.actions.${selectedSignal.type}.2`)}</li>
                      <li>{t(`grid.actions.${selectedSignal.type}.3`)}</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedSignal(null)}>
              {t('common.cancel')}
            </Button>
            <Button variant="outline" onClick={() => selectedSignal && handleDismiss(selectedSignal)}>
              <X className="w-4 h-4 mr-2" />
              {t('grid.ui.dismiss')}
            </Button>
            <Button onClick={() => selectedSignal && handleRespond(selectedSignal)}>
              <Play className="w-4 h-4 mr-2" />
              {t('grid.ui.executeResponse')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
