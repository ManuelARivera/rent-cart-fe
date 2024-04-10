import React, { useState, useMemo } from 'react'
import { useFormContext } from './modal';
import { useAppConext } from '../hooks/useAppContext';
import dayjs from 'dayjs';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { CreateService } from '../services/createService';
import { GoodyeModal } from './goodyeModal';
import InfoIcon from '@mui/icons-material/Info';

export const SetServiceDataForm = ({ goBackOneStep, closeModal }) => {
    const { value } = useFormContext()
    const { cars } = useAppConext()

    const reservationPrice = import.meta.env.VITE_RESERVATION_PRICE;
    const paypalClientKey = import.meta.env.VITE_CLIENT_ID;

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const selectedCar = useMemo(() => cars.find(car => car.id === value.idCar), [cars]);

    const image = selectedCar?.images;
    const price = selectedCar?.price;
    const days = Math.abs(dayjs(value.pickupDate).diff(dayjs(value.returnDate), "days")) || 1
    const ttprice = useMemo(() => (selectedCar?.price || 0) * days, [price, selectedCar]);

    const [accept, setAccept] = useState(false)
    const [isChecked, setIsChecked] = useState(true);
    const [totalprice, setTotalprice] = useState(ttprice);
    const [paymentStatus, setPaymentStatus] = useState('Alquilado');

    const [showModal, setShowModal] = useState(true);

    const [userData, setuserData] = useState({
        name: '',
        lastname: '',
        email: '',
    })



    const createOrder = (data, actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalprice,
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
        setPaymentStatus('Apartado')
    };

    const handleResetPrice = () => {
        setTotalprice(ttprice)
        setPaymentStatus('Alguilado')
    };


    const onApprove = async (data, actions) => {
        return actions.order.capture().then(async (details) => {

            console.log(details.payer.name.given_name)
            console.log(details.payer.name.surname)
            console.log(details.payer.address.country_code)

            const body = {
                "createContactDto": {
                    "name": details.payer.name.given_name,
                    "lastName": details.payer.name.surname,
                    "address": value.address,
                    "telephoneNumber": value.telephoneNumber,
                    "nationality": details.payer.address.country_code,
                    "idCard": value.idCard,
                    // ...value,
                },
                "createLicenseDto": {
                    "licencenumber": value.licencenumber,
                    //"expiration": dayjs(value.pickupDate).format('YYYY-MM-DD'),
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
                    "paymentStatus": paymentStatus,
                    "totalCost": ttprice,
                    "totalPayed": totalprice,
                    "paypal": details
                },
            }

            console.log(details)
            const resp = await CreateService(value.idCar, body)
            /*console.log(resp.uniqueCode)
            console.log(resp.paypal.id)
            console.log(resp.paypal.payer.email_address)
            console.log(resp.paypal.payer.name)
            console.log(resp.paypal.payer.name.given_name)
            console.log(resp.paypal.payer.name.surname)*/
            console.log(resp)

            if (details && resp) {
                setShowModal(false);
                setuserData({
                    name: resp.paypal.payer.name.given_name,
                    lastname: resp.paypal.payer.name.surname,
                    email: resp.paypal.payer.email_address
                });
            }

        });
    };

    const arePaymentButtonsDisabled = !accept || !price || price < 0

    return (
        <>
            {showModal ? (
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

                                    label={
                                        <div style={{ display: 'flex', gap: '5px' }}>
                                            <div> Apartar </div>
                                            <div>  <span title={`Podrá apartar el auto por un monto de $150.\n Deberá pagar el resto una vez se reciba el auto.\n Si al llegar la fecha acordada el alquilante no aparece,\n este monto se quedará con la administración.`}>
                                                <InfoIcon style={{ color: '#15C1FF' }} />
                                            </span> </div>
                                        </div>
                                    }
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
                                <PayPalScriptProvider options={{ clientId: paypalClientKey, components: "buttons" }}>
                                    <PayPalButtons key={isChecked ? 'apartar' : 'alquilar'} disabled={arePaymentButtonsDisabled} style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove} />
                                </PayPalScriptProvider>
                            )
                        }
                    </div>

                    <div className='modal-content-buttons'>
                        <button className='modal-content-button-next' onClick={goBackOneStep} ><NavigateBeforeIcon /> </button>
                    </div>
                </>
            ) : (
                <GoodyeModal
                    isOpen={showModal}
                    onClose={closeModal}
                    name={userData.name}
                    lastname={userData.lastname}
                    email={userData.email}
                />
            )}
        </>

    )
}
