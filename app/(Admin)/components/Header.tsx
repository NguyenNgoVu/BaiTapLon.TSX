'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-[#f7f7f9] w-full h-20 flex flex-row justify-center items-center gap-20'>
      <Link href={'/'} className='flex flex-row'>
        <Image src='/Logo.png' className='object-contain self-center mr-2' width={60} height={60} alt='' />
        <div className='font-bold'>
          <span className='text-justify'>NGUYEN<br />NGO<br />VU</span>
        </div>
      </Link>

      <div className='flex flex-row w-[40%]'>
        <span className='mx-auto font-semibold text-2xl'>TRANG QUẢN TRỊ <span className='text-[#01a14b]'>NGUYENNGOVU</span></span>
      </div>

      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#01a14b" width={50} height={50}>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"></path>
      </svg>
    </div>
  )
}