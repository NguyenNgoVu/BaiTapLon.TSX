'use client'

import { useTrendingClick } from '@/data/trendingClick'
import Link from 'next/link'

export default function TopBar() {
  const { setClickData } = useTrendingClick()
  
  return (
    <div className='flex flex-row justify-center gap-x-28 p-2 font-bold mb-7 border-b uppercase' id='topbar'>
      <Link id='home' href={'/'}>Trang chủ</Link>
      <Link id='trending' href={'/'} onClick={() => setClickData(true)}>Bán chạy</Link>
      <Link id='about' href={'/About'}>Về NNV</Link>
      <Link id='contact' href={'/Contact'}>Liên hệ</Link>
    </div>
  )
}