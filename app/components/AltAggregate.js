"use client"

// import Clear from "../components/Clear"
import Dark from "../components/Dark"
import AltToggle from "../components/AltToggle"
import Nav from "../components/Nav"
import Search from "../components/Search"
import { useState } from "react"
import ClearMinimal from "../components/ClearMinimal"

export default function AltAggregate({ data }) {
  const [toggle, setToggle] = useState("Clear")

  return (
    <>
      <AltToggle toggle={toggle} setToggle={setToggle} />
      {/* <Nav nav={nav} /> */}
      {(() => {
        switch (toggle) {
          case "Clear":
            return <ClearMinimal />
          case "Dark":
            return <Dark />
          case "Archive":
            return <Search allResults={data.archive} />
          default:
            return null
        }
      })()}
    </>
  )
}
