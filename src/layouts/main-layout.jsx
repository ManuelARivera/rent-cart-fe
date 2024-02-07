import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <div className='container-blue'>
                <div className='header-container'>
                    <img className='logo-header' src='/images/logo.png' />
                    <div className='nav-container'>
                        <Link to='/'>INICIO</Link>
                        <Link to='/about'>NOSOTROS</Link>
                        <Link to='/our_fleet'>VEHICULOS</Link>
                        <Link to='/contact'>CONTACTO</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
