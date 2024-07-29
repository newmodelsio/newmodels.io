"use client"

import Image from "next/image"

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
                  {block.link ? (
                    <a href={block.link} target="_blank">
                      <Image src={block.src} alt="" width={300} height={300} />
                    </a>
                  ) : (
                    <Image src={block.src} alt="" width={300} height={300} />
                  )}
                  {block.caption && (
                    <div
                      className="my-2"
                      dangerouslySetInnerHTML={{ __html: block.caption }}
                    ></div>
                  )}
                </div>
              )
            case "post":
              return (
                <div className="mb-5 hover:underline">
                  <a
                    href={block.url}
                    target="_blank"
                    className={block.modifiers}
                  >
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
                    className="my-2 font-bold pb-5 mb-5"
                    dangerouslySetInnerHTML={{ __html: block.issue }}
                  ></div>
                  <div className="flex flex-col gap-5">
                    {block.articles.map((issue, i) => (
                      <a href={issue.url} key={issue.id} target="_blank">
                        {issue.cover && (
                          <Image
                            src={issue.cover}
                            className="max-w-[150px]"
                            alt=""
                            width={300}
                            height={300}
                          />
                        )}
                        <div
                          className="mt-2"
                          dangerouslySetInnerHTML={{ __html: issue.title }}
                        ></div>
                      </a>
                    ))}
                  </div>
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
