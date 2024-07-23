import Block from "./Block"

export default function Clear({ columns }) {
  return (
    <>
      <div className="grid md:grid-cols-3 divide-x">
        <div className="flex flex-col p-5">
          {columns.columnA.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          <div className="hidden md:block">
            {columns.columnD?.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-5">
          {columns.columnB.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          <div className="hidden md:block">
            {columns.columnE?.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-5">
          {columns.columnC.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          <div className="hidden md:block">
            {columns.columnF?.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </div>
        </div>
        <div className="md:hidden p-5">
          {columns.columnD?.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          {columns.columnE?.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          {columns.columnF?.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </div>
    </>
  )
}
