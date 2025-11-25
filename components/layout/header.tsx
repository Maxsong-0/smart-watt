"use client"

import { useState, useEffect } from "react"
import { Bell, Search, RefreshCw, Activity, X, Check, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
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

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "DR Event Starting",
    description: "Capacity DR event begins in 30 minutes",
    time: new Date(Date.now() - 1000 * 60 * 5),
    read: false,
    type: "alert",
  },
  {
    id: "2",
    title: "High Energy Usage",
    description: "Science Building exceeded threshold",
    time: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    type: "alert",
  },
  {
    id: "3",
    title: "Optimization Applied",
    description: "HVAC pre-cooling completed successfully",
    time: new Date(Date.now() - 1000 * 60 * 60),
    read: true,
    type: "success",
  },
]

const searchItems = [
  {
    category: "Buildings",
    items: ["Engineering Hall", "Science Building", "Library", "Student Center", "Admin Building"],
  },
  { category: "Equipment", items: ["AHU-1", "Chiller-Main", "Boiler-1", "VAV-201", "Meter-Main"] },
  {
    category: "Pages",
    items: ["Dashboard", "Predictions", "Grid Interaction", "Buildings", "Configuration", "Reports"],
  },
]

export function Header({ title, subtitle }: HeaderProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>("")
  const [dataRate, setDataRate] = useState(0)
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
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
    toast.info("Refreshing data...")
    setTimeout(() => {
      setIsRefreshing(false)
      setDataRate(Math.round(1200 + Math.random() * 400))
      toast.success("Data refreshed successfully")
    }, 1000)
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    toast.success("All notifications marked as read")
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
    toast.success("All notifications cleared")
  }

  const formatNotificationTime = (date: Date) => {
    const diff = Date.now() - date.getTime()
    const minutes = Math.floor(diff / (60 * 1000))
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
  }

  const handleSearchSelect = (item: string) => {
    setIsSearchOpen(false)
    toast.info(`Navigating to ${item}`, {
      description: "Search result selected",
    })
  }

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="animate-slide-in-up">
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search... (⌘K)"
            className="w-64 pl-9 bg-secondary border-border cursor-pointer"
            readOnly
            onClick={() => setIsSearchOpen(true)}
          />
        </div>

        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border">
          <Activity className="w-3 h-3 text-energy-cyan animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">{dataRate} pts/s</span>
        </div>

        {/* Live indicator with time */}
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-energy-green/10 border border-energy-green/20">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-energy-green"></span>
            </span>
            <span className="text-xs font-medium text-energy-green">Live</span>
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
              <span>Notifications</span>
              {notifications.length > 0 && (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={markAllAsRead}>
                    <Check className="w-3 h-3 mr-1" />
                    Mark all read
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
              <div className="py-6 text-center text-sm text-muted-foreground">No notifications</div>
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
      </div>

      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Search buildings, equipment, pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
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
