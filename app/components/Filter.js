"use client"

import { useState } from "react"

export default function Filter({ allResults, handleChange, input }) {
  const [toggleFilter, setToggleFilter] = useState(true)

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
      {/* <div
        className="p-5 text-center uppercase text-[11px] border-b cursor-pointer"
        onClick={() => setToggleFilter(!toggleFilter)}
      >
        {toggleFilter ? "Filters –" : "Filters +"}
      </div> */}
      {toggleFilter && (
        <div className="grid  md:grid-cols-3 divide-x w-full uppercase text-sm border-b">
          <div className="flex flex-col p-5">
            <div className="font-bold">Year</div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2024")
              }}
            >
              <div className="hover:underline">2024</div>
              <div>({countItems("published", "2024")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2023")
              }}
            >
              <div className="hover:underline">2023</div>
              <div>({countItems("published", "2023")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2022")
              }}
            >
              <div className="hover:underline">2022</div>
              <div>({countItems("published", "2022")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2021")
              }}
            >
              <div className="hover:underline">2021</div>
              <div>({countItems("published", "2021")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2020")
              }}
            >
              <div className="hover:underline">2020</div>
              <div>({countItems("published", "2020")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2019")
              }}
            >
              <div className="hover:underline">2019</div>
              <div>({countItems("published", "2019")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2018")
              }}
            >
              <div className="hover:underline">2018</div>
              <div>({countItems("published", "2018")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("published", "2017")
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
                handleChange("tags", "nm-podcast")
              }}
            >
              <div className="hover:underline">NM Podcast</div>
              <div>({countItems("tags", "nm-podcast")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-editorial")
              }}
            >
              <div className="hover:underline">NM Editorial</div>
              <div>({countItems("tags", "nm-editorial")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-projects")
              }}
            >
              <div className="hover:underline">NM Projects</div>
              <div>({countItems("tags", "nm-projects")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-topsoil")
              }}
            >
              <div className="hover:underline">NM TopSoil</div>
              <div>({countItems("tags", "nm-topsoil")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-dispatch")
              }}
            >
              <div className="hover:underline"> NM DISPATCH</div>
              <div>({countItems("tags", "nm-dispatch")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-tv")
              }}
            >
              <div className="hover:underline">NM TV</div>
              <div>({countItems("tags", "nm-tv")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-lectures")
              }}
            >
              <div className="hover:underline">NM LECTURES</div>
              <div>({countItems("tags", "nm-lectures")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-special-report")
              }}
            >
              <div className="hover:underline">NM SPECIAL REPORT</div>
              <div>({countItems("tags", "nm-special-report")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-short")
              }}
            >
              <div className="hover:underline">NM SHORTS</div>
              <div>({countItems("tags", "nm-short")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("tags", "nm-greenroom")
              }}
            >
              <div className="hover:underline">NM GREENROOM</div>
              <div>({countItems("tags", "nm-greenroom")})</div>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold">Type</div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "")
              }}
            >
              <div className="hover:underline">All</div>
              <div>({countItems("type", "")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "video")
              }}
            >
              <div className="hover:underline">Video</div>
              <div>({countItems("type", "video")})</div>
            </div>
            <div
              className="flex gap-[4px] cursor-pointer"
              onClick={() => {
                handleChange("type", "audio")
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
