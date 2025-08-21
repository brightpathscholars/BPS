"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Upload, Copy, Check } from "lucide-react"
import { toast } from "sonner"

interface BlobFile {
  url: string
  filename: string
  size: number
  uploadedAt: string
}

export default function AdminPage() {
  const [files, setFiles] = useState<BlobFile[]>([])
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/list")
      const data = await response.json()
      setFiles(data.files || [])
    } catch (error) {
      toast.error("Failed to load files")
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast.success("File uploaded successfully")
        fetchFiles() // Refresh the list
        // Reset the input
        event.target.value = ""
      } else {
        const error = await response.json()
        toast.error(error.error || "Upload failed")
      }
    } catch (error) {
      toast.error("Upload failed")
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (url: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return

    try {
      const response = await fetch("/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      if (response.ok) {
        toast.success("File deleted successfully")
        fetchFiles() // Refresh the list
      } else {
        toast.error("Delete failed")
      }
    } catch (error) {
      toast.error("Delete failed")
    }
  }

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedUrl(url)
      toast.success("URL copied to clipboard")
      setTimeout(() => setCopiedUrl(null), 2000)
    } catch (error) {
      toast.error("Failed to copy URL")
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BrightPath Scholars - Image Manager</h1>
          <p className="text-lg text-gray-600">Upload and manage images for your website</p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload New Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="file-upload">Choose Image File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  disabled={uploading}
                  className="mt-1"
                />
              </div>
              <p className="text-sm text-gray-500">Supported formats: JPG, PNG, GIF, WebP. Max size: 5MB</p>
              {uploading && <div className="text-blue-600 font-medium">Uploading...</div>}
            </div>
          </CardContent>
        </Card>

        {/* Files Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Images ({files.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : files.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No images uploaded yet</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {files.map((file) => (
                  <div key={file.url} className="border rounded-lg p-4 space-y-3">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={file.url || "/placeholder.svg"}
                        alt={file.filename}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm truncate" title={file.filename}>
                        {file.filename}
                      </h3>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(file.url)} className="flex-1">
                        {copiedUrl === file.url ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(file.url)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-gray-400 font-mono break-all">{file.url}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
