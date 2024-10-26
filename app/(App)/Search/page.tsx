'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { BookInfo } from '../Book/[book]/actions'
import Image from '@/components/Image/Image'

export default function Search() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  )
}

function SearchPage() {
  const [data, setData] = useState<BookInfo[]>()
  const searchParams = useSearchParams()

  const fetchData = async () => {
    const res = await fetch(`/Admin/api?table=sach`)
    setData(await res.json())
  }

  useEffect(() => void fetchData(), [])

  return (
    <>
      <span className='font-semibold text-3xl mt-2 mobile:ml-[115px] ml-72'>Tìm kiếm</span>
      <span className='font-semibold text-lg mt-2 mobile:ml-[115px] ml-72'>Hiển thị kết quả tìm kiếm cho: <span className='font-normal'>"{searchParams.get('q')}"</span></span>

      <div className='grid grid-cols-5 w-2/3 mx-auto mt-5 gap-10 mb-20'>
        {
          data?.filter(e => e.tenSach.toLowerCase().includes(searchParams.get('q')!)).map(e =>
            <Image key={e.maSach} src={e.maSach} title={e.tenSach} />
          )
        }
      </div>
    </>
  )
}