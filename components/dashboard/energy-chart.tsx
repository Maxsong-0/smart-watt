"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts"
import { generateHourlyData, type EnergyReading } from "@/lib/mock-data"

export function EnergyChart() {
  const [data, setData] = useState<EnergyReading[]>([])
  const [mounted, setMounted] = useState(false)
  const [animationActive, setAnimationActive] = useState(true)

  useEffect(() => {
    setMounted(true)
    setData(generateHourlyData(24))

    // Disable animation after initial render
    const timer = setTimeout(() => setAnimationActive(false), 2000)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)]
        const lastValue = prev[prev.length - 1]?.value || 1000
        const variation = Math.random() * 100 - 50
        newData.push({
          timestamp: new Date(),
          value: Math.round(lastValue + variation),
          predicted: Math.round(lastValue + variation + (Math.random() * 50 - 25)),
        })
        return newData
      })
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!mounted) return <div className="h-[300px] animate-pulse bg-muted rounded-lg" />

  const chartData = data.map((d) => ({
    time: d.timestamp.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    actual: d.value,
    predicted: d.predicted,
  }))

  // Calculate peak and current values
  const currentValue = chartData[chartData.length - 1]?.actual || 0
  const peakValue = Math.max(...chartData.map((d) => d.actual))

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 flex items-center gap-2 text-xs text-muted-foreground z-10">
        <span className="w-2 h-2 rounded-full bg-energy-green animate-pulse" />
        <span>Live: {currentValue.toLocaleString()} kW</span>
        <span className="text-energy-yellow">Peak: {peakValue.toLocaleString()} kW</span>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
              <filter id="glow">
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
              fontSize={11}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              domain={["dataMin - 100", "dataMax + 100"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "var(--foreground)" }}
              formatter={(value: number, name: string) => [
                `${value.toLocaleString()} kW`,
                name === "actual" ? "Actual" : "Predicted",
              ]}
            />
            <ReferenceLine
              y={1200}
              stroke="var(--energy-yellow)"
              strokeDasharray="5 5"
              label={{ value: "Peak Threshold", fill: "var(--energy-yellow)", fontSize: 10 }}
            />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="var(--chart-2)"
              strokeWidth={1}
              strokeDasharray="4 4"
              fill="url(#predictedGradient)"
              name="predicted"
              isAnimationActive={animationActive}
              animationDuration={1500}
              animationBegin={300}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="var(--chart-1)"
              strokeWidth={2}
              fill="url(#actualGradient)"
              name="actual"
              filter="url(#glow)"
              isAnimationActive={animationActive}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
