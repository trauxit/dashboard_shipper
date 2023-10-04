import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/login.module.css'
import { BiUser } from "react-icons/bi"

const FourthStep = () => {
    return (
        <>
            <Form.Group className="mb-3" controlId="password">
                <div className={style['login-icon__container']}>
                    <Form.Control name="password" type='password' autoComplete="off" className={`${style.inputLogin} `} placeholder="Password "
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmpassword">
                <div className={style['login-icon__container']}>
                    <Form.Control name="confirmpassword" type="password" autoComplete="off" className={style.inputLogin} placeholder="Confirm password"
                    />

                </div>
            </Form.Group>

        </>
    )
}

export default FourthStep
