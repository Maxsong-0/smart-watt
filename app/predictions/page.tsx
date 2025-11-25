import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { PredictionChart } from "@/components/predictions/prediction-chart"
import { WeeklyForecast } from "@/components/predictions/weekly-forecast"
import { OptimizationSuggestions } from "@/components/predictions/optimization-suggestions"
import { ModelMetrics } from "@/components/predictions/model-metrics"
import { Brain, Target, TrendingDown, Zap } from "lucide-react"

export default function PredictionsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="AI Prediction Center" subtitle="Machine learning powered energy forecasting" />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Prediction Accuracy"
              value="96.8"
              unit="%"
              change={1.2}
              changeLabel="vs last week"
              variant="success"
              icon={<Target className="w-5 h-5" />}
            />
            <StatCard
              title="Peak Forecast"
              value="1,456"
              unit="kW"
              changeLabel="Today 2-4 PM"
              icon={<Zap className="w-5 h-5" />}
            />
            <StatCard
              title="Potential Savings"
              value="$730"
              unit="/day"
              change={15}
              changeLabel="if optimized"
              variant="success"
              icon={<TrendingDown className="w-5 h-5" />}
            />
            <StatCard title="Active Models" value="3" changeLabel="LSTM primary" icon={<Brain className="w-5 h-5" />} />
          </div>

          {/* Main Prediction Chart */}
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">24-Hour Load Forecast</h3>
                <p className="text-sm text-muted-foreground">
                  Historical data and AI predictions with confidence intervals
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-chart-2 rounded" />
                  <span className="text-muted-foreground">Actual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-chart-1 rounded" />
                  <span className="text-muted-foreground">Predicted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-3 bg-chart-1/20 rounded" />
                  <span className="text-muted-foreground">95% CI</span>
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
                <h3 className="font-semibold">Weekly Forecast</h3>
                <p className="text-sm text-muted-foreground">Daily consumption prediction</p>
              </div>
              <WeeklyForecast />
              <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-muted rounded" />
                  <span className="text-muted-foreground">Last Week</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-chart-1 rounded" />
                  <span className="text-muted-foreground">Predicted</span>
                </div>
              </div>
            </div>

            {/* AI Optimization Suggestions */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">AI Optimization Suggestions</h3>
                <p className="text-sm text-muted-foreground">Smart recommendations to reduce costs</p>
              </div>
              <OptimizationSuggestions />
            </div>

            {/* Model Performance */}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4">
                <h3 className="font-semibold">Model Performance</h3>
                <p className="text-sm text-muted-foreground">Active prediction models</p>
              </div>
              <ModelMetrics />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
