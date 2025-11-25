"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from "recharts"
import { generateLoadBreakdown } from "@/lib/mock-data"

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill="var(--foreground)" className="text-sm font-bold">
        {payload.name}
      </text>
      <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill="var(--muted-foreground)" className="text-xs">
        {value}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        style={{
          filter: "drop-shadow(0 0 8px currentColor)",
        }}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 12}
        fill={fill}
      />
    </g>
  )
}

export function LoadBreakdown() {
  const [data, setData] = useState<ReturnType<typeof generateLoadBreakdown>>([])
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    setData(generateLoadBreakdown())
  }, [])

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  if (!mounted) return <div className="h-[200px] animate-pulse bg-muted rounded-lg" />

  return (
    <div className="flex items-center gap-4">
      <div className="w-[180px] h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={onPieEnter}
              animationBegin={0}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} style={{ cursor: "pointer" }} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value}%`, "Share"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1 space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 cursor-pointer ${
              activeIndex === index ? "bg-secondary" : "hover:bg-secondary/50"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm transition-transform duration-300"
                style={{
                  backgroundColor: item.color,
                  transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                  boxShadow: activeIndex === index ? `0 0 8px ${item.color}` : "none",
                }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span
              className={`text-sm font-medium font-mono transition-colors duration-300 ${
                activeIndex === index ? "text-foreground" : ""
              }`}
            >
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
