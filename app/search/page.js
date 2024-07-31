import Logo from "../components/Logo"
import Toggle from "../components/Toggle"
import Nav from "../components/Nav"
import Search from "../components/Search"
import Footer from "../components/Footer"

export default async function Page() {
  const response = await fetch(`https://newmodels.io/search.json`)
  const data = await response.json()

  // const ordered = results.archive.sort(function (a, b) {
  //   return new Date(b.published) - new Date(a.published)
  // })

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <Logo />
      <Nav nav={data.nav} />
      <Search allResults={data.archive} />
      <Footer />
    </>
  )
}
