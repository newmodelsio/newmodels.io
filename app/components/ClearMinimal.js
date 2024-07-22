import feed from "../nm.json"
import Section from "./Section"

export default function ClearMinimal() {
  return (
    <>
      <div className="grid md:grid-cols-3 divide-x">
        <div className="flex flex-col">
          {feed
            .filter((section) => section.col == 1)
            .map((section) => (
              <Section key={section.title} section={section} />
            ))}
          <div className="p-5">
            <strong>SOME LEGACY LINKS</strong>
            <p>
              <a
                href="http://aeiowu.com/billion/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LEARN: 📈How big is a BILLION?
              </a>
              <br />
              <a
                href="https://youtu.be/uD4izuDMUQA?t=14"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LEARN: 📡Time-lapse of the Future. Journey to the End of Time
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=ymI5Uv5cGU4"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LEARN: 🌍Time-Lapse History MAP of the WORLD
              </a>
              <br />
              <a
                href="http://www.societyofcontrol.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                SURF: 💻Society of Control
              </a>
              <br />
              <a
                href="https://www.whatsonweibo.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                SURF: 💻What{"'"}s on 🇨🇳Weibo ...
              </a>
              <br />
              <a
                href="http://everynoise.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                SURF: 💻A scatter-plot visualization of every music genre
                Spotify recognizes
              </a>
              <br />
              <a
                href="http://organic.software/faces"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                SURF: 💻Art collector 🎨database,{" "}
              </a>
              <a
                href="http://organic.software"
                rel="noopener noreferrer nofollow"
              >
                http://organic.software
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          {feed
            .filter((section) => section.col == 2)
            .map((section) => (
              <Section key={section.title} section={section} />
            ))}
        </div>
        <div className="flex flex-col">
          {feed
            .filter((section) => section.col == 3)
            .map((section) => (
              <Section key={section.title} section={section} />
            ))}
          <div>
            <img src="/perspectivegrid.png" alt="" />
          </div>
        </div>
      </div>

      <div className="p-5 border-t">
        <strong>SOME LEGACY SOURCES</strong>
        <p className="columns-2 md:columns-3 ">
          <a
            href="https://032c.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            032C, Berlin
          </a>
          <br />
          <a
            href="http://aaaaarg.fail/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            AAAAARG
          </a>{" "}
          <br />
          <a
            href="https://www.affidavit.art/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            AFFIDAVIT
          </a>{" "}
          <br />
          <a
            href="https://africasacountry.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            AFRICA IS A COUNTRY
          </a>
          <br />
          <a
            href="http://www.artagainstart.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            ART AGAINST ART, Berlin
          </a>
          <br />
          <a
            href="https://www.artinamericamagazine.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            ART in AMERICA
          </a>
          <br />
          <a
            href="http://artforum.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            ARTFORUM
          </a>
          <br />
          <a
            href="http://www.artnews.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            ART NEWS
          </a>
          <br />
          <a
            href="https://artnet.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            ARTNET
          </a>
          <br />
          <a
            href="https://thebaffler.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            BAFFLER
          </a>
          <br />
          <a
            href="https://bidoun.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            BIDOUN
          </a>
          <br />
          <a
            href="https://bombmagazine.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            BOMB, New York
          </a>
          <br />
          <a
            href="http://brand-new-life.org/b-n-l/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            BRAND-NEW-LIFE, Zürich
          </a>
          <br />
          <a
            href="https://brooklynrail.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            BROOKLYN RAIL
          </a>
          <br />
          <a
            href="https://magculture.com/civilization-1/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            CIVILIZATION, New York
          </a>
          <br />
          <a
            href="https://thecreativeindependent.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            CREATIVE INDEPENDENT
          </a>
          <br />
          <a
            href="https://communemag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            COMMUNE
          </a>
          <br />
          <a
            href="http://www.contemporaryartdaily.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            CONTEMPORARY ART DAILY
          </a>
          <br />
          <a
            href="http://www.artwritingdaily.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            CONTEMPORARY ART WRITING DAILY
          </a>
          <br />
          <a
            href="http://dis.art/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            DIS.ART
          </a>
          <br />
          <a
            href="https://www.documentjournal.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            DOCUMENT
          </a>
          <br />
          <a
            href="http://www.drudgereport.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            DRUDGE REPORT
          </a>
          <br />
          <a
            href="https://www.economist.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            ECONOMIST
          </a>
          <br />
          <a
            href="http://www.e-flux.com/journal/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            E-FLUX
          </a>
          <br />
          <a
            href="https://www.dissentmagazine.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            DISSENT
          </a>
          <br />
          <a
            href="https://www.fastcompany.com/technology/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            FAST COMPANY
          </a>
          <br />
          <a
            href="https://www.filmcomment.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            FILM COMMENT
          </a>
          <br />
          <a
            href="http://google.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            FINANCIAL TIMES
          </a>
          <br />
          <a
            href="https://failedarchitecture.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            FAILED ARCHITECTURE
          </a>
          <br />
          <a
            href="https://www.flashartonline.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            FLASH ART, Milan
          </a>
          <br />
          <a
            href="https://frieze.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            FRIEZE
          </a>
          <br />
          <s>
            <a
              href="https://www.galaxiay2k.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              GALAXIA Y2K
            </a>
          </s>
          <br />
          <a
            href="http://www.greyroom.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            GREY ROOM
          </a>
          <br />
          <a
            href="https://news.ycombinator.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            HACKER NEWS
          </a>
          <br />
          <a
            href="https://www.interviewmagazine.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            INTERVIEW
          </a>
          <br />
          <a
            href="https://jacobitemag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            JACOBITE
          </a>
          <br />
          <a
            href="http://kaleidoscope.media/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            KALEIDOSCOPE
          </a>
          <br />
          <a
            href="https://lareviewofbooks.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            LA REVIEW of BOOKS
          </a>
          <br />
          <a
            href="https://www.librarystack.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            LIBRARY STACK
          </a>
          <br />
          <a
            href="https://logicmag.io/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            LOGIC
          </a>
          <br />
          <a
            href="https://www.lrb.co.uk/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            LONDON REVIEW of BOOKS
          </a>
          <br />
          <a
            href="http://www.mayrevue.com/en/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            MAY REVUE, Paris
          </a>
          <br />
          <a
            href="https://neo-metabolism.stream/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            NEO-METABOLISM
          </a>
          <br />
          <a
            href="https://nplusonemag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            N+1
          </a>
          <br />
          <a
            href="https://thenewinquiry.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            NEW INQUIRY
          </a>
          <br />
          <a
            href="https://www.newyorker.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            NEW YORKER
          </a>
          <br />
          <a
            href="https://www.nybooks.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            NY REVIEW of BOOKS
          </a>
          <br />
          <a
            href="https://www.noemamag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            NOĒMA
          </a>
          <br />
          <a
            href="http://novembremagazine.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            NOVEMBRE
          </a>
          <br />
          <a
            href="https://www.mitpressjournals.org/toc/octo/current"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            OCTOBER
          </a>
          <br />
          <a
            href="https://www.theparisreview.org/blog/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            PARIS REVIEW
          </a>
          <br />
          <a
            href="https://pinupmagazine.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            PIN-UP
          </a>
          <br />
          <a
            href="https://thepointmag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            POINT
          </a>
          <br />
          <a
            href="https://thequietus.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            QUIETUS
          </a>
          <br />
          <a
            href="http://reallifemag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            REAL LIFE
          </a>
          <br />
          <a
            href="https://www.reddit.com/r/ContemporaryArt/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            REDDIT
          </a>
          <br />
          <a
            href="http://rhizome.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            RHIZOME
          </a>
          <br />
          <a
            href="https://www.ribbonfarm.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            RIBBON FARM
          </a>
          <br />
          <a
            href="https://www.selvajournal.org/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            SELVA
          </a>
          <br />
          <a
            href="http://www.smallpressnyc.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            SMALL PRESS
          </a>
          <br />
          <a
            href="https://spex.de/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            SPEX, Berlin
          </a>
          <br />
          <a
            href="https://spikeartmagazine.com/en"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            SPIKE, Berlin/Vienna
          </a>
          <br />
          <a
            href="http://www.starship-magazine.org/index.php?page=blog"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            STARSHIP, Berlin
          </a>
          <br />
          <a
            href="https://strelka.com/en/magazine/category/strelka-press/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            STRELKA MAGAZINE, Moscow
          </a>
          <br />
          <a
            href="https://tankmagazine.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            TANK, London
          </a>
          <br />
          <a
            href="https://www.textezurkunst.de/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            TEXTE ZUR KUNST, Berlin
          </a>
          <br />
          <a
            href="http://topicalcream.info/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            TOPICAL CREAM, New York
          </a>
          <br />
          <a
            href="https://www.canopycanopycanopy.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            TRIPLE CANOPY, New York
          </a>
          <br />
          <a
            href="http://www.ubu.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            UBU WEB
          </a>
          <br />
          <a
            href="http://vestoj.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            VESTOJ
          </a>
          <br />
          <a
            href="https://www.viewpointmag.com/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            VIEWPOINT
          </a>
          <br />
          <a
            href="http://x-traonline.org/online/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            X-TRA, Los Angeles
          </a>
        </p>
      </div>
    </>
  )
}
