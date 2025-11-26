"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()
  const [selectedPeriod, setSelectedPeriod] = useState("ytd")
  const [isExporting, setIsExporting] = useState<string | null>(null)
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false)
  const [scheduleEmail, setScheduleEmail] = useState("")
  const [scheduleFrequency, setScheduleFrequency] = useState("monthly")
  const [isScheduling, setIsScheduling] = useState(false)

  const getPeriodLabel = (period: string) => {
    return t(`reports.export.periods.${period}`)
  }

  const handleExport = async (format: "pdf" | "excel" | "csv") => {
    setIsExporting(format)
    toast.info(t('reports.export.generating', { format: format.toUpperCase() }), {
      description: `${t('reports.export.reportPeriod')}: ${getPeriodLabel(selectedPeriod)}`,
    })

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsExporting(null)
    toast.success(t('reports.export.generated', { format: format.toUpperCase() }), {
      description: t('reports.export.downloadStart'),
      action: {
        label: t('reports.export.open'),
        onClick: () => toast.info(t('reports.export.opening')),
      },
    })
  }

  const handleScheduleReport = async () => {
    if (!scheduleEmail) {
      toast.error(t('reports.export.enterEmail'))
      return
    }

    setIsScheduling(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success(t('reports.export.scheduledSuccess'), {
      description: t('reports.export.scheduledDesc', { frequency: t(`reports.export.frequencies.${scheduleFrequency}`), email: scheduleEmail }),
    })

    setIsScheduling(false)
    setIsScheduleDialogOpen(false)
    setScheduleEmail("")
  }

  return (
    <div className="space-y-4">
      {/* Date Range */}
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">{t('reports.export.reportPeriod')}</label>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-full">
            <Calendar className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">{t('reports.export.periods.month')}</SelectItem>
            <SelectItem value="quarter">{t('reports.export.periods.quarter')}</SelectItem>
            <SelectItem value="ytd">{t('reports.export.periods.ytd')}</SelectItem>
            <SelectItem value="custom">{t('reports.export.periods.custom')}</SelectItem>
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
          {isExporting === "pdf" ? t('reports.export.generating', { format: 'PDF' }) : t('reports.export.exportPdf')}
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
          {isExporting === "excel" ? t('reports.export.generating', { format: 'Excel' }) : t('reports.export.exportExcel')}
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
          {isExporting === "csv" ? t('reports.export.generating', { format: 'CSV' }) : t('reports.export.downloadRaw')}
        </Button>
      </div>

      <div className="pt-3 border-t border-border">
        <Button className="w-full gap-2" onClick={() => setIsScheduleDialogOpen(true)}>
          <Mail className="w-4 h-4" />
          {t('reports.export.scheduleMonthly')}
        </Button>
      </div>

      <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('reports.export.scheduleTitle')}</DialogTitle>
            <DialogDescription>{t('reports.export.scheduleDesc')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('reports.export.emailAddress')}</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={scheduleEmail}
                onChange={(e) => setScheduleEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequency">{t('reports.export.frequency')}</Label>
              <Select value={scheduleFrequency} onValueChange={setScheduleFrequency}>
                <SelectTrigger>
                  <Clock className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">{t('reports.export.frequencies.weekly')}</SelectItem>
                  <SelectItem value="biweekly">{t('reports.export.frequencies.biweekly')}</SelectItem>
                  <SelectItem value="monthly">{t('reports.export.frequencies.monthly')}</SelectItem>
                  <SelectItem value="quarterly">{t('reports.export.frequencies.quarterly')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
              {t('reports.export.reportIncludes')}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsScheduleDialogOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleScheduleReport} disabled={isScheduling}>
              {isScheduling ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('reports.export.scheduling')}
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {t('reports.export.schedule')}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}