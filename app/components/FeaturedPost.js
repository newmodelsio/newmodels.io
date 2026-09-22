import Image from "next/image"

export default function FeaturedPost({ featured }) {

  return (
    <>
      {featured && (
        <div className="flex justify-center my-10">
          <div className="max-w-xl">
            <a href={featured.url} target="_blank">
              <Image
                src={featured.imageUrl}
                alt=""
                width={800}
                height={800}
                priority
              />
              <div className="flex text-center">
                <div
                  className={`p-10 text-4xl font-bold uppercase text-[red]`}
                  dangerouslySetInnerHTML={{ __html: featured.title }}
                ></div>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
