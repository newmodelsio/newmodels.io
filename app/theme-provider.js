"use client"

import { useState, useEffect, createContext, useContext } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  // const [GlobalElements, setGlobalElements] = useState({})

  // const getGlobalElements = async () => {
  //   try {
  //     const response = await fetch(`https://newmodels.io/site.json`)
  //     const data = await response.json()
  //     return data
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getGlobalElements()
  // }, [])

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("Component outside themeContext")
  }
  return context
}
