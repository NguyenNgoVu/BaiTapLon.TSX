import Image from '../Image/Image'

function Novel() {
  return (
    <div className='grid mobile:grid-cols-4 grid-cols-5 gap-9'>
      <Image src='ncbbd' title='Cậu bé Bi Đất' />
      <Image src='ncgvx' title='Còng Gió Vân Xanh' />
      <Image src='nlknh' title='Lạc khỏi ngân hà' />
      <Image src='nllsp' title='Lặng lẽ Sa Pa' />
      <Image src='nbctlm' title='Bạn có thích làm mèo?' />
      <Image src='nnhkch' title='Người Huế kể chuyện Huế' />
      <Image src='nnlvh' title='Nhẩy lên và hét' />
      <Image src='nncv' title='Nhóc cá vàng' />
      <Image src='nndmn' title='Những đám mây ngoan' />
      <Image src='ntdtth' title='Truyện đồng thoại Tô Hoài' />
    </div>
  )
}

export default Novel
