import React from 'react'
import { useAppConext } from '../../hooks/useAppContext'
import { CreateContactaReview } from '../../services/createContactaReview'

export const Contact = () => {
    const { handleHamburgerClickOff } = useAppConext()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        CreateContactaReview(data)
    };

    return (
        <div onClick={handleHamburgerClickOff} className='contact-conteiner'>
            <div className='contact-child-conteiner'>
                <div className='title-contact-conteiner'>
                    <h1>Contactanos</h1>
                </div>

                <form className='form' onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div>
                        <label htmlFor='lastname'>Apellido</label>
                        <input type='text' id='lastname' name='lastName' required />
                    </div>
                    <div>
                        <label htmlFor='email'>Correo</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div>
                        <label htmlFor='text'>Mensaje</label>
                        <textarea type='text' id='text' name='message' rows={3} required />
                    </div>
                    <button className='btnsub' type="submit">Enviar</button>
                </form>

            </div>
        </div>
    );
}
