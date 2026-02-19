"use client"

import { useState } from "react"


export default function Watchwords() {

  const [active, setActive] = useState("exocapitalism")
  const [expand, setExpand] = useState(false)
  const [limit, setLimit] = useState(5)

  const data = [
    {
      "term": "exocapitalism",
      "content": `Exocapitalism is a theoretical framework that redefines how value is created in contemporary economies, particularly within the context of the software economy and digital capitalism [3][5]. Coined by Marek Poliks and Roberto Alonso Trillo, exocapitalism posits that capital functions as an "algorithmic germ" that can lie dormant, migrate across different platforms, and reanimate when it encounters energy, computational power, and time [1].
          <br /><br />
          Key tenets of exocapitalism include:
          <br />
          <br />* Arbitrage as the Core: At its heart, exocapitalism is driven by arbitrage, which involves exploiting price and value discrepancies through temporal deferral [2].
          <br />* Labor as Manufactured Volatility: In this model, labor is not seen as traditional work but as the deliberate injection of manufactured volatility into an asset [2].
          <br />* Absence of Limits: The concept suggests economies with "absolutely no limits" [5][7].
          <br />* Algorithmic Nature of Capital: Capital is viewed as an autonomous, invisible, and unpredictable entity that operates algorithmically [6].
          <br />* Ignoring Traditional Economic Factors: Exocapitalism's critical apparatus is seen as underestimating the power of the software economy, struggling to articulate the complexities of digitally-realized capitalism, and largely ignoring the functional obsolescence of traditional labor [3][5].
          <br /><br />
          The theory suggests that capital does not require a specific culture or technology to thrive, but rather needs controllable delays and a suitable venue for its operation [1]. Some interpretations extend this to envision scenarios where exocapitalism could evolve into "xenocapitalism" with the integration of advanced technologies like AI and robotics into a "Solar Economy," potentially relegating humans to roles as factory workers or repair agents [4].`
    },
    {
      "term": "neo-orality",
      "content": `Neo-orality describes an emerging mode of political discourse characterized by immediacy, affect, narrative, and performance, representing a significant shift in how information is communicated and understood in public life [1]. This concept builds upon Walter Ong's idea of "secondary orality," which refers to media environments that mimic oral characteristics within literate societies [2].
<br/><br/>
Key aspects of neo-orality include:
<br/>
<br/>* Shift in Discourse: It signifies a deeper epistemic change rather than just a return to oral habits [2].
<br/>* Media Influence: Dominant media forms often prioritize spectacle and emotional resonance over coherence and reasoned argument [2].
<br/>* Transcultural Nature: Neo-orality is not confined to Western cultures but is a transcultural media condition influenced by platform infrastructures, affective economies, and the breakdown of traditional epistemic gatekeeping in the post-print era [3].
<br/>* Impact on Democracy: This transformation is seen as contributing to the unraveling of democratic norms by altering the epistemic and affective foundations of democratic life [1].
<br/>* New Forms of Oral Art: In a digital age, traditional oral art forms are being reinterpreted and performed within new contexts, leading to "neo-oralities" that dismantle discursive and performative limits [4].`
    },
    {
      "term": "recusandae",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi vel. Beatae illum, dolor id voluptatem totam cumque delectus maxime asperiores, quisquam dolorum numquam quibusdam minus, consequatur amet saepe corporis?"
    },
    {
      "term": "adipisicing",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi vel. Beatae illum, dolor id voluptatem totam cumque delectus maxime asperiores, quisquam dolorum numquam quibusdam minus, consequatur amet saepe corporis?"

    },
    {
      "term": "voluptate",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi vel. Beatae illum, dolor id voluptatem totam cumque delectus maxime asperiores, quisquam dolorum numquam quibusdam minus, consequatur amet saepe corporis?"

    },
    {
      "term": "reiciendis",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi vel. Beatae illum, dolor id voluptatem totam cumque delectus maxime asperiores, quisquam dolorum numquam quibusdam minus, consequatur amet saepe corporis?"
    },
    {
      "term": "Beatae illum",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi vel. Beatae illum, dolor id voluptatem totam cumque delectus maxime asperiores, quisquam dolorum numquam quibusdam minus, consequatur amet saepe corporis?"
    },
    {
      "term": "corporis",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi vel. Beatae illum, dolor id voluptatem totam cumque delectus maxime asperiores, quisquam dolorum numquam quibusdam minus, consequatur amet saepe corporis?"
    },
  ]




  return (
    <>
      <div>
        <div class="font-bold uppercase">°ロ° │ watchword</div>
        <div class="text-zinc-400 leading-snug">
          <p>Word-specific RSSs for terms that NM members flag in the NM Discord server.</p>
        </div>
        <div className="flex flex-wrap gap-2 my-5">
          {data.slice(0, limit).map((item) =>
            <div onClick={() => { setActive(item.term); setExpand(false) }}
              className={`${active == item.term && 'border-black!'} cursor-pointer p-2 px-3 leading-none rounded-full border hover:border-zinc-300!`}>{item.term}</div>
          )}
          <div onClick={() => setLimit(10)} className="cursor-pointer p-2 px-3 leading-none rounded-full border hover:border-zinc-300!">+</div>
        </div>
        <div className={`${expand ? '' : 'h-[200px]'} relative  overflow-hidden`}>

          <div
            dangerouslySetInnerHTML={{
              __html:
                data.find((item) => item.term === active)?.content
            }}
          />
          {!expand &&
            <div onClick={() => setExpand(true)} class="cursor-pointer absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-white to-transparent "></div>
          }
        </div>
      </div>

    </>
  )
}
