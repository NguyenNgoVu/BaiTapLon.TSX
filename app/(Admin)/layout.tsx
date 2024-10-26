import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

import TopBar from './components/TopBar'
import Header from './components/Header'

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
          {/* Header */}
          <Header />
          <TopBar />

          {/* Body */}
          <div className='flex h-full w-full flex-col'>

            {/* ACTUAL BODY */}
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
