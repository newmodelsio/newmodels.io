"use client"

import { useState } from "react"

export default function Filter({ allResults, handleChange, input }) {
  const [toggleFilter, setToggleFilter] = useState(false)

  function countItems(key, string) {
    return allResults.filter((item) => {
      return (
        item[key] &&
        item[key].includes(string) &&
        item["title"].toLowerCase().includes(input.toLowerCase())
      )
    }).length
  }

  return (
    <>
      <div
        className="p-5 text-center uppercase text-[11px] border-b cursor-pointer"
        onClick={() => setToggleFilter(!toggleFilter)}
      >
        {toggleFilter ? "Filters –" : "Filters +"}
      </div>
      {toggleFilter && (
        <div className="grid  md:grid-cols-3 divide-x w-full uppercase text-sm border-b">
          <div className="flex flex-col p-5">
            <div className="font-bold">Year</div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2024")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2024</div>
              <div>({countItems("published", "2024")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2023")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2023</div>
              <div>({countItems("published", "2023")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2022")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2022</div>
              <div>({countItems("published", "2022")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2021")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2021</div>
              <div>({countItems("published", "2021")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2020")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2020</div>
              <div>({countItems("published", "2020")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2019")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2019</div>
              <div>({countItems("published", "2019")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2018")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2018</div>
              <div>({countItems("published", "2018")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2017")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">2017</div>
              <div>({countItems("published", "2017")})</div>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold">Category</div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "audio")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM Podcast</div>
              <div>({countItems("type", "audio")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "NMEditorial")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM Editorial</div>
              <div>({countItems("tags", "NMEditorial")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "NMProjects")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM Projects</div>
              <div>({countItems("tags", "NMProjects")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("title", "TopSoil")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM TopSoil</div>
              <div>({countItems("title", "TopSoil")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("title", "Dispatch")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline"> NM DISPATCH</div>
              <div>({countItems("title", "Dispatch")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "NMTV")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM TV</div>
              <div>({countItems("tags", "NMTV")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("title", "Lecture")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM LECTURES</div>
              <div>({countItems("title", "Lecture")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("title", "Special Report")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM SPECIAL REPORTS</div>
              <div>({countItems("title", "Special Report")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("title", "Short")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM SHORTS</div>
              <div>({countItems("title", "Short")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("title", "Greenroom")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">NM GREENROOM</div>
              <div>({countItems("title", "Greenroom")})</div>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold">Type</div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">All</div>
              <div>({countItems("type", "")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "video")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">Video</div>
              <div>({countItems("type", "video")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "audio")
                setToggleFilter(false)
              }}
            >
              <div className="hover:underline">Audio</div>
              <div>({countItems("type", "audio")})</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
