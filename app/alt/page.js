import Logo from "../components/Logo"
import FeaturedPost from "../components/FeaturedPost"
import AltAggregate from "../components/AltAggregate"
import Footer from "../components/Footer"

export default async function Main() {
  const [homeResponse, searchResponse] = await Promise.all([
    fetch("https://newmodels.io/home.json", {
      cache: "no-store",
    }),
    fetch("https://newmodels.io/search.json", {
      cache: "no-store",
    }),
  ])

  const [homeData, searchData] = await Promise.all([
    homeResponse.json(),
    searchResponse.json(),
  ])

  // Ensure the data is a plain object
  const plainHomeData = JSON.parse(JSON.stringify(homeData))
  const plainSearchData = JSON.parse(JSON.stringify(searchData))

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <FeaturedPost featured={plainHomeData.featured} />
      <Logo />
      <AltAggregate data={plainSearchData} />
      <Footer />
    </>
  )
}
