import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface Click {
  click: boolean,
  setClickData: (data: boolean) => void
}

export const useTrendingClick = create<Click>()(
  persist(
    set => ({
      click: false,
      setClickData: (data: boolean) => set({ click: data })
    }),
    {
      name: 'trendingClick',
      storage: createJSONStorage(() => localStorage)
    }
  )
)