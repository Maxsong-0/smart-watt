"use client"

import { useEffect, useMemo, useState } from "react"
import { Bell, Search, RefreshCw, Activity, X, Check, Trash2, Menu } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useMobileNav } from "@/lib/mobile-nav-context"
import { LanguageSwitcher } from "@/components/settings/language-switcher"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { toast } from "sonner"

interface HeaderProps {
  title: string
  subtitle?: string
}

interface Notification {
  id: string
  title: string
  description: string
  time: Date
  read: boolean
  type: "alert" | "info" | "success"
}

export function Header({ title, subtitle }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>("")
  const [dataRate, setDataRate] = useState(0)
  const notificationTemplates = useMemo(
    () => [
      {
        id: "1",
        title: t("header.notificationsData.drEvent.title"),
        description: t("header.notificationsData.drEvent.desc"),
        time: new Date(Date.now() - 1000 * 60 * 5),
        read: false,
        type: "alert" as const,
      },
      {
        id: "2",
        title: t("header.notificationsData.highUsage.title"),
        description: t("header.notificationsData.highUsage.desc"),
        time: new Date(Date.now() - 1000 * 60 * 30),
        read: false,
        type: "alert" as const,
      },
      {
        id: "3",
        title: t("header.notificationsData.optimization.title"),
        description: t("header.notificationsData.optimization.desc"),
        time: new Date(Date.now() - 1000 * 60 * 60),
        read: true,
        type: "success" as const,
      },
    ],
    [t],
  )
  const [notifications, setNotifications] = useState<Notification[]>(notificationTemplates)

  useEffect(() => {
    // Refresh notification text when language changes while preserving state flags
    setNotifications((prev) =>
      prev.map((n) => {
        const template = notificationTemplates.find((tpl) => tpl.id === n.id)
        return template ? { ...n, title: template.title, description: template.description } : n
      }),
    )
  }, [notificationTemplates])
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const searchItems = [
    {
      category: t("header.search.buildings"),
      items: [
        t("buildings.names.eng-1"),
        t("buildings.names.sci-1"),
        t("buildings.names.lib-1"),
        t("buildings.names.res-1"),
        t("buildings.names.admin-1"),
      ],
    },
    {
      category: t("header.search.equipment"),
      items: ["AHU-1", "Chiller-Main", "Boiler-1", "VAV-201", "Meter-Main"],
    },
    {
      category: t("header.search.pages"),
      items: [t("nav.overview"), t("nav.predictions"), t("nav.grid"), t("nav.buildings"), t("nav.config"), t("nav.reports")],
    },
  ]

  // Mobile nav - wrapped in try-catch for when used outside provider
  let mobileNav: { toggle: () => void } | null = null
  try {
    mobileNav = useMobileNav()
  } catch {
    // Not within MobileNavProvider, that's ok
  }

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString(i18n.language || "en", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    const dataInterval = setInterval(() => {
      setDataRate(Math.round(1200 + Math.random() * 400))
    }, 2000)

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      clearInterval(timeInterval)
      clearInterval(dataInterval)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    toast.info(t('common.loading'))
    setTimeout(() => {
      setIsRefreshing(false)
      setDataRate(Math.round(1200 + Math.random() * 400))
      toast.success(t('common.success'))
    }, 1000)
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    toast.success(t('common.success'))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
    toast.success(t('common.success'))
  }

  const formatNotificationTime = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const minutes = Math.floor(diff / (60 * 1000))
    if (minutes < 60) return t('config.ui.ago', { time: `${minutes}${t('config.ui.m')}` })
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return t('config.ui.ago', { time: `${hours}${t('config.ui.h')}` })
    return t('config.ui.ago', { time: `${Math.floor(hours / 24)}d` }) // 'd' might need translation key if we want to be strict
  }

  const handleSearchSelect = (item: string) => {
    setIsSearchOpen(false)
    toast.info(t('header.navigateTitle', { item }), {
      description: t('header.navigateDesc'),
    })
  }

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        {mobileNav && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={mobileNav.toggle}
          >
            <Menu className="w-5 h-5" />
          </Button>
        )}

        <div className="animate-slide-in-up">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={t('header.searchPlaceholder')}
            className="w-64 pl-9 bg-secondary border-border cursor-pointer"
            readOnly
            onClick={() => setIsSearchOpen(true)}
          />
        </div>

        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border">
          <Activity className="w-3 h-3 text-energy-cyan animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">{dataRate} {t('header.ptsPerSec')}</span>
        </div>

        {/* Live indicator with time */}
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-energy-green/10 border border-energy-green/20">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-energy-green"></span>
            </span>
            <span className="text-xs font-medium text-energy-green">{t('header.live')}</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">{currentTime}</span>
        </div>

        {/* Refresh */}
        <Button variant="ghost" size="icon" onClick={handleRefresh} className="relative">
          <RefreshCw className={cn("w-4 h-4 transition-transform", isRefreshing && "animate-spin")} />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-energy-red animate-pulse">
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>{t('header.notifications')}</span>
              {notifications.length > 0 && (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={markAllAsRead}>
                    <Check className="w-3 h-3 mr-1" />
                    {t('header.markAllRead')}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs text-energy-red hover:text-energy-red"
                    onClick={clearAllNotifications}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">{t('header.noNotifications')}</div>
            ) : (
              notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className={cn(
                    "flex flex-col items-start gap-1 p-3 cursor-pointer",
                    !notification.read && "bg-secondary/50",
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full",
                          notification.type === "alert" && "bg-energy-red",
                          notification.type === "info" && "bg-energy-cyan",
                          notification.type === "success" && "bg-energy-green",
                        )}
                      />
                      <span className="font-medium text-sm">{notification.title}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 opacity-0 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteNotification(notification.id)
                      }}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">{notification.description}</p>
                  <p className="text-xs text-muted-foreground pl-4">{formatNotificationTime(notification.time)}</p>
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <LanguageSwitcher className="hidden md:flex w-32" />
      </div>

      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder={t('header.searchPlaceholder')} />
        <CommandList>
          <CommandEmpty>{t('header.noResults')}</CommandEmpty>
          {searchItems.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => (
                <CommandItem key={item} onSelect={() => handleSearchSelect(item)}>
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </header>
  )
}
