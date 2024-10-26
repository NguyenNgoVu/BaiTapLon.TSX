import { create } from 'zustand'

interface PurchaseData {
  id: string,
  name: string,
  phone: string,
  address: string,
  books: string[],
  shipCode: string,
  price: number
}

interface UsePurchaseDataInterface {
  purchaseData: PurchaseData,
  setPurchaseData: (data: PurchaseData) => void,
}

export const usePurchaseData = create<UsePurchaseDataInterface>(set => ({
  purchaseData: {
    id: '',
    name: '',
    phone: '',
    address: '',
    books: [],
    shipCode: '',
    price: 0
  },
  setPurchaseData: data => set({ purchaseData: data })
}))