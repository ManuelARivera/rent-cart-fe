import React from 'react';
import { Service } from './components/service';
import { Review } from './components/review';

export const Home = () => {
    return (
        <>

            <div className='container-blue'>
                <div className='slogan-conteiner'>
                    <h1>Explora, vive... tu viaje, tu libertad</h1>
                    <img className='img-home' src='/images/cr-v.png' />
                    <button>RENT a CAR</button>
                </div>
            </div>
            <Service />
            <Review />
        </>
    )
}
