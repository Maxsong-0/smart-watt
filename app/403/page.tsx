"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { ShieldX, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ForbiddenPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-destructive/10">
            <ShieldX className="w-12 h-12 text-destructive" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2">403</h1>
        <h2 className="text-xl font-semibold mb-4">{t("errors.forbidden")}</h2>
        <p className="text-muted-foreground mb-8">
          {t("errors.forbiddenDesc")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              {t("errors.goHome")}
            </Link>
          </Button>
          <Button asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("errors.goBack")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
