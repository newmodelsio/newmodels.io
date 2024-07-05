import Image from "next/image"
import { getData } from "./api/kirbyCMS"

export default async function Home() {
  const data = await getData()
  console.log(data)
  return <>NM</>
}
