import React from 'react'
const BE_URL = import.meta.env.VITE_BE_BASE_URL

export const CreateContactaReview = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(`${BE_URL}/contactreview`, options)
    return response.json()
}
