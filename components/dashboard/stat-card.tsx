"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  unit?: string
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  variant?: "default" | "success" | "warning" | "danger"
  className?: string
}

function AnimatedCounter({ value, duration = 1000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [value, duration])

  return <>{displayValue.toLocaleString()}</>
}

export function StatCard({
  title,
  value,
  unit,
  change,
  changeLabel,
  icon,
  variant = "default",
  className,
}: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const variantStyles = {
    default: "border-border",
    success: "border-energy-green/30 bg-energy-green/5",
    warning: "border-energy-yellow/30 bg-energy-yellow/5",
    danger: "border-energy-red/30 bg-energy-red/5",
  }

  const glowStyles = {
    default: "",
    success: "hover:shadow-[0_0_20px_var(--glow-green)]",
    warning: "hover:shadow-[0_0_20px_var(--glow-yellow)]",
    danger: "hover:shadow-[0_0_20px_rgba(255,100,100,0.3)]",
  }

  const getTrendIcon = () => {
    if (change === undefined) return null
    if (change > 0) return <TrendingUp className="w-3 h-3" />
    if (change < 0) return <TrendingDown className="w-3 h-3" />
    return <Minus className="w-3 h-3" />
  }

  const getTrendColor = () => {
    if (change === undefined) return ""
    if (change > 0) return "text-energy-green"
    if (change < 0) return "text-energy-red"
    return "text-muted-foreground"
  }

  const numericValue = typeof value === "string" ? Number.parseFloat(value.replace(/[^0-9.-]/g, "")) : value
  const isNumeric = !isNaN(numericValue) && typeof value === "number"

  return (
    <div
      className={cn(
        "p-4 rounded-lg border bg-card transition-all duration-300",
        "hover:border-primary/30 card-hover",
        variantStyles[variant],
        glowStyles[variant],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">
              {isNumeric ? <AnimatedCounter value={numericValue} /> : value}
            </span>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
        </div>
        {icon && (
          <div
            className={cn(
              "p-2 rounded-lg bg-primary/10 text-primary transition-all duration-300",
              variant === "success" && "bg-energy-green/10 text-energy-green",
              variant === "warning" && "bg-energy-yellow/10 text-energy-yellow animate-pulse",
              variant === "danger" && "bg-energy-red/10 text-energy-red animate-pulse",
            )}
          >
            {icon}
          </div>
        )}
      </div>

      {(change !== undefined || changeLabel) && (
        <div
          className={cn("flex items-center gap-1 mt-2 text-xs animate-slide-in-up", getTrendColor())}
          style={{ animationDelay: "0.3s" }}
        >
          {getTrendIcon()}
          {change !== undefined && <span>{Math.abs(change)}%</span>}
          {changeLabel && <span className="text-muted-foreground ml-1">{changeLabel}</span>}
        </div>
      )}
    </div>
  )
}
