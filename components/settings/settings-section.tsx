'use client'

import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface SettingsSectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function SettingsSection({ title, description, children, className }: SettingsSectionProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6", className)}>
      <div className="mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

interface SettingsItemProps {
  label: string
  description?: string
  children: ReactNode
}

export function SettingsItem({ label, description, children }: SettingsItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="space-y-0.5">
        <div className="text-sm font-medium">{label}</div>
        {description && <div className="text-xs text-muted-foreground">{description}</div>}
      </div>
      <div>{children}</div>
    </div>
  )
}
