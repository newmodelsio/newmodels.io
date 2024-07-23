"use server"

export async function getKirby() {
  const response = await fetch("https://newmodels.io/site.json")
  const jsonData = await response.json()
  return jsonData
}

export async function getArchive() {
  const response = await fetch("https://newmodels.io/json")
  const jsonData = await response.json()
  return jsonData
}
