import Link from "next/link"

import Logo from "../../../components/Logo"
import Nav from "../../../components/Nav"
import Block from "../../../components/Block"
import Footer from "../../../components/Footer"

export default async function Page({ params }) {
  const response = await fetch(
    `https://assets.newmodels.io/editorial/${params.issue}/${params.article}.json`
  )
  const data = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <Link href="../../">
        <Logo />
      </Link>
      {/* <Nav nav={data.nav} /> */}
      <div className="prose max-w-2xl mx-auto text-lg flex flex-col gap-5 my-10 p-5">
        {data.blocks.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </div>
      <Footer />
    </>
  )
}
