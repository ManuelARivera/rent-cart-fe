import React from 'react'


export const OurfleetChildModal = ({
    id,
    brand,
    passengers,
    luggages,
    transmission,
    mileage,
    price,
    images,
    onClick,
    selected
}) => {
    const priceFormatted = (price ?? 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    })

    return (
        <div className={`our-fleetchild-container ${selected ? "selected" : ''}`} id={"car-" + id} onClick={onClick}>
            <h3 title={brand} className='brand-container'>{brand}</h3>
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
            <img className='car-image-container' src={images[0]} />


            <h4 className='mileage-container'>{mileage}</h4>
            <div className='price-rent-btn-container'>
                <span className='price-container'>{priceFormatted}</span>
            </div>
        </div>
    )
}
