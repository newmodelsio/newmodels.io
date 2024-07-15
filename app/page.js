import Image from "next/image"
import Logo from "./components/Logo"
import Feed from "./components/Feed"
import { getData } from "./api/kirbyCMS"

export default async function Home() {
  const data = await getData()
  // console.log(data)
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
      <div className="flex justify-center gap-5 p-5 mb-10 ">
        <div className="flex gap-3 bg-zinc-100 p-1 rounded tracking-[0.01em]">
          <div className="bg-white p-2 px-4 rounded shadow-sm text-zinc-700">
            Clear
          </div>
          <div className="p-2 px-4 rounded text-zinc-500">Dark</div>
          <div className="p-2 px-4 rounded text-zinc-500">Archive</div>
        </div>
      </div>
      <Feed />
    </>
  )
}
