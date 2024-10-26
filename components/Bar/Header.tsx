'use client'

import Image from 'next/image'
import Link from 'next/link'

import CartIcon from '../CartIcon'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const searchFunc = () => {
    if (!search || search.length < 1) return
    router.push(`/Search?q=${search}`)
  }

  return (
    <div className='bg-[#f7f7f9] w-full h-20 flex flex-row justify-center items-center gap-20'>
      <Link href={'/'} className='flex flex-row'>
        <Image src='/Logo.png' className='object-contain self-center mr-2' width={60} height={60} alt='' />
        <div className='font-bold'>
          <span className='text-justify'>NGUYEN<br />NGO<br />VU</span>
        </div>
      </Link>

      <div className='flex flex-row w-[40%] border border-[#01a14b] rounded-full'>
        <input type='text' placeholder='Tìm kiếm...' className='w-full rounded-l-full p-2' onKeyUpCapture={e => e.key === 'Enter' && searchFunc()} onChange={e => setSearch(e.target.value)} />
        <div className='bg-[#01a14b] rounded-r-full p-2 px-4 cursor-pointer' onClick={searchFunc}>
          <svg className='self-center h-full' fill='#fff' height='20px' width='20px' viewBox='0 0 490.4 490.4'>
            <g>
              <path d='M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z    M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z' />
            </g>
          </svg>
        </div>
      </div>

      <CartIcon />
    </div>
  )
}