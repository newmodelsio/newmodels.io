import DiscordPost from "../components/DiscordPost"
import DiscordSubmit from "../components/DiscordSubmit"
import { useState, useEffect } from "react"
import { getDiscord } from "../api/discord"

export default function Dark() {
  const [topLinks, setTopLinks] = useState([])
  const [discordReplies, setDiscordReplies] = useState([])
  const [bulletinBoard, setBulletinBoard] = useState([])

  const getTopLinks = async () => {
    const response = await getDiscord("834797161081602088")
    setTopLinks(response)
  }

  const getDiscordReplies = async () => {
    const response = await getDiscord("844287069345939506")
    setDiscordReplies(response.filter((item) => item.referenced_message))
  }

  const getBulletinBoard = async () => {
    const response = await getDiscord("932043003055456336")
    setBulletinBoard(response)
  }

  useEffect(() => {
    getTopLinks()
    getDiscordReplies()
    getBulletinBoard()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-3 divide-x bg-[#36393f] text-white font-discord min-h-screen">
        <div className="flex flex-col gap-5 p-5">
          <div className="font-bold">#TOP-LINKS</div>
          {topLinks.map((post) => (
            <DiscordPost key={post.id} post={post} />
          ))}
        </div>
        <div className="flex flex-col gap-5 p-5">
          <DiscordSubmit />
          <div className="font-bold">#NM-DISCORD-REPLIES</div>
          {discordReplies.map((post) => (
            <>
              <div className="bg-[#2b2d31] rounded border-l-4 p-4 text-zinc-300 border-zinc-900">
                {post.referenced_message?.content}
              </div>
              <DiscordPost key={post.id} post={post} />
            </>
          ))}
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className="font-bold">#BULLETIN-BOARD</div>
          {bulletinBoard.map((post) => (
            <DiscordPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
