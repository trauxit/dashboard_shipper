import React from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/login.module.css'
import { BiUser } from "react-icons/bi"
const FirstStep = () => {
    return (
        <>
            <Form.Group className="mb-3" controlId="fullname">
                <div className={style['login-icon__container']}>
                    <Form.Control name="fullname" type='text' autoComplete="off" className={`${style.inputLogin} `} placeholder="FullName "
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <div className={style['login-icon__container']}>
                    <Form.Control name="username" type="text" autoComplete="off" className={style.inputLogin} placeholder="UserName"
                    />

                </div>
            </Form.Group>
        </>
    )
}

export default FirstStep
