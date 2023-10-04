import React from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/login.module.css'
const SecondStep = () => {
    return (
        <>
            <Form.Group className="mb-3" controlId="email">
                <div className={style['login-icon__container']}>
                    <Form.Control name="email" type='email' autoComplete="off" className={`${style.inputLogin} `} placeholder="Email Address "
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmemail">
                <div className={style['login-icon__container']}>
                    <Form.Control name="confirmemail" type="email" autoComplete="off" className={style.inputLogin} placeholder="Confirm email"
                    />

                </div>
            </Form.Group>
        </>
    )
}

export default SecondStep
