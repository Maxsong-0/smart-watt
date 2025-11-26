"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts"
import { generatePriceHistory } from "@/lib/mock-data"

export function PriceChart() {
  const { t } = useTranslation()
  const [data, setData] = useState<ReturnType<typeof generatePriceHistory>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setData(generatePriceHistory())
  }, [])

  if (!mounted) return <div className="h-[200px] animate-pulse bg-muted rounded-lg" />

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="time"
            stroke="var(--muted-foreground)"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            interval={3}
          />
          <YAxis
            stroke="var(--muted-foreground)"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${t('common.units.currency')}${value}`}
            domain={[0, "dataMax + 0.05"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number) => [`${t('common.units.currency')}${value.toFixed(3)}/kWh`, t('grid.price.tooltipLabel')]}
          />
          <ReferenceLine
            y={0.12}
            stroke="var(--energy-yellow)"
            strokeDasharray="4 4"
            label={{ value: t('grid.price.avgLabel'), fill: "var(--energy-yellow)", fontSize: 9, position: "right" }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="var(--chart-3)"
            strokeWidth={2}
            fill="url(#priceGradient)"
            name="Current Price"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
