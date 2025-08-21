import { put, list } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

// POST - Save a new message
export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create message object with timestamp and ID
    const message = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      gradeLevel: formData.gradeLevel,
      subjects: formData.subjects,
      message: formData.message,
      status: "unread",
    }

    // Save to Blob storage
    const filename = `messages/message-${message.id}.json`
    const blob = await put(filename, JSON.stringify(message, null, 2), {
      access: "public",
    })

    return NextResponse.json({ success: true, messageId: message.id })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}

// GET - Retrieve all messages
export async function GET() {
  try {
    const { blobs } = await list({ prefix: "messages/" })

    const messages = await Promise.all(
      blobs.map(async (blob) => {
        const response = await fetch(blob.url)
        const messageData = await response.json()
        return messageData
      }),
    )

    // Sort by timestamp (newest first)
    messages.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return NextResponse.json({ messages })
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
