"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import type { UserRole } from "@/lib/mock-users"

interface AuthGuardProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

// Routes that require specific roles
const roleProtectedRoutes: Record<string, UserRole[]> = {
  "/buildings": ["facility-manager"],
  "/config": ["facility-manager"],
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoading) return

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // Check role-based access
    const requiredRoles = allowedRoles || roleProtectedRoutes[pathname]
    if (requiredRoles && user && !requiredRoles.includes(user.role)) {
      router.push("/403")
      return
    }
  }, [isAuthenticated, isLoading, user, router, pathname, allowedRoles])

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render protected content if not authenticated
  if (!isAuthenticated) {
    return null
  }

  // Don't render if user doesn't have required role
  const requiredRoles = allowedRoles || roleProtectedRoutes[pathname]
  if (requiredRoles && user && !requiredRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}
