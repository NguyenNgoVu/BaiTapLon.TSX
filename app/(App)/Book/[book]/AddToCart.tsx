'use client'

import { useCartData } from '@/data/cartData'
import { useState } from 'react'
import { BookInfo } from './actions'

export default function AddToCart({ bookInfo }: { bookInfo: BookInfo }) {
  const { updateCartData } = useCartData()
  const [count, setCount] = useState(1)

  const tickCount = (thisCount: number) => {
    if (thisCount <= 0) setCount(1)
    else setCount(thisCount)
  }

  return (
    <div className='flex flex-row items-center gap-12'>
      <div className='flex h-14 items-center'>
        <button className='text-2xl h-full w-10 bg-gray-200 rounded-l-lg' onClick={() => tickCount(count - 1)}>-</button>
        <input type='number' name='count' id='count' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none bg-gray-200 w-16 h-full text-2xl text-center border-x border-x-gray-300' min={1} value={count} onChange={e => tickCount(+e.target.value)} />
        <button className='text-2xl h-full w-10 bg-gray-200 rounded-r-lg' onClick={() => tickCount(count + 1)}>+</button>
      </div>
      <button className='bg-[#01a14b] p-3 text-white rounded-xl font-semibold text-lg h-14 w-36' onClick={() => updateCartData({ count, id: bookInfo.maSach, name: bookInfo.tenSach, price: bookInfo.giaBan })}>Thêm vào giỏ</button>
    </div>
  )
}