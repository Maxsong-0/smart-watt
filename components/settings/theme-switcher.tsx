'use client'

import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sun, Moon, Monitor } from 'lucide-react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 mr-2" />
      case 'dark':
        return <Moon className="w-4 h-4 mr-2" />
      default:
        return <Monitor className="w-4 h-4 mr-2" />
    }
  }

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-40">
        {getIcon()}
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            {t('theme.light')}
          </div>
        </SelectItem>
        <SelectItem value="dark">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            {t('theme.dark')}
          </div>
        </SelectItem>
        <SelectItem value="system">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            {t('theme.system')}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
