"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav({ nav }) {
  const path = usePathname()
  return (
    <div className="overflow-y-scroll p-5 border-y flex justify-between uppercase text-sm">
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
