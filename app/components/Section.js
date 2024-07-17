"use client"

import { useState } from "react"

import Post from "./Post"

export default function Section({ section }) {
  const [expand, setExpand] = useState(false)

  return (
    <div key={section.title}>
      <div className=" px-5">
        <div className="flex flex-col gap-7 border-b py-5">
          <div>
            <div className="font-bold uppercase">{section.title}</div>
            {/* <div className="text-zinc-400">{section.description}</div> */}
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
                  {section.posts.slice(0, 10).map((post) => (
                    <Post
                      key={post.title}
                      title={post.title}
                      src={post.thumbnail}
                    />
                  ))}
                  {section.posts.length > 3 && (
                    <div
                      className="flex items-center justify-end cursor-pointer text-zinc-800 uppercase text-[10px]"
                      onClick={() => {
                        setExpand(true)
                      }}
                    >
                      View More{" "}
                      <span className="border flex justify-center items-center rounded px-1 ml-2">
                        {section.posts.length - 3}+
                      </span>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
