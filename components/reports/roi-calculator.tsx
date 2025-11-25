"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, Clock, Percent } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function ROICalculator() {
  const [investment, setInvestment] = useState(150000)
  const [annualSavings, setAnnualSavings] = useState(65000)

  const paybackYears = investment / annualSavings
  const roi5Year = ((annualSavings * 5 - investment) / investment) * 100
  const npv = annualSavings * 5 * 0.85 - investment // Simplified NPV with 15% discount

  return (
    <div className="space-y-6">
      {/* Investment Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Initial Investment</span>
          <span className="text-sm font-medium">${investment.toLocaleString()}</span>
        </div>
        <Slider
          value={[investment]}
          onValueChange={([v]) => setInvestment(v)}
          min={50000}
          max={500000}
          step={10000}
          className="w-full"
        />
      </div>

      {/* Savings Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Annual Savings</span>
          <span className="text-sm font-medium">${annualSavings.toLocaleString()}</span>
        </div>
        <Slider
          value={[annualSavings]}
          onValueChange={([v]) => setAnnualSavings(v)}
          min={10000}
          max={200000}
          step={5000}
          className="w-full"
        />
      </div>

      {/* Results */}
      <div className="pt-4 border-t border-border space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-energy-cyan" />
            <span className="text-sm">Payback Period</span>
          </div>
          <span className="font-bold text-energy-cyan">{paybackYears.toFixed(1)} years</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <Percent className="w-4 h-4 text-energy-green" />
            <span className="text-sm">5-Year ROI</span>
          </div>
          <span className="font-bold text-energy-green">{roi5Year.toFixed(0)}%</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-chart-3" />
            <span className="text-sm">5-Year NPV</span>
          </div>
          <span className="font-bold text-chart-3">${Math.round(npv).toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-energy-green/10 border border-energy-green/20">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-energy-green" />
            <span className="text-sm font-medium">Total 5-Year Savings</span>
          </div>
          <span className="font-bold text-energy-green">${(annualSavings * 5).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
