'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Heart, Star, Settings, User } from 'lucide-react'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Hello ${name}! Your email is ${email}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Next.js + Electron + shadcn/ui
          </h1>
          <p className="text-lg text-gray-600">
            A modern desktop application built with the latest web technologies
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Modern UI
              </CardTitle>
              <CardDescription>
                Beautiful components built with shadcn/ui and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Responsive design that works perfectly in desktop applications
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-500" />
                TypeScript
              </CardTitle>
              <CardDescription>
                Full type safety and excellent developer experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Catch errors at compile time and enjoy better IDE support
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Cross-Platform
              </CardTitle>
              <CardDescription>
                Works on Windows, macOS, and Linux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Build once, run everywhere with Electron
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Demo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Contact Form Demo
              </CardTitle>
              <CardDescription>
                Try out the form components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Form
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Counter Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
              <CardDescription>
                Test button interactions and state management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {count}
                </div>
                <div className="flex gap-2 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setCount(count - 1)}
                  >
                    Decrease
                  </Button>
                  <Button
                    onClick={() => setCount(count + 1)}
                  >
                    Increase
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Built with Next.js {process.env.NODE_ENV === 'development' ? '(Development)' : '(Production)'}</p>
          <p>Powered by Electron, TypeScript, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </div>
  )
}

