'use client'

export default function Page({ params }: { params: { book: string } }) {
  return (
    <div className='grid grid-cols-2 grid-rows-1 gap-20 h-[70dvh] w-[70%] m-auto mt-10'>
      <div className='flex flex-col'>
        <span className='text-center font-semibold mx-auto text-xl mb-2'>Phản hồi của Khách Hàng</span>
        <div className='flex flex-col p-1 w-full h-full bg-gray-200 my-auto rounded-lg'>
          <div className='flex flex-col p-2 h-[33.3333333333333333333%]'>
            <span className='text-2xl font-semibold mb-2'>Tháng 1: </span>
            <span className='ml-2'><span className='text-lg'>Ngày 12:</span> Web sập, Lag VCL!!!!!!! 😡💢💢💢</span>
            <span className='ml-2'><span className='text-lg'>Ngày 27:</span> Vừa săn được quyển giới hạn, mãi yêu NNV!!!!! 😁👍👍👍</span>
            <span className='ml-2'><span className='text-lg'>Ngày 28:</span> Giá rẻ hơn so với thị trường!! Sẽ ủng hộ nhiều lần sau!! ❤️❤️</span>
            <span className='ml-2'><span className='text-lg'>Ngày 29:</span> HẾT HÀNG RỒI HIC! 😭😢😢😢</span>
          </div>
          <div className='border-t border-t-gray-400 flex flex-col p-2 h-[33.3333333333333333333%]'>
            <span className='text-2xl font-semibold mb-2'>Tháng 2: </span>
            <span className='ml-2'><span className='text-lg'>Ngày 08:</span> Giao hàng rất nhanh, đóng gói hàng cẩn thận.</span>
            <span className='ml-2'><span className='text-lg'>Ngày 28:</span> Nhân viên tư vấn thái độ lồi lõm, không bao giờ quay lại lần sau.</span>
          </div>
          <div className='border-t border-t-gray-400 flex flex-col p-2 h-[33.3333333333333333333%]'>
            <span className='text-2xl font-semibold mb-2'>Tháng 3: </span>
            <span className='ml-2'><span className='text-lg'>Ngày 05:</span> Nhân viên tư vấn nhiệt tình, có sức hút.</span>
            <span className='ml-2'><span className='text-lg'>Ngày 27:</span> Chủ shop là Vozer không biết tính giá đã giảm.</span>
            <span className='ml-2'><span className='text-lg'>Ngày 31:</span> GÌ ĐÂY?? TRANG WEB ĐÚ IPM. REPORT!?!?!?!? 🤨📸📸📸📸📸</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <span className='text-center font-semibold mx-auto text-xl mb-2'>Thống kê kho</span>
        <div className='flex flex-col p-2 w-full h-full bg-gray-200 my-auto rounded-lg'>
          <div className='flex flex-col p-2 h-[33.3333333333333333333%]'>
            <span className='text-2xl font-semibold mb-2'>Tháng 1: </span>
            <span className='ml-2'><span className='text-lg'>Nhập:</span> Thiên sứ nhà bên - 1 (2000 quyển)</span>
            <span className='ml-2'><span className='text-lg'>Yêu cầu:</span> Nhập thêm "Lớp học đề cao thực lực - 1"</span>
          </div>
          <div className='border-t border-t-gray-400 flex flex-col p-2 h-[33.3333333333333333333%]'>
            <span className='text-2xl font-semibold mb-2'>Tháng 2: </span>
            <span className='ml-2'><span className='text-lg'>Tồn kho:</span> "Còng Gió Vân Xanh"</span>
            <span className='ml-2'><span className='text-lg'>Tồn kho:</span> "Những Đám Mây Ngoan"</span>
            <span className='ml-2'><span className='text-lg'>Bán chạy:</span> Thiên sứ nhà bên - 1</span>
            <span className='ml-2'><span className='text-lg'>Nhập:</span> Thiên sứ nhà bên - 2 (2000 quyển)</span>
            <span className='ml-2'><span className='text-lg'>Nhập:</span> Arya bàn bên - 1 (600 quyển)</span>
          </div>
          <div className='border-t border-t-gray-400 flex flex-col p-2 h-[33.3333333333333333333%]'>
            <span className='text-2xl font-semibold mb-2'>Tháng 3: </span>
            <span className='ml-2'><span className='text-lg'>Tồn kho:</span> "Người Huế kể chuyện Huế"</span>
            <span className='ml-2'><span className='text-lg'>Bán chạy:</span> Thiên sứ nhà bên - 2</span>
            <span className='ml-2'><span className='text-lg'>Nhập:</span> 86 Eighty Six - 1 (1000 quyển)</span>
            <span className='ml-2'><span className='text-lg'>Nhập:</span> 86 Eighty Six - 2 (1000 quyển)</span>
          </div>
        </div>
      </div>
    </div>
  )
}