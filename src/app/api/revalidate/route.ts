import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {

    const secret = request.headers.get('x-webhook-secret')
    const expectedSecret = process.env.NEXT_PUBLIC_WEBHOOK_SECRET
    console.log('Received secret:', secret)
    console.log('Expected secret:', expectedSecret)
    if (secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] Starting revalidation...`)

    const paths = ['/', '/projects', '/contact', '/pages', '/[slug]']
    for (const path of paths) {
      console.log(`[${timestamp}] Revalidating path: ${path}`)
      revalidatePath(path)
    }

    console.log(`[${timestamp}] Revalidation completed successfully`)

    return NextResponse.json({ 
      revalidated: true, 
      message: 'Paths revalidated successfully',
      timestamp,
      paths
    })
  } catch (err) {
    const timestamp = new Date().toISOString()
    console.error(`[${timestamp}] Revalidation error:`, err)
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error',
      timestamp 
    }, { status: 500 })
  }
} 
