'use client'

import { useCartData } from '@/data/cartData'
import { usePurchaseData } from '@/data/purchaseData'
import { useEffect } from 'react'

export default function Complete() {
  const { removeAll } = useCartData()
  const { purchaseData } = usePurchaseData()

  useEffect(() => removeAll(), [])

  return (
    <>
      <span className='font-semibold text-3xl pt-20 mobile:ml-[115px] ml-72'>Thanh toán</span>

      <div className='flex flex-col'>
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='name'>Họ tên</label>
        <input id='name' type='text' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' value={purchaseData.name} disabled />
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='phone'>Số điện thoại</label>
        <input id='phone' type='tel' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' value={purchaseData.phone} disabled />
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='address'>Địa chỉ</label>
        <input id='address' type='text' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' value={purchaseData.address} disabled />
        <label className='ml-80 font-semibold text-xl mt-10' htmlFor='shipCode'>Mã vận đơn</label>
        <input id='shipCode' type='text' className='ml-80 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none w-1/5 border-b-2 border-gray-400' value={purchaseData.shipCode} disabled />
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
          <span className='italic text-lg'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(purchaseData.price)}</span>
        </div>

        <span className='bg-[#01a14b] rounded-lg p-2 text-white font-semibold cursor-default'>Đặt hàng thành công!</span>
      </div>
    </>
  )
}
