"use client"

import Image from "next/image"
import Logo from "../components/Logo"
import Archive from "../components/Archive"
import Feed from "../components/Feed"
import { useState } from "react"

export default function Home() {
  const [toggle, setToggle] = useState("Clear")

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <div className="flex justify-center my-10">
        <div className="max-w-xl">
          <img src="/nmtvmnunger1.jpg" alt="" />
          <div className="flex text-center">
            <div className="p-10 text-[red] text-4xl font-bold uppercase">
              NM TV: KEVIN MUNGER on VILÉM FLUSSER{"'"}S COMMUNICOLOGY
            </div>
          </div>
        </div>
      </div>
      <Logo />
      <div className="flex justify-center gap-5 p-5 mb-10 font-[400] text-sm">
        <div className="flex gap-3 bg-zinc-100 p-1 rounded cursor-pointer">
          <div
            className={
              toggle == "Clear"
                ? "p-2 px-4 rounded text-zinc-700 bg-white shadow-sm"
                : "p-2 px-4 rounded text-zinc-400"
            }
            onClick={() => setToggle("Clear")}
          >
            Clear
          </div>
          <div
            className={
              toggle == "Dark"
                ? "p-2 px-4 rounded text-zinc-700 bg-white shadow-sm"
                : "p-2 px-4 rounded text-zinc-400"
            }
            onClick={() => setToggle("Dark")}
          >
            Dark
          </div>
          <div
            className={
              toggle == "Archive"
                ? "p-2 px-4 rounded text-zinc-700 bg-white shadow-sm"
                : "p-2 px-4 rounded text-zinc-400"
            }
            onClick={() => setToggle("Archive")}
          >
            Archive
          </div>
        </div>
      </div>
      {(() => {
        switch (toggle) {
          case "Clear":
            return <Feed />
          case "Dark":
            return <Feed />
          case "Archive":
            return <Archive />
          default:
            return null
        }
      })()}
      <div className="border-t p-10 flex flex-col gap-7 items-center justify-center">
        <div className="font-bold text-xl">NM</div>
        <div className="flex gap-5 ">
          <div>PATREON</div>
          <div>SUBSTACK</div>
          <div>CHANNEL</div>
          <div>YT</div>
          <div>ID</div>
          <div>TW</div>
          <div>SC</div>
        </div>
        <div>© 2024 NEW MODELS</div>
      </div>
    </>
  )
}
