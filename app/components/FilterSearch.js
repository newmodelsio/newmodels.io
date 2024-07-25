"use client"

import { useState, useEffect } from "react"

export default function FilterSearch({ allResults }) {
  const [results, setResults] = useState()

  function handleChange(value) {
    const updatedResulted = allResults.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })
    setResults(updatedResulted)
  }

  useEffect(() => {
    setResults(allResults)
  }, [allResults])

  return (
    <>
      <div className="w-full border-b divide-x divide-zinc-300">
        <div className="flex justify-center">
          <div className="flex w-full max-w-lg px-3 border-x">
            <input
              className="p-5 w-full text-center uppercase text-sm"
              type="text"
              placeholder="Search New Models"
              onChange={(e) => {
                handleChange(e.target.value)
              }}
            />
            <svg
              id="search"
              className="w-[20px] opacity-40"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 11a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-.797 5.61a8 8 0 1 1 .948-1.163l5.331 4.479-.964 1.148-5.315-4.464Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <br />
      {results.length > 0 ? (
        <div className="p-5 columns-3 gap-5">
          {results.map((result, index) => (
            <div key={index} className="flex flex-col mb-5">
              <a href={result.url} target="_blank">
                <div
                  dangerouslySetInnerHTML={{ __html: result.published }}
                ></div>
                <div className="text-xs uppercase">
                  {result.type.includes("audio") && <div>Audio</div>}
                  {result.type.includes("video") && <div>Video</div>}
                </div>
                <div dangerouslySetInnerHTML={{ __html: result.title }}></div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5">No results found</div>
      )}
    </>
  )
}
