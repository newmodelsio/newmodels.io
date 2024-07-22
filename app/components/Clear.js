import Block from "./Block"

export default function Clear({ data }) {
  return (
    <>
      <div className="grid md:grid-cols-3 divide-x">
        <div className="flex flex-col p-5">
          {data.columnA.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          <div className="hidden md:block">
            {data.columnD.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-5">
          {data.columnB.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          <div className="hidden md:block">
            {data.columnE.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-5">
          {data.columnC.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          <div className="hidden md:block">
            {data.columnF.map((block) => (
              <Block key={block.id} block={block} />
            ))}
          </div>
        </div>
        <div className="md:hidden p-5">
          {data.columnD.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          {data.columnE.map((block) => (
            <Block key={block.id} block={block} />
          ))}
          {data.columnF.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </div>
    </>
  )
}
