import ImageSale from '../Image/ImageSale'

function Sale() {
  return (
    <div className='grid mobile:grid-cols-4 grid-cols-5 gap-9'>
      <ImageSale src='e2' title='Lớp học đề cao thực lực - 2' />
      <ImageSale src='e3' title='Lớp học đề cao thực lực - 3' />
      <ImageSale src='e4' title='Lớp học đề cao thực lực - 4' />
      <ImageSale src='a1' title='Arya bàn bên - 1' />
      <ImageSale src='t1' title='Thiên sứ nhà bên - 1' />
      <ImageSale src='t2' title='Thiên sứ nhà bên - 2' />
      <ImageSale src='861' title='Eighty Six - 1' />
      <ImageSale src='ntdtth' title='Truyện đồng thoại Tô Hoài' />
      <ImageSale src='nnhkch' title='Người Huế kể chuyện Huế' />
      <ImageSale src='nllsp' title='Lặng lẽ Sa Pa' />
    </div>
  )
}

export default Sale
