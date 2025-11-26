'use client'

import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const languages = [
  { code: 'en', labelKey: 'languages.en' },
  { code: 'zh', labelKey: 'languages.zh' },
] as const

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation()

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0]

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className={cn('w-40', className)}>
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue>{t(currentLang.labelKey)}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {t(lang.labelKey)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
