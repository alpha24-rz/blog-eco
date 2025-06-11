import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import { NewsletterProvider } from "@/components/NewsletterContext" // perbaiki path ini, contexts bukan components

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoSystem 4.0 - IoT, AI, Blockchain & NFT for Sustainability",
  description: "Exploring IoT sensors, AI monitoring, blockchain verification, and NFT conservation for sustainable ecosystem management and environmental preservation.",
  generator: 'v0.dev',
  icons: { icon: '/logo.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <NewsletterProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
            <Header />
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </NewsletterProvider>
      </body>
    </html>
  )
}
