import Logo from "../components/Logo"
import FeaturedPost from "../components/FeaturedPost"
import Aggregate from "../components/Aggregate"
import Footer from "../components/Footer"

export default async function Page({ params }) {
  const response = await fetch(`https://newmodels.io/${params.slug}.json`)
  const data = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <Logo />
      <Aggregate data={data} />
      <Footer />
    </>
  )
}
