"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useRole } from "@/lib/role-context"
import {
  LayoutDashboard,
  Brain,
  Zap,
  Building2,
  Settings,
  FileBarChart,
  ChevronLeft,
  ChevronRight,
  User,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type UserRole = "facility-manager" | "utility-rep"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  roles: UserRole[]
}

const navItems: NavItem[] = [
  { title: "Overview", href: "/", icon: LayoutDashboard, roles: ["facility-manager", "utility-rep"] },
  { title: "AI Predictions", href: "/predictions", icon: Brain, roles: ["facility-manager", "utility-rep"] },
  { title: "Grid Interaction", href: "/grid", icon: Zap, roles: ["facility-manager", "utility-rep"] },
  { title: "Buildings", href: "/buildings", icon: Building2, roles: ["facility-manager"] },
  { title: "Configuration", href: "/config", icon: Settings, roles: ["facility-manager"] },
  { title: "Reports", href: "/reports", icon: FileBarChart, roles: ["facility-manager", "utility-rep"] },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { role, setRole } = useRole()
  const pathname = usePathname()

  const filteredNavItems = navItems.filter((item) => item.roles.includes(role))

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
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

        {/* Role Switcher */}
        <div className={cn("px-3 py-4 border-b border-sidebar-border", collapsed && "px-2")}>
          {!collapsed ? (
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Role</span>
              <div className="flex gap-1">
                <Button
                  variant={role === "facility-manager" ? "default" : "ghost"}
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => setRole("facility-manager")}
                >
                  <User className="w-3 h-3 mr-1" />
                  Bob
                </Button>
                <Button
                  variant={role === "utility-rep" ? "default" : "ghost"}
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => setRole("utility-rep")}
                >
                  <Users className="w-3 h-3 mr-1" />
                  Alice
                </Button>
              </div>
            </div>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-full"
                  onClick={() => setRole(role === "facility-manager" ? "utility-rep" : "facility-manager")}
                >
                  {role === "facility-manager" ? <User className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                {role === "facility-manager" ? "Bob (Facility Manager)" : "Alice (Utility Rep)"}
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
                  <TooltipContent side="right">{item.title}</TooltipContent>
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
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-3 border-t border-sidebar-border">
          <Button variant="ghost" size="sm" className="w-full justify-center" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  )
}
