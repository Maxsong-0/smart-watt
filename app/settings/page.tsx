'use client'

import { useTranslation } from 'react-i18next'
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SettingsSection, SettingsItem } from '@/components/settings/settings-section'
import { LanguageSwitcher } from '@/components/settings/language-switcher'
import { ThemeSwitcher } from '@/components/settings/theme-switcher'
import { NotificationSettings } from '@/components/settings/notification-settings'
import { ProfileSettings } from '@/components/settings/profile-settings'
import { AuthGuard } from '@/components/auth/auth-guard'
import { Palette, Bell, User } from 'lucide-react'

export default function SettingsPage() {
  const { t } = useTranslation()

  return (
    <AuthGuard>
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={t('settings.title')} subtitle={t('settings.subtitle')} />

        <main className="flex-1 overflow-y-auto p-6">
          <Tabs defaultValue="appearance" className="space-y-6">
            <TabsList>
              <TabsTrigger value="appearance" className="gap-2">
                <Palette className="w-4 h-4" />
                {t('settings.appearance')}
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="w-4 h-4" />
                {t('settings.notifications')}
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <User className="w-4 h-4" />
                {t('settings.profile')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="space-y-6">
              <SettingsSection
                title={t('settings.appearance')}
                description={t('settings.appearanceDesc')}
              >
                <SettingsItem
                  label={t('common.theme')}
                  description={t('settings.themeDesc')}
                >
                  <ThemeSwitcher />
                </SettingsItem>
                <SettingsItem
                  label={t('common.language')}
                  description={t('settings.languageDesc')}
                >
                  <LanguageSwitcher />
                </SettingsItem>
              </SettingsSection>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <SettingsSection
                title={t('settings.notifications')}
                description={t('settings.notificationsDesc')}
              >
                <NotificationSettings />
              </SettingsSection>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <SettingsSection
                title={t('settings.profile')}
                description={t('settings.profileDesc')}
              >
                <ProfileSettings />
              </SettingsSection>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
    </AuthGuard>
  )
}
