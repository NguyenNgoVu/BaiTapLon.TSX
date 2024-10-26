import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface Admin {
  admin: boolean,
  setAdmin: (data: boolean) => void
}

export const useAdminData = create<Admin>()(
  persist(
    set => ({
      admin: false,
      setAdmin: (data: boolean) => set({ admin: data })
    }),
    {
      name: 'isAdmin',
      storage: createJSONStorage(() => localStorage)
    }
  )
)