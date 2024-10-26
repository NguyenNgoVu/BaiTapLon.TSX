'use client'

import { useCartData } from '@/data/cartData'
import { usePurchaseData } from '@/data/purchaseData'
import Link from 'next/link'
import { useState } from 'react'

export default function Purchase() {
  const { cartData } = useCartData()
  const { purchaseData, setPurchaseData } = usePurchaseData()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const genRandomString = (length: number) => Array.from({ length }, _ => String.fromCharCode(Math.round(Math.ceil(Math.random() * 25) + 65))).join('')

  const update = async () => {
    const shipCode = 'NNV' + genRandomString(10)
    const hddtCode = genRandomString(7)
    const userID = genRandomString(50)

    setPurchaseData({ id: userID, name, phone, address, books: cartData.map(e => e.id), price: cartData.reduce((prev, curr) => prev + curr.price * curr.count, 0), shipCode })

    await fetch(`/Admin/api?table=hddt`, {
      method: 'POST',
      body: `INSERT INTO hddt VALUES ('${hddtCode}', '${new Date().toLocaleString('sv-SE')}', '${purchaseData.id}', '${cartData.map(e => e.id).join(', ')}', '${purchaseData.price}', '${cartData.map(e => e.count).join(', ')}', 0)`
    })

    await fetch(`/Admin/api?table=chitiethddt`, {
      method: 'POST',
      body: `INSERT INTO chitiethddt VALUES ('${hddtCode}', '${shipCode}')`
    })

    await fetch(`/Admin/api?table=kh`, {
      method: 'POST',
      body: `INSERT INTO kh VALUES ('${userID}', '${name}', '${phone}', '${address}', '${shipCode}')`
    })
  }

  return (
    <>
      <span className='font-semibold text-3xl pt-20 mobile:ml-[115px] ml-72'>Thanh toán</span>

      <div className='flex flex-col'>
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='name'>Họ tên</label>
        <input onChange={e => setName(e.target.value)} id='name' type='text' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' />
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='phone'>Số điện thoại</label>
        <input onChange={e => setPhone(e.target.value)} id='phone' type='tel' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' />
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='address'>Địa chỉ</label>
        <input onChange={e => setAddress(e.target.value)} id='address' type='text' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' />
      </div>

      <div className='flex flex-col ml-80 mt-10'>
        <span className='text-xl font-semibold'>Phương thức thanh toán</span>
        <div>
          <input className='mr-3' type='radio' name='cod' id='cod' defaultChecked />
          <label className='text-lg' htmlFor='cod'>Thanh toán khi nhận hàng</label>
        </div>
        <div>
          <input className='mr-3' type='radio' name='banking' id='banking' disabled />
          <label className='text-lg' htmlFor='banking'>Thanh toán bằng ngân hàng (IDGAF)</label>
        </div>
      </div>

      <div className='flex items-end flex-col pr-96 pt-10'>
        <div className='flex mr-1 mb-2'>
          <span className='flex font-semibold text-xl pr-3'>Thành tiền:</span>
          <span className='italic text-lg'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartData.reduce((prev, curr) => prev + curr.price * curr.count, 0))}</span>
        </div>

        <Link href={'/Purchase/Complete'} className='bg-[#01a14b] rounded-lg p-2 text-white font-semibold cursor-pointer' onClick={update}>Đặt hàng</Link>
      </div>
    </>
  )
}
