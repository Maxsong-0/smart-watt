"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { type User, type UserRole, validateCredentials, getDemoUser } from "./mock-users"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  loginAsDemo: (role: UserRole) => void
  register: (name: string, email: string, password: string, role: UserRole) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_STORAGE_KEY = "smartwatt-auth"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY)
      if (savedAuth) {
        const parsedUser = JSON.parse(savedAuth) as User
        setUser(parsedUser)
      }
    } catch (error) {
      console.error("Failed to load auth state:", error)
      localStorage.removeItem(AUTH_STORAGE_KEY)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const saveUser = useCallback((user: User) => {
    setUser(user)
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
  }, [])

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const validatedUser = validateCredentials(email, password)
    if (validatedUser) {
      saveUser(validatedUser)
      return { success: true }
    }
    return { success: false, error: "Invalid email or password" }
  }, [saveUser])

  const loginAsDemo = useCallback((role: UserRole) => {
    const demoUser = getDemoUser(role)
    saveUser(demoUser)
    router.push("/")
  }, [saveUser, router])

  const register = useCallback(async (
    name: string,
    email: string,
    password: string,
    role: UserRole
  ): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if email already exists (mock validation)
    const existingEmails = ["bob@smartwatt.com", "alice@smartwatt.com"]
    if (existingEmails.includes(email.toLowerCase())) {
      return { success: false, error: "Email already registered" }
    }

    // Create new user (in a real app, this would be saved to a database)
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name,
      role,
    }
    saveUser(newUser)
    return { success: true }
  }, [saveUser])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem(AUTH_STORAGE_KEY)
    router.push("/login")
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginAsDemo,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
