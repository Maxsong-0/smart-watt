"use client"

import { useState } from "react"
import { FileText, FileSpreadsheet, Download, Calendar, Mail, Loader2, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function ExportPanel() {
  const [selectedPeriod, setSelectedPeriod] = useState("ytd")
  const [isExporting, setIsExporting] = useState<string | null>(null)
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)
  const [scheduleEmail, setScheduleEmail] = useState("")
  const [scheduleFrequency, setScheduleFrequency] = useState("monthly")
  const [isScheduling, setIsScheduling] = useState(false)

  const handleExport = async (format: "pdf" | "excel" | "csv") => {
    setIsExporting(format)
    toast.info(`Generating ${format.toUpperCase()} report...`, {
      description: `Period: ${getPeriodLabel(selectedPeriod)}`,
    })

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsExporting(null)
    toast.success(`${format.toUpperCase()} report generated`, {
      description: "Download will start automatically",
      action: {
        label: "Open",
        onClick: () => toast.info("Opening file..."),
      },
    })
  }

  const handleScheduleReport = async () => {
    if (!scheduleEmail) {
      toast.error("Please enter an email address")
      return
    }

    setIsScheduling(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Report scheduled successfully", {
      description: `${scheduleFrequency.charAt(0).toUpperCase() + scheduleFrequency.slice(1)} reports will be sent to ${scheduleEmail}`,
    })

    setIsScheduling(false)
    setIsScheduleDialogOpen(false)
    setScheduleEmail("")
  }

  const getPeriodLabel = (period: string) => {
    switch (period) {
      case "month":
        return "This Month"
      case "quarter":
        return "This Quarter"
      case "ytd":
        return "Year to Date"
      case "custom":
        return "Custom Range"
      default:
        return period
    }
  }

  return (
    <div className="space-y-4">
      {/* Date Range */}
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Report Period</label>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-full">
            <Calendar className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start gap-2 bg-transparent transition-all",
            isExporting === "pdf" && "border-energy-red",
          )}
          onClick={() => handleExport("pdf")}
          disabled={!!isExporting}
        >
          {isExporting === "pdf" ? (
            <Loader2 className="w-4 h-4 text-energy-red animate-spin" />
          ) : (
            <FileText className="w-4 h-4 text-energy-red" />
          )}
          {isExporting === "pdf" ? "Generating PDF..." : "Export as PDF"}
        </Button>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start gap-2 bg-transparent transition-all",
            isExporting === "excel" && "border-energy-green",
          )}
          onClick={() => handleExport("excel")}
          disabled={!!isExporting}
        >
          {isExporting === "excel" ? (
            <Loader2 className="w-4 h-4 text-energy-green animate-spin" />
          ) : (
            <FileSpreadsheet className="w-4 h-4 text-energy-green" />
          )}
          {isExporting === "excel" ? "Generating Excel..." : "Export as Excel"}
        </Button>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start gap-2 bg-transparent transition-all",
            isExporting === "csv" && "border-energy-cyan",
          )}
          onClick={() => handleExport("csv")}
          disabled={!!isExporting}
        >
          {isExporting === "csv" ? (
            <Loader2 className="w-4 h-4 text-energy-cyan animate-spin" />
          ) : (
            <Download className="w-4 h-4 text-energy-cyan" />
          )}
          {isExporting === "csv" ? "Generating CSV..." : "Download Raw Data"}
        </Button>
      </div>

      <div className="pt-3 border-t border-border">
        <Button className="w-full gap-2" onClick={() => setIsScheduleDialogOpen(true)}>
          <Mail className="w-4 h-4" />
          Schedule Monthly Report
        </Button>
      </div>

      <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule Automatic Reports</DialogTitle>
            <DialogDescription>Set up automatic report delivery to your email.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={scheduleEmail}
                onChange={(e) => setScheduleEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Select value={scheduleFrequency} onValueChange={setScheduleFrequency}>
                <SelectTrigger>
                  <Clock className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
              Reports will include: Energy consumption summary, cost analysis, savings breakdown, and optimization
              recommendations.
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsScheduleDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleScheduleReport} disabled={isScheduling}>
              {isScheduling ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Scheduling...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Schedule Reports
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
