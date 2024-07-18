import Logo from "./components/Logo"
import FeaturedPost from "./components/FeaturedPost"
import Aggregate from "./components/Aggregate"
import Footer from "./components/Footer"

import { kirbyCMS } from "./api/kirbyCMS"
import { getDiscord } from "./api/discord"

export default async function Main() {
  let aggregateData = await Promise.all([
    kirbyCMS(),
    getDiscord("834797161081602088"),
    getDiscord("844287069345939506"),
    getDiscord("932043003055456336"),
  ])

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="w-[300px] h-[100px] bg-black"></div>
      </div>
      <FeaturedPost />
      <Logo />
      <Aggregate aggregateData={aggregateData} />
      <Footer />
    </>
  )
}
