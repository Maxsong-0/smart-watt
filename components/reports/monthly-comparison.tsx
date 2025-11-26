"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, ReferenceLine } from "recharts"

const comparisonData = [
  { month: "Jan", baseline: 42000, current: 34500, savings: 7500 },
  { month: "Feb", baseline: 45000, current: 36200, savings: 8800 },
  { month: "Mar", baseline: 48000, current: 37800, savings: 10200 },
  { month: "Apr", baseline: 44000, current: 35100, savings: 8900 },
  { month: "May", baseline: 52000, current: 40500, savings: 11500 },
  { month: "Jun", baseline: 58000, current: 44200, savings: 13800 },
  { month: "Jul", baseline: 65000, current: 48900, savings: 16100 },
  { month: "Aug", baseline: 62000, current: 47500, savings: 14500 },
  { month: "Sep", baseline: 54000, current: 42800, savings: 11200 },
  { month: "Oct", baseline: 46000, current: 37200, savings: 8800 },
  { month: "Nov", baseline: 43000, current: 35500, savings: 7500 },
  { month: "Dec", baseline: 44000, current: null, savings: null },
]

export function MonthlyComparison() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-[280px] animate-pulse bg-muted rounded-lg" />

  const avgBaseline = comparisonData.reduce((sum, d) => sum + d.baseline, 0) / 12
  const chartData = comparisonData.map((item) => ({
    ...item,
    label: t(`reports.savingsChart.months.${item.month}`),
  }))

  return (
    <div className="space-y-4">
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis
            stroke="var(--muted-foreground)"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${t('common.units.currency')}${value / 1000}k`}
          />
            <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number | null, name: string) => [
              value ? `${t('common.units.currency')}${value.toLocaleString()}` : t('common.na'),
              name === "baseline" ? t('reports.comparison.tooltipBaseline') : t('reports.comparison.tooltipCurrent'),
            ]}
          />
          <ReferenceLine
            y={avgBaseline}
            stroke="var(--energy-yellow)"
            strokeDasharray="5 5"
            label={{ value: t('reports.comparison.averageBaseline'), fill: "var(--energy-yellow)", fontSize: 10 }}
          />
          <Bar dataKey="baseline" fill="var(--muted)" radius={[4, 4, 0, 0]} animationDuration={1200} />
          <Bar dataKey="current" radius={[4, 4, 0, 0]} animationDuration={1200} animationBegin={300}>
            {comparisonData.map((entry, index) => (
              <Cell
                  key={`cell-${index}`}
                  fill={entry.current ? "var(--chart-1)" : "var(--muted)"}
                  opacity={entry.current ? 1 : 0.3}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-muted rounded" />
          <span className="text-muted-foreground">{t('reports.comparison.baseline')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-chart-1 rounded" />
          <span className="text-muted-foreground">{t('reports.comparison.current')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 bg-energy-yellow" style={{ borderStyle: "dashed" }} />
          <span className="text-muted-foreground">{t('reports.comparison.averageBaseline')}</span>
        </div>
      </div>
    </div>
  )
}
