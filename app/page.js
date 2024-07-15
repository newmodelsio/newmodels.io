import Home from "./components/Home"
import { getData } from "./api/kirbyCMS"

export default async function Main() {
  const data = await getData()
  return (
    <>
      <Home />
    </>
  )
}
