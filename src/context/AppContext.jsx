import React, { useState } from 'react'
import { createContext } from 'react';

export const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {

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
            setidcrr
        }}>
            {children}
        </AppContext.Provider>
    )

}