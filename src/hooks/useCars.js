import React, { useEffect, useState } from 'react'
import { getAllCars } from '../services/getAllCars';

export const useCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        getAllCars().then(carrs => setCars(carrs.map(carr => ({ ...carr, id: carr._id }))));
    }, []);

    return {
        cars,
        setCars
    }

}
