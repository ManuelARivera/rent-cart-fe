import React from 'react'

export const Footer = () => {

    return (
        <div className='container-dark-blue'>
            <div className='footer-conteiner '>
                <div className='information-rentacar-footer'>
                    <img src='/images/logo-footer.png' />
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
                        <span> amaurisrentacar@gmail.com</span>
                        <span> Santo Domingo, Republica Dominicana</span>
                        <span> Lunes - Lunes 24/7</span>
                        <div className='social-networks-conteiner'>
                            <img src='/images/facebook.png' />
                            <img src='/images/instagram.png' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
