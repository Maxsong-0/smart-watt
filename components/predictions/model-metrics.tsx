"use client"

import { useTranslation } from "react-i18next"
import { modelMetrics } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock, Target, TrendingUp } from "lucide-react"

export function ModelMetrics() {
  const { t } = useTranslation()
  const formatTime = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    if (hours < 1) return t('predictions.models.justNow')
    if (hours < 24) return t('predictions.models.hoursAgo', { count: hours })
    return t('predictions.models.daysAgo', { count: Math.floor(hours / 24) })
  }

  return (
    <div className="space-y-3">
      {modelMetrics.map((model, index) => (
        <div
          key={model.name}
          className={cn(
            "p-3 rounded-lg border transition-all",
            index === 0 ? "bg-energy-cyan/5 border-energy-cyan/30" : "bg-card border-border",
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">{model.name}</span>
            </div>
            {index === 0 && <Badge className="bg-energy-cyan text-primary-foreground text-xs">{t('predictions.models.active')}</Badge>}
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-0.5">
                <Target className="w-3 h-3" />
                <span>{t('predictions.models.mape')}</span>
              </div>
              <span className="font-medium">{model.mape}%</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-0.5">
                <TrendingUp className="w-3 h-3" />
                <span>{t('predictions.models.accuracy')}</span>
              </div>
              <span className="font-medium text-energy-green">{model.accuracy}%</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-0.5">
                <Clock className="w-3 h-3" />
                <span>{t('predictions.models.trained')}</span>
              </div>
              <span className="font-medium">{formatTime(model.lastTrained)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
