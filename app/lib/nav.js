"use server"

export async function getNav() {
  try {
    const response = await fetch(`https://newmodels.io/site.json`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
