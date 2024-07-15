"use client"

export default function Archive() {
  return (
    <div className="w-full border-t border-zin2-300 divide-x divide-zinc-300">
      <div className="flex justify-center border-b ">
        <input
          className="border-x p-5 w-full max-w-lg text-center"
          type="text"
          placeholder="Search New Models"
        />
      </div>
      <div className="grid grid-cols-5 gap-5 w-full p-5">
        <div className="flex flex-col border-r">
          <div className="font-bold">Year</div>
          <div>2024</div>
          <div>2023</div>
          <div>2022</div>
          <div>2021</div>
          <div>2020</div>
          <div>2019</div>
          <div>2018</div>
        </div>
        <div className="flex flex-col border-r">
          <div className="font-bold">Category</div>
          <div>Podcast</div>
          <div>Editorial</div>
          <div>Project</div>
          <div>TopSoil</div>
          <div>Channel</div>
        </div>
        <div className="flex flex-col border-r">
          <div className="font-bold">Media</div>
          <div>Text</div>
          <div>Video</div>
          <div>Audio</div>
        </div>
        <div className="flex flex-col border-r">
          <div className="font-bold">Theme</div>
          <div>Culture</div>
          <div>Environment</div>
          <div>Economy</div>
          <div>Health</div>
          <div>Politics</div>
          <div>Society</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Keyword</div>
          <div>community networks</div>
          <div>counterculture</div>
          <div>critical theory</div>
          <div>web3</div>
        </div>
      </div>
    </div>
  )
}
