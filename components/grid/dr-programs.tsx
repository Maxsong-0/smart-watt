"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { drPrograms, type DRProgram } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Zap, Shield, TrendingUp, Radio, DollarSign, Calendar, Award, CheckCircle2 } from "lucide-react"

const typeIcons: Record<DRProgram["type"], React.ElementType> = {
  capacity: Zap,
  emergency: Shield,
  energy: TrendingUp,
  ancillary: Radio,
}

export function DRPrograms() {
  const [programs, setPrograms] = useState(drPrograms)
  const [mounted, setMounted] = useState(false)
  const [progressVisible, setProgressVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setProgressVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleEnrollment = (id: string) => {
    setPrograms((prev) => prev.map((p) => (p.id === id ? { ...p, enrolled: !p.enrolled } : p)))
  }

  if (!mounted)
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 animate-pulse bg-muted rounded-lg" />
        ))}
      </div>
    )

  return (
    <div className="space-y-4">
      {programs.map((program, index) => {
        const Icon = typeIcons[program.type]
        const commitmentPercent = progressVisible ? (program.currentCommitment / program.maxCommitment) * 100 : 0

        return (
          <div
            key={program.id}
            className={cn(
              "p-4 rounded-lg border transition-all duration-300 animate-slide-in-up",
              program.enrolled
                ? "bg-card border-border hover:border-primary/30 card-hover"
                : "bg-secondary/30 border-border/50 opacity-75",
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2 rounded-lg relative transition-all duration-300",
                    program.enrolled ? "bg-primary/10" : "bg-muted",
                  )}
                >
                  <Icon className={cn("w-4 h-4", program.enrolled ? "text-primary" : "text-muted-foreground")} />
                  {program.enrolled && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-energy-green flex items-center justify-center">
                      <CheckCircle2 className="w-2 h-2 text-primary-foreground" />
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{program.name}</h4>
                  <p className="text-xs text-muted-foreground capitalize">{program.type} Program</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-xs transition-colors",
                    program.enrolled ? "text-energy-green" : "text-muted-foreground",
                  )}
                >
                  {program.enrolled ? "Enrolled" : "Not Enrolled"}
                </span>
                <Switch checked={program.enrolled} onCheckedChange={() => toggleEnrollment(program.id)} />
              </div>
            </div>

            {program.enrolled && (
              <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Commitment</span>
                    <span className="font-medium font-mono">
                      {program.currentCommitment} / {program.maxCommitment} kW
                    </span>
                  </div>
                  <Progress value={commitmentPercent} className="h-1.5 transition-all duration-1000" />
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-energy-green/5 border border-energy-green/10">
                    <DollarSign className="w-3 h-3 text-energy-green" />
                    <div>
                      <p className="text-muted-foreground">YTD Revenue</p>
                      <p className="font-medium text-energy-green font-mono">${program.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-secondary/50">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Events</p>
                      <p className="font-medium font-mono">{program.events}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-secondary/50">
                    <Award
                      className={cn("w-3 h-3", program.performance >= 90 ? "text-energy-green" : "text-energy-yellow")}
                    />
                    <div>
                      <p className="text-muted-foreground">Performance</p>
                      <p
                        className={cn(
                          "font-medium font-mono",
                          program.performance >= 90 ? "text-energy-green" : "text-energy-yellow",
                        )}
                      >
                        {program.performance}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
