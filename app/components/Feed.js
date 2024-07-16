import feed from "../nm.json"
import Section from "./Section"

export default function Feed() {
  return (
    <>
      <div className="grid grid-cols-3  border-t  divide-x">
        <div className="flex flex-col">
          {feed
            .filter((section) => section.col == 1)
            .map((section) => (
              <Section key={section.title} section={section} />
            ))}
        </div>
        <div className="flex flex-col">
          {feed
            .filter((section) => section.col == 2)
            .map((section) => (
              <Section key={section.title} section={section} />
            ))}
        </div>
        <div className="flex flex-col">
          {feed
            .filter((section) => section.col == 3)
            .map((section) => (
              <Section key={section.title} section={section} />
            ))}
        </div>
      </div>
    </>
  )
}
