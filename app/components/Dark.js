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
      <div className="md:hidden sticky top-0 overflow-y-scroll p-5 border-b border-zinc-600 flex gap-5 justify-between uppercase text-[11px] bg-[#36393f] text-zinc-300">
        <div className="flex gap-5 ">
          <a href="#top-links">#TOP-LINKS</a>
          <a href="#nm-discord-replies">#NM-DISCORD-REPLIES</a>
          <a href="#bulletin-board">#BULLETIN-BOARD</a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-x overflow-hidden divide-zinc-800 bg-[#36393f] text-white font-discord min-h-screen">
        <div id="top-links" className="flex flex-col gap-5 p-5">
          <div>#TOP-LINKS</div>
          {topLinks.map((post) => (
            <DiscordPost key={post.id} post={post} />
          ))}
        </div>
        <div id="nm-discord-replies" className="flex flex-col gap-5 p-5">
          <DiscordSubmit />
          <div>#NM-DISCORD-REPLIES</div>
          {discordReplies.map((post) => (
            <>
              <div className="bg-[#2b2d31] rounded border-l-4 p-4 text-zinc-300 border-zinc-900">
                {post.referenced_message?.content}
              </div>
              <DiscordPost key={post.id} post={post} />
            </>
          ))}
        </div>
        <div id="bulletin-board" className="flex flex-col gap-5 p-5">
          <div>#BULLETIN-BOARD</div>
          {bulletinBoard.map((post) => (
            <DiscordPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
