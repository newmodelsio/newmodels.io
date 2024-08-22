"use client"

import { useState, useEffect } from "react"
import Filter from "./Filter"

export default function Search() {
  const [allResults, setAllResults] = useState()
  const [results, setResults] = useState()

  async function loadData() {
    const response = await fetch(`https://newmodels.io/search.json`, {
      cache: "no-store",
    })
    const data = await response.json()
    setAllResults(data.archive)
  }

  function handleChange(key, value) {
    const updatedResulted = allResults.filter((item) => {
      return item[key].toLowerCase().includes(value.toLowerCase())
    })
    setResults(updatedResulted)
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    setResults(allResults)
  }, [allResults])

  return (
    <>
      <div className="w-full border-b divide-x divide-zinc-300">
        <div className="flex justify-center">
          <div className="flex w-full md:w-1/3 px-5">
            <input
              className="p-5 w-full text-center uppercase text-sm"
              type="text"
              placeholder="Search New Models"
              onChange={(e) => {
                handleChange("title", e.target.value)
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
      {allResults ? (
        <>
          {results?.length > 0 && (
            <Filter allResults={allResults} handleChange={handleChange} />
          )}
          <br />
          {results?.length > 0 ? (
            <div className="p-5 md:columns-3 gap-5">
              {results.map((result, index) => (
                <div key={index} className="flex flex-col mb-5">
                  <a href={result.link} target="_blank">
                    <div
                      className="text-xs"
                      dangerouslySetInnerHTML={{ __html: result.published }}
                    ></div>
                    <div className="flex gap-2 text-xs uppercase">
                      {result.type?.includes("audio") && <div>Audio</div>}
                      {result.type?.includes("video") && <div>Video</div>}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: result.title }}
                    ></div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-5 min-h-screen">{/* No results found */}</div>
          )}
        </>
      ) : (
        <>
          <div className="p-5 text-center uppercase text-[11px] border-b cursor-pointer">
            <div className="opacity-0">Loading…</div>
          </div>
          <div className="p-5 md:columns-3 ">
            {(() => {
              const arr = []
              for (let i = 0; i < 30; i++) {
                arr.push(
                  <div className="w-full h-[20px] bg-zinc-100 mb-5 rounded animate-pulse"></div>
                )
              }
              return arr
            })()}
          </div>
        </>
      )}
    </>
  )
}
