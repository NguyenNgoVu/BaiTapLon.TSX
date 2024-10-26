import Link from 'next/link'

export default function TopBar() {
  return (
    <div className='flex flex-row justify-center gap-x-28 p-2 font-bold mb-7 border-b uppercase' id='topbar'>
      <Link id='home' href={'/Admin'}>Tổng quan</Link>
      <Link id='trending' href={'/Admin/Database'}>CSDL</Link>
      <Link id='about' href={'/Admin/Sales'}>Doanh số</Link>
    </div>
  )
}