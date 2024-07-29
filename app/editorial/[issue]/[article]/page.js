import Logo from "../../../components/Logo"
import Aggregate from "../../../components/Aggregate"
import Footer from "../../../components/Footer"

export default async function Page({ params }) {
  const response = await fetch(
    `https://newmodels.io/editorial/${params.issue}/${params.article}.json`
  )
  const article = await response.json()

  console.log(article)

  return (
    <>
      article
      <Footer />
    </>
  )
}
