# Next.js + Electron + shadcn/ui Desktop App

A modern desktop application built with Next.js 15, Electron, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 🖥️ **Electron** for cross-platform desktop app
- 🎨 **shadcn/ui** for beautiful, accessible components
- 🎯 **TypeScript** for type safety
- 💨 **Tailwind CSS** for rapid styling
- 📱 **Responsive Design** that works in desktop windows
- 🔧 **Modern Development Tools** with hot reload

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Desktop**: Electron 37
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **Build Tools**: electron-builder, concurrently

## Getting Started

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

### Development

Run the application in development mode:

```bash
npm run electron-dev
```

This will:
- Start the Next.js development server
- Launch the Electron app
- Enable hot reload for both Next.js and Electron

### Building

Build the application for production:

```bash
npm run build-electron
```

### Packaging

Package the application for distribution:

```bash
# For current platform
npm run dist

# For Windows
npm run dist-win

# For macOS
npm run dist-mac
```

## Project Structure

```
├── electron/           # Electron main process files
│   ├── main.ts        # Main Electron process
│   ├── preload.ts     # Preload script
│   └── util.ts        # Utility functions
├── src/               # Next.js application
│   ├── app/           # App Router pages
│   ├── components/    # React components
│   │   └── ui/        # shadcn/ui components
│   └── lib/           # Utility libraries
├── public/            # Static assets
└── dist/              # Built Electron files
```

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js for production
- `npm run electron-dev` - Run Electron in development mode
- `npm run build-electron` - Build both Next.js and Electron
- `npm run dist` - Package for current platform
- `npm run dist-win` - Package for Windows
- `npm run dist-mac` - Package for macOS

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

## Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.js` for Tailwind customization
- Edit `components.json` for shadcn/ui configuration

### Electron Configuration
- Modify `electron/main.ts` for main process behavior
- Update `package.json` build section for packaging options
- Edit `electron/preload.ts` to expose APIs to renderer

## Building for Production

The application uses Next.js static export to generate static files that Electron can serve. The build process:

1. Next.js builds and exports static files to `/out`
2. TypeScript compiles Electron files to `/dist`
3. electron-builder packages everything into distributable formats

## Cross-Platform Support

The app is configured to build for:
- **Windows**: NSIS installer (.exe)
- **macOS**: DMG package (.dmg) for both Intel and Apple Silicon
- **Linux**: AppImage (.AppImage)

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

