import React from 'react'
import { useAppConext } from '../hooks/useAppContext'

export const Footer = () => {
    const { handleHamburgerClickOff } = useAppConext();
    return (
        <div onClick={handleHamburgerClickOff} className='container-dark-blue'>
            <div className='footer-conteiner '>
                <div className='information-rentacar-footer'>
                    <a className='information-rentacar-footer' href='/' >
                        <img src='/images/logo-footer.png' />
                    </a>
                    <p>
                        Amauris Rent a Car es la compañía líder en alquiler de vehículos en la República Dominicana.
                        Nuestra reputación es nuestro activo más valioso, construido por nuestro talentoso equipo.
                        En Amauris Rent a Car, nos enorgullece ofrecer servicios de alquiler de automóviles excepcionales,
                        respaldados por la dedicación y el profesionalismo de nuestro personal.
                    </p>
                </div>

                <div className='information-contact-footer'>
                    <h3>Contacto</h3>
                    <div className='icrac'>
                        <a className='email_container' href='mailto:amaurisrentcar@outlook.com'> amaurisrentcar@outlook.com</a>
                        <span> Santo Domingo, Republica Dominicana</span>
                        <span> Lunes - Domingo 24/7</span>
                        <div className='social-networks-conteiner'>
                            <a href='https://www.facebook.com/profile.php?id=61550044266311' target='_blank'>
                                <img src='/images/facebook.png' />
                            </a>
                            <a href='https://www.instagram.com/amaurisrentcar/' target='_blank'>
                                <img className='instlogo' src='/images/instagram.png' />
                            </a>

                            <a href="https://wa.me/18299051978" target='_blank'>
                                <img className='wslogo' alt="Chat on WhatsApp" src="/images/ws_logo.png" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
