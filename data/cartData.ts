import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartData {
  id: string,
  name: string,
  price: number,
  count: number
}

interface UseCartDataInterface {
  cartData: CartData[],
  updateCartData: (data: CartData) => void,
  removeItem: (data: string) => void,
  removeAll: () => void
}

export const useCartData = create<UseCartDataInterface>()(
  persist(
    set => ({
      cartData: [],
      updateCartData: data => set(state => {
        const existed = state.cartData.findIndex(e => e.id === data.id)
        const returnData = existed > -1
          ? (() => {
            state.cartData[existed].count = state.cartData[existed].count + data.count
            return state.cartData
          })()
          : [...state.cartData, data]

        return { cartData: returnData }
      }),
      removeItem: data => set(state => {
        return { cartData: state.cartData.filter(e => e.id !== data) }
      }),
      removeAll: () => set({ cartData: [] })
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage)
    }
  )
)