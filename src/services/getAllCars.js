export const getAllCars = async () => {
  const options = {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  }
  const response = await fetch('http://localhost:3000/car', options)
  if(!response.ok) return []
  return response.json()
}