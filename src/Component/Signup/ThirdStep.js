import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/login.module.css'
const ThirdStep = () => {

    return (
        <>
            <Form.Group className="mb-3" controlId="companyname">
                <div className={style['login-icon__container']}>
                    <Form.Control name="companyname" type='text' autoComplete="off" className={`${style.inputLogin} `} placeholder="Company Name "
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <div className={style['login-icon__container']}>
                    <Form.Control name="address" type="text" autoComplete="off" className={style.inputLogin} placeholder="Address"
                    />

                </div>
            </Form.Group>

        </>
    )
}

export default ThirdStep
