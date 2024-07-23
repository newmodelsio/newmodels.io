"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Block({ block }) {
  return (
    <>
      <div key={block.id}>
        {(() => {
          switch (block.type) {
            case "text":
              return (
                <div
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: block.text }}
                ></div>
              )
            case "heading":
              return (
                <div
                  className="font-bold mb-5"
                  dangerouslySetInnerHTML={{ __html: block.text }}
                ></div>
              )
            case "gallery":
              return (
                <div className="grid grid-cols-3">
                  {block.images.map((image, i) => (
                    <a
                      href={image.url}
                      key={image.id + i}
                      target="_blank"
                      className="flex m-1  aspect-square bg-gray-100"
                    >
                      <Image src={image.src} alt="" width={300} height={300} />
                    </a>
                  ))}
                </div>
              )
            case "image":
              return (
                <div className="flex flex-wrap">
                  <a href={block.link} target="_blank">
                    <Image src={block.src} alt="" width={300} height={300} />
                    <div
                      className="my-2"
                      dangerouslySetInnerHTML={{ __html: block.caption }}
                    ></div>
                  </a>
                </div>
              )
            case "post":
              return (
                <div className="mb-5">
                  <a href={block.url} target="_blank">
                    <div dangerouslySetInnerHTML={{ __html: block.text }}></div>
                  </a>
                </div>
              )
            case "product":
              return (
                <div className="mb-5">
                  <a href={block.url} target="_blank">
                    <Image
                      src={block.thumbnail}
                      alt=""
                      width={300}
                      height={300}
                    />
                    <div
                      className="my-2"
                      dangerouslySetInnerHTML={{ __html: block.title }}
                    ></div>
                  </a>
                </div>
              )
            case "hr":
              return <hr className="mb-5" />
            case "issue":
              return (
                <div>
                  <div
                    className="my-2"
                    dangerouslySetInnerHTML={{ __html: block.issue }}
                  ></div>
                  {block.articles.map((issue, i) => (
                    <a href={issue.url} key={issue.id} target="_blank">
                      <div
                        className="my-2"
                        dangerouslySetInnerHTML={{ __html: issue.title }}
                      ></div>
                    </a>
                  ))}
                </div>
              )
            default:
              return null
          }
        })()}
      </div>
    </>
  )
}