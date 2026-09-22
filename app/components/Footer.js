"use client"

import Link from "next/link"

export default function Footer({ data }) {
  const date = new Date().toLocaleDateString("en-gb", {
    year: "numeric",
  })

  return (
    <div className="text-[11px] border-t  flex flex-col md:flex-row items-center justify-between uppercase">
      <div className="p-5 w-full md:flex md:flex-row gap-7 grid grid-cols-2 whitespace-nowrap">
        {data?.footer[0]?.links.map((item) => (
          <Link key={item.url} href={item.url} target="_blank">{item.text}</Link>
        ))}
      </div>
      <div className="p-5 whitespace-nowrap">© {date} NEW MODELS</div>
    </div>
  )
}
