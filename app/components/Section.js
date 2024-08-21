"use client"

import { useState } from "react"

import Block from "./Block"

export default function Section({ section }) {
  const [expand, setExpand] = useState(false)

  return (
    <div key={section.title}>
      <div>
        <div className="flex flex-col gap-5 border-b pb-5">
          {section.title && (
            <div>
              <div className="font-bold uppercase">{section.title}</div>
              <div
                className="text-zinc-400 leading-snug"
                dangerouslySetInnerHTML={{ __html: section.description }}
              ></div>
            </div>
          )}
          {section.posts && (
            <>
              {section.posts.slice(0, 3).map((block) => (
                <Block key={block.id} block={block} />
              ))}
              {section.posts.length > 3 && (
                <div
                  className="flex items-center justify-end cursor-pointer text-zinc-800 uppercase text-[10px]"
                  onClick={() => {
                    setExpand(true)
                  }}
                >
                  View More{" "}
                  <span className="bg-black text-white font-bold flex justify-center items-center rounded-full px-1 ml-2">
                    {section.posts.length - 3}+
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
