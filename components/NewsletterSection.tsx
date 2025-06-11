"use client"

import { useRef, useEffect } from "react"
import { useNewsletter } from "@/components/NewsletterContext"

export default function NewsletterSection() {
  const newsletterRef = useRef<HTMLDivElement>(null)
  const { setScrollToNewsletter } = useNewsletter()

  useEffect(() => {
    setScrollToNewsletter(() => () => {
      newsletterRef.current?.scrollIntoView({ behavior: "smooth" })
    })
  }, [setScrollToNewsletter])

  return (
    <div ref={newsletterRef} className="container mx-auto py-24">
      <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
      {/* Form atau kontenmu di sini */}
    </div>
  )
}
