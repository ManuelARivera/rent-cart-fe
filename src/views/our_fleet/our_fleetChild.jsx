import React from 'react'


export const Our_fleetChild = ({
    name,
    passengers,
    luggages,
    transmission,
    mileage,
    price,
    img,
}) => {
    console.log(price)
    const priceFormatted = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    })
    return (
        <div className='our-fleetchild-container'>
            <h3 className='brand-container'>{name}</h3>
            <div className='alok'>
                <div className='passengers-container'>
                    <img src='images/passengers.png' /> {passengers}
                </div>
                <div className='passengers-container'>
                    <img src='images/luggage.png' /> {luggages}
                </div>
                <div className='passengers-container'>
                    <img src='images/passengers.png' /> {transmission}
                </div>
            </div>
            <img className='car-image-container' src={img} />


            <h4 className='mileage-container'>{mileage}</h4>
            <div className='price-rent-btn-container'>
                <span className='price-container'>{priceFormatted}</span>
                <button>RENT A CAR</button>
            </div>
        </div>
    )
}
