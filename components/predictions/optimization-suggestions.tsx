"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { optimizationSuggestions, type OptimizationSuggestion } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Thermometer,
  Lightbulb,
  Clock,
  ArrowRightLeft,
  ChevronRight,
  Check,
  Sparkles,
  Brain,
  Loader2,
} from "lucide-react"

const categoryIcons: Record<OptimizationSuggestion["category"], React.ElementType> = {
  hvac: Thermometer,
  lighting: Lightbulb,
  scheduling: Clock,
  "load-shift": ArrowRightLeft,
}

const priorityStyles: Record<OptimizationSuggestion["priority"], string> = {
  high: "bg-energy-red/10 text-energy-red border-energy-red/30",
  medium: "bg-energy-yellow/10 text-energy-yellow border-energy-yellow/30",
  low: "bg-muted text-muted-foreground border-border",
}

export function OptimizationSuggestions() {
  const [appliedIds, setAppliedIds] = useState<Set<string>>(new Set())
  const [applyingId, setApplyingId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleApply = async (id: string) => {
    setApplyingId(id)
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setAppliedIds((prev) => new Set([...prev, id]))
    setApplyingId(null)
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
  }

  if (!mounted)
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 animate-pulse bg-muted rounded-lg" />
        ))}
      </div>
    )

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground pb-2 border-b border-border">
        <Brain className="w-3 h-3 text-energy-cyan animate-pulse" />
        <span>AI analyzing {optimizationSuggestions.length} optimization opportunities</span>
      </div>

      {optimizationSuggestions.map((suggestion, index) => {
        const Icon = categoryIcons[suggestion.category]
        const isApplied = appliedIds.has(suggestion.id)
        const isApplying = applyingId === suggestion.id

        return (
          <div
            key={suggestion.id}
            className={cn(
              "p-4 rounded-lg border transition-all duration-300 animate-slide-in-up",
              isApplied
                ? "bg-energy-green/5 border-energy-green/30 shadow-[0_0_15px_var(--glow-green)]"
                : "bg-card border-border hover:border-primary/30 card-hover",
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  isApplied ? "bg-energy-green/10" : "bg-secondary",
                )}
              >
                {isApplied ? (
                  <Check className="w-4 h-4 text-energy-green animate-scale-in" />
                ) : isApplying ? (
                  <Loader2 className="w-4 h-4 text-energy-cyan animate-spin" />
                ) : (
                  <Icon className="w-4 h-4 text-muted-foreground" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm truncate">{suggestion.title}</h4>
                  <Badge variant="outline" className={cn("text-xs", priorityStyles[suggestion.priority])}>
                    {suggestion.priority}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{suggestion.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-xs">
                      <span className="text-muted-foreground">Savings: </span>
                      <span className="font-medium text-energy-green font-mono">
                        ${suggestion.potentialSavings}/day
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-muted-foreground">Confidence:</span>
                      <Progress value={suggestion.confidence} className="w-16 h-1.5" />
                      <span className="font-medium font-mono">{suggestion.confidence}%</span>
                    </div>
                  </div>

                  {!isApplied && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className={cn("text-xs h-7 transition-all", isApplying && "opacity-50 cursor-not-allowed")}
                      onClick={() => handleApply(suggestion.id)}
                      disabled={isApplying}
                    >
                      {isApplying ? "Applying..." : "Apply"}
                      {!isApplying && <ChevronRight className="w-3 h-3 ml-1" />}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="pt-2 text-center">
        <Button
          variant="outline"
          size="sm"
          className={cn("text-xs bg-transparent transition-all", isGenerating && "border-energy-cyan text-energy-cyan")}
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-3 h-3 mr-1.5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-3 h-3 mr-1.5" />
              Generate More Suggestions
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
