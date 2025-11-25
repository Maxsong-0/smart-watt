"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { useRole } from "@/lib/role-context"
import { useAuth } from "@/lib/auth-context"
import { useMobileNav } from "@/lib/mobile-nav-context"
import {
  LayoutDashboard,
  Brain,
  Zap,
  Building2,
  Settings,
  FileBarChart,
  LogOut,
  Settings2,
  User,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

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

export function MobileSidebar() {
  const { role } = useRole()
  const { user, logout } = useAuth()
  const { isOpen, setIsOpen } = useMobileNav()
  const pathname = usePathname()
  const { t } = useTranslation()

  const filteredNavItems = navItems.filter((item) => item.roles.includes(role))

  const handleNavClick = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    setIsOpen(false)
    logout()
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Smart Watt</span>
          </SheetTitle>
        </SheetHeader>

        {/* User Info */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {user?.name || t('auth.guest')}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {role === "facility-manager" ? t('roles.facilityManager') : t('roles.utilityRep')}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {filteredNavItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "flex items-center gap-3 px-3 h-11 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{t(item.titleKey)}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t mt-auto">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            {t('auth.logout')}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
