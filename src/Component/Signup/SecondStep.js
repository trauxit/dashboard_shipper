import React from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/login.module.css'
const SecondStep = ({ email, setEmail, confirmemail, setConfirmEmail }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="email">
                <div className={style['login-icon__container']}>
                    <Form.Control name="email" type='email' autoComplete="off" className={`${style.inputLogin} `} placeholder="Email Address " value={email} onChange={(e) => setEmail(e.target.value)}
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmemail">
                <div className={style['login-icon__container']}>
                    <Form.Control name="confirmemail" type="email" autoComplete="off" className={style.inputLogin} placeholder="Confirm email" value={confirmemail} onChange={(e) => setConfirmEmail(e.target.value)}
                    />

                </div>
            </Form.Group>
        </>
    )
}

export default SecondStep
