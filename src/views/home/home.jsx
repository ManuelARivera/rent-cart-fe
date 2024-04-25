import React, { useState } from 'react';
import { Service } from './components/service';
import { Review } from './components/review';
import { useAppConext } from '../../hooks/useAppContext'
import { Modals } from '../../components/modal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



export const Home = () => {
    const { handleHamburgerClickOff } = useAppConext();
    const [isShown, setIsShown] = useState(false);

    const showModal = () => setIsShown(true)
    const hideModal = () => setIsShown(false)

    return (
        <>
            <div onClick={handleHamburgerClickOff} className='container-blue'>
                <div className='slogan-conteiner'>
                    <h1>Explora, vive... tu viaje, tu libertad</h1>
                    <img className='img-home' src='/images/cr-v.png' />
                    <div className="buttons">
                        <button className='modal-button btnpointer' onClick={showModal}>RENT A CAR</button>
                    </div>
                    <Modals closeModal={hideModal} isVisible={isShown} />
                </div>
            </div>
            <Service />
            <Review />
        </>
    )
}
