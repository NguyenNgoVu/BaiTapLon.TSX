import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-[#555] text-white flex justify-center flex-row gap-32 p-2'>
      <div className='flex flex-col'>
        <Link href={'/'} className='flex flex-row w-fit'>
          <Image src='/Logo.png' className='object-contain self-center mr-2' width={60} height={60} alt='' />
          <div className='font-bold'>
            <span className='text-justify'>NGUYEN<br />NGO<br />VU</span>
          </div>
        </Link>
        <span className='font-semibold mt-2'>Địa chỉ: Số 7 Ngõ 241 Điện Biên, Lộc<br /> Hoà, Nam Định</span>
        <span className='font-semibold mt-2'>Hotline: 09 9999 9999</span>
        <span className='font-semibold mt-2'>Email: quytahmkench@gmail.com</span>
      </div>
      <div className='flex flex-col'>
        <span className='font-semibold text-lg'>Hỗ trợ khách hàng</span>
        <span className='mt-2'>Câu hỏi thường gặp</span>
        <span className='mt-2'>Điều khoản dịch vụ</span>
      </div>
      <div className='flex flex-col'>
        <span className='font-semibold text-lg'>Chính sách dịch vụ</span>
        <span className='mt-2'>Chính sách bảo mật</span>
        <span className='mt-2'>Chính sách thanh toán</span>
        <span className='mt-2'>Chính sách vận chuyển</span>
        <span className='mt-2'>Chính sách đổi trả</span>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.67846158441773!2d106.16306760122339!3d20.430031503456433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e756dae56d0d%3A0x97cbf14af357037e!2zMjQxIMSQaeG7h24gQmnDqm4sIEzhu5ljIEhvw6AsIFRQLiBOYW0gxJDhu4tuaCwgTmFtIMSQ4buLbmg!5e0!3m2!1svi!2s!4v1714743573482!5m2!1svi!2s'
        width={200}
        height={200}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='border-none my-auto rounded-lg'
      />
    </div>
  )
}