"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  Line,
  ComposedChart,
} from "recharts"
import { generate24hPrediction, type PredictionData } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp } from "lucide-react"

export function PredictionChart() {
  const { t, i18n } = useTranslation()
  const [data, setData] = useState<PredictionData[]>([])
  const [mounted, setMounted] = useState(false)
  const [animationActive, setAnimationActive] = useState(true)

  useEffect(() => {
    setMounted(true)
    setData(generate24hPrediction())

    const timer = setTimeout(() => setAnimationActive(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return <div className="h-[350px] animate-pulse bg-muted rounded-lg" />

  const chartData = data.map((d) => ({
    time: d.timestamp.toLocaleTimeString(i18n.language || "en", { hour: "2-digit", minute: "2-digit" }),
    hour: d.timestamp.getHours(),
    actual: d.actual,
    predicted: d.predicted,
    upper: d.confidence.upper,
    lower: d.confidence.lower,
    isFuture: d.actual === null,
  }))

  const nowIndex = chartData.findIndex((d) => d.isFuture)
  const peakPredicted = Math.max(...chartData.map((d) => d.predicted))
  const peakTime = chartData.find((d) => d.predicted === peakPredicted)?.time

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 flex items-center gap-2 z-10">
        <Badge variant="outline" className="gap-1 bg-card/80 backdrop-blur-sm">
          <Brain className="w-3 h-3 text-energy-cyan" />
          <span className="text-xs">{t('predictions.chart.modelBadge')}</span>
        </Badge>
        <Badge variant="outline" className="gap-1 bg-card/80 backdrop-blur-sm text-energy-yellow">
          <TrendingUp className="w-3 h-3" />
          <span className="text-xs">
            {t('predictions.chart.peak')}: {peakTime} ({Math.round(peakPredicted)} {t('common.units.kw')})
          </span>
        </Badge>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 30, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="actualPredGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
              <filter id="predictionGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="var(--muted-foreground)"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              interval={2}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              domain={["dataMin - 200", "dataMax + 200"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "var(--foreground)" }}
              formatter={(value: number, name: string) => {
                if (name === "upper" || name === "lower") return null
                return [
                  value ? `${Math.round(value)} ${t('common.units.kw')}` : "-",
                  name === "actual" ? t('predictions.chart.legendActual') : t('predictions.chart.legendPredicted'),
                ]
              }}
            />

            {/* Confidence interval */}
            <Area
              type="monotone"
              dataKey="upper"
              stroke="transparent"
              fill="url(#confidenceGradient)"
              name="upper"
              isAnimationActive={animationActive}
              animationDuration={2000}
            />
            <Area
              type="monotone"
              dataKey="lower"
              stroke="transparent"
              fill="var(--background)"
              name="lower"
              isAnimationActive={animationActive}
              animationDuration={2000}
            />

            {/* Now line */}
            {nowIndex > 0 && (
              <ReferenceLine
                x={chartData[nowIndex]?.time}
                stroke="var(--energy-cyan)"
                strokeWidth={2}
                strokeDasharray="4 4"
                label={{ value: t('predictions.chart.now'), fill: "var(--energy-cyan)", fontSize: 11, position: "top" }}
              />
            )}

            {/* Predicted line with glow */}
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
              name="predicted"
              filter="url(#predictionGlow)"
              isAnimationActive={animationActive}
              animationDuration={2000}
              animationBegin={500}
            />

            {/* Actual line */}
            <Area
              type="monotone"
              dataKey="actual"
              stroke="var(--chart-2)"
              strokeWidth={2}
              fill="url(#actualPredGradient)"
              name="actual"
              connectNulls={false}
              isAnimationActive={animationActive}
              animationDuration={1500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
