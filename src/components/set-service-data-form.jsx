import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { useFormContext } from './modal';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export const SetServiceDataForm = () => {
    const { value } = useFormContext()
    console.log(value)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const price = 10;
    const days = (Math.abs(dayjs(value.pickupDate).diff(dayjs(value.returnDate), "days")))

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '10.00', // Set the amount for the purchase
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            console.log(details);

            const body = {
                paypal: details
            }
        });
    };

    const [accept, setAccept] = useState(false)

    const arePaymentButtonsDisabled = !accept || !price || price < 0
    return (
        <>
            <div className='setservicedataform-contaier'>
                <div className='car-setservicedataform-contaier'>
                    <h1>hola</h1>

                </div>
                <div className='day-setservicedataform-contaier details'>
                    <h3>Precio</h3>
                </div>
                <div className='price-setservicedataform-contaier details'>
                    <h3>Días</h3>
                    {days}
                </div>
                <div className='total-price-setservicedataform-contaier details'>
                    <h3>P. Total</h3>
                </div>
                <div className='terms-conditions-container'>

                    <Checkbox {...label} value={accept} onChange={e => setAccept(e.target.checked)} />
                    <a
                        href='HTTPS://google.com'
                        target='_blank'
                        className='blank-container'
                    >
                        TERMINOS Y CONDICIONES
                    </a>
                </div>


            </div>
            <div style={{ width: '90%' }}>
                <PayPalScriptProvider options={{ clientId: "AcJ2HtCRgDV3GwfAvp253X_jaMxhTw2eclLDi_7rc-5u_Fbe28VGdBv46n6QzTRI4_kiXY8Dr8calQuX", components: "buttons" }}>
                    <PayPalButtons disabled={arePaymentButtonsDisabled} style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove} />
                </PayPalScriptProvider>
            </div>
        </>

    )
}
