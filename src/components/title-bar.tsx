'use client'

import { useEffect, useState } from 'react'

interface TitleBarProps {
  badgeText?: string
  badgeColor?: string
  logoText?: string
}

export function TitleBar({ badgeText = "APP", badgeColor = "#3b82f6", logoText = "⚡" }: TitleBarProps) {
  const [isElectron, setIsElectron] = useState(false)

  useEffect(() => {
    // Check if we're running in Electron
    setIsElectron(window.navigator.userAgent.includes('Electron'))
  }, [])

  if (!isElectron) {
    return null // Don't render title bar in browser
  }

  return (
    <div 
    // line 12 of main.ts to modify the color of the windows resizable buttons currently we using #18181b
      className="fixed top-0 left-0 right-0 h-8 bg-zinc-900 flex items-center justify-between px-4 z-50" 
      style={{ 
        height: '32px', // Match the titleBarOverlay height
        WebkitAppRegion: 'drag',
        WebkitUserSelect: 'none'
      } as React.CSSProperties}
    >
      {/* Logo on the left */}
      <div className="flex items-center">
        <span className="text-white text-lg font-bold mr-2">{logoText}</span>
        <span className="text-white text-sm font-medium">Next Electron</span>
      </div>
      
      {/* Badge in the center */}
      <div 
        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
        style={{ backgroundColor: badgeColor }}
      >
        {badgeText}
      </div>
      
      {/* Spacer on the right to balance the layout */}
      <div className="w-20"></div>
    </div>
  )
} 