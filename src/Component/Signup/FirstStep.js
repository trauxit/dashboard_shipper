import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../../Styles/signup.module.css'
import { BiUser } from "react-icons/bi"
const FirstStep = ({ fullname, setFullName, username, setUserName }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="fullname">
                <div className={style['login-icon__container']}>
                    <Form.Control name="fullname" type='text' autoComplete="off" className={`${style.inputLogin} `} placeholder="FullName " value={fullname} onChange={(e) => setFullName(e.target.value)} required
                    />

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <div className={style['login-icon__container']}>
                    <Form.Control name="username" type="text" autoComplete="off" className={style.inputLogin} placeholder="UserName" value={username} onChange={(e) => setUserName(e.target.value)}
                    />

                </div>
            </Form.Group>
        </>
    )
}

export default FirstStep
