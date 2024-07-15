"use client"

export default function Feed() {
  return (
    <div className="grid grid-cols-3  border-t border-zinc-300 divide-x divide-zinc-300">
      <div className="flex flex-col">
        <div className="flex flex-col gap-7 p-5 border-b">
          <div className="font-bold">NM 🔉 CHANNEL</div>
          <div className="underline">
            NM Reads: {'"'}Hallucinating Sense in the Era of Infinity Content
            {'"'} by Caroline Busta
          </div>
          <div className="underline">
            NM Special Report: the Future of Content w/ Jak Ritger
          </div>
          <div className="underline">
            NM Presents: Illegal Generation Vol. 1 by the Bootcut Boys w/ intro
            by @LIL INTERNET
          </div>
          <div className="flex justify-end">
            <div className="text-sm text-zinc-400">View 11 posts ▼</div>
          </div>
        </div>
        <div className="flex flex-col gap-7 p-5">
          <div className="font-bold">NM 🔉 PODCASTS</div>
          <div className="underline">
            NM Reads: {'"'}Hallucinating Sense in the Era of Infinity Content
            {'"'} by Caroline Busta
          </div>
          <div className="underline">
            NM Special Report: the Future of Content w/ Jak Ritger
          </div>
          <div className="underline">
            NM Presents: Illegal Generation Vol. 1 by the Bootcut Boys w/ intro
            by @LIL INTERNET
          </div>
          <div className="flex justify-end">
            <div className="text-sm text-zinc-400">View 11 posts ▼</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 p-5">
        <div className="font-bold">RECENT NM 📡</div>
        <div className="underline">
          NM Reads: {'"'}Hallucinating Sense in the Era of Infinity Content
          {'"'} by Caroline Busta
        </div>
        <div className="underline">
          NM Special Report: the Future of Content w/ Jak Ritger
        </div>
        <div className="underline">
          NM Presents: Illegal Generation Vol. 1 by the Bootcut Boys w/ intro by
          @LIL INTERNET
        </div>
      </div>
      <div className="flex flex-col gap-7 p-5">
        <div className="font-bold">NM RECOMMENDS</div>
        <div className="underline">
          NM Reads: {'"'}Hallucinating Sense in the Era of Infinity Content
          {'"'} by Caroline Busta
        </div>
        <div className="underline">
          NM Special Report: the Future of Content w/ Jak Ritger
        </div>
        <div className="underline">
          NM Presents: Illegal Generation Vol. 1 by the Bootcut Boys w/ intro by
          @LIL INTERNET
        </div>
      </div>
    </div>
  )
}
