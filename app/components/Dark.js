import DiscordPost from "../components/DiscordPost"
import { useEffect } from "react"
import { getDiscord } from "../api/discord"

export default function Dark({ topLinks, discordReplies, bulletinBoard }) {
  return (
    <>
      <div className="grid md:grid-cols-3 divide-x bg-[#36393f] text-white font-discord">
        <div className="flex flex-col gap-5 p-5">
          <div className="font-bold">#TOP-LINKS</div>
          {topLinks.map((post) => (
            <DiscordPost key={post.id} post={post} />
          ))}
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className="font-bold">#NM-DISCORD-REPLIES</div>
          {discordReplies.map((post) => (
            <DiscordPost key={post.id} post={post} />
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
