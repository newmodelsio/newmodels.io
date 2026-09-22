"use client"

import { PortableText } from "next-sanity"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Post({ post }) {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    const random = Math.floor(Math.random() * 3)
    setRandom(random)
  }, [])

  return (
    <a href={post.url} className="hover:underline" target="_blank">
      {post.title}
    </a>
    // <div key={block.id} className="hover:underline">
    //   <a href={block.url} target="_blank" className={block.modifiers}>
    //     {block.thumbnail && random == 2 && (
    //       <div className="w-[125px] aspect-square bg-zinc-100 mb-1">
    //         <img
    //           src={block.thumbnail}
    //           className="w-full h-full object-cover opacity-0 transition-opacity"
    //           onLoad={(e) => {
    //             e.currentTarget.classList.remove("opacity-0")
    //           }}
    //           alt=""
    //         />
    //       </div>
    //     )}
    //     <div
    //       dangerouslySetInnerHTML={{ __html: block.text.replace("<br>", "") }}
    //     />
    //   </a>
    // </div>
  )
}
