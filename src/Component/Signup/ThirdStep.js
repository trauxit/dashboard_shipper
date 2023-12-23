import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/signup.module.css'
const ThirdStep = ({ companyname, setCompanyName, address, setAaddress }) => {

    return (
        <>
            <Form.Group className="mb-3" controlId="companyname">
                <div className={style['login-icon__container']}>
                    <Form.Control name="companyname" type='text' autoComplete="off" className={`${style.inputLogin} `} placeholder="Company Name " value={companyname} onChange={(e) => setCompanyName(e.target.value)}
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <div className={style['login-icon__container']}>
                    <Form.Control name="address" type="text" autoComplete="off" className={style.inputLogin} placeholder="Address" value={address} onChange={(e) => setAaddress(e.target.value)}
                    />

                </div>
            </Form.Group>

        </>
    )
}

export default ThirdStep
