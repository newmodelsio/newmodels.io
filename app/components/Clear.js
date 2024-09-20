import Block from "./Block"

export default function ClearMinimal({ data }) {
  return (
    <>
      <div className="grid md:grid-cols-3 divide-x">
        <div className="flex flex-col px-5 gap-5 mb-5">
          {data.columnA.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
        <div className="flex flex-col px-5 gap-5 mb-5">
          <div className="w-full border-t md:hidden"></div>
          {data.columnB.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
        <div className="flex flex-col px-5 gap-5 mb-5">
          {data.columnC.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </div>
      <div className="p-5 border-t">
        <strong>SOME LEGACY SOURCES</strong>
        <div
          className="columns-2 md:columns-3"
          dangerouslySetInnerHTML={{ __html: data.links }}
        ></div>
      </div>
    </>
  )
}
