function SaleSVG({ height, width }: { height: string, width: string }) {
  return (
    <div className='flex absolute'>
      <svg className='relative' height={height} width={width} version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 512.00 512.00' xmlSpace='preserve' fill='#000000' transform='rotate(0)' stroke='#000000' stroke-width='0.00512'>
        <path fill='#01a14b' d='M512,256.792l-67.2-54.224l43.2-74.96l-91.2-7.968l-8-87.728L312,68.6L259.2,0.008l-49.6,70.176 l-80-41.472l-4.8,90.912l-89.6,4.784l33.6,86.128L0,252.008l70.4,52.64l-35.2,74.96l88,9.568l4.8,89.328l81.6-38.288l54.4,71.776 l48-71.776l75.2,36.688l6.4-89.328l88-1.6l-32-73.376L512,256.792z' />
      </svg>
      <span className='absolute mt-4 text-white font-semibold ml-[10px] text-sm'>-30%</span>
    </div>
  )
}

export default SaleSVG
