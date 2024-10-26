'use client'

import { useCartData } from '@/data/cartData'
import { default as ImageNext } from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { cartData, removeItem } = useCartData()

  return (
    <>
      <span className='font-semibold text-3xl pt-20 mobile:ml-[115px] ml-72'>Giỏ hàng</span>

      <table className='w-[70%] justify-center mx-auto mt-10'>
        <tbody>
          <tr className='border-b-2 border-b-gray-200'>
            <th className='px-5 text-xl w-[10%]'>Ảnh bìa</th>
            <th className='px-5 text-xl w-[50%] text-left'>Tên sản phẩm</th>
            <th className='px-5 text-xl w-[10%] text-center'>Số lượng</th>
            <th className='px-5 text-xl w-[20%] text-right'>Giá thành</th>
            <th className='px-5 text-xl w-[10%]'>Chỉnh sửa</th>
          </tr>
          {
            cartData.length > 0
              ? cartData.map(e => (
                <tr className='border-b-2 border-b-gray-200' key={e.id}>
                  <td className='px-5 items-center'><ImageNext alt='' src={`/books/${e.id}.png`} width={512} height={512} className='min-h-[120px] max-h-[120px] min-w-[75px] max-w-[75px]' /></td>
                  <td className='px-5 text-lg font-semibold'>{e.name}</td>
                  <td className='px-5 text-center'><input className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none text-center w-[40%] border-b-2 border-gray-400 mx-auto' type="number" name="count" id="count" min={1} value={e.count} /></td>
                  <td className='px-5 text-right'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(e.price)}</td>
                  <td className='px-5 text-center font-semibold text-lg text-blue-600 cursor-pointer' onClick={() => removeItem(e.id)}>Xoá</td>
                </tr>
              ))
              : <tr><td className='text-center text-2xl pt-10 font-semibold' colSpan={5}>Bạn đang không có gì trong giỏ hàng</td></tr>
          }
        </tbody>
      </table>

      <div className='flex items-end justify-end flex-col pr-72 pt-10 mb-20'>

        <div className='grid grid-rows-2 grid-cols-2'>
          <span className='flex justify-end font-semibold text-xl pr-3'>Thành tiền:</span>
          <span className='italic text-lg'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartData.reduce((prev, curr) => prev + curr.price * curr.count, 0))}</span>

          <span className='flex justify-end font-semibold text-xl pr-3'>Mã giảm giá: </span>
          <input className='outline-none border-b-2 border-gray-400' type='text' disabled defaultValue='Đang bảo trì...' />
        </div>

        <div className={`bg-[#01a14b] rounded-lg p-2 text-white font-semibold mt-2 ${cartData.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
          <Link href={'/Purchase'} className={cartData.length > 0 ? 'pointer-events-auto' : 'pointer-events-none'}>Thanh toán</Link>
        </div>
      </div>
    </>
  )
}
