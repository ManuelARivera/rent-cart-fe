import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs from 'dayjs';
import { Stepper } from 'react-form-stepper';


export const Modals = () => {
    const [overlayStyle, setOverlayStyle] = useState({});
    const [step, setStep] = useState(0);
    const navigate = useNavigate()


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

        document.getElementById('myModal').style.display = 'block';
    };

    const closeModal = () => {
        document.getElementById('myModal').style.display = 'none';
    };

    const goToNextStep = () => {
        if (step === 3) return;
        setStep(step + 1)
        console.log(step)
    }

    const goBackOneStep = () => {
        if (step === 0) return;
        setStep(step - 1)
        console.log(step)
    };


    return (
        <div>
            <div className="buttons">
                <button className='modal-button' onClick={() => openModal('overlayOne')}>RENT A CAR</button>
            </div>

            <div id="myModal" className="modal">
                <div
                    id="overlay"
                    style={overlayStyle}
                ></div>
                <div className="modal-content">
                    <Stepper
                        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }]}
                        activeStep={step}
                    />
                    <h2>Modal Title</h2>
                    {step == 0 && (
                        <h1>hola 1</h1>
                    )}
                    {step == 1 && (


                        <div className='pickup-information-container'>
                            <h5>Recogida</h5>
                            <div className='date-time'>
                                <DatePicker />
                                <TimeField defaultValue={dayjs('2022-04-17T18:30')} />

                                <select className="my-input" >
                                    <option hidden>
                                        Lugar de recogida
                                    </option>
                                    <option value="manzana">Manzana</option>
                                    <option value="banana">Banana</option>
                                    <option value="uva">Uva</option>
                                    <option value="naranja">Naranja</option>
                                    <option value="fresa">Fresa</option>
                                </select>
                            </div>

                            <h5>Devolución</h5>
                            <div className='date-time'>
                                <DatePicker />
                                <TimeField defaultValue={dayjs('2022-04-17T18:30')} />

                                <select className="my-input" >
                                    <option hidden>
                                        Lugar de devolución
                                    </option>
                                    <option value="manzana">Manzana</option>
                                    <option value="banana">Banana</option>
                                    <option value="uva">Uva</option>
                                    <option value="naranja">Naranja</option>
                                    <option value="fresa">Fresa</option>
                                </select>
                            </div>
                        </div>

                    )}
                    {step == 2 && (
                        <h1>hola 3</h1>
                    )}
                    {step == 3 && (
                        <h1>hola 4</h1>
                    )}
                    <div className='modal-content-buttons'>
                        <button className='modal-content-button-close' onClick={goBackOneStep} />
                        <button className='modal-content-button-next' onClick={goToNextStep} />
                    </div>
                </div>
            </div>
        </div>
    );
}