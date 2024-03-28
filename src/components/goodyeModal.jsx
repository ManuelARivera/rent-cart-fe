import React from 'react'

export const GoodyeModal = ({ isOpen, onClose, name, lastname, email }) => {
    console.log(isOpen)
    if (isOpen) return null;
    return (
        <div className="goodbye-modal">
            <div className="goodbye-modal-content">
                <span className="goodbye-modal-close" onClick={onClose}>&times;</span>
                <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto', textAlign: 'center', display: 'flex', gap: '12px', flexDirection: 'column' }}>
                    <p>¡Gracias por elegir nuestro servicio, <strong>{name} {lastname}</strong>!</p>
                    <p>Tu solicitud de servicio ha sido procesada con éxito.</p>
                    <p>Recibirás un correo electrónico a <strong>{email}</strong> con más detalles del servicio.</p>
                    <p>¡Esperamos que disfrutes de tu viaje!</p>
                </div>
            </div>
        </div>
    )
}
