"use client"

import Dark from "../components/Dark"
import AltToggle from "../components/AltToggle"
import Search from "../components/Search"
import { useState } from "react"
import ClearMinimal from "../components/ClearMinimal"

export default function AltAggregate({ data }) {
  const [toggle, setToggle] = useState("Clear")

  return (
    <>
      <AltToggle toggle={toggle} setToggle={setToggle} />
      {(() => {
        switch (toggle) {
          case "Clear":
            return <ClearMinimal data={data} />
          case "Dark":
            return <Dark />
          case "Archive":
            return <Search />
          default:
            return null
        }
      })()}
    </>
  )
}
