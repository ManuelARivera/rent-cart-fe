import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Our_fleetChild } from './our_fleetChild'



export const Our_fleet = () => {

    const [isNavVisible, setNavVisible] = useState(false);
    const [selectedCarTypes, setselectedCarTypes] = useState('');
    const [selectedTransmission, setselectedTransmission] = useState('');

    const carTypes = Array.from(new Set(arr.map(ar => ar.carType)));
    const Transmissions = Array.from(new Set(arr.map(ar => ar.transmission)));

    const filteredCars = arr.filter(car => {
        const carTypeMatch = selectedCarTypes === '' || car.carType === selectedCarTypes;
        const transmissionMatch = selectedTransmission === '' || car.transmission === selectedTransmission;

        return carTypeMatch && transmissionMatch;
    });


    const handleHamburgerClick = () => {
        setNavVisible(!isNavVisible);
    }

    const handleHamburgerClickOff = () => {
        setNavVisible(false);
    }

    const classNameVisible = isNavVisible ? 'nav-container2 nav-container_visible2' : 'nav-container2';

    return (
        <div className='ourfleet-container'>

            <a className='logo-link' href='/'>
                <img className='logo-image' src='images/logo.png' alt='Logo' />
            </a>
            <div className='ourfleet-navbar-container'>
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
            <div onClick={handleHamburgerClickOff} className='ourfleet-filter-container'>

                <div className='ourfleet-filter-car-container'>

                    <div className='filter-container'>
                        <h3>FILTROS</h3>
                    </div>

                    <div className='filters-desktop'>
                        <form className='radiobuttons-container radiobuttons-container-carTypes'>
                            <h3>Tipo de auto</h3>
                            <label>
                                <input
                                    type="radio"
                                    name="carTypes"
                                    value=""
                                    checked={selectedCarTypes === ''}
                                    onChange={() => setselectedCarTypes('')}
                                />
                                Todos
                            </label>
                            {carTypes.map((carType, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="carTypes"
                                        value={carType}
                                        checked={selectedCarTypes === carType}
                                        onChange={() => setselectedCarTypes(carType)}
                                    />
                                    {carType}
                                </label>
                            ))}
                        </form>

                        <form className='radiobuttons-container radiobuttons-container-transmission'>
                            <h3>Transmisión</h3>
                            <label>
                                <input
                                    type="radio"
                                    name="transmission"
                                    value=""
                                    checked={selectedTransmission === ''}
                                    onChange={() => setselectedTransmission('')}
                                />
                                Todas
                            </label>
                            {Transmissions.map((Transmission, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="transmission"
                                        value={Transmission}
                                        checked={selectedTransmission === Transmission}
                                        onChange={() => setselectedTransmission(Transmission)}
                                    />
                                    {Transmission}
                                </label>
                            ))}
                        </form>
                    </div>
                    <div className='select-container'>
                        <form className='select-container select-container-carTypes'>
                            <select
                                className="carTypes"
                                value={selectedCarTypes}
                                onChange={(e) => setselectedCarTypes(e.target.value)}
                            >
                                <option value="">Todos</option>
                                {carTypes.map((carType, index) => (
                                    <option key={index} value={carType}>{carType}</option>
                                ))}

                            </select>
                            <select
                                className="transmission"
                                value={selectedTransmission}
                                onChange={(e) => setselectedTransmission(e.target.value)}
                            >
                                <option value="">Marchas</option>
                                {Transmissions.map((Transmission, index) => (
                                    <option key={index} value={Transmission}>{Transmission}</option>
                                ))}
                            </select>
                        </form>
                    </div>

                </div>
            </div>

            <div onClick={handleHamburgerClickOff} className='ourfleet-car-container'>
                {
                    filteredCars.map(el => <Our_fleetChild {...el} />)
                }
            </div>

        </div>
    )
}


const arr = [
    {
        name: 'Honda CR-V 2022',
        passengers: 2,
        luggages: 3,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 2500,
        img: '/images/cr-v.png',
        carType: 'SUV',
    },
    {
        name: 'Kia Soul 2018',
        passengers: 5,
        luggages: 3,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 2550,
        img: 'https://www.dealerfireblog.com/familykia/wp-content/uploads/sites/1073/2018/03/Alien-2_o.jpg',
        carType: 'Familiar',
    },
    {
        name: 'Honda CR-V 2024',
        passengers: 2,
        luggages: 3,
        transmission: 'Manual',
        mileage: 'Ilimitado',
        price: 2500,
        img: 'https://selfimotors.com/wp-content/uploads/2023/06/KIA-SOUL-13_resized.jpg',
        carType: 'SUV',
    },
    {
        name: 'Toyota Camry 2023',
        passengers: 4,
        luggages: 2,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 2800,
        img: 'https://selfimotors.com/wp-content/uploads/2023/06/KIA-SOUL-13_resized.jpg',
        carType: 'Sedán',
    },
    {
        name: 'Mazda CX-5 2021',
        passengers: 5,
        luggages: 4,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 3000,
        img: '/images/cr-v.png',
        carType: 'SUV',
    },
    {
        name: 'Ford Mustang 2022',
        passengers: 2,
        luggages: 1,
        transmission: 'Manual',
        mileage: 'Ilimitado',
        price: 3500,
        img: 'https://www.dealerfireblog.com/familykia/wp-content/uploads/sites/1073/2018/03/Alien-2_o.jpg',
        carType: 'Coupé',
    },
    {
        name: 'Chevrolet Malibu 2022',
        passengers: 4,
        luggages: 3,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 2700,
        img: 'https://www.dealerfireblog.com/familykia/wp-content/uploads/sites/1073/2018/03/Alien-2_o.jpg',
        carType: 'Sedán',
    },
    {
        name: 'Nissan Rogue 2023',
        passengers: 5,
        luggages: 4,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 3200,
        img: 'https://selfimotors.com/wp-content/uploads/2023/06/KIA-SOUL-13_resized.jpg',
        carType: 'SUV',
    },
    {
        name: 'Audi TT 2022',
        passengers: 2,
        luggages: 1,
        transmission: 'Automática',
        mileage: 'Ilimitado',
        price: 3800,
        img: '/images/cr-v.png',
        carType: 'Coupé',
    }
];