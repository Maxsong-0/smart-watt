"use client"

import { useTranslation } from "react-i18next"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { PredictionChart } from "@/components/predictions/prediction-chart"
import { WeeklyForecast } from "@/components/predictions/weekly-forecast"
import { OptimizationSuggestions } from "@/components/predictions/optimization-suggestions"
import { ModelMetrics } from "@/components/predictions/model-metrics"
import { AuthGuard } from "@/components/auth/auth-guard"
import { Brain, Target, TrendingDown, Zap } from "lucide-react"

export default function PredictionsPage() {
  const { t } = useTranslation()

  return (
    <AuthGuard>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={t('predictions.title')} subtitle={t('predictions.subtitle')} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title={t('predictions.stats.accuracy')}
              value="96.8"
              unit={t('common.units.percentage')}
              change={1.2}
              changeLabel={t('predictions.stats.vsLastWeek')}
              variant="success"
              icon={<Target className="w-5 h-5" />}
            />
            <StatCard
              title={t('predictions.stats.peakForecast')}
              value="1,456"
              unit={t('common.units.kw')}
              changeLabel={t('predictions.stats.todayWindow')}
              icon={<Zap className="w-5 h-5" />}
            />
            <StatCard
              title={t('predictions.stats.potentialSavings')}
              value={`${t('common.units.currency')}730`}
              unit={t('predictions.ui.perDay')}
              change={15}
              changeLabel={t('predictions.stats.ifOptimized')}
              variant="success"
              icon={<TrendingDown className="w-5 h-5" />}
            />
            <StatCard title={t('predictions.stats.activeModels')} value="3" changeLabel={t('predictions.stats.primaryModel')} icon={<Brain className="w-5 h-5" />} />
          </div>

          {/* Main Prediction Chart */}
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{t('predictions.chart.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('predictions.chart.description')}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-chart-2 rounded" />
                  <span className="text-muted-foreground">{t('predictions.chart.legendActual')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-chart-1 rounded" />
                  <span className="text-muted-foreground">{t('predictions.chart.legendPredicted')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-3 bg-chart-1/20 rounded" />
                  <span className="text-muted-foreground">{t('predictions.chart.legendCI')}</span>
                </div>
              </div>
            </div>
            <PredictionChart />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Forecast */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('predictions.weekly.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('predictions.weekly.description')}</p>
              </div>
              <WeeklyForecast />
              <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-muted rounded" />
                  <span className="text-muted-foreground">{t('predictions.weekly.lastWeek')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-chart-1 rounded" />
                  <span className="text-muted-foreground">{t('predictions.weekly.predicted')}</span>
                </div>
              </div>
            </div>

            {/* AI Optimization Suggestions */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('predictions.sections.optimizationsTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('predictions.sections.optimizationsDesc')}</p>
              </div>
              <OptimizationSuggestions />
            </div>

            {/* Model Performance */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">{t('predictions.models.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('predictions.models.description')}</p>
              </div>
              <ModelMetrics />
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  )
}
