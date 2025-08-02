# Next.js + Electron + shadcn/ui Desktop App Template

A modern desktop application template built with Next.js 15, Electron, TypeScript, Tailwind CSS, and shadcn/ui components. Perfect for building cross-platform desktop applications with web technologies.

**Template by [@alezzanderg](https://github.com/alezzanderg)**

## Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 🖥️ **Electron** for cross-platform desktop app
- 🎨 **shadcn/ui** for beautiful, accessible components
- 🎯 **TypeScript** for type safety
- 💨 **Tailwind CSS** for rapid styling
- 📱 **Responsive Design** that works in desktop windows
- 🔧 **Modern Development Tools** with hot reload
- 🎨 **Custom Title Bar** with logo and badge (global layout)
- 🖱️ **Draggable Window** with custom controls

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Desktop**: Electron 37
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **Build Tools**: electron-builder, concurrently

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alezzanderg/next-electron-app.git
cd next-electron-app
```

2. Install dependencies:
```bash
npm install
```

3. Build Electron files:
```bash
npm run build-electron-main
```

4. Start development:
```bash
npm run electron
```

## Development Commands

### Essential Commands

```bash
# Build Electron TypeScript files
npm run build-electron-main

# Start development server (Next.js + Electron)
npm run electron

# Alternative development command
npm run electron-dev

# Build for production
npm run build-electron

# Package for distribution
npm run dist
```

### All Available Scripts

- `npm run dev` - Start Next.js development server only
- `npm run build` - Build Next.js for production
- `npm run build-electron-main` - Compile Electron TypeScript files
- `npm run build-electron` - Build both Next.js and Electron
- `npm run electron` - Run Electron in development mode
- `npm run electron-dev` - Alternative development command
- `npm run dist` - Package for current platform
- `npm run dist-win` - Package for Windows
- `npm run dist-mac` - Package for macOS

## Customization Guide

### Title Bar Customization

The title bar is now located in the layout and can be customized in several places:

#### 1. Logo and Badge (Layout Component)
Edit `src/app/layout.tsx`:

```tsx
// Change the logo emoji and badge
<TitleBar badgeText="YOUR-APP" badgeColor="#your-color" logoText="🚀" />
```

#### 2. Title Bar Component (Customization)
Edit `src/components/title-bar.tsx`:

```tsx
// Customize the title bar component
export function TitleBar({ 
  badgeText = "YOUR-APP", 
  badgeColor = "#your-color", 
  logoText = "🚀" 
}: TitleBarProps) {
  // ... component code
}
```

#### 3. Title Bar Background Color
Edit `src/components/title-bar.tsx`:

```tsx
// Change the background color class
className="fixed top-0 left-0 right-0 h-8 bg-zinc-900 flex items-center justify-between px-4 z-50"
// Change bg-zinc-900 to your preferred color (e.g., bg-gray-800, bg-slate-900)
```

#### 4. Window Controls Background (Electron)
Edit `electron/main.ts`:

```typescript
titleBarOverlay: {
  color: '#18181b', // Change this color to match your title bar
  symbolColor: '#ffffff', // Color of minimize/maximize/close buttons
  height: 32
}
```

### Color Reference

Common background colors to use:
- `#18181b` (zinc-900) - Dark gray
- `#1f2937` (gray-800) - Medium dark gray
- `#111827` (gray-900) - Very dark gray
- `#0f172a` (slate-900) - Dark slate

### Complete Customization Example

1. **Update Layout Component** (`src/app/layout.tsx`):
```tsx
<TitleBar 
  badgeText="YOUR-APP" 
  badgeColor="#your-brand-color" 
  logoText="🚀" 
/>
```

2. **Update Title Bar Component** (`src/components/title-bar.tsx`):
```tsx
// Change background color
className="fixed top-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-between px-4 z-50"

// Change logo text
<span className="text-white text-lg font-bold mr-2">{logoText}</span>
<span className="text-white text-sm font-medium">Your App Name</span>
```

3. **Update Electron Configuration** (`electron/main.ts`):
```typescript
titleBarOverlay: {
  color: '#1f2937', // Match your title bar background
  symbolColor: '#ffffff', // Button colors
  height: 32
}
```

## Project Structure

```
├── electron/           # Electron main process files
│   ├── main.ts        # Main Electron process (window controls)
│   ├── preload.ts     # Preload script
│   └── util.ts        # Utility functions
├── src/               # Next.js application
│   ├── app/           # App Router pages
│   │   ├── layout.tsx # Root layout with TitleBar
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── title-bar.tsx  # Custom title bar component
│   └── lib/           # Utility libraries
├── public/            # Static assets
└── dist/              # Built Electron files
```

## Adding shadcn/ui Components

Add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add toast
npx shadcn@latest add table
```

## Building for Production

The application uses Next.js static export to generate static files that Electron can serve. The build process:

1. Next.js builds and exports static files to `/out`
2. TypeScript compiles Electron files to `/dist`
3. electron-builder packages everything into distributable formats

### Build Commands

```bash
# Build everything for production
npm run build-electron

# Package for distribution
npm run dist          # Current platform
npm run dist-win      # Windows
npm run dist-mac      # macOS
```

## Cross-Platform Support

The app is configured to build for:
- **Windows**: NSIS installer (.exe)
- **macOS**: DMG package (.dmg) for both Intel and Apple Silicon
- **Linux**: AppImage (.AppImage)

## Troubleshooting

### Common Issues

1. **Electron can't find main.js**: Run `npm run build-electron-main` first
2. **Title bar not draggable**: Ensure `WebkitAppRegion: 'drag'` is set in title-bar.tsx
3. **Window controls have different background**: Match the `color` in `titleBarOverlay` with your title bar background

### Development Tips

- Always run `npm run build-electron-main` after changing Electron files
- Use `npm run electron` for development (not just `npm run dev`)
- The title bar only appears in Electron, not in browser development
- The TitleBar is in the layout, so it appears on all pages globally

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Electron](https://www.electronjs.org/) - Desktop app framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

**Template by [@alezzanderg](https://github.com/alezzanderg)** - Feel free to star and contribute! ⭐

