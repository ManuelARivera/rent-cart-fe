import React, { useEffect, useState } from 'react'
import { ReviewChild } from './reviewChild';
import { useAppConext } from '../../../hooks/useAppContext';

export const Review = () => {
    const { handleHamburgerClickOff } = useAppConext();
    const reviewChildData = [
        {
            name: 'Karla García',
            date: '07/11/23',
            stars: 5,
            review: 'Autos nuevos y excelente servicio, son rápidos y confiables, súper recomendado.'
        },
        {
            name: 'Jhonatan Orozco',
            date: '14/11/23',
            stars: 5,
            review: '100% Recomendados, excelente trato, y son muy puntuales.'
        },
        {
            name: 'María Rodríguez',
            date: '20/12/23',
            stars: 5,
            review: 'Es un lugar seguro para alquilar. Te explican todo bien, el vehículo que alquilé estaba limpio.'
        },
        {
            name: 'Juan Pérez',
            date: '15/01/24',
            stars: 4,
            review: 'Me impresionó la variedad de opciones de vehículos. El proceso de alquiler fue sencillo y el personal fue muy amable. Recomiendo esta empresa.'
        },
        {
            name: 'Ana López',
            date: '18/02/24',
            stars: 4,
            review: 'Excelente atención al cliente, los vehículos están en perfectas condiciones. Muy satisfecha con el servicio.'
        },
        {
            name: 'Miguel Torres',
            date: '25/03/24',
            stars: 3,
            review: 'Buen servicio en general, aunque la entrega del vehículo tuvo un pequeño retraso. Recomendaría mejorar la puntualidad.'
        },
        {
            name: 'Laura Sánchez',
            date: '10/04/24',
            stars: 5,
            review: 'Increíble experiencia de alquiler, el personal es muy amable y el proceso es rápido. Definitivamente volveré a alquilar aquí.'
        },
        {
            name: 'Carlos Ramírez',
            date: '05/05/24',
            stars: 4,
            review: 'Buena variedad de opciones de vehículos. El proceso de devolución fue rápido y sin complicaciones.'
        },
        {
            name: 'Sofía González',
            date: '12/06/24',
            stars: 5,
            review: 'El servicio al cliente es excepcional. Los autos están limpios y en buen estado. Muy recomendado.'
        }
    ];

    const [randomReviews, setRandomReviews] = useState([]);

    // Función para obtener índices aleatorios
    const getRandomIndexes = (max, count) => {
        const indexes = [];
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * max);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    useEffect(() => {
        // Obtener tres índices aleatorios
        const randomIndexes = getRandomIndexes(reviewChildData.length, 3);

        // Seleccionar los elementos correspondientes a los índices aleatorios
        const selectedReviews = randomIndexes.map(index => reviewChildData[index]);

        // Actualizar el estado con las reseñas aleatorias
        setRandomReviews(selectedReviews);
    }, []); // El segundo argumento [] significa que este efecto solo se ejecutará una vez al montar el componente






    return (
        <>
            <div onClick={handleHamburgerClickOff} className='container-blue'>
                <div className='container-blue-tow'>

                    <h2>Cómo piensan nuestros clientes</h2>

                    <div className='child-review-conteiner'>
                        {randomReviews.map((data, index) => (
                            <ReviewChild key={index} {...data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

