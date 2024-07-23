"use client"

export default function Toggle({ toggle, setToggle }) {
  return (
    <div className="flex justify-center gap-5 p-5 mb-10 font-[400]">
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
      </div>
    </div>
  )
}
