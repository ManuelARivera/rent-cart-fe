import React from 'react'

export const Contact = () => {
    return (
        <div className='contact-conteiner'>
            <div className='contact-child-conteiner'>
                <div className='title-contact-conteiner'>
                    <h1>Contactanos</h1>
                </div>

                <form className='form'>
                    <div>
                        <label htmlFor='name'>Nombre</label>
                        <input type='tex' id='name' name='name' />
                    </div>
                    <div>
                        <label htmlFor='lastname'>Apellido</label>
                        <input type='tex' id='lastname' name='lastname' />
                    </div>
                    <div>
                        <label htmlFor='email'>Correo</label>
                        <input type='email' id='email' name='email' />
                    </div>
                    <div>
                        <label htmlFor='tex'>Mensaje</label>
                        <textarea type='tex' id='tex' name='tex' rows={3} />
                    </div>
                </form>

            </div>
        </div>
    )
}
