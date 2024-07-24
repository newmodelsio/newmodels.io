import Logo from "../components/Logo"
import Toggle from "../components/Toggle"
import Nav from "../components/Nav"
import Archive from "../components/Archive"
import Filters from "../components/Filters"
import Footer from "../components/Footer"

export default async function Page() {
  const response = await fetch(`https://newmodels.io/search.json`)
  const results = await response.json()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <Logo />
      <Nav navItems={results.navItems} subNavItems={results.subNavItems} />
      <Archive />
      <Filters results={results} />
      <div className="p-5 columns-3 gap-5">
        {results.archive.map((result) => (
          <div
            key={result.slug}
            data-slug={result.slug}
            className="flex flex-col mb-5"
          >
            <a href={result.link} target="_blank">
              <div className="text-xs">{result.published}</div>
              <pre className="text-xs text-red-500 overflow-hidden">
                {result.slug}
              </pre>
              <div dangerouslySetInnerHTML={{ __html: result.title }}></div>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
