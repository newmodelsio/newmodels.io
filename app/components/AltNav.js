"use client"

import { useState } from "react"
import Link from "next/link"

export default function AltNav() {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <div>
      <div
        className="cursor-pointer z-30 fixed top-5 right-5 bg-zinc-200 text-zinc-700 rounded-full p-2"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      {toggleNav && (
        <div className="bg-white w-full md:w-1/3 h-screen fixed top-0 right-0 z-20 p-5 md:p-10 flex flex-col gap-5 overflow-y-scroll border-l">
          <div className="flex flex-col gap-5">
            <p className="font-bold flex">
              <div className="bg-[yellow]">ABOUT NM</div>
            </p>
            <p className="font-bold">
              NEW MODELS is a media channel and community addressing the
              emergent effects of networked technology on culture. Est. 2018,
              Berlin.
            </p>
            <p>
              NM pods are hosted by <strong>Caroline Busta</strong>,{" "}
              <strong>Lil Internet</strong>, & <strong>Daniel Keller</strong>.
            </p>
            <p>
              The NM community is a digital local distributed worldwide via
              Discord with light leaks to the dark side of newmodels.io and
              maintained by <strong>Leïth Benkhedda</strong>
            </p>
            <p>
              In summer 2021, the NM community published the NM Codex Y2K20 and
              the NM Webdex.
            </p>
            <p>
              Join via: <strong>Patreon</strong> or <strong>Substack</strong>
              <br /> Join: <strong>Channel</strong>
            </p>
            <p>
              Contact: desk(at)newmodels.io
              <br />
              Advertising: ads(at)newmodels.io
            </p>
          </div>
          <hr />
          <p>
            Website design: Jon Lucas
            <br />
            Logo: Jon Lucas & Eric Wrenn
          </p>
          <hr />
          <div>
            <div className="flex">
              <div className="bg-[yellow]">
                SELECTED <strong>PRESS / INTVWS / ETC</strong>
              </div>
            </div>
            <p>
              <br />
              <strong>2021</strong>
              <strong>
                <br />
              </strong>
              <em>HIGHArt</em> by highsnobiety,{" "}
              <strong>
                <a
                  href="https://www.highsnobiety.com/p/new-models-internet-perfume/"
                  rel="noopener noreferrer nofollow"
                >
                  What Does the Internet Smell Like?
                </a>
              </strong>{" "}
              (w/ Philip Maughan)
              <br />
              <br />
              <em>Index Magazine</em>,{" "}
              <strong>
                <a
                  href="https://www.instagram.com/p/CVHdR-GJPar/"
                  rel="noopener noreferrer nofollow"
                >
                  Online Futures: What{"'"}s Next for the World Wide Web
                </a>{" "}
              </strong>
              — New Models (Caroline Busta, Lil Internet), Trust (Arthur Röing
              Baer, Joanna Pope), and Other Internet (Toby Shorin) in
              conversation with Anna Dorothea Ker
              <br />
              <br />
              <em>Kaleidoscope</em>,{" "}
              <strong>
                <a
                  href="https://carolinebusta.github.io/2021_Kaleisdoscope_AMERICAN MEMETICS.pdf"
                  rel="noopener noreferrer nofollow"
                >
                  American Memetics
                </a>
              </strong>{" "}
              (Joshua Citarella, Caroline Busta, Daniel Keller, Lil Internet)
              <br />
              <br />
              KW{"'"}s <em>Open Secret</em>,
              <strong>
                {" "}
                <a
                  href="https://opensecret.kw-berlin.de/essays/losing-yourself-in-the-dark/"
                  rel="noopener noreferrer nofollow"
                >
                  Losing Yourself in the Dark
                </a>
              </strong>{" "}
              (Caroline Busta)
              <br />
              <br />
              <em>Document</em>,{" "}
              <strong>
                <a
                  href="https://www.documentjournal.com/2021/01/the-internet-didnt-kill-counterculture-you-just-wont-find-it-on-instagram/"
                  rel="noopener noreferrer nofollow"
                >
                  The Internet Didn{"'"}t Kill Counterculture—You Just Won{"'"}t
                  Find it on Instagram
                </a>
              </strong>{" "}
              (Caroline Busta)
              <strong>
                <br />
              </strong>
              CTM 2021,{" "}
              <strong>
                <a
                  href="https://www.youtube.com/watch?v=PdcG4ag2TuM"
                  rel="noopener noreferrer nofollow"
                >
                  Possible Futures of Music Valuation
                </a>
              </strong>{" "}
              — Cherie Hu, Jean-Hugues Kabuiku, Trevor McFedries; mod. New
              Models (Caroline Busta, Lil Internet)
              <br />
              <br />
              <strong>2020</strong>
            </p>
            <p>
              <strong>
                <br />
              </strong>
              <em>Kaleidoscope</em>,{" "}
              <strong>
                <a
                  href="https://carolinebusta.github.io/2020_KaleidoscopeSS_InfluencingTheVoid.pdf"
                  rel="noopener noreferrer nofollow"
                >
                  Influencing the Void: How the Art World Lost the Thread
                </a>
              </strong>{" "}
              (Caroline Busta)
              <br />
              <br />
              <em>HIGHTech</em> by highsnobiety,{" "}
              <strong>
                <a
                  href="https://www.highsnobiety.com/p/club-future-new-models/"
                  rel="noopener noreferrer nofollow"
                >
                  Club Future: A Tour of Posisble Worlds with Berlin{"'"}s New
                  Models
                </a>
              </strong>{" "}
              (w/ Philip Maughan)
              <br />
              <br />
              <strong>2019</strong>
            </p>
            <p>
              <strong>
                <br />
              </strong>
              <em>Shure.24</em>,{" "}
              <strong>
                <a
                  href="https://24.shure.com/artist/new-models-podcast/"
                  rel="noopener noreferrer nofollow"
                >
                  Interview with New Models
                </a>
                <br />
                <br />
              </strong>
              <em>Novembre</em>{" "}
              <strong>
                <a
                  href="https://carolinebusta.github.io/2019_Novembre_14_newmodels.pdf"
                  rel="noopener noreferrer nofollow"
                >
                  New Models
                </a>
              </strong>{" "}
              (feat: photography by Ilya Lipkin, text by Ida Eritsland,
              design/layout by Betty Wang)
              <br />
              <br />
              <strong>2018</strong>
            </p>
            <p>
              <strong>
                <br />
              </strong>
              <em>TANK </em>Magazine, {'"'}
              <strong>
                <a
                  href="https://tankmagazine.com/tank/2018/11/new-models"
                  rel="noopener noreferrer nofollow"
                >
                  A podcast and anti-algorithm media platform covering
                  contemporary topics at the bleeding edge of art, politics and
                  culture
                </a>
              </strong>
              {'"'} <br />
              <br />
              <em>FAST Company</em>,{" "}
              <strong>
                <a
                  href="https://www.fastcompany.com/90253292/new-models-is-the-intellectual-drudge-report-for-critical-theory"
                  rel="noopener noreferrer nofollow"
                >
                  New Models is the Intellectual Drudge Report for Critical
                  Theory
                </a>
              </strong>{" "}
              (Cale Guthrie Weissman)
              <br />
              <br />
              <em>ART News</em>,{" "}
              <strong>
                <a
                  href="http://www.artnews.com/2018/09/10/aggregate-caroline-busta-julian-wadsworth-new-models-art-tech-answer-drudge-report/"
                  rel="noopener noreferrer nofollow"
                >
                  Aggregate This!: Caroline Busta and Lil Internet on New
                  Models, Their Art-Tech Answer to the Drudge Report
                </a>
                &nbsp;
              </strong>
              (John Chiaverina)
              <br />
            </p>
          </div>
          <div>
            <div className="highlight" data-tags="">
              <p>
                <strong>NM HISTORY</strong>
              </p>
            </div>{" "}
            <br />
            <hr /> <br />
            <div className="" data-tags="">
              <p>
                <strong>TL;DR</strong>
              </p>
              <br />
              <p>
                NEW MODELS was founded in Berlin in 2018. It’s initial aim was
                to create a media space outside of the {'"'}physics{'"'} of Web
                2.0 platforms by hand-aggregating links and seeding a community
                beyond&nbsp;
                <em>the feed</em>. In the time since, we have built an
                international member network and Discord server, staged many IRL
                and digital/physical&nbsp;
                <a
                  href="https://newmodels.io/editorial/issue-2/fubu-fuku-an-opera-by-richard-kennedy"
                  rel="noopener noreferrer nofollow"
                >
                  events
                </a>
                , published swarm-generated content with&nbsp;
                <em>
                  <a
                    href="https://www.highsnobiety.com/p/club-future-new-models/"
                    rel="noopener noreferrer nofollow"
                  >
                    Highsnobiety
                  </a>
                </em>
                ,&nbsp;<em>Kaleidoscope</em>, and&nbsp;<em>Novembre</em>;
                released an album’s worth of unhinged radio plays by Lil
                Internet, created an&nbsp;
                <a
                  href="https://docs.google.com/presentation/d/1kZD0VrxVnUOGgjnT1w5NOA92NjomCqEGTEhe_38mzQg/edit?usp=sharing"
                  rel="noopener noreferrer nofollow"
                >
                  Internet perfume
                </a>
                &nbsp;with{" "}
                <a
                  href="https://www.thesocietyofscent.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Society of Scent
                </a>
                , and facilitated the creation of an interactive digital
                glossary (
                <em>
                  <a
                    href="https://webdex-y2k20.newmodels.io/"
                    rel="noopener noreferrer nofollow"
                  >
                    NM Webdex
                  </a>
                </em>
                ) and a physical book (
                <em>
                  <a
                    href="https://shop.newmodels.io/product/codex-y2k20-2"
                    rel="noopener noreferrer nofollow"
                  >
                    NMCodex
                  </a>
                </em>
                )—both collectively-authored by the NM community—indexing the
                experience of being online together during the extremely online
                year of Y2K20.
              </p>
            </div>{" "}
            <br />
            <hr />{" "}
            <div className="" data-tags="">
              <p>
                <strong>
                  <br />
                  EXTENDED VERSION
                </strong>
              </p>
              <br />
              <p>
                NEW MODELS was founded in Berlin in 2018. Its initial aim was to
                think outside of Web 2.0 feeds by hand-aggregating a cache of
                information relevant to the culture sector ...
                <br />
                <br />
              </p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/bf82dd6a04-1721646607/about-nm-1a.jpg"
                alt=""
              />
            </figure>
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/d5c762ebf3-1721646610/about-nm-1b.jpg"
                alt=""
              />
            </figure>
            <hr />{" "}
            <div className="" data-tags="">
              <p>
                <br />
                ...<strong> </strong>particularly the ways in which networked
                technology was impacting the publishing, art, and music
                industries. We first used https://newmodels.io, as a kind of alt{" "}
                <a
                  href="https://www.drudgereport.com/"
                  rel="noopener noreferrer nofollow"
                >
                  Drudge Report
                </a>
                , with a contuously updated list of links and original
                commissioned NM content. / <em>Search the NM archive</em>:{" "}
                <strong>
                  <em>
                    <a
                      href="https://newmodels.io/search?q=hyper"
                      rel="noopener noreferrer nofollow"
                    >
                      here
                    </a>
                  </em>
                </strong>
                .<br />
                <br />
              </p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/c0394b786a-1721646610/about-nm-3.jpg"
                alt=""
              />
            </figure>
            <div className="" data-tags="">
              <p>
                <br />
                We also hosted several physical events (many with Berlin's{" "}
                <a
                  href="https://www.traumabarundkino.de/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Trauma Bar und Kino
                </a>
                , including{" "}
                <strong>
                  <a
                    href="https://newmodels.io/editorial/issue-1/8-nm-simsociety-cade-citarella-trauma-bar-und-kino"
                    rel="noopener noreferrer nofollow"
                  >
                    NM Sim Society
                  </a>
                </strong>{" "}
                on world building and online identity formation and the premier
                of Richard Kennedy's 2020 opera{" "}
                <strong>
                  <a
                    href="https://newmodels.io/editorial/issue-2/fubu-fuku-an-opera-by-richard-kennedy"
                    rel="noopener noreferrer nofollow"
                  >
                    Fubu Fukú
                  </a>
                </strong>
                . <br />
                <br />
              </p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/26c4df79fe-1721646613/cade-josh-sm.jpg"
                alt=""
              />

              <figcaption>
                <em>NM Sim Society</em>, feat. Joshua Citarella and Cade,{" "}
                <a
                  href="https://www.traumabarundkino.de/"
                  rel="noopener noreferrer nofollow"
                >
                  Trauma Bar und Kino, Berlin
                </a>
                , January 2020{" "}
              </figcaption>
            </figure>
            <div className="" data-tags="">
              <p>
                <br />
                <br />
                To unpack the themes articulated through the aggregation and
                editorial, we started an audio stream — the public{" "}
                <strong>New Models Podcast</strong>, featuring conversations
                with artists, academics, and other experts. We soon began
                subscription-gating some of our content via Patreon, introducing
                the <strong>NM TopSoil</strong> show for more free-form
                discussion about current events and{" "}
                <strong>
                  <a
                    href="https://soundcloud.com/newmodels/lil-internet-meditation-on-fomo"
                    rel="noopener noreferrer nofollow"
                  >
                    radio plays by Lil Internet
                  </a>
                </strong>
                .<br />
                <br />
              </p>
            </div>{" "}
            <iframe
              allow="autoplay"
              frameborder="no"
              height="166"
              scrolling="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/446600643&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
              width="100%"
            ></iframe>
            <br />{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/fa2efd2c6a-1721646613/about-nm-6.jpg"
                alt=""
              />
            </figure>
            <div className="" data-tags="">
              <p>
                <br />
                <br />
                This small barrier (€5 / month) created a subscribing New Models
                Community... which in turn led to us to start a Discord server.
                Suddenly, New Models was no longer just a creator-to-audience
                stream, but a mainframe for processing information free from the
                extractive properties of Clearnet spaces. We began referring to
                this ecosystem as a "
                <a
                  href="https://onezero.medium.com/the-dark-forest-theory-of-the-internet-7dc3e68a7cb1"
                  rel="noopener noreferrer nofollow"
                >
                  dark forest
                </a>
                ." (For more on the interplay of different digital realms, see
                Caroline Busta's Internet/counterculture text for{" "}
                <em>
                  <a
                    href="https://www.documentjournal.com/2021/01/the-internet-didnt-kill-counterculture-you-just-wont-find-it-on-instagram/"
                    rel="noopener noreferrer nofollow"
                  >
                    Document
                  </a>
                </em>{" "}
                Journal.)
                <br />
                <br />
              </p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/cee9de93fb-1721646612/about-nm-4a.jpg"
                alt=""
              />
            </figure>
            <div className="" data-tags="">
              <p>
                <br />
                Within the NM Discord, a local language formed — as well as
                initiatives aimed at {'"'}devirtualizing{'"'} traces of NM{"'"}s
                digital enclave into something physical and therefore less
                vulnerable to erasure. In 2021, the NM community produced the{" "}
                <strong>
                  <a
                    href="https://shop.newmodels.io/product/codex-y2k20-2"
                    rel="noopener noreferrer nofollow"
                  >
                    NM Codex
                  </a>
                </strong>{" "}
                and the{" "}
                <strong>
                  <a
                    href="https://webdex-y2k20.newmodels.io/"
                    rel="noopener noreferrer nofollow"
                  >
                    NM Webdex
                  </a>
                </strong>
                .<br />
                <strong>
                  <br />
                </strong>
              </p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/bab3956bd0-1721646614/img_1680-bc.jpeg"
                alt=""
              />
            </figure>
            <div className="" data-tags="">
              <p>
                <br />
                But throughout the wider sub-Web 2.0 strata, many more online
                enclaves were emerging. In part this was because the Clearnet
                space was growing ever more untenable: random account deading,
                feeds organized by algorithms optmizing for target-margets, wide
                fluctuations in access and reach. For NM, the problem to solve
                was no longer exiting legacy media or Web 2 but establishing a
                new, more resiliant network beyond them.
                <br />
                <br />
              </p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/a61cd85403-1721646613/about-nm-5.jpg"
                alt=""
              />
            </figure>
            <div className="" data-tags="">
              <p>
                <br />
                In late 2020, New Models, in collaboration with{" "}
                <a
                  href="https://www.instagram.com/joshuacitarella/"
                  rel="noopener noreferrer nofollow"
                >
                  Joshua Citarella
                </a>{" "}
                and{" "}
                <a
                  href="https://twitter.com/1nterdependence"
                  rel="noopener noreferrer nofollow"
                >
                  Interdpendence Pod
                </a>{" "}
                (
                <a
                  href="https://twitter.com/matdryhurst"
                  rel="noopener noreferrer nofollow"
                >
                  Mat Dryhurst
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://twitter.com/hollyherndon"
                  rel="noopener noreferrer nofollow"
                >
                  Holly Herndon
                </a>
                ), began working with{" "}
                <a
                  href="https://twitter.com/duncanswilson"
                  rel="noopener noreferrer nofollow"
                >
                  Duncan Wilson
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/cullenmiller"
                  rel="noopener noreferrer nofollow"
                >
                  Cullen Miller
                </a>
                , and{" "}
                <a
                  href="https://twitter.com/new_username_22"
                  rel="noopener noreferrer nofollow"
                >
                  James Geary
                </a>{" "}
                to develop web3 tools allowing creators to do just that.
                <br />
                <br />
                <strong>
                  <a
                    href="https://channel.xyz"
                    rel="noopener noreferrer nofollow"
                  >
                    Channel
                  </a>
                </strong>
                , which pre-launched in Jan 2022, is rethinking how content is
                valued, distributed, and consumed. MVP arriving late 2022.
                <br />
                <br />
              </p>
              <p></p>
            </div>{" "}
            <figure data-ratio="auto">
              <img
                src="https://newmodels.io/media/pages/about/038f69a907-1721646615/jakritger-castle-flows-2021.jpg"
                alt=""
              />
            </figure>
            <div className="" data-tags="">
              <p>
                <em>
                  Jak Ritger, illustration of interconnected dark forest,
                  creator communities spilling into each other, sharing flows of
                  content, 2021.
                </em>
              </p>
            </div>{" "}
            <div className="nm" data-tags="">
              <p>
                <br />
                In equal parts,{" "}
                <strong>
                  New Models creates content, community, and the structures that
                  facilitate both
                </strong>
                . As media evolves, so too will New Models. &lt;3
              </p>
              <br />
            </div>{" "}
            <hr />
          </div>
        </div>
      )}
    </div>
  )
}
