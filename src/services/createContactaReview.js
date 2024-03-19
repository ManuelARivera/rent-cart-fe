import React from 'react'

export const CreateContactaReview = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:3000/contactreview', options)
    return response.json()
}
