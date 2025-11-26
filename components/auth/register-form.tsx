"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Zap, Loader2, Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useAuth } from "@/lib/auth-context"
import type { UserRole } from "@/lib/mock-users"

export function RegisterForm() {
  const { t } = useTranslation()
  const router = useRouter()
  const { register } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState<UserRole>("facility-manager")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError(t("auth.passwordMismatch"))
      return
    }

    if (password.length < 4) {
      setError(t("auth.passwordTooShort"))
      return
    }

    setIsLoading(true)

    const result = await register(name, email, password, role)
    if (result.success) {
      router.push("/")
    } else {
      setError(result.error || t("auth.registerFailed"))
    }
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold">{t("auth.createAccount")}</h1>
        <p className="text-muted-foreground mt-2">{t("auth.registerSubtitle")}</p>
      </div>

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("auth.name")}</Label>
          <Input
            id="name"
            type="text"
            placeholder={t("auth.namePlaceholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("auth.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">{t("auth.password")}</Label>
          <Input
            id="password"
            type="password"
            placeholder={t("auth.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">{t("auth.confirmPassword")}</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder={t("auth.confirmPassword")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <Label>{t("auth.selectRole")}</Label>
          <RadioGroup
            value={role}
            onValueChange={(value) => setRole(value as UserRole)}
            className="grid grid-cols-2 gap-3"
          >
            <Label
              htmlFor="role-facility"
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                role === "facility-manager"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="facility-manager" id="role-facility" className="sr-only" />
              <Building2 className={`w-6 h-6 ${role === "facility-manager" ? "text-primary" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm">{t("roles.facilityManager")}</span>
              <span className="text-xs text-muted-foreground text-center">{t("roles.facilityManagerDesc")}</span>
            </Label>

            <Label
              htmlFor="role-utility"
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                role === "utility-rep"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="utility-rep" id="role-utility" className="sr-only" />
              <User className={`w-6 h-6 ${role === "utility-rep" ? "text-primary" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm">{t("roles.utilityRep")}</span>
              <span className="text-xs text-muted-foreground text-center">{t("roles.utilityRepDesc")}</span>
            </Label>
          </RadioGroup>
        </div>

        {error && (
          <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-lg">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t("auth.registering")}
            </>
          ) : (
            t("auth.register")
          )}
        </Button>
      </form>

      {/* Login Link */}
      <p className="text-center text-sm text-muted-foreground">
        {t("auth.hasAccount")}{" "}
        <Link href="/login" className="text-primary hover:underline">
          {t("auth.login")}
        </Link>
      </p>
    </div>
  )
}
