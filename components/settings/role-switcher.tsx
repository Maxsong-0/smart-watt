'use client'

import { useRole } from '@/lib/role-context'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { User, Users, Check } from 'lucide-react'

type UserRole = 'facility-manager' | 'utility-rep'

interface RoleOption {
  id: UserRole
  icon: typeof User
  nameKey: string
  personKey: string
  descKey: string
}

const roleOptions: RoleOption[] = [
  {
    id: 'facility-manager',
    icon: User,
    nameKey: 'roles.facilityManager',
    personKey: 'roles.bob',
    descKey: 'roles.facilityManagerDesc'
  },
  {
    id: 'utility-rep',
    icon: Users,
    nameKey: 'roles.utilityRep',
    personKey: 'roles.alice',
    descKey: 'roles.utilityRepDesc'
  }
]

interface RoleSwitcherProps {
  variant?: 'default' | 'compact'
}

export function RoleSwitcher({ variant = 'default' }: RoleSwitcherProps) {
  const { role, setRole } = useRole()
  const { t } = useTranslation()

  if (variant === 'compact') {
    return (
      <div className="flex gap-1">
        {roleOptions.map((option) => {
          const Icon = option.icon
          const isActive = role === option.id
          return (
            <button
              key={option.id}
              onClick={() => setRole(option.id)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{t(option.personKey)}</span>
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {roleOptions.map((option) => {
        const Icon = option.icon
        const isActive = role === option.id
        return (
          <button
            key={option.id}
            onClick={() => setRole(option.id)}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left",
              isActive
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 hover:bg-secondary/50"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              isActive ? "bg-primary text-primary-foreground" : "bg-secondary"
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{t(option.personKey)}</span>
                <span className="text-sm text-muted-foreground">({t(option.nameKey)})</span>
              </div>
              <p className="text-sm text-muted-foreground">{t(option.descKey)}</p>
            </div>
            {isActive && (
              <Check className="w-5 h-5 text-primary" />
            )}
          </button>
        )
      })}
    </div>
  )
}
