import React, { useState, useMemo } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { useCars } from '../hooks/useCars';
import { useFormContext } from './modal'
import { Our_fleetChild } from '../views/our_fleet/our_fleetChild';
import { OurfleetChildModal } from './our-fleetChild-modal';

export const CarDataForm = ({ goBackOneStep, goToNextStep }) => {

    const {
        value,
        update
    } = useFormContext()

    const { cars } = useCars()
    const [selectedCarTypes, setselectedCarTypes] = useState('');
    const [formData, setFormData] = useState({
        idCar: '',
        ...value
    })


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

    const filteredCars = useMemo(() => cars.filter(car => {
        const carTypeMatch = selectedCarTypes === '' || car.carType === selectedCarTypes;
        console.log(selectedCarTypes)
        return carTypeMatch;
    }), [cars, selectedCarTypes])

    console.log(filteredCars)

    console.log({ value, formData })
    return (
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
                    filteredCars.map(el => <OurfleetChildModal {...el} />)
                }
            </div>
            <div className='modal-content-buttons'>
                <button className='modal-content-button-next' onClick={goBackOneStep} ><NavigateBeforeIcon /> </button>
                <button className='modal-content-button-next' ><NavigateNextIcon /> </button>
            </div>
        </div >
    )
}
