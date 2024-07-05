export async function getData() {
  const response = await fetch("https://newmodels.io/json")
  const jsonData = await response.json()
  return jsonData
}

// export default async function handler() {
//   const jsonData = await getData()
//   res.status(200).json(jsonData)
// }
