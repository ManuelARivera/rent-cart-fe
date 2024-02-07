import React from 'react'
import Rater from 'react-rater'

export const ReviewChild = ({ name, date, stars, review }) => {
    return (
        <>
            <div className='reviewChild-conteiner'>
                <h3>{name}</h3>
                <h4>{date}</h4>
                <div className='start'>
                    <Rater total={5} rating={stars} interactive={false} />
                </div>
                <p>{review}</p>

            </div>
        </>
    )
}
