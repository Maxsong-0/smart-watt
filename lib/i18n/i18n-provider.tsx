'use client'

import { useEffect, useState, type ReactNode } from 'react'
import './index'

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <>{children}</>
}
