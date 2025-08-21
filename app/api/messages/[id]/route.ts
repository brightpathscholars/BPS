import { put, list, del } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

function validatePassword(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password")
  return password === "1351"
}

// PUT - Update message status (mark as read/unread)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (!validatePassword(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { status } = await request.json()
    const messageId = params.id

    // Find the existing message
    const { blobs } = await list({ prefix: "messages/" })
    const messageBlob = blobs.find((blob) => blob.pathname.includes(`message-${messageId}.json`))

    if (!messageBlob) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    // Get current message data
    const response = await fetch(messageBlob.url)
    const messageData = await response.json()

    // Update status
    messageData.status = status

    // Delete old blob and create new one
    await del(messageBlob.url)
    await put(`messages/message-${messageId}.json`, JSON.stringify(messageData, null, 2), {
      access: "public",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating message:", error)
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 })
  }
}

// DELETE - Delete a message
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (!validatePassword(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const messageId = params.id

    // Find and delete the message
    const { blobs } = await list({ prefix: "messages/" })
    const messageBlob = blobs.find((blob) => blob.pathname.includes(`message-${messageId}.json`))

    if (!messageBlob) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    await del(messageBlob.url)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting message:", error)
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 })
  }
}
