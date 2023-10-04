import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthContext';
import style from '../../Styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri"
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'

const ResetPassword = () => {
    return (
        <>
            <section className={style['login-container']}>
                <Container>
                    <Row className={`${style.rev}`}>
                        <Col>
                            <div className={`${style.login} shadow`}>
                                <div className={style.userName}>
                                    <img alt='' src={logo} className={`${style.logo}`} />
                                    <h4>Sign in</h4>
                                    <p>Welcome to Trauxit</p>
                                    <Form.Group className="mb-3" controlId="password">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="password" type="password" autoComplete="off" className={style.inputLogin} placeholder="New Password"
                                            />
                                            <div className={style['login-icon__content']}>
                                                <RiLockPasswordLine />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="password" type="password" autoComplete="off" className={style.inputLogin} placeholder="Confirm Password"
                                            />
                                            <div className={style['login-icon__content']}>
                                                <RiLockPasswordLine />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <button className={style.log__btn} type='button'>Reset Password</button>
                                    <Link to='/' className={`${style.signup}`}>Back to Login page</Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-5'>
                            <div className={`${style.desc}`}>
                                <h1>WE’RE CHANGING</h1>
                                <p>THE WAY THE WORLD THINKS ABOUT FREIGHT</p>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>

            </section>

        </>
    )
}

export default ResetPassword
