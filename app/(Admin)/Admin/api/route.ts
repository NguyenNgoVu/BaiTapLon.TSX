'use server'

import { NextRequest } from 'next/server'
import { getConnection } from './database'

export async function GET(request: NextRequest) {
  const params = new URL(request.url).searchParams
  const table = params.get('table')
  if (!table) return Response.json({ error: 'WTF?' })

  const connection = await getConnection()
  const [results] = await connection.query(`SELECT * FROM ${params.get('table')}`)

  return Response.json(results)
}

export async function POST(request: NextRequest) {
  const params = new URL(request.url).searchParams
  const table = params.get('table')
  if (!table) return Response.json({ error: 'WTF?' })

  const connection = await getConnection()
  const [results] = await connection.query(await request.text())

  return Response.json(results)
}