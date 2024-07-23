"use client"

import { useState, useEffect } from "react"

import Link from "next/link"

import { getKirby } from "../api/kirbyCMS"

export default function Nav() {
  const [data, setData] = useState([])

  const load = async () => {
    const response = await getKirby()
    setData(response)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="overflow-y-scroll p-5 border-y flex justify-between uppercase text-sm">
      <div className="flex gap-5">
        {data.nav?.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-5">
        {data.subnav?.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
