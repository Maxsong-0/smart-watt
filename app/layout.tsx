import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n/i18n-provider"
import { AuthProvider } from "@/lib/auth-context"
import { RoleProvider } from "@/lib/role-context"
import { MobileNavProvider } from "@/lib/mobile-nav-context"
import { MobileSidebar } from "@/components/layout/mobile-sidebar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Watt - Intelligent Energy Management",
  description: "AI-powered campus energy management and grid interaction platform",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <AuthProvider>
              <RoleProvider>
                <MobileNavProvider>
                  {children}
                  <MobileSidebar />
                </MobileNavProvider>
              </RoleProvider>
            </AuthProvider>
          </I18nProvider>
        </ThemeProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
