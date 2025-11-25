"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { useRole } from "@/lib/role-context"
import { useAuth } from "@/lib/auth-context"
import {
  LayoutDashboard,
  Brain,
  Zap,
  Building2,
  Settings,
  FileBarChart,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings2,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type UserRole = "facility-manager" | "utility-rep"

interface NavItem {
  titleKey: string
  href: string
  icon: React.ElementType
  roles: UserRole[]
}

const navItems: NavItem[] = [
  { titleKey: "nav.overview", href: "/", icon: LayoutDashboard, roles: ["facility-manager", "utility-rep"] },
  { titleKey: "nav.predictions", href: "/predictions", icon: Brain, roles: ["facility-manager", "utility-rep"] },
  { titleKey: "nav.grid", href: "/grid", icon: Zap, roles: ["facility-manager", "utility-rep"] },
  { titleKey: "nav.buildings", href: "/buildings", icon: Building2, roles: ["facility-manager"] },
  { titleKey: "nav.config", href: "/config", icon: Settings, roles: ["facility-manager"] },
  { titleKey: "nav.reports", href: "/reports", icon: FileBarChart, roles: ["facility-manager", "utility-rep"] },
  { titleKey: "nav.settings", href: "/settings", icon: Settings2, roles: ["facility-manager", "utility-rep"] },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { role } = useRole()
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const { t } = useTranslation()

  const filteredNavItems = navItems.filter((item) => item.roles.includes(role))

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "hidden md:flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
          collapsed ? "w-16" : "w-64",
        )}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && <span className="font-semibold text-lg text-sidebar-foreground">Smart Watt</span>}
          </div>
        </div>

        {/* User Info */}
        <div className={cn("px-3 py-4 border-b border-sidebar-border", collapsed && "px-2")}>
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  {user?.name || t('auth.guest')}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {role === "facility-manager" ? t('roles.facilityManager') : t('roles.utilityRep')}
                </p>
              </div>
            </div>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-full flex justify-center">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                {user?.name || t('auth.guest')} ({role === "facility-manager" ? t('roles.facilityManager') : t('roles.utilityRep')})
              </TooltipContent>
            </Tooltip>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {filteredNavItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            if (collapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-center h-10 rounded-lg transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-primary"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{t(item.titleKey)}</TooltipContent>
                </Tooltip>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 h-10 rounded-lg transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{t(item.titleKey)}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-3 border-t border-sidebar-border space-y-2">
          {/* Logout Button */}
          {!collapsed ? (
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={logout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('auth.logout')}
            </Button>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-full text-muted-foreground hover:text-foreground"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">{t('auth.logout')}</TooltipContent>
            </Tooltip>
          )}

          {/* Collapse Toggle */}
          <Button variant="ghost" size="sm" className="w-full justify-center" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  )
}
