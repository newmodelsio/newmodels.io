export async function kirbyCMS() {
  const response = await fetch("https://newmodels.io/json")
  const jsonData = await response.json()
  return jsonData
}
