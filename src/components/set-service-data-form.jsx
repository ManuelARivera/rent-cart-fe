import React, { useState, useMemo } from 'react'
import { useFormContext } from './modal';
import { useAppConext } from '../hooks/useAppContext';
import dayjs from 'dayjs';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { CreateService } from '../services/createService';

export const SetServiceDataForm = ({ goBackOneStep }) => {
    const { value } = useFormContext()
    const { cars } = useAppConext()

    const reservationPrice = import.meta.env.VITE_RESERVATION_PRICE;
    const paypalClientKey = import.meta.env.VITE_CLIENT_ID;

    console.log(reservationPrice)
    console.log(cars)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const selectedCar = useMemo(() => cars.find(car => car.id === value.idCar), [cars]);

    const image = selectedCar?.images;
    const price = selectedCar?.price;
    const days = (Math.abs(dayjs(value.pickupDate).diff(dayjs(value.returnDate), "days")))
    const ttprice = useMemo(() => (selectedCar?.price || 0) * days, [price, selectedCar]);

    const [accept, setAccept] = useState(false)
    const [isChecked, setIsChecked] = useState(true);
    const [totalprice, setTotalprice] = useState(ttprice);



    const createOrder = (data, actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: ttprice,
                    },
                },
            ],
        });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleChangePrice = () => {
        setTotalprice(reservationPrice)
    };

    const handleResetPrice = () => {
        setTotalprice(ttprice)
    };


    const onApprove = async (data, actions) => {
        return actions.order.capture().then(async (details) => {

            const body = {
                "createContactDto": {
                    "name": value.name,
                    "lastName": value.lastName,
                    "address": value.address,
                    "telephoneNumber": value.telephoneNumber,
                    "nationality": value.nationality,
                    "idCard": value.idCard,
                    // ...value,
                },
                "createLicenseDto": {
                    "licencenumber": value.licencenumber,
                    "expiration": dayjs(value.pickupDate).format('YYYY-MM-DD'),
                    //...value
                },
                "createRentServiceDto": {
                    "contact": "",
                    "car": value.idCar,
                    "pickupLocation": value.pickupLocation,
                    "pickupDate": dayjs(value.pickupDate).format('YYYY-MM-DD'),
                    "pickupTime": dayjs(value.pickupDate).format('HH:MM A'),
                    "dropOffLocation": value.returnLocation,
                    "dropOffDate": dayjs(value.returnDate).format('YYYY-MM-DD'),
                    "dropOffTime": dayjs(value.returnDate).format('HH:MM A'),
                    "estimatedDuration": days,
                    "paymentDetails": "Credit Card - **** **** **** 1234",
                    "paymentStatus": "Paid"
                },
                "paypal": details,
            }

            const resp = await CreateService(value.idCar, body)
        });
    };

    const arePaymentButtonsDisabled = !accept || !price || price < 0

    return (
        <>
            <div className='setservicedataform-contaier'>
                <div className='car-setservicedataform-contaier shadow-container'>
                    <img className='car-image-container' src={image} />

                </div>
                <div className='day-setservicedataform-contaier details shadow-container'>
                    <h3>Pecio</h3>
                    <div>{price}</div>
                </div>
                <div className='price-setservicedataform-contaier details shadow-container'>
                    <h3>Días</h3>
                    <div>$ {days}</div>

                </div>
                <div className='total-price-setservicedataform-contaier details shadow-container'>
                    <h3>P. Total</h3>
                    <div>$ {totalprice}</div>
                </div>
                <div className='terms-conditions-container'>
                    <div className='fcb'>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    inputProps={{ 'aria-label': 'Checkbox demo' }}
                                    onClick={handleResetPrice}
                                />
                            }
                            label="Alquilar"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!isChecked}
                                    onChange={handleCheckboxChange}
                                    inputProps={{ 'aria-label': 'Checkbox demo' }}
                                    onClick={handleChangePrice}
                                />
                            }
                            label="Apartar"
                        />
                    </div>
                    <Checkbox {...label} value={accept} onChange={e => setAccept(e.target.checked)} />
                    <a
                        href='/contract'
                        target='_blank'
                        className='blank-container'
                    >
                        TERMINOS Y CONDICIONES
                    </a>
                </div>


            </div>
            <div style={{ width: '90%' }}>
                {
                    selectedCar && (
                        <PayPalScriptProvider options={{ clientId: 'AcJ2HtCRgDV3GwfAvp253X_jaMxhTw2eclLDi_7rc-5u_Fbe28VGdBv46n6QzTRI4_kiXY8Dr8calQuX', components: "buttons" }}>
                            <PayPalButtons disabled={arePaymentButtonsDisabled} style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove} />
                        </PayPalScriptProvider>
                    )
                }
            </div>

            <div className='modal-content-buttons'>
                <button className='modal-content-button-next' onClick={goBackOneStep} ><NavigateBeforeIcon /> </button>
            </div>
        </>

    )
}
