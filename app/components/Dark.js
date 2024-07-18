import DiscordPost from "../components/DiscordPost"

export default function Dark({ topLinks, discordReplies, bulletinBoard }) {
  return (
    <>
      <div className="grid md:grid-cols-3 divide-x bg-black text-white">
        <div className="flex flex-col">
          <div>#TOP-LINKS</div>
          {topLinks.map((post) => (
            <DiscordPost key={post.id} />
          ))}
        </div>
        <div className="flex flex-col">
          <div>#NM-DISCORD-REPLIES</div>
          {topLinks.map((post) => (
            <DiscordPost key={post.id} />
          ))}
        </div>
        <div className="flex flex-col">
          <div>#BULLETIN-BOARD</div>
          {topLinks.map((post) => (
            <DiscordPost key={post.id} />
          ))}
        </div>
      </div>
    </>
  )
}
