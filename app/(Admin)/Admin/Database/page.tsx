'use client'

import { BookInfo } from '@/app/(App)/Book/[book]/actions'
import Link from 'next/link'
import { useState } from 'react'

export default function Database() {
  const [data, setData] = useState<BookInfo[] | null>(null)
  const [table, setTable] = useState('')
  const [modal, setModal] = useState(-1)
  const [confirm, setConfirm] = useState(false)

  const getTableData = async () => {
    const e = document.getElementById('tables')! as HTMLSelectElement
    const res = await fetch(`/Admin/api?table=${e.value}`)
    setTable(e.value)
    setData(await res.json())
  }

  const insertToTable = async (column: string[]) => {
    const values = []
    for (let i = 0; i < column.length; i++) {
      const e = document.getElementById(`new_${column[i]}`)! as HTMLTextAreaElement
      values.push(e.value)
    }
    if (!values.every(e => e.length > 0)) return alert('VUI LÒNG NHẬP ĐẦY ĐỦ DỮ LIỆU')

    await fetch(`/Admin/api?table=${table}`, {
      method: 'POST',
      body: `INSERT INTO ${table} VALUES (${values.map(e => `'${e}'`).join(', ')})`
    })

    await getTableData()
    for (let i = 0; i < column.length; i++) {
      const e = document.getElementById(`new_${column[i]}`)! as HTMLTextAreaElement
      e.value = ''
    }
  }

  const updateRow = async () => {
    const columns = Object.keys(data![modal])
    let setStatement = 'SET '

    for (let i = 0; i < columns.length; i++) {
      const e = document.getElementById(`edit_${columns[i]}`)! as HTMLTextAreaElement
      if (!(e.value.length > 0)) return alert('VUI LÒNG NHẬP ĐẦY ĐỦ DỮ LIỆU')

      setStatement += `\`${columns[i]}\` = '${e.value}', `
    }

    await fetch(`/Admin/api?table=${table}`, {
      method: 'POST',
      body: `UPDATE ${table} ${setStatement.slice(0, -2)} WHERE (\`${columns[0]}\` = '${Object.values(data![modal])[0]}');`
    })

    await getTableData()
    setModal(-1)
  }

  const deleteRow = async () => {
    const columns = Object.keys(data![modal])

    await fetch(`/Admin/api?table=${table}`, {
      method: 'POST',
      body: `DELETE FROM ${table} WHERE (\`${columns[0]}\` = '${Object.values(data![modal])[0]}');`
    })

    await getTableData()
    setConfirm(false)
    setModal(-1)
  }

  return (
    <>

      {/* CONFIRM DELETE MODAL */}
      <div className={`${confirm ? 'absolute' : 'hidden'} flex z-50 top-0 left-0 backdrop-blur bg-gray-400/50 w-screen h-screen`}>
        <div className='flex flex-col bg-gray-200 m-auto rounded-lg p-3 h-52'>
          <span className='text-center text-2xl font-bold pb-2'>XOÁ DỮ LIỆU</span>
          <span className='text-center text-lg'>Hành động này không thể được hoàn tác</span>
          <span className='text-center text-lg'>Bạn có chắc chắn muốn thực hiện?</span>
          <div className='flex-grow'></div>
          <div className='flex flex-row gap-3'>
            <span className='bg-red-500 p-2 w-20 text-center rounded-md text-white font-semibold cursor-pointer select-none' onClick={deleteRow}>Xoá</span>
            <div className='flex-grow'></div>
            <span className='bg-green-500 p-2 w-20 text-center rounded-md text-white font-semibold cursor-pointer select-none' onClick={() => setConfirm(false)}>Huỷ</span>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className={`${modal > -1 ? 'absolute' : 'hidden'} flex z-40 top-0 left-0 backdrop-blur bg-gray-400/50 w-screen h-screen`}>
        <div className='flex flex-col w-1/2 h-[70%] bg-gray-200 m-auto rounded-lg p-3'>
          <div>
            <table className='w-[90%] h-full mx-auto'>
              <tbody>
                {
                  modal > -1 &&
                  <>
                    <tr>
                      <td className='p-2 border-b border-b-gray-400 w-[20%] text-right pr-2 font-semibold text-xl'>{Object.keys(data![modal])[0]}:</td>
                      <td className='p-2 border-b border-b-gray-400 w-[80%]'>
                        <textarea id={`edit_${Object.keys(data![modal])[0]}`} readOnly value={data![modal][Object.keys(data![modal])[0] as keyof BookInfo]} className='p-1 w-full bg-gray-100 px-2 text-justify rounded-xl resize-none' rows={1} />
                      </td>
                    </tr>
                    {Object.entries(data![modal]).slice(1).map(e => (
                      <tr key={`modal_${e[0]}`}>
                        <td className='p-2 border-b border-b-gray-400 w-[20%] text-right pr-2 font-semibold text-xl'>{e[0]}:</td>
                        <td className='p-2 border-b border-b-gray-400 w-[80%]'>
                          <textarea id={`edit_${e[0]}`} defaultValue={e[1]} className='p-1 w-full bg-gray-50 px-2 text-justify rounded-xl resize-none' rows={e[1].length > 100 ? e[1].length / 100 : 1} />
                        </td>
                      </tr>
                    ))}
                  </>
                }
              </tbody>
            </table>
          </div>
          <div className='flex-grow'></div>
          <div className='flex flex-row gap-3'>
            <span className='bg-red-500 p-2 w-20 text-center rounded-md text-white font-semibold cursor-pointer select-none' onClick={() => setConfirm(true)}>Xoá</span>
            <div className='flex-grow'></div>
            <span className='bg-green-500 p-2 w-20 text-center rounded-md text-white font-semibold cursor-pointer select-none' onClick={updateRow}>Sửa</span>
            <span className='bg-blue-500 p-2 w-20 text-center rounded-md text-white font-semibold cursor-pointer select-none' onClick={() => setModal(-1)}>Đóng</span>
          </div>
        </div>
      </div>

      <span className='text-2xl font-bold mb-5 text-center'>QUẢN LÝ DỮ LIỆU</span>

      <div className='grid grid-cols-1 w-[80%] mx-auto h-fit'>
        <div className='mx-auto flex flex-row w-full items-center gap-4'>
          <span className='font-semibold text-xl w-1/5 text-right h-full underline underline-offset-8'>Chọn bảng: </span>
          <select name="tables" id="tables" className='border-2 border-gray-300 rounded-md w-3/5 h-10 text-center font-semibold text-xl'>
            <option value="sach">Sách</option>
            <option value="theloai">Thể Loại</option>
            <option value="hdn">Hoá Đơn Nhập</option>
            <option value="ncc">Nhà Cung Cấp</option>
            <option value="dvvc">Đơn Vị Vận Chuyển</option>
            <option value="kh">Khách Hàng</option>
            <option value="hddt">Hoá Đơn Điện Tử</option>
          </select>
          <div className='h-full p-1 px-2 text-center rounded-xl bg-[#01a14b] text-white cursor-pointer' onClick={getTableData}>
            <Link href={'#'} className='font-semibold text-xl'>TRUY XUẤT</Link>
          </div>
        </div>

        {(() => {
          if (data) {
            if (data.length > 0)
              return (
                <div className='h-[70dvh] table-auto border-2 border-gray-400 rounded-xl mt-5 overflow-hidden overflow-y-scroll'>

                  <table className='w-full justify-center mx-auto rounded-xl'>

                    <thead>
                      <tr className='border-b-2 border-b-gray-300 bg-gray-200'>
                        {Object.keys(data[0]).map(e => <th id={e} key={e} className='px-2 text-xl text-left'>{e}</th>)}
                        <th id='edit' key='edit' className='px-2 text-xl text-center'>Sửa</th>
                      </tr>
                    </thead>

                    <tbody>

                      {data.map((value, i) => {
                        return <tr key={i} className='border-b-2 border-gray-200'>
                          {
                            Object.entries(value).map(e => (
                              <td key={`${i}_e[0]`} className='px-2 font-semibold'>
                                <textarea readOnly id={`${Object.values(value)[0]}_${e[0]}`} rows={4} value={e[1]} className='w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' />
                              </td>
                            ))
                          }
                          <td className='px-2 font-semibold text-center'>
                            <span id={`${Object.values(value)[0]}_edit`} className='text-lg text-blue-600 cursor-pointer select-none' onClick={() => setModal(i)}>Sửa</span>
                          </td>
                        </tr>
                      })}

                      <tr className='border-b-2 border-gray-200'>
                        {Object.keys(data[0]).map(e => (
                          <td key={`add_${e}`} className='px-2 font-semibold'>
                            <textarea placeholder={`Điền ${e}`} id={`new_${e}`} rows={4} className='px-1 w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' required />
                          </td>
                        ))}
                        <td className='px-2 font-semibold text-center'>
                          <span className='text-lg text-blue-600 cursor-pointer' onClick={() => insertToTable(Object.keys(data[0]))}>Thêm</span>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                </div>
              )
            else return (<span className='text-center text-2xl mt-2 font-semibold'>KHÔNG CÓ DỮ LIỆU NÀO TRONG BẢNG</span>)
          }
          else return (<span className='text-center text-2xl mt-2 font-semibold'>VUI LÒNG BẤM TRUY XUẤT ĐỂ LẤY DỮ LIỆU</span>)
        })()}

      </div>
    </>
  )
}