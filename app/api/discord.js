"use server"

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

export async function getDiscord(channelID) {
  try {
    const response = await fetch(
      `https://discord.com/api/v10/channels/${channelID}/messages`,
      {
        method: "GET",
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
