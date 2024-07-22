"use client"

import { useState, createContext, useContext } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState("Clear")

  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("Component outside themeContext")
  }
  return context
}
