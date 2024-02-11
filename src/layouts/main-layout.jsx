import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/footer'
import { HamburgerIcon } from '@chakra-ui/icons'

export const MainLayout = () => {
    const location = useLocation()
    const [isNavVisible, setNavVisible] = useState(false);

    const handleHamburgerClick = () => {
        setNavVisible(!isNavVisible);
    }

    const classNameVisible = isNavVisible ? 'nav-container nav-container_visible' : 'nav-container';

    const imgBgClass = location.pathname === '/about_us' ? 'about-us-nav' : location.pathname === '/contact' ? 'contact-nav' : 'our_fleet-nav'
    console.log(imgBgClass)
    const className = location.pathname === '/' ? 'container-blue' : `container-image ${imgBgClass}`
    const imgSrc = location.pathname === '/' ? '/images/logo.png' : '/images/logo-footer.png'





    return (
        <>
            <div className={className}>
                <div className='header-container'>
                    <img className='logo-header' src={imgSrc} />
                    <div className='hamburgericon-container'>
                        <HamburgerIcon onClick={handleHamburgerClick} />
                    </div>
                    <div className={classNameVisible}>
                        <Link to='/'>INICIO</Link>
                        <Link to='/about_us'>NOSOTROS</Link>
                        <Link to='/our_fleet'>VEHICULOS</Link>
                        <Link to='/contact'>CONTACTO</Link>
                    </div>
                </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}
