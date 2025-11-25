"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-background p-12 flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-primary">Smart</span> Watt
          </h1>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight">
            Intelligent Energy<br />Management Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            AI-powered campus energy management and grid interaction platform.
            Optimize consumption, reduce costs, and achieve sustainability goals.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2024 Smart Watt. All rights reserved.
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        {children}
      </div>
    </div>
  )
}
