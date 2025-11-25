"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts"
import { generateBuildingHistory } from "@/lib/mock-data"
import { Activity } from "lucide-react"

interface BuildingChartProps {
  buildingId: string
}

export function BuildingChart({ buildingId }: BuildingChartProps) {
  const [data, setData] = useState<ReturnType<typeof generateBuildingHistory>>([])
  const [mounted, setMounted] = useState(false)
  const [animationActive, setAnimationActive] = useState(true)

  useEffect(() => {
    setMounted(true)
    setData(generateBuildingHistory(24))

    const timer = setTimeout(() => setAnimationActive(false), 2000)
    return () => clearTimeout(timer)
  }, [buildingId])

  if (!mounted) return <div className="h-[250px] animate-pulse bg-muted rounded-lg" />

  // Calculate current and peak values
  const currentLoad = data[data.length - 1]?.load || 0
  const peakLoad = Math.max(...data.map((d) => d.load))

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 flex items-center gap-2 text-xs text-muted-foreground z-10">
        <Activity className="w-3 h-3 text-energy-green animate-pulse" />
        <span className="font-mono">Current: {currentLoad} kW</span>
        <span className="text-energy-yellow font-mono">Peak: {peakLoad} kW</span>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="hvacGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lightingGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="otherGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0} />
              </linearGradient>
              <filter id="chartGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
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
              interval={3}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value: number, name: string) => [`${value} kW`, name.charAt(0).toUpperCase() + name.slice(1)]}
            />
            <ReferenceLine y={peakLoad * 0.9} stroke="var(--energy-yellow)" strokeDasharray="4 4" strokeOpacity={0.5} />
            <Area
              type="monotone"
              dataKey="other"
              stackId="1"
              stroke="var(--chart-3)"
              fill="url(#otherGrad)"
              isAnimationActive={animationActive}
              animationDuration={1500}
              animationBegin={0}
            />
            <Area
              type="monotone"
              dataKey="lighting"
              stackId="1"
              stroke="var(--chart-2)"
              fill="url(#lightingGrad)"
              isAnimationActive={animationActive}
              animationDuration={1500}
              animationBegin={300}
            />
            <Area
              type="monotone"
              dataKey="hvac"
              stackId="1"
              stroke="var(--chart-1)"
              fill="url(#hvacGrad)"
              filter="url(#chartGlow)"
              isAnimationActive={animationActive}
              animationDuration={1500}
              animationBegin={600}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
