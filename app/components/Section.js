"use client"

import { useState } from "react"

import Post from "./Post"

export default function Section({ section }) {
  const [expand, setExpand] = useState(false)

  return (
    <div
      key={section.title}
      className="flex flex-col gap-7 p-5 md:p-7 border-b"
    >
      <div className="">
        <div className="font-bold">{section.title}</div>
        {/* <div>{section.description}</div> */}
        <div dangerouslySetInnerHTML={{ __html: section.text }} />
      </div>
      {section.posts && (
        <>
          {expand ? (
            <>
              {section.posts.map((post) => (
                <Post
                  key={post.title}
                  title={post.title}
                  src={post.thumbnail}
                />
              ))}
              <div
                className="flex justify-end cursor-pointer text-[10px] text-zinc-400 uppercase"
                onClick={() => {
                  setExpand(false)
                }}
              >
                Hide
              </div>
            </>
          ) : (
            <>
              {section.posts.slice(0, 3).map((post) => (
                <Post
                  key={post.title}
                  title={post.title}
                  src={post.thumbnail}
                />
              ))}
              {section.posts.length > 3 && (
                <div
                  className="flex justify-end cursor-pointer text-zinc-400 uppercase text-[10px]"
                  onClick={() => {
                    setExpand(true)
                  }}
                >
                  View More +
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}
