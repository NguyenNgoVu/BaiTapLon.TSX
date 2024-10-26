import { default as ImageNext } from 'next/image'
import Link from 'next/link'
import SaleSVG from './SaleSVG'

function Image({ src, title }: { src: string, title: string }) {
  return (
    <Link href={`/Book/${src}`} className='flex flex-col cursor-pointer'>
      <ImageNext className='h-[300px] w-[200px]' src={`/books/${src}.png`} alt={''} width={200} height={300} />
      <SaleSVG height='50px' width='50px'/>
      <span className='text-center font-semibold max-w-[200px]'>{title}</span>
    </Link>
  )
}

export default Image
