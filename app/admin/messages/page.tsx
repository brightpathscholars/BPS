"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Mail, MailOpen, Phone, User, GraduationCap, BookOpen, Clock, Lock } from "lucide-react"

interface Message {
  id: string
  timestamp: string
  name: string
  email: string
  phone: string
  gradeLevel: string
  subjects: string
  message: string
  status: "read" | "unread"
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")

  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin-authenticated")
    if (savedAuth === "true") {
      setIsAuthenticated(true)
      fetchMessages()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "1351") {
      setIsAuthenticated(true)
      sessionStorage.setItem("admin-authenticated", "true")
      setAuthError("")
      fetchMessages()
    } else {
      setAuthError("Incorrect password")
    }
  }

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/messages", {
        headers: {
          "x-admin-password": "1351",
        },
      })
      if (response.status === 401) {
        setIsAuthenticated(false)
        sessionStorage.removeItem("admin-authenticated")
        return
      }
      const data = await response.json()
      setMessages(data.messages || [])
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateMessageStatus = async (id: string, status: "read" | "unread") => {
    try {
      await fetch(`/api/messages/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": "1351",
        },
        body: JSON.stringify({ status }),
      })
      fetchMessages()
    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  const deleteMessage = async (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await fetch(`/api/messages/${id}`, {
          method: "DELETE",
          headers: {
            "x-admin-password": "1351",
          },
        })
        fetchMessages()
      } catch (error) {
        console.error("Error deleting message:", error)
      }
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Lock className="h-12 w-12 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <p className="text-gray-600">Enter password to view client messages</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="mt-1"
                />
              </div>
              {authError && <p className="text-red-600 text-sm">{authError}</p>}
              <Button type="submit" className="w-full">
                Access Messages
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Loading messages...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Messages</h1>
              <p className="text-gray-600">Manage consultation requests and messages from potential clients</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setIsAuthenticated(false)
                sessionStorage.removeItem("admin-authenticated")
              }}
            >
              Logout
            </Button>
          </div>
        </div>

        {messages.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
              <p className="text-gray-500">Messages from your contact form will appear here.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <Card
                key={message.id}
                className={`${message.status === "unread" ? "border-orange-200 bg-orange-50" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-600" />
                        <CardTitle className="text-lg">{message.name}</CardTitle>
                      </div>
                      <Badge variant={message.status === "unread" ? "destructive" : "secondary"}>
                        {message.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateMessageStatus(message.id, message.status === "read" ? "unread" : "read")}
                      >
                        {message.status === "read" ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                        Mark as {message.status === "read" ? "Unread" : "Read"}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => deleteMessage(message.id)}>
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatDate(message.timestamp)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <a href={`mailto:${message.email}`} className="text-blue-600 hover:underline">
                        {message.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <a href={`tel:${message.phone}`} className="text-blue-600 hover:underline">
                        {message.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-gray-400" />
                      <span>{message.gradeLevel}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">Subjects:</span>
                    <span>{message.subjects}</span>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Message:</h4>
                    <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
