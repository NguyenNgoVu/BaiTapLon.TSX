import { default as ImageNext } from 'next/image'
import AddToCart from './AddToCart'
import { getBook } from '@/app/(App)/Book/[book]/actions'

export default async function Page({ params }: { params: { book: string } }) {
  const bookInfo = await getBook(params.book)

  return (
    <>
      <div className='grid grid-cols-2 mx-auto mt-12 w-full px-56'>
        <div className='flex justify-center'>
          <ImageNext src={`/books/${params.book}.png`} alt={''} width={440} height={640} />
        </div>

        <div className='flex flex-col w-full'>
          <span className='text-3xl'>{bookInfo.tenSach}</span>

          <span className='text-xs text-gray-300'>ID: NORWAYNIGGERVTUBER - {bookInfo.maSach}</span>

          <span className='text-2xl mt-3 text-[#01a14b]'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(bookInfo.giaBan)}</span>

          <div className='mt-3'>
            <table>
              <tbody>
                <tr>
                  <td className='font-semibold w-32'>Thể loại</td>
                  <td>{bookInfo.maTheLoai}</td>
                </tr>
                <tr>
                  <td className='font-semibold w-32'>Tác giả</td>
                  <td>{bookInfo.tacGia}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <span className='text-xl mt-3 font-semibold'>Nội dung</span>
          <span className='text-justify w-[80%]'>
            {bookInfo.moTa}
          </span>

          <span className='mt-3 text-xl font-semibold'>Số lượng: <span className='text-base font-normal'>{bookInfo.soLuong}</span></span>
          <div className='flex-grow'></div>

          <AddToCart bookInfo={bookInfo} />
        </div>
      </div>

      <div className='flex flex-col text-center my-28'>
        <div className='w-1/2 border-b border-[#bbb] mx-auto'></div>
        <span className='justify-center mx-auto text-xl font-semibold uppercase my-10 underline underline-offset-4 decoration-[#01a14b]'>Mô tả sản phẩm</span>
        <p className='text-justify w-1/2 mx-auto text-gray-600'>
          {bookInfo.moTa}
        </p>
      </div>
    </>
  )
}