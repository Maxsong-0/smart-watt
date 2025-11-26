'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useRole } from '@/lib/role-context'
import { toast } from 'sonner'

interface UserProfile {
  displayName: string
  email: string
  phone: string
  department: string
}

export function ProfileSettings() {
  const { t } = useTranslation()
  const { role, isBob } = useRole()

  const getDefaultProfile = (): UserProfile => ({
    displayName: isBob ? 'Bob Smith' : 'Alice Johnson',
    email: isBob ? 'bob@smartwatt.com' : 'alice@utility.com',
    phone: '+1 (555) 123-4567',
    department: isBob ? t('common.departments.facilitiesManagement') : t('common.departments.gridOperations')
  })

  const [profile, setProfile] = useState<UserProfile>(getDefaultProfile())

  useEffect(() => {
    const saved = localStorage.getItem(`smartwatt-profile-${role}`)
    if (saved) {
      setProfile(JSON.parse(saved))
    } else {
      setProfile(getDefaultProfile())
    }
    // Re-run this effect when role or t changes to ensure default profile is translated
  }, [role, isBob, t])

  const handleSave = () => {
    localStorage.setItem(`smartwatt-profile-${role}`, JSON.stringify(profile))
    toast.success(t('settings.profileSaved'))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="text-lg bg-primary text-primary-foreground">
            {profile.displayName.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{profile.displayName}</p>
          <p className="text-sm text-muted-foreground">{profile.department}</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="displayName">{t('settings.displayName')}</Label>
          <Input
            id="displayName"
            value={profile.displayName}
            onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('settings.email')}</Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t('settings.phone')}</Label>
          <Input
            id="phone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">{t('settings.department')}</Label>
          <Input
            id="department"
            value={profile.department}
            onChange={(e) => setProfile({ ...profile, department: e.target.value })}
          />
        </div>
      </div>

      <Button onClick={handleSave}>{t('common.save')}</Button>
    </div>
  )
}