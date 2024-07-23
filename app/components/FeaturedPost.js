"use client"

import { useState, useEffect } from "react"
import { getKirby } from "../api/kirbyCMS"

export default function FeaturedPost() {
  const [data, setData] = useState([])

  const load = async () => {
    const response = await getKirby()
    setData(response.featured[0])
  }

  console.log(data)

  useEffect(() => {
    load()
  }, [])

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="max-w-xl">
          <a href={data.link}>
            <img src={data.thumbnail} alt="" />
            <div className="flex text-center">
              <div
                className={`p-10 text-4xl font-bold uppercase ${data.modifiers}`}
                dangerouslySetInnerHTML={{ __html: data.text }}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
