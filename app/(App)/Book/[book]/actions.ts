'use server'

import { RowDataPacket } from 'mysql2'
import { getConnection } from '../../../(Admin)/Admin/api/database'

export interface BookInfo {
  maSach: string,
  tenSach: string,
  tacGia: string,
  maTheLoai: string,
  giaNhap: number,
  giaBan: number,
  soLuong: number,
  moTa: string
}

interface GenreInfo {
  maTheLoai: string,
  tenTheLoai: string
}

export async function getBook(bookID: string) {
  const connection = await getConnection()
  let bookQuery = (await connection.query<BookInfo[] & RowDataPacket[]>(`SELECT * FROM sach WHERE maSach='${bookID}'`))[0]
  let genreQuery = (await connection.query<GenreInfo[] & RowDataPacket[]>(`SELECT * FROM theloai`))[0]

  return {
    ...bookQuery[0],
    maTheLoai: bookQuery[0].maTheLoai.split(', ').map(e => genreQuery.find(i => i.maTheLoai === e)!.tenTheLoai).join(', ')
  }
}