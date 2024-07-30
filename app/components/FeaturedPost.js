import Image from "next/image"

export default function FeaturedPost({ featured }) {
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="max-w-xl">
          <a href={featured.link}>
            <Image
              src={featured.thumbnail}
              alt=""
              width={800}
              height={800}
              priority
            />
            <div className="flex text-center">
              <div
                className={`p-10 text-4xl font-bold uppercase ${featured.modifiers}`}
                dangerouslySetInnerHTML={{ __html: featured.text }}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
