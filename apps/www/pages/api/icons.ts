import { NextResponse } from 'next/server'
import { fetchCollection } from '@/lib/icons/collection'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await fetchCollection(params.id)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.error()
  }
}