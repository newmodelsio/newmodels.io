"use client"

import { useState, createContext, useContext } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState("Clear")

  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

  const getDiscord = async (channelID) => {
    try {
      const response = await fetch(
        `https://discord.com/api/v10/channels/${channelID}/messages`,
        {
          method: "GET",
          headers: {
            Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
          },
        }
      )
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

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
