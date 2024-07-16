"use client"

export default function Archive() {
  return (
    <div className="w-full border-t border-zin2-300 divide-x divide-zinc-300">
      <div className="flex justify-center border-b">
        <div className="flex w-full max-w-lg px-3 border-x">
          <input
            className="p-5 w-full  text-center"
            type="text"
            placeholder="Search New Models"
          />
          <svg id="search" className="w-[20px] opacity-40" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 11a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-.797 5.61a8 8 0 1 1 .948-1.163l5.331 4.479-.964 1.148-5.315-4.464Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid  grid-cols-3 md:grid-cols-5 gap-5 w-full p-5 uppercase text-sm">
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
        <div className="flex flex-col">
          <div className="font-bold mb-2">Theme</div>
          <div>Culture</div>
          <div>Environment</div>
          <div>Economy</div>
          <div>Health</div>
          <div>Politics</div>
          <div>Society</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold mb-2">Keyword</div>
          <div>community networks</div>
          <div>counterculture</div>
          <div>critical theory</div>
          <div>web3</div>
        </div>
      </div>
    </div>
  )
}
