"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type UserRole = "facility-manager" | "utility-rep"

interface RoleContextType {
  role: UserRole
  setRole: (role: UserRole) => void
  isBob: boolean
  isAlice: boolean
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("facility-manager")

  useEffect(() => {
    const savedRole = localStorage.getItem("smartwatt-role") as UserRole | null
    if (savedRole && (savedRole === "facility-manager" || savedRole === "utility-rep")) {
      setRole(savedRole)
    }
  }, [])

  const handleSetRole = (newRole: UserRole) => {
    setRole(newRole)
    localStorage.setItem("smartwatt-role", newRole)
  }

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole: handleSetRole,
        isBob: role === "facility-manager",
        isAlice: role === "utility-rep",
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
