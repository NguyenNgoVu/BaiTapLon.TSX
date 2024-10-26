import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
  // console.log(inter.className)
  
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
