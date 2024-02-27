import React from 'react';
import { ServiceChild } from './serviceChild';
import { useAppConext } from '../../../hooks/useAppContext';

export const Service = () => {
    const { handleHamburgerClickOff } = useAppConext();
    const serviceChildData = [
        {
            img: {
                src: '/images/security.png',
                className: 'image_secutity'
            },
            title: 'Seguridad',
            text: 'Elevar los estándares para proporcionar un entorno seguro en todos los aspectos del servicios.'
        },
        {
            img: {
                src: '/images/trust.png',
                className: 'image_trust'
            },
            title: 'Confianza',
            text: 'Cultivar la confianza mediante un servicio seguro, fiable y excepcional en cada experiencia de alquiler.'
        },
        {
            img: {
                src: '/images/service.png',
                className: 'image_service'
            },
            title: 'Servicio',
            text: 'Destacar por un servicio excepcional, brindando experiencias de alquiler seguras y fiables en todo momento.'
        }
    ];

    return (
        <>
            <div onClick={handleHamburgerClickOff} className='service-conteiner'>
                <h2>Nuestra misión</h2>
                <div className='child-sevice-conteiner'>
                    {serviceChildData.map((data, index) => (
                        <ServiceChild key={index} {...data} />
                    ))}
                </div>

            </div>
        </>
    );
};
