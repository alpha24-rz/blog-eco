"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { EcoThemeToggle } from "@/components/eco-theme-toggle"
import { Button } from "@/components/ui/button"
import { useNewsletter } from "@/components/NewsletterContext"


export default function Header() {
  const pathname = usePathname()
  const { scrollToNewsletter } = useNewsletter()

  const hideHeaderPages = ["/blog/"]
  if (pathname.startsWith("/blog/")) return null


  return (
    <header className="container mx-auto py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="EcoSystem Logo" width={32} height={32} className="rounded-md" />
          <h1 className="text-xl font-bold tracking-tight">
            EcoSystem <span className="text-green-600">4.0</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link href="/articles/" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <span className="relative z-10">Articles</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link href="/topics/" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <span className="relative z-10">Topics</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link href="/about/" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <EcoThemeToggle />
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500/10"
            onClick={scrollToNewsletter}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  )
}
