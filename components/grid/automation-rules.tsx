"use client"

import { useState } from "react"
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
          toast.success(newEnabled ? "Rule activated" : "Rule deactivated", {
            description: r.name,
          })
          return { ...r, enabled: newEnabled }
        }
        return r
      }),
    )
  }

  const handleSaveRule = async () => {
    if (!newRule.name || !newRule.action) {
      toast.error("Please fill in all fields")
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
      toast.success("Rule updated successfully")
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
      toast.success("Rule created successfully", {
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
    toast.success("Rule deleted", {
      description: rule?.name,
    })
  }

  const formatTime = (date?: Date) => {
    if (!date) return "Never"
    const diff = Date.now() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)
    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    return "Just now"
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
              <span className="font-medium text-sm">{rule.name}</span>
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
              <span className="text-muted-foreground w-14">Trigger:</span>
              <span className="text-foreground font-mono bg-secondary/50 px-1.5 py-0.5 rounded">{rule.trigger}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground w-14">Action:</span>
              <span className="text-foreground">{rule.action}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Last: {formatTime(rule.lastTriggered)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Hash className="w-3 h-3" />
              <span>{rule.executionCount} executions</span>
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
        Add Automation Rule
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingRule ? "Edit Automation Rule" : "New Automation Rule"}</DialogTitle>
            <DialogDescription>
              {editingRule
                ? "Modify the automation rule settings."
                : "Create a new automation rule to respond to grid events."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="rule-name">Rule Name</Label>
              <Input
                id="rule-name"
                placeholder="e.g., Peak Demand Response"
                value={newRule.name}
                onChange={(e) => setNewRule((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trigger">Trigger Event</Label>
              <Select
                value={newRule.trigger}
                onValueChange={(value) => setNewRule((prev) => ({ ...prev, trigger: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DR_SIGNAL_RECEIVED">DR Signal Received</SelectItem>
                  <SelectItem value="PRICE_ABOVE_THRESHOLD">Price Above Threshold</SelectItem>
                  <SelectItem value="PEAK_DEMAND_ALERT">Peak Demand Alert</SelectItem>
                  <SelectItem value="SCHEDULE_TIME">Scheduled Time</SelectItem>
                  <SelectItem value="GRID_EMERGENCY">Grid Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="action">Action</Label>
              <Input
                id="action"
                placeholder="e.g., Reduce HVAC by 20% across all buildings"
                value={newRule.action}
                onChange={(e) => setNewRule((prev) => ({ ...prev, action: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveRule} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {editingRule ? "Update" : "Create"}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
