// "use client"
import ThemeProvider from "../theme-provider"

import Clear from "../components/Clear"
// import Dark from "../components/Dark"
import Nav from "../components/Nav"

import Toggle from "../components/Toggle"
// import { useState } from "react"

export default function Aggregate() {
  // const { value } = ThemeProvider
  // console.log(value)

  return (
    <>
      <Toggle />
      <Nav />

      {/* {toggle == "Clear" ? (
        <Clear data={data[0]} />
      ) : (
        <Dark
          topLinks={data[1]}
          discordReplies={data[2]}
          bulletinBoard={data[3]}
        />
      )} */}
    </>
  )
}
