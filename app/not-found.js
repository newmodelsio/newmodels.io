import Logo from "./components/Logo"
import Aggregate from "./components/Aggregate"
import Footer from "./components/Footer"

export default async function Main() {
  const response = await fetch(`https://assets.newmodels.io/home.json`, {
    cache: "no-store",
  })
  const data = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <div className="w-full my-[100px] p-10 flex justify-center items-center">
        <div className="uppercase text-sm">Page not found</div>
      </div>
      <a href="/">
        <Logo />
      </a>
      <Aggregate data={data} />
      <Footer data={data} />
    </>
  )
}
