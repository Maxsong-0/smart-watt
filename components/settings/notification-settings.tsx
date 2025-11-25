'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Switch } from '@/components/ui/switch'
import { SettingsItem } from './settings-section'

interface NotificationPreferences {
  email: boolean
  push: boolean
  drAlerts: boolean
  systemAlerts: boolean
}

const defaultPreferences: NotificationPreferences = {
  email: true,
  push: true,
  drAlerts: true,
  systemAlerts: true
}

export function NotificationSettings() {
  const { t } = useTranslation()
  const [preferences, setPreferences] = useState<NotificationPreferences>(defaultPreferences)

  useEffect(() => {
    const saved = localStorage.getItem('smartwatt-notifications')
    if (saved) {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  const updatePreference = (key: keyof NotificationPreferences, value: boolean) => {
    const updated = { ...preferences, [key]: value }
    setPreferences(updated)
    localStorage.setItem('smartwatt-notifications', JSON.stringify(updated))
  }

  return (
    <div className="space-y-4">
      <SettingsItem
        label={t('settings.emailNotifications')}
        description={t('settings.emailNotificationsDesc')}
      >
        <Switch
          checked={preferences.email}
          onCheckedChange={(checked) => updatePreference('email', checked)}
        />
      </SettingsItem>
      <SettingsItem
        label={t('settings.pushNotifications')}
        description={t('settings.pushNotificationsDesc')}
      >
        <Switch
          checked={preferences.push}
          onCheckedChange={(checked) => updatePreference('push', checked)}
        />
      </SettingsItem>
      <SettingsItem
        label={t('settings.drAlerts')}
        description={t('settings.drAlertsDesc')}
      >
        <Switch
          checked={preferences.drAlerts}
          onCheckedChange={(checked) => updatePreference('drAlerts', checked)}
        />
      </SettingsItem>
      <SettingsItem
        label={t('settings.systemAlerts')}
        description={t('settings.systemAlertsDesc')}
      >
        <Switch
          checked={preferences.systemAlerts}
          onCheckedChange={(checked) => updatePreference('systemAlerts', checked)}
        />
      </SettingsItem>
    </div>
  )
}
