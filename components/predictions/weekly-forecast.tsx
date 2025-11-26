"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { generateWeeklyForecast } from "@/lib/mock-data"

export function WeeklyForecast() {
  const { t } = useTranslation()
  const [data, setData] = useState<ReturnType<typeof generateWeeklyForecast>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setData(generateWeeklyForecast())
  }, [])

  if (!mounted) return <div className="h-[200px] animate-pulse bg-muted rounded-lg" />

  const chartData = data.map((item) => ({
    ...item,
    label: t(`predictions.weekdays.${item.day}`),
  }))

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis
            stroke="var(--muted-foreground)"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number, name: string) => [
              `${value.toLocaleString()} ${t('common.units.kwh')}`,
              name === "lastWeek" ? t('predictions.weekly.lastWeek') : t('predictions.weekly.predicted'),
            ]}
          />
          <Bar dataKey="lastWeek" fill="var(--muted)" radius={[4, 4, 0, 0]} name={t('predictions.weekly.lastWeek')} />
          <Bar dataKey="predicted" fill="var(--chart-1)" radius={[4, 4, 0, 0]} name={t('predictions.weekly.predicted')} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
