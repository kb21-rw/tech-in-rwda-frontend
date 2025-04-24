export const triggerRevalidation = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': process.env.WEBHOOK_SECRET || '',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to revalidate: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error triggering revalidation:', error)
    throw error
  }
} 