"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { automationRules, type AutomationRule } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play, Clock, Hash, Plus, Loader2, Trash2, Edit2, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export function AutomationRules() {
  const { t } = useTranslation()
  const [rules, setRules] = useState<AutomationRule[]>(automationRules)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingRule, setEditingRule] = useState<AutomationRule | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [newRule, setNewRule] = useState({
    name: "",
    trigger: "DR_SIGNAL_RECEIVED",
    action: "",
  })

  const toggleRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const newEnabled = !r.enabled
          toast.success(newEnabled ? t("grid.automation.ruleActivated") : t("grid.automation.ruleDeactivated"), {
            description: t(r.name),
          })
          return { ...r, enabled: newEnabled }
        }
        return r
      }),
    )
  }

  const handleSaveRule = async () => {
    if (!newRule.name || !newRule.action) {
      toast.error(t("grid.automation.fillRequired"))
      return
    }

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (editingRule) {
      setRules((prev) =>
        prev.map((r) =>
          r.id === editingRule.id ? { ...r, name: newRule.name, trigger: newRule.trigger, action: newRule.action } : r,
        ),
      )
      toast.success(t("common.success"))
    } else {
      const rule: AutomationRule = {
        id: `rule-${Date.now()}`,
        name: newRule.name,
        trigger: newRule.trigger,
        action: newRule.action,
        enabled: true,
        executionCount: 0,
        lastTriggered: undefined,
      }
      setRules((prev) => [...prev, rule])
      toast.success(t("common.success"), {
        description: newRule.name,
      })
    }

    setIsSaving(false)
    setIsDialogOpen(false)
    setEditingRule(null)
    setNewRule({ name: "", trigger: "DR_SIGNAL_RECEIVED", action: "" })
  }

  const handleEditRule = (rule: AutomationRule) => {
    setEditingRule(rule)
    setNewRule({
      name: rule.name,
      trigger: rule.trigger,
      action: rule.action,
    })
    setIsDialogOpen(true)
  }

  const handleDeleteRule = (id: string) => {
    const rule = rules.find((r) => r.id === id)
    setRules((prev) => prev.filter((r) => r.id !== id))
    toast.success(t("grid.automation.ruleDeleted"), {
      description: rule ? t(rule.name) : "",
    })
  }

  const formatTime = (date?: Date) => {
    if (!date) return t("grid.automation.never")
    const diff = Date.now() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)
    if (days > 0) return t("config.ui.ago", { time: `${days}d` })
    if (hours > 0) return t("config.ui.ago", { time: `${hours}${t("config.ui.h")}` })
    return t("predictions.models.justNow")
  }

  return (
    <div className="space-y-3">
      {rules.map((rule) => (
        <div
          key={rule.id}
          className={cn(
            "p-4 rounded-lg border transition-all group",
            rule.enabled
              ? "bg-card border-border hover:border-primary/30"
              : "bg-secondary/30 border-border/50 opacity-60",
          )}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={cn("p-1.5 rounded", rule.enabled ? "bg-energy-green/10" : "bg-muted")}>
                <Play className={cn("w-3 h-3", rule.enabled ? "text-energy-green" : "text-muted-foreground")} />
              </div>
              <span className="font-medium text-sm">{t(rule.name)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleEditRule(rule)}>
                  <Edit2 className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-energy-red hover:text-energy-red"
                  onClick={() => handleDeleteRule(rule.id)}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
              <Switch checked={rule.enabled} onCheckedChange={() => toggleRule(rule.id)} />
            </div>
          </div>

          <div className="space-y-1.5 text-xs mb-3">
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground w-14">{t("grid.automation.trigger")}:</span>
              <span className="text-foreground font-mono bg-secondary/50 px-1.5 py-0.5 rounded">
                {t(`grid.automation.triggers.${rule.trigger}`, { defaultValue: t(rule.trigger) })}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground w-14">{t("grid.automation.action")}:</span>
              <span className="text-foreground">{t(rule.action)}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{t("grid.automation.last")} {formatTime(rule.lastTriggered)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Hash className="w-3 h-3" />
              <span>{rule.executionCount} {t("grid.automation.executions")}</span>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        className="w-full bg-transparent"
        size="sm"
        onClick={() => {
          setEditingRule(null)
          setNewRule({ name: "", trigger: "DR_SIGNAL_RECEIVED", action: "" })
          setIsDialogOpen(true)
        }}
      >
        <Plus className="w-4 h-4 mr-2" />
        {t("grid.automation.addRule")}
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingRule ? t("grid.automation.editRule") : t("grid.automation.newRule")}</DialogTitle>
            <DialogDescription>
              {editingRule ? t("grid.automation.descriptionEdit") : t("grid.automation.descriptionNew")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="rule-name">{t("grid.automation.ruleName")}</Label>
              <Input
                id="rule-name"
                placeholder={t("grid.rules.rule-1.name")}
                value={newRule.name}
                onChange={(e) => setNewRule((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trigger">{t("grid.automation.trigger")}</Label>
              <Select
                value={newRule.trigger}
                onValueChange={(value) => setNewRule((prev) => ({ ...prev, trigger: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DR_SIGNAL_RECEIVED">{t("grid.automation.triggers.DR_SIGNAL_RECEIVED")}</SelectItem>
                  <SelectItem value="PRICE_ABOVE_THRESHOLD">{t("grid.automation.triggers.PRICE_ABOVE_THRESHOLD")}</SelectItem>
                  <SelectItem value="PEAK_DEMAND_ALERT">{t("grid.automation.triggers.PEAK_DEMAND_ALERT")}</SelectItem>
                  <SelectItem value="SCHEDULE_TIME">{t("grid.automation.triggers.SCHEDULE_TIME")}</SelectItem>
                  <SelectItem value="GRID_EMERGENCY">{t("grid.automation.triggers.GRID_EMERGENCY")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="action">{t("grid.automation.action")}</Label>
              <Input
                id="action"
                placeholder={t("grid.rules.rule-1.action")}
                value={newRule.action}
                onChange={(e) => setNewRule((prev) => ({ ...prev, action: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              {t("common.cancel")}
            </Button>
            <Button onClick={handleSaveRule} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t("grid.automation.saving")}
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {editingRule ? t("grid.automation.update") : t("grid.automation.create")}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
