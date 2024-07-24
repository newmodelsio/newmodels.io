import Logo from "./components/Logo"
import FeaturedPost from "./components/FeaturedPost"
import Aggregate from "./components/Aggregate"
import Footer from "./components/Footer"

export default async function Main() {
  const response = await fetch(`https://newmodels.io/home.json`)
  const columns = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <FeaturedPost featured={columns.featured[0]} />
      <Logo />
      <Aggregate
        columns={columns}
        navItems={columns.navItems}
        subNavItems={columns.subNavItems}
      />
      <Footer />
    </>
  )
}
