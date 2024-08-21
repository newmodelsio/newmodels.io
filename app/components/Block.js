"use client"

import Image from "next/image"
import Section from "./Section"
import Post from "./Post"

export default function Block({ block }) {
  return (
    <>
      <div key={block.id}>
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
            // case "heading":
            //   return (
            //     <div
            //       className="font-bold mb-5"
            //       dangerouslySetInnerHTML={{ __html: block.text }}
            //     ></div>
            //   )
            // case "gallery":
            //   return (
            //     <div className="grid grid-cols-3">
            //       {block.images.map((image, i) => (
            //         <a
            //           href={image.url}
            //           key={image.id + i}
            //           target="_blank"
            //           className="flex m-1  aspect-square bg-gray-100 hover:opacity-80"
            //         >
            //           <Image src={image.src} alt="" width={300} height={300} />
            //         </a>
            //       ))}
            //     </div>
            //   )
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
            // case "product":
            //   return (
            //     <div className="mb-5">
            //       <a href={block.url} target="_blank">
            //         <Image
            //           src={block.thumbnail}
            //           alt=""
            //           width={300}
            //           height={300}
            //         />
            //         <div
            //           className="my-2"
            //           dangerouslySetInnerHTML={{ __html: block.title }}
            //         ></div>
            //       </a>
            //     </div>
            //   )
            case "hr":
              return <hr />
            case "embed":
              return (
                <div>
                  <div dangerouslySetInnerHTML={{ __html: block.iframe }}></div>
                </div>
              )
            case "issue":
              return (
                <div>
                  {/* <div
                    className="my-2 font-bold pb-5"
                    dangerouslySetInnerHTML={{ __html: block.issue }}
                  ></div> */}
                  {/* <div className="flex flex-col gap-5">
                    {block.articles.slice(0, 3).map((issue, i) => (
                      <a
                        href={"/editorial/" + block.slug + "/" + issue.slug}
                        key={issue.id}
                        className="hover:underline"
                      >
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
                  </div> */}
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
