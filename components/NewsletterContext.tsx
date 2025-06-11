"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type NewsletterContextType = {
  scrollToNewsletter: () => void
  setScrollToNewsletter: (fn: () => void) => void
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined)

export const NewsletterProvider = ({ children }: { children: ReactNode }) => {
  const [scrollFn, setScrollFn] = useState<() => void>(() => () => {})

  return (
    <NewsletterContext.Provider value={{
      scrollToNewsletter: scrollFn,
      setScrollToNewsletter: setScrollFn
    }}>
      {children}
    </NewsletterContext.Provider>
  )
}

export const useNewsletter = () => {
  const context = useContext(NewsletterContext)
  if (!context) throw new Error("useNewsletter must be used within a NewsletterProvider")
  return context
}
