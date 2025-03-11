import Logo from "./components/Logo"
import FeaturedPost from "./components/FeaturedPost"
import Aggregate from "./components/Aggregate"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

export default async function Main() {
  const response = await fetch(`https://assets.newmodels.io/home.json`, {
    next: { tags: ["kirby"] },
  })
  const data = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <Nav data={data} />
      <FeaturedPost featured={data.featured} />
      <a href="/logo">
        <Logo />
      </a>
      <Aggregate data={data} />
      <Footer data={data} />
    </>
  )
}
