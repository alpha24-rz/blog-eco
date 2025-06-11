"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
