"use client"

import { useState, useEffect } from "react"

export default function Post({ title, src }) {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    const random = Math.floor(Math.random() * 3)
    setRandom(random)
  }, [])

  return (
    <div key={title} className="hover:underline cursor-pointer">
      {random == 2 && (
        <img src={src} className="max-w-[125px] max-h-[125px] mb-1" alt="" />
      )}
      <div dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  )
}
