import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Stepper } from 'react-form-stepper';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UserDataForm } from './user-data-form';
import { DateDataForm } from './date-data-form';
import { CarDataForm } from './car-data-form';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import dayjs from 'dayjs';

const FormContext = createContext({
    value: {},
    update: () => { }
})

export const useFormContext = () => {
    return useContext(FormContext)
}



export const Modals = ({ closeModal, isVisible }) => {
    const [formValues, setFormValues] = useState({})
    const [overlayStyle, setOverlayStyle] = useState({});
    const [step, setStep] = useState(0);
    const navigate = useNavigate()

    // MM-DD-YYYY
    console.log(Math.abs(dayjs('2024-03-02T22:27:45.832Z').diff(dayjs('2024-03-05T22:27:45.832Z'), "days")))
    console.log(step)
    const openModal = (overlayType) => {
        if (overlayType === 'overlayOne') {
            setOverlayStyle({
                backdropFilter: 'blur(10px) hue-rotate(90deg)',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            });
        } else if (overlayType === 'overlayTwo') {
            setOverlayStyle({
                backdropFilter: 'auto',
                backgroundColor: 'transparent',
                backdropInvert: '80%',
                backdropBlur: '2px',
            });
        }
    };

    const goToNextStep = () => {
        if (step === 3) return closeModal();
        setStep(step + 1)
        console.log(step)
    }

    const goBackOneStep = () => {
        if (step === 0) return;
        setStep(step - 1)
        console.log(step)
    };

    const updateFormValues = (values) => {
        setFormValues(prev => ({ ...prev, ...values }))
    }

    useEffect(() => {
        if (!isVisible) {
            setFormValues({})
            setOverlayStyle({})
            setStep(2)
        }
    }, [isVisible])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

            <FormContext.Provider value={{ value: formValues, update: updateFormValues }}>
                <div style={{ display: isVisible ? 'block' : 'none', position: 'relative', zIndex: 1 }}>
                    <div id="myModal" className="modal">
                        <div
                            id="overlay"
                            style={overlayStyle}
                        ></div>
                        <div className="modal-content">
                            <h2>Modal Title</h2>

                            <Stepper
                                steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }]}
                                activeStep={step}
                                style={{
                                    width: "100%"
                                }}
                                styleConfig={{
                                    activeBgColor: "#15C1FF",
                                    completedBgColor: "#D6EAF8"
                                }}
                            />
                            {step === 0 && <UserDataForm goToNextStep={goToNextStep} />}
                            {step === 1 && <DateDataForm
                                goToNextStep={goToNextStep}
                                goBackOneStep={goBackOneStep}
                            />}
                            {step === 2 && <CarDataForm
                                goToNextStep={goToNextStep}
                                goBackOneStep={goBackOneStep}
                            />}
                            {step === 3 && (
                                <h1>hola 4</h1>
                            )}
                        </div>
                    </div>
                </div>
            </FormContext.Provider>
        </LocalizationProvider>
    );
}
/*   
<div className='modal-content-buttons'>
 <button className='modal-content-button-close' onClick={goBackOneStep} />
 <button className='modal-content-button-next' onClick={goToNextStep} />
</div>*/