import React, { useState } from 'react'
import { createContext } from 'react';
import { useCars } from '../hooks/useCars';

export const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
    const { cars } = useCars()
    const [isNavVisible, setNavVisible] = useState(false);
    const [idcrr, setidcrr] = useState('');

    const handleHamburgerClick = () => {
        setNavVisible(!isNavVisible);
    }

    const handleHamburgerClickOff = () => {
        setNavVisible(false);
    }

    return (
        <AppContext.Provider value={{
            handleHamburgerClick,
            handleHamburgerClickOff,
            isNavVisible,
            idcrr,
            cars,
            setidcrr
        }}>
            {children}
        </AppContext.Provider>
    )

}