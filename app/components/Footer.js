"use client"

export default function Footer() {
  return (
    <div className="text-[11px] border-t  flex flex-col md:flex-row items-center justify-between uppercase">
      <div className="p-5 w-full flex flex-col md:flex-row gap-5">
        <div>
          <a href="https://www.patreon.com/newmodels" target="_blank">
            PATREON
          </a>
        </div>
        <div>
          <a href="https://newmodels.substack.com/" target="_blank">
            SUBSTACK
          </a>
        </div>
        <div>
          <a href="https://channel.xyz/" target="_blank">
            CHANNEL
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/c/newmodelstv/" target="_blank">
            Youtube
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/newmodels_io/" target="_blank">
            Instagram
          </a>
        </div>
        <div>
          <a href="https://x.com/newmodels_io" target="_blank">
            X
          </a>
        </div>
        <div>
          <a href="https://soundcloud.com/newmodels" target="_blank">
            Soundcloud
          </a>
        </div>
        <div>
          <a
            href="https://podcasts.apple.com/us/podcast/new-models/id1399619562"
            target="_blank"
          >
            Apple
          </a>
        </div>
        <div>
          <a
            href="https://open.spotify.com/show/6vb7v8NZKvq6r4rAG7lSB2"
            target="_blank"
          >
            Spotify
          </a>
        </div>
      </div>
      <div className="p-5 whitespace-nowrap">© 2024 NEW MODELS</div>
    </div>
  )
}
