import Link from "next/link"

export default async function Nav() {
  const response = await fetch(`https://newmodels.io/site.json`)
  const { nav, subnav } = await response.json()

  return (
    <div className="overflow-y-scroll p-5 border-y flex justify-between uppercase text-sm">
      <div className="flex gap-5">
        {nav.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-5">
        {subnav.map((item) => (
          <Link key={item.slug} href={item.slug} className="whitespace-nowrap">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
