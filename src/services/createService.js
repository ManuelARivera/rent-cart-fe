export const CreateService = async (id, service) => {
    console.log(service)

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(service)
    }
    const response = await fetch(`http://localhost:3000/rent-service/${id}`, options)
    const json = await response.json()
    if (!response.ok) throw json
    return json
}
