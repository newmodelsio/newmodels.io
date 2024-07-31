"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav({ nav }) {
  const path = usePathname()
  return (
    <div className="sticky top-[-1px]  bg-white overflow-y-scroll p-5 border-y flex gap-5 justify-between uppercase text-[11px]">
      <div className="flex gap-5">
        {nav?.main.map((item) => (
          <Link
            key={item.slug}
            href={path.includes("editorial") ? "../../" + item.slug : item.slug}
            className="whitespace-nowrap"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-5">
        {nav?.sub.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
        <Link href="/search" className="whitespace-nowrap">
          Search
        </Link>
      </div>
    </div>
  )
}
