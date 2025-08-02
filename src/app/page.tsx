"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  Star,
  Settings,
  Github,
  Zap,
  Code,
  Palette,
  Play,
  ArrowRight,
  Terminal,
  Layers,
  Rocket,
} from "lucide-react"

export default function Home() {
  const [count, setCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const features = [
    {
      icon: Zap,
      title: "Electron",
      description: "Cross-platform desktop apps",
      detail: "Build native desktop applications using web technologies",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Code,
      title: "Next.js 15",
      description: "React framework with App Router",
      detail: "Server-side rendering and optimized performance",
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      icon: Palette,
      title: "shadcn/ui",
      description: "Beautiful UI components",
      detail: "Copy-paste components with Tailwind CSS",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Settings,
      title: "TypeScript",
      description: "Type-safe development",
      detail: "Full type safety and excellent developer experience",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <main className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl px-4">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Modern Desktop
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  App Template
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A production-ready template for building beautiful desktop applications with the latest web
                technologies. Built with Electron, Next.js 15, shadcn/ui, and TypeScript.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
                <Github className="h-5 w-5 mr-2" />
                View Source
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50k+</div>
                <div className="text-sm text-slate-600 mt-1">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">2.1k</div>
                <div className="text-sm text-slate-600 mt-1">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600 mt-1">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Built with Modern Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leverage the power of cutting-edge web technologies to build fast, reliable desktop applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto w-14 h-14 ${feature.lightColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-7 w-7 ${feature.textColor}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-slate-600 text-center leading-relaxed">{feature.detail}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Interactive Components</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the power of React state management and beautiful UI components in action.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Enhanced Counter Demo */}
            <Card className="shadow-lg border-0 bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50 border-b">
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Star className="h-5 w-5 text-yellow-500" />
                  State Management Demo
                </CardTitle>
                <CardDescription>Interactive counter with smooth animations and state</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300">
                      {count}
                    </div>
                    <div className="text-sm text-slate-500 mt-2">Current Count</div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <Button
                      variant="outline"
                      onClick={() => setCount(Math.max(0, count - 1))}
                      className="border-slate-200 hover:bg-slate-50"
                      disabled={count <= 0}
                    >
                      Decrease
                    </Button>
                    <Button
                      onClick={() => setCount(count + 1)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Increase
                    </Button>
                    <Button variant="destructive" onClick={() => setCount(0)} disabled={count === 0}>
                      Reset
                    </Button>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsLiked(!isLiked)}
                      className={`transition-colors ${isLiked ? "text-red-500 hover:text-red-600" : "text-slate-400 hover:text-red-500"}`}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                      {isLiked ? "Liked!" : "Like this"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start Section */}
        <section>
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl text-white mb-2">
                <Rocket className="h-6 w-6" />
                Quick Start Guide
              </CardTitle>
              <CardDescription className="text-blue-200 text-lg">
                Get your desktop app running in under 5 minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Terminal</span>
                </div>
                <code className="text-sm font-mono text-green-300 block">
                  git clone https://github.com/alezzanderg/next-electron-app
                </code>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Clone Repository", desc: "Download the template" },
                  { step: "2", title: "Install Dependencies", desc: "Run npm install" },
                  { step: "3", title: "Start Development", desc: "Launch your app" },
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-lg font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-sm text-blue-200">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  View Full Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="text-slate-600">Created with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-slate-600">by</span>
              <a
                href="https://github.com/alezzanderg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
              >
                <Github className="h-4 w-4" />
                @alezzanderg
              </a>
            </div>

            <Separator className="max-w-md mx-auto" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span>Built with Next.js 15</span>
              </div>
              <span className="hidden sm:block">•</span>
              <span>Powered by Electron, TypeScript, Tailwind CSS, and shadcn/ui</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
