import Logo from "./components/Logo"
import FeaturedPost from "./components/FeaturedPost"
import Aggregate from "./components/Aggregate"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { client } from "../sanity/lib/client"


export const revalidate = 10

async function getData() {
  return await client.fetch(`
  {
   "featured": *[_type == "featured"] {
        _id,
        "imageUrl": Image.asset->url,
        title,
        url
      },
      "newsstand": *[_type == "newsstand"] {
        _id,
        title,
        body
      },
      "about": *[_type == "about"] {
        _id,
        title,
        body
      },
      "footer": *[_type == "footer"] {
        _id,
        title,
        links[]
      },
      "columns": *[_type == "column"] | order(orderRank asc) {
        _id,
        title,
        sections[] {
          title,
          description,
          body,
          posts[] {
            title,
            description,
            url,
            image,
            "imageUrl": image.asset->url
          }
        }
      }
    }
`, {},
    {
      next: { tags: ['sanity'] }
    })
}

export default async function Main() {

  const data = await getData()

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>


      <Nav data={data} />

      <FeaturedPost featured={data.featured[0]} />

      <a href="/logo">
        <Logo />
      </a>

      <Aggregate data={data} />

      <Footer data={data} />
    </>
  )
}
