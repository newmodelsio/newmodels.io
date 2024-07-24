import Link from "next/link"

export default function Nav({ navItems, subNavItems }) {
  return (
    <div className="overflow-y-scroll p-5 border-y flex justify-between uppercase text-sm">
      <div className="flex gap-5">
        {navItems.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-5">
        {subNavItems.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
