import React, { useState, useMemo, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { useAppConext } from '../hooks/useAppContext';
import { useFormContext } from './modal';
import { OurfleetChildModal } from './our-fleetChild-modal';

export const CarDataForm = ({ goBackOneStep, goToNextStep }) => {

    const {
        value,
        update
    } = useFormContext()

    const { idcrr, cars } = useAppConext()
    const [formData, setFormData] = useState({
        idCar: idcrr || '',
        ...value
    })

    const [selectedCarTypes, setselectedCarTypes] = useState('');
    const { carTypes } = useMemo(
        () => {
            const addedCarTypes = {}
            const carTypes = []

            for (const car of cars) {
                if (!addedCarTypes[car.carType]) {
                    carTypes.push(car.carType)
                    addedCarTypes[car.carType] = 1
                }
            }
            return {
                carTypes,
            }
        },
        [cars]
    );

    const handleChange = (e) => {
        setselectedCarTypes(e.target.value)
    };

    const handleOnclick = (e) => {
        setFormData(prev => ({
            ...prev,
            idCar: e
        }))
    };

    const submit = () => {
        if (!formData.idCar) {
            alert("NO PUEDES CONTINUAR SIN SELECCIONAR UN CARRO")
            return
        }
        update(formData)
        goToNextStep();
    }

    const filteredCars = useMemo(() => cars.filter(car => {
        const carTypeMatch = selectedCarTypes === '' || car.carType === selectedCarTypes;
        const availability = car.availability !== false
        return carTypeMatch && availability;
    }), [cars, selectedCarTypes])

    const carSelected = formData.idCar

    useEffect(() => {
        setTimeout(() => {
            const el = document.querySelector('.selected')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }, [])

    return (
        <>
            < div >

                <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                >
                    <InputLabel id="demo-simple-select-standard-label">Tipo de auto</InputLabel>
                    <Select
                        required
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name="idCar"
                        value={selectedCarTypes}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {carTypes.map((carType, index) => (
                            <MenuItem
                                key={index}
                                value={carType}
                            >
                                {carType}
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <div className='ourfleet-car-container-modal'>
                    {
                        filteredCars.map(car => (
                            <OurfleetChildModal
                                key={car.id}
                                {...car}
                                onClick={() => handleOnclick(car.id)}
                                selected={carSelected === car.id}
                            />
                        ))
                    }
                </div>
                <div className='modal-content-buttons'>
                    <button className='modal-content-button-next' onClick={goBackOneStep} ><NavigateBeforeIcon /> </button>
                    <button className='modal-content-button-next' onClick={submit}><NavigateNextIcon /> </button>
                </div>
            </div >
        </>
    )
}
