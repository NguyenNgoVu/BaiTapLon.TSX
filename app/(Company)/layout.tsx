import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from 'next/link'
import "../globals.css"

import Footer from '@/components/Bar/Footer'
import Header from '@/components/Bar/Header'
import Notice from '@/components/Bar/Notice'

const inter = Inter({ subsets: ["vietnamese"] })

export const metadata: Metadata = {
  title: "NguyenNgoVu",
  description: "Trang Web Bán Truyện NorwayNiggerVtuber",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex font-sans flex-col'>
          {/* Thong bao phim sex */}
          <Notice />

          {/* Header */}
          <Header />

          {/* Body */}
          <div className='flex h-full w-full flex-col mb-32'>
            {/* TOP BAR */}
            <div className='flex flex-row justify-center gap-x-28 p-2 font-bold mb-7 border-b uppercase' id='topbar'>
              <Link id='home' href={'/'}>Trang chủ</Link>
              <Link id='trending' href={'/?trending'}>Bán chạy</Link>
              <Link id='about' href={'/About'}>Về NNV</Link>
              <Link id='contact' href={'/Contact'}>Liên hệ</Link>
            </div>

            {/* ACTUAL BODY */}
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
