import Logo from "../components/Logo"
import Toggle from "../components/Toggle"
import Nav from "../components/Nav"
import Aggregate from "../components/Aggregate"
import Footer from "../components/Footer"

export default async function Page({ params }) {
  const response = await fetch(`https://newmodels.io/${params.slug}.json`)
  const columns = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
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
