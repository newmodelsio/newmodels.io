"use client"

import Image from "next/image"
import Section from "./Section"
import Post from "./Post"

export default function Block({ block }) {
  return (
    <>
      <div className="block" key={block.id}>
        {(() => {
          switch (block.type) {
            case "section":
              return <Section section={block} />
            case "text":
              return (
                <div
                  className={block.modifiers}
                  dangerouslySetInnerHTML={{ __html: block.text }}
                ></div>
              )
            case "heading":
              return (
                <div
                  className="font-bold mb-5 leading-normal"
                  dangerouslySetInnerHTML={{ __html: block.text }}
                ></div>
              )
            case "image":
              return (
                <div className="flex flex-wrap">
                  {block.link ? (
                    <a href={block.link} target="_blank">
                      <Image
                        className="w-full"
                        src={block.src}
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </a>
                  ) : (
                    <Image
                      className="w-full"
                      src={block.src}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  )}
                  {block.caption && (
                    <div
                      className="my-2 text-xs"
                      dangerouslySetInnerHTML={{ __html: block.caption }}
                    ></div>
                  )}
                </div>
              )
            case "post":
              return <Post block={block} />
            case "hr":
              return <hr />
            default:
              return null
          }
        })()}
      </div>
    </>
  )
}
