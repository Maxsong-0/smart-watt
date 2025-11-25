"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface MobileNavContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  toggle: () => void
}

const MobileNavContext = createContext<MobileNavContextType | undefined>(undefined)

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <MobileNavContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      {children}
    </MobileNavContext.Provider>
  )
}

export function useMobileNav() {
  const context = useContext(MobileNavContext)
  if (context === undefined) {
    throw new Error("useMobileNav must be used within a MobileNavProvider")
  }
  return context
}
