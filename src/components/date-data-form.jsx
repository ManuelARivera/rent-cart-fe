import React, { useState } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useFormContext } from './modal'

export const DateDataForm = ({ goBackOneStep, goToNextStep }) => {

    const {
        value,
        update
    } = useFormContext()

    const [formData, setFormData] = useState({
        pickupDate: null,
        returnDate: null,
        pickupLocation: '',
        returnLocation: '',
        ...value
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const onDatePickerChange = (date, name) => {
        setFormData((prev) => ({
            ...prev,
            [name]: date,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        update(formData);
        goToNextStep();

    };

    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >

            <div className='pickup-information-container'>
                <h5>Recogida</h5>

                <div className='date-time'>
                    <DateTimePicker
                        required
                        disablePast
                        name="pickupDate"
                        onChange={date => onDatePickerChange(date, 'pickupDate')}
                        value={formData.pickupDate}
                        slotProps={{
                            textField: {
                                required: true
                            }
                        }}
                    />
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        <InputLabel id="demo-simple-select-standard-label">Lugar de entrega</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"10"}>Ten</MenuItem>
                            <MenuItem value={"20"}>Twenty</MenuItem>
                            <MenuItem value={"30"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <h5>Devolución</h5>
                <div className='date-time'>
                    <DateTimePicker
                        required
                        disablePast
                        minDate={formData.pickupDate}
                        name='returnDate'
                        onChange={date => onDatePickerChange(date, 'returnDate')}
                        value={formData.returnDate}
                        slotProps={{
                            textField: {
                                required: true
                            }
                        }}
                    />
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        <InputLabel id="demo-simple-select-standard-label">Lugar de retorno</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="returnLocation"
                            value={formData.returnLocation}
                            onChange={handleChange}

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"10"}>Ten</MenuItem>
                            <MenuItem value={"20"}>Twenty</MenuItem>
                            <MenuItem value={"30"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className='modal-content-buttons'>
                <button className='modal-content-button-next' onClick={goBackOneStep} ><NavigateBeforeIcon /> </button>
                <button type="submit" className='modal-content-button-next' ><NavigateNextIcon /> </button>
            </div>
        </Box>
    )
}
