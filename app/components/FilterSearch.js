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

  function countItems(string) {
    return results.filter((item) => {
      return item.published.includes(string)
    }).length
  }

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
      {/* {results?.length > 0 && (
        <div className="grid grid-cols-3 divide-x w-full uppercase text-sm border-b">
          <div className="flex flex-col p-5">
            <div className="font-bold">Year</div>
            <div>2024 ({countItems("2024")})</div>
            <div>2023 ({countItems("2023")})</div>
            <div>2022 ({countItems("2022")})</div>
            <div>2021 ({countItems("2021")})</div>
            <div>2020 ({countItems("2020")})</div>
            <div>2019 ({countItems("2019")})</div>
            <div>2018 ({countItems("2018")})</div>
            <div>2017 ({countItems("2017")})</div>
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold">Category</div>
            <div>NM Podcast</div>
            <div>NM Editorial</div>
            <div>NM Projects</div>
            <div>NM TopSoil</div>
            <div>NM DISPATCH</div>
            <div>NM TV</div>
            <div>NM LECTURES</div>
            <div>NM SPECIAL REPORTS</div>
            <div>NM SHORTS</div>
            <div>NM GREENROOM</div>
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold">Type</div>
            <div>Article</div>
            <div>Video</div>
            <div>Audio</div>
          </div>
        </div>
      )} */}
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
