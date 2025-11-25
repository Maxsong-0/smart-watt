"use client"

import { useEffect, useState } from "react"
import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const monthlySavingsData = [
  { month: "Jan", actual: 5200, projected: 5000, cumulative: 5200 },
  { month: "Feb", actual: 6100, projected: 5500, cumulative: 11300 },
  { month: "Mar", actual: 7200, projected: 6000, cumulative: 18500 },
  { month: "Apr", actual: 7800, projected: 6500, cumulative: 26300 },
  { month: "May", actual: 8500, projected: 7000, cumulative: 34800 },
  { month: "Jun", actual: 9200, projected: 7500, cumulative: 44000 },
  { month: "Jul", actual: 10100, projected: 8000, cumulative: 54100 },
  { month: "Aug", actual: 9800, projected: 8500, cumulative: 63900 },
  { month: "Sep", actual: 8900, projected: 8000, cumulative: 72800 },
  { month: "Oct", actual: 7500, projected: 7000, cumulative: 80300 },
  { month: "Nov", actual: 6800, projected: 6500, cumulative: 87100 },
  { month: "Dec", actual: null, projected: 6000, cumulative: null },
]

export function SavingsChart() {
  const [mounted, setMounted] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setAnimationComplete(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return <div className="h-[300px] animate-pulse bg-muted rounded-lg" />

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={monthlySavingsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            stroke="var(--muted-foreground)"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--muted-foreground)"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            formatter={(value: number, name: string) => [
              value ? `$${value.toLocaleString()}` : "N/A",
              name === "actual" ? "Actual Savings" : name === "projected" ? "Projected" : "Cumulative",
            ]}
          />
          <Bar
            yAxisId="left"
            dataKey="actual"
            fill="var(--chart-1)"
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
            animationBegin={0}
          />
          <Bar
            yAxisId="left"
            dataKey="projected"
            fill="var(--chart-2)"
            radius={[4, 4, 0, 0]}
            opacity={0.5}
            animationDuration={1500}
            animationBegin={300}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="cumulative"
            stroke="var(--energy-cyan)"
            strokeWidth={2}
            dot={{ fill: "var(--energy-cyan)", strokeWidth: 0, r: 4 }}
            animationDuration={2000}
            animationBegin={500}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
