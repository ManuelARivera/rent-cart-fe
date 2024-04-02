import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/footer'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useAppConext } from '../hooks/useAppContext'

export const MainLayout = () => {
    const { handleHamburgerClick, isNavVisible } = useAppConext()
    const location = useLocation()

    const classNameVisible = isNavVisible ? 'nav-container nav-container_visible' : 'nav-container';
    const imgBgClass = location.pathname === '/about_us' ? 'about-us-nav' : 'contact-nav'
    const className = location.pathname === '/' ? 'container-blue' : location.pathname === '/our_fleet' ? '' : `container-image ${imgBgClass}`
    const imgSrc = location.pathname === '/' ? '/images/logo.png' : location.pathname === '/our_fleet' ? '' : '/images/logo-footer.png'


    return (
        <>
            {location.pathname !== '/our_fleet' && (
                <div className={className}>
                    <div className='header-container'>
                        <a href='/'>
                            <img className='logo-header' src={imgSrc} />
                        </a>
                        <div className='hamburgericon-container'>
                            <HamburgerIcon onClick={handleHamburgerClick} />
                        </div>
                        <div className={classNameVisible}>
                            <Link onClick={handleHamburgerClick} to='/'>INICIO</Link>
                            <Link onClick={handleHamburgerClick} to='/about_us'>NOSOTROS</Link>
                            <Link onClick={handleHamburgerClick} to='/our_fleet'>VEHICULOS</Link>
                            <Link onClick={handleHamburgerClick} to='/contact'>CONTACTONOS</Link>
                        </div>
                    </div>
                </div>
            )}
            <Outlet />
            <Footer />
        </>
    )
}
