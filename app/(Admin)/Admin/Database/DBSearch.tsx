'use client'

export default function DBSearch({ onClick }: { onClick: () => void }) {
  return (
    <div className='mx-auto flex flex-row w-full items-center gap-4'>
      <span className='font-semibold text-xl w-1/5 text-right h-full underline underline-offset-8'>Chọn bảng: </span>
      <select name="tables" id="tables" className='border-2 border-gray-300 rounded-md w-3/5 h-10 text-center font-semibold text-xl'>
        <option value="sach">Sách</option>
        <option value="theloai">Thể Loại</option>
        <option value="hdn">Hoá Đơn Nhập</option>
        <option value="ncc">Nhà Cung Cấp</option>
        <option value="dvvc">Đơn Vị Vận Chuyển</option>
        <option value="kh">Khách Hàng</option>
      </select>
      <div className='h-full border p-1 px-2 text-center rounded-xl bg-[#01a14b] text-white cursor-pointer'>
        <span className='font-semibold text-xl' onClick={onClick}>Thực hiện</span>
      </div>
    </div>
  )
}