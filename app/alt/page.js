import Logo from "../components/Logo"
import FeaturedPost from "../components/FeaturedPost"
import AltAggregate from "../components/AltAggregate"
import Footer from "../components/Footer"
import AltNav from "../components/AltNav"

export default async function Main() {
  const response = await fetch(`https://newmodels.io/2024.json`, {
    cache: "no-store",
  })
  const data = await response.json()

  // const [homeResponse, searchResponse] = await Promise.all([
  //   fetch("https://newmodels.io/2024.json", {
  //     cache: "no-store",
  //   }),
  //   fetch("https://newmodels.io/search.json", {
  //     cache: "no-store",
  //   }),
  // ])

  // const [data, searchData] = await Promise.all([
  //   homeResponse.json(),
  //   searchResponse.json(),
  // ])

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <AltNav />
      <FeaturedPost featured={data.featured} />
      <a href="/alt">
        <Logo />
      </a>
      <AltAggregate data={data} />
      <Footer />
    </>
  )
}
