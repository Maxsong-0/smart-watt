"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Zap, User, Building2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/lib/auth-context"

export function LoginForm() {
  const { t } = useTranslation()
  const router = useRouter()
  const { login, loginAsDemo } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await login(email, password)
    if (result.success) {
      router.push("/")
    } else {
      setError(result.error || t("auth.loginFailed"))
    }
    setIsLoading(false)
  }

  const handleDemoLogin = (role: "facility-manager" | "utility-rep") => {
    loginAsDemo(role)
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
        <h1 className="text-2xl font-bold">{t("auth.welcomeBack")}</h1>
        <p className="text-muted-foreground mt-2">{t("auth.loginSubtitle")}</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
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
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            disabled={isLoading}
          />
          <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
            {t("auth.rememberMe")}
          </Label>
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
              {t("auth.loggingIn")}
            </>
          ) : (
            t("auth.login")
          )}
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t("auth.orQuickDemo")}
          </span>
        </div>
      </div>

      {/* Demo Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleDemoLogin("facility-manager")}
          className="flex flex-col items-center gap-1 h-auto py-4"
        >
          <Building2 className="w-5 h-5 text-primary" />
          <span className="font-medium">{t("roles.bob")}</span>
          <span className="text-xs text-muted-foreground">{t("roles.facilityManager")}</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => handleDemoLogin("utility-rep")}
          className="flex flex-col items-center gap-1 h-auto py-4"
        >
          <User className="w-5 h-5 text-primary" />
          <span className="font-medium">{t("roles.alice")}</span>
          <span className="text-xs text-muted-foreground">{t("roles.utilityRep")}</span>
        </Button>
      </div>

      {/* Register Link */}
      <p className="text-center text-sm text-muted-foreground">
        {t("auth.noAccount")}{" "}
        <Link href="/register" className="text-primary hover:underline">
          {t("auth.register")}
        </Link>
      </p>
    </div>
  )
}
