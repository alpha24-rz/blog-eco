import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoSystem 4.0 - IoT, AI, Blockchain & NFT for Sustainability",
  description:
    "Exploring IoT sensors, AI monitoring, blockchain verification, and NFT conservation for sustainable ecosystem management and environmental preservation.",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',  // Add the path to your favicon/logo here
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" /> {/* Your new logo here */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
