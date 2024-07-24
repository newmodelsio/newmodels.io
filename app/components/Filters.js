import Link from "next/link"

export default function Filters({ results }) {
  return (
    <div className="p-5 flex gap-5">
      <div>
        2024 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2024")
          }).length
        }
        )
      </div>
      <div>
        2023 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2023")
          }).length
        }
        )
      </div>
      <div>
        2022 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2022")
          }).length
        }
        )
      </div>

      <div>
        2021 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2021")
          }).length
        }
        )
      </div>

      <div>
        2020 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2020")
          }).length
        }
        )
      </div>
      <div>
        2019 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2019")
          }).length
        }
        )
      </div>
      <div>
        2018 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2018")
          }).length
        }
        )
      </div>
      <div>
        2017 (
        {
          results.archive.filter(function (str) {
            return str.published.includes("2017")
          }).length
        }
        )
      </div>
    </div>
  )
}
