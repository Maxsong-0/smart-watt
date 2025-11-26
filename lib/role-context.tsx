"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useAuth } from "./auth-context"
import type { UserRole } from "./mock-users"

interface RoleContextType {
  role: UserRole
  isBob: boolean
  isAlice: boolean
  setRole: (role: UserRole) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const { user, loginAsDemo } = useAuth()

  // Default to facility-manager if no user is logged in
  const role: UserRole = user?.role || "facility-manager"

  return (
    <RoleContext.Provider
      value={{
        role,
        isBob: role === "facility-manager",
        isAlice: role === "utility-rep",
        setRole: loginAsDemo,
      }}
    >
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider")
  }
  return context
}
