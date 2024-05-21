const BE_URL = import.meta.env.VITE_BE_BASE_URL

export const CreateService = async (id, service) => {

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(service)
    }
    const response = await fetch(`${BE_URL}/rent-service/${id}`, options)
    const json = await response.json()
    if (!response.ok) throw json
    return json
}
