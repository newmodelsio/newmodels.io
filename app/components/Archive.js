"use client"

export default function Archive() {
  return (
    <div className="w-full border-b border-zin2-300 divide-x divide-zinc-300">
      <div className="flex justify-center">
        <div className="flex w-full max-w-lg px-3 border-x">
          <input
            className="p-5 w-full text-center uppercase text-sm"
            type="text"
            placeholder="Search New Models"
          />
          <svg id="search" className="w-[20px] opacity-40" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 11a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-.797 5.61a8 8 0 1 1 .948-1.163l5.331 4.479-.964 1.148-5.315-4.464Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* <div className="grid  grid-cols-3 gap-5 w-full p-5 uppercase text-sm">
        <div className="flex flex-col">
          <div className="font-bold mb-2">Year</div>
          <div>2024</div>
          <div>2023</div>
          <div>2022</div>
          <div>2021</div>
          <div>2020</div>
          <div>2019</div>
          <div>2018</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold mb-2">Category</div>
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
          <div>Channel</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold mb-2">Type</div>
          <div>Article</div>
          <div>Video</div>
          <div>Audio</div>
        </div>
      </div> */}
    </div>
  )
}
