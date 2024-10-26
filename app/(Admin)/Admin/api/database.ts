'use server'

import mysql2 from 'mysql2/promise'

let connection = mysql2.createPool({
  host: 'localhost',
  port: 3306,
  database: 'nnv',
  user: 'root',
  password: 'nghia1123',
  waitForConnections: true,
  enableKeepAlive: true,
})

export async function getConnection() {
  return connection
}