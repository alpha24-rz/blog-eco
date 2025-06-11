"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Leaf } from "lucide-react"

export function EcoThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="relative">
      {/* Toggle Container */}
      <div
        className={`
          relative w-16 h-8 rounded-full cursor-pointer transition-all duration-500 ease-in-out
          ${
            isDark
              ? "bg-gradient-to-r from-slate-700 to-slate-900 shadow-inner"
              : "bg-gradient-to-r from-green-200 to-blue-200 shadow-lg"
          }
          border-2 ${isDark ? "border-slate-600" : "border-green-300"}
          hover:scale-105 transform
        `}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {/* Background Elements */}
        <div
          className={`
          absolute inset-0 rounded-full overflow-hidden
          ${isDark ? "bg-gradient-to-r from-indigo-900 to-purple-900" : "bg-gradient-to-r from-sky-200 to-green-200"}
        `}
        >
          {/* Stars for dark mode */}
          {isDark && (
            <>
              <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700"></div>
            </>
          )}

          {/* Clouds for light mode */}
          {!isDark && (
            <>
              <div className="absolute top-1 left-1 w-2 h-1 bg-white rounded-full opacity-70"></div>
              <div className="absolute top-2 right-2 w-1.5 h-0.5 bg-white rounded-full opacity-60"></div>
              <div className="absolute bottom-1 left-3 w-1 h-0.5 bg-white rounded-full opacity-50"></div>
            </>
          )}
        </div>

        {/* Toggle Button */}
        <div
          className={`
            absolute top-0.5 w-7 h-7 rounded-full transition-all duration-500 ease-in-out
            transform ${isDark ? "translate-x-0.5" : "translate-x-8"}
            ${
              isDark
                ? "bg-gradient-to-br from-slate-300 to-slate-100 shadow-lg"
                : "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-xl"
            }
            border-2 ${isDark ? "border-slate-200" : "border-yellow-200"}
            flex items-center justify-center
            hover:scale-110
          `}
        >
          {/* Icon */}
          <div className={`transition-all duration-300 ${isDark ? "rotate-0" : "rotate-180"}`}>
            {isDark ? <Moon className="w-3 h-3 text-slate-600" /> : <Sun className="w-3 h-3 text-yellow-700" />}
          </div>
        </div>

        {/* Eco Elements */}
        <div
          className={`
          absolute -top-1 -right-1 transition-all duration-500
          ${isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"}
        `}
        >
          <Leaf className="w-3 h-3 text-green-600 animate-bounce" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Label */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <span
          className={`text-xs font-medium transition-colors duration-300 ${
            isDark ? "text-slate-400" : "text-green-600"
          }`}
        >
          {isDark ? "Dark" : "Light"}
        </span>
      </div>
    </div>
  )
}
