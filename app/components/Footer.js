"use client"

export default function Footer({ data }) {
  return (
    <div className="text-[11px] border-t  flex flex-col md:flex-row items-center justify-between uppercase">
      {data && (
        <div
          className="p-5 w-full md:flex md:flex-row gap-7 grid grid-cols-2"
          dangerouslySetInnerHTML={{ __html: data.footer }}
        ></div>
      )}
      <div className="p-5 whitespace-nowrap">© 2024 NEW MODELS</div>
    </div>
  )
}
