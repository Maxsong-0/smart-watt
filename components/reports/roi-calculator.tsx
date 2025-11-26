"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { DollarSign, TrendingUp, Clock, Percent } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function ROICalculator() {
  const { t } = useTranslation()
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
          <span className="text-sm text-muted-foreground">{t('reports.roi.initialInvestment')}</span>
          <span className="text-sm font-medium">{t('common.units.currency')}{investment.toLocaleString()}</span>
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
          <span className="text-sm text-muted-foreground">{t('reports.roi.annualSavings')}</span>
          <span className="text-sm font-medium">{t('common.units.currency')}{annualSavings.toLocaleString()}</span>
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
            <span className="text-sm">{t('reports.roi.paybackPeriod')}</span>
          </div>
          <span className="font-bold text-energy-cyan">{paybackYears.toFixed(1)} {t('reports.roi.years')}</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <Percent className="w-4 h-4 text-energy-green" />
            <span className="text-sm">{t('reports.roi.roi5Year')}</span>
          </div>
          <span className="font-bold text-energy-green">{roi5Year.toFixed(0)}{t('common.units.percentage')}</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-chart-3" />
            <span className="text-sm">{t('reports.roi.npv5Year')}</span>
          </div>
          <span className="font-bold text-chart-3">{t('common.units.currency')}{Math.round(npv).toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-energy-green/10 border border-energy-green/20">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-energy-green" />
            <span className="text-sm font-medium">{t('reports.roi.total5YearSavings')}</span>
          </div>
          <span className="font-bold text-energy-green">{t('common.units.currency')}{(annualSavings * 5).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}