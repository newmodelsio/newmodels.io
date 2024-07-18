"use client"

export default function Footer() {
  return (
    <div className="border-t p-10 flex flex-col gap-7 items-center justify-center">
      <div className="font-bold text-xl">NM</div>
      <div className="flex gap-5 uppercase">
        <div>About</div>
        <div>Contact</div>
        <div>NM Studio</div>
      </div>
      <div className="flex gap-5 text-sm">
        <div>PATREON</div>
        <div>SUBSTACK</div>
        <div>CHANNEL</div>
        <div>YT</div>
        <div>ID</div>
        <div>TW</div>
        <div>SC</div>
        <div>Apple</div>
        <div>Spotify</div>
      </div>
      <div className="text-[10px]">© 2024 NEW MODELS</div>
    </div>
  )
}
