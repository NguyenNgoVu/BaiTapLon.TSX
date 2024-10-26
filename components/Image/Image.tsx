import { default as ImageNext } from 'next/image'
import Link from 'next/link'

function Image({ src, title }: { src: string, title: string }) {
  return (
    <Link href={`/Book/${src}`} className='grid grid-cols-1 cursor-pointer'>
      <ImageNext className='h-[300px] w-[200px]' src={`/books/${src}.png`} alt={''} width={200} height={300} />
      <span className='text-center font-semibold max-w-[200px]'>{title}</span>
    </Link>
  )
}

export default Image
