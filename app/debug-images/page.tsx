"use client"

import { useEffect, useState } from "react"

interface BlobFile {
  url: string
  pathname: string
  filename: string
  size: number
  uploadedAt: string
}

export default function DebugImagesPage() {
  const [files, setFiles] = useState<BlobFile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((data) => {
        console.log("[v0] Blob files:", data.files)
        setFiles(data.files || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("[v0] Error fetching files:", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="p-8">Loading Blob images...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug: Blob Storage Images</h1>
      <p className="mb-4">Found {files.length} images in Blob storage:</p>

      {files.map((file, index) => (
        <div key={file.url} className="mb-6 p-4 border rounded">
          <h3 className="font-semibold">
            Image {index + 1}: {file.filename}
          </h3>
          <p className="text-sm text-gray-600 mb-2">URL: {file.url}</p>
          <img
            src={file.url || "/placeholder.svg"}
            alt={`Blob image ${index + 1}`}
            className="max-w-md h-auto border"
            onLoad={() => console.log(`[v0] Image ${index + 1} loaded successfully`)}
            onError={() => console.log(`[v0] Image ${index + 1} failed to load`)}
          />
        </div>
      ))}
    </div>
  )
}
