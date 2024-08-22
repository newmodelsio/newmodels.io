"use client"

import { useState, useEffect } from "react"

export default function Post({ block }) {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    const random = Math.floor(Math.random() * 3)
    setRandom(random)
  }, [])

  return (
    <div key={block.id} className="hover:underline">
      <a href={block.url} target="_blank" className={block.modifiers}>
        {random == 2 && (
          <img
            src={block.thumbnail}
            className="max-w-[125px] max-h-[125px] mb-1"
            alt=""
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: block.text.replace("<br>", "") }}
        />
      </a>
    </div>
  )
}
