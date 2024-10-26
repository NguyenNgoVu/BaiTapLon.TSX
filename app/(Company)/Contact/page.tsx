'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <div className='mx-72'>
      <p className='text-2xl font-semibold mb-2'>Check map tại đây:</p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.67846158441773!2d106.16306760122339!3d20.430031503456433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e756dae56d0d%3A0x97cbf14af357037e!2zMjQxIMSQaeG7h24gQmnDqm4sIEzhu5ljIEhvw6AsIFRQLiBOYW0gxJDhu4tuaCwgTmFtIMSQ4buLbmg!5e0!3m2!1svi!2s!4v1714743573482!5m2!1svi!2s'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='border-none my-auto rounded-lg w-full h-[50dvh]'
      />

      <p className='text-xl mt-5 font-semibold'>Thông tin liên hệ:</p>

      <p><span className='font-semibold text-2xl justify-center mr-2'>&#187;</span><span className='italic underline text-lg'>Website:</span> <Link href='https://nguyenngovu.com'>https://norwayniggervtuber.com/</Link></p>
      <p><span className='font-semibold text-2xl justify-center mr-2'>&#187;</span><span className='italic underline text-lg'>Fanpage:</span> <Link href='https://www.facebook.com/100016773610729'>https://www.facebook.com/100016773610729/</Link></p>
      <p><span className='font-semibold text-2xl justify-center mr-2'>&#187;</span><span className='italic underline text-lg'>Hotline:</span> 09 9999 9999</p>
    </div>
  )
}
