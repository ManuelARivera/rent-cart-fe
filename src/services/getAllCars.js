const BE_URL = import.meta.env.VITE_BE_BASE_URL

export const getAllCars = async () => {
  const options = {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  }
  const response = await fetch(`${BE_URL}/car`, options)
  if (!response.ok) return []
  return response.json()
}