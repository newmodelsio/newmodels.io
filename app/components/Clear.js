import { PortableText } from "next-sanity"
import Block from "./Block"
import Post from "./Post"
import Section from "./Section"

export default function Clear({ data }) {

  return (
    <>
      <div className="grid md:grid-cols-3 divide-x">
        {data.columns.map((column) => (
          <div className="flex flex-col px-5 gap-5 mb-5">
            <div className="w-full border-t "></div>
            {column.sections.map((section, index) => (
              <Section key={index} section={section} />
            ))}
          </div>
        ))}
      </div>
      <div className="p-5 md:border-t">
        <strong>NEWSSTAND</strong>
        <div className="columns-2 md:columns-3">
          {data.newsstand?.[0]?.body && (
            <PortableText value={data.newsstand[0].body} />
          )}
        </div>
      </div>
    </>
  )
}
