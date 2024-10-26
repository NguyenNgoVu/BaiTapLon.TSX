export default function Notice() {
  return (
    <div className='w-full min-h-12 bg-[#01a14b] flex-row flex px-20'>
      <div className='flex gap-20 text-sm'>
        <span className='text-white my-auto'><span className='font-semibold'>086345****</span> đã đặt <span className='font-semibold'>'Arya bàn bên - 3'</span>.</span>
        <span className='text-white my-auto'><span className='font-semibold'>077456****</span> đã đặt <span className='font-semibold'>'Thiên sứ nhà bên - 8'</span>.</span>
      </div>
      <div className='flex-grow' />
      <div className='flex gap-20 justify-end w-1/3'>
        <span className='text-white my-auto'>Nhập <span className='font-semibold'>NNVFREESHIP</span> để được miễn phí vận chuyển.</span>
      </div>
    </div>
  )
}