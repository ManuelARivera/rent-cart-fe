import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useFormContext } from './modal'


export const UserDataForm = ({ goToNextStep }) => {
    const {
        value,
        update
    } = useFormContext()

    const [formData, setFormData] = useState({
        address: '',
        telephoneNumber: '',
        nationality: '',
        idCard: '',
        licencenumber: '',
        ...value
    })

    const [isValid, setIsValid] = useState(false);

    const handleChange = event => {
        const val = event.target.value;

        if (isEmail(val)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        setValue(val);
        props.handleChange(val, isValid);
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        update(formData)
        goToNextStep()
    }

    return (

        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >

            <TextField
                required
                id="standard-helperText"
                label="Identificación"
                variant="standard"
                name='idCard'
                onChange={onChangeInput}
                value={formData.idCard}
            />
            <TextField
                required
                id="standard-helperText"
                label="Dirección"
                variant="standard"
                name='address'
                onChange={onChangeInput}
                value={formData.address}
            />
            <TextField
                required
                id="standard-helperText"
                label="Whatsapp"
                variant="standard"
                name='telephoneNumber'
                onChange={onChangeInput}
                value={formData.telephoneNumber}
            />

            <TextField
                required
                id="standard-helperText"
                label="Licencia"
                variant="standard"
                name='licencenumber'
                onChange={onChangeInput}
                value={formData.licencenumber}
            />

            <div className='modal-content-buttons'>
                <button type="submit" className='modal-content-button-next' ><NavigateNextIcon /> </button>
            </div>

        </Box>

    )
}
//prueba