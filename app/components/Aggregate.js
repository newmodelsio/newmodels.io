"use client"

import Clear from "../components/Clear"
import Dark from "../components/Dark"
import Toggle from "../components/Toggle"
import Nav from "../components/Nav"
import { useState } from "react"

export default function Aggregate({ columns }) {
  const [toggle, setToggle] = useState("Clear")

  return (
    <>
      <Toggle toggle={toggle} setToggle={setToggle} />
      <Nav />
      <div>{toggle == "Clear" ? <Clear columns={columns} /> : <Dark />}</div>
    </>
  )
}
