"use client"

import { useState, useEffect } from "react"

export default function FilterSearch({ results }) {
  const [filteredResults, setFilteredResults] = useState(results)

  function filter(value) {
    console.log(value)
    // results.filter(function (item) {
    //   console.log(item.title.includes(e.target.value))
    // })
  }
  return (
    <>
      <input type="text" onChange={(e) => filter(e.target.value)} />
      <div className="p-5 columns-3 gap-5">
        {filteredResults.map((result, index) => (
          <div
            key={result.id}
            data-slug={result.slug}
            className="flex flex-col mb-5"
          >
            <a href={result.link} target="_blank">
              <div>{result.published}</div>
              <div className="text-xs uppercase">
                {result.type.includes("audio") && <div>Audio</div>}
                {result.type.includes("video") && <div>Video</div>}
              </div>
              <div dangerouslySetInnerHTML={{ __html: result.title }}></div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
