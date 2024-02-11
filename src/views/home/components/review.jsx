import React from 'react'
import { ReviewChild } from './reviewChild';

export const Review = () => {
    const reviewChildData = [
        {
            name: 'Karla García',
            date: '7 Noviembre 2023',
            stars: 5,
            review: 'Autos nuevos y excelente servicio, son rápidos y confiables, súper recomendado.'
        },
        /* {
             name: 'Jhonatan Orozco',
             date: '14 Noviembre 2023',
             stars: 5,
             review: '100% Recomendados, excelente trato, y son muy puntuales.'
         },
         {
             name: 'María Rodríguez',
             date: '20 Diciembre 2023',
             stars: 5,
             review: 'Es un lugar seguro para alquilar. Te explican todo bien, el vehículo que alquilé estama limpio'
         },
         {
             name: 'Juan Pérez',
             date: '15 Enero 2024',
             stars: 4,
             review: 'Me impresionó la variedad de opciones de vehículos. El proceso de alquiler fue sencillo y el personal fue muy amable. Recomiendo esta empresa.'
         }*/
    ];

    return (
        <>
            <div className='container-blue'>
                <div className='container-blue-tow'>

                    <h2>Cómo piensan nuestros clientes</h2>

                    <div className='child-review-conteiner'>
                        {reviewChildData.map((data, index) => (
                            <ReviewChild key={index} {...data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

