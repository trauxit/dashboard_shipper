import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthContext';
import style from '../../Styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri"
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'
import axios from 'axios';
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigate = useNavigate();
    const email = Cookies.get('email')
    const reqData = {
        email,
        password,
        passwordConfirm

    }
    function reset(e) {
        e.preventDefault()
        axios.post(`https://52.87.197.234/api/v1/user/resetpassword`, reqData)
            .then((response) => {
                toast.success("sent OTP to email")
                navigate('/')
                console.log(response)
            })
            .catch((err) => {
                toast.error(err.response.data.message)
                console.log(err)
            })
    }
    return (
        <>
            <Container>
                <section className={`${style.loginpage}`}>

                    <Row >
                        <Col md='5'>
                            <div className={`${style.logo__body}`}>
                                <div className={`${style.b}`}>
                                    <img alt="" src={logo} className={`${style.logo}`} />
                                    <p className={`${style.logo__para}`}>Trauxit</p>
                                </div>
                                <h1 className={`${style.login__title}`}>WE’RE CHANGING</h1>
                                <p className={`${style.login__para}`}>THE WAY THE WORLD THINKS ABOUT FREIGHT </p>

                            </div>
                        </Col>
                        <Col md='7'>
                            <div className={`${style.mob}`}>
                                <img alt="" src={logo} className={`${style.logo}`} />
                                <p className={`${style.logo__para}`}>Trauxit</p>
                            </div>
                            <p className={`${style.signup}`}>Don’t have an account? <Link className={`${style.signup__link}`}>Sign Up</Link> </p>
                            <h3 className={`${style.signin}`}>Reset Password</h3>
                            <div className={`${style.signin__form}`}>
                                <Form.Group className="mb-3 " controlId="password">
                                    <Form.Label className={`${style.label}`}>Password</Form.Label>
                                    <Form.Control name="password" type='password' autoComplete="off" placeholder='' className={`${style.full}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="passwordConfirm">
                                    <Form.Label className={`${style.label}`}>Password Confirm</Form.Label>
                                    <Form.Control name="passwordConfirm" type='password' autoComplete="off" placeholder='' className={`${style.full}`} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                                </Form.Group>
                                <button className={style.log__btn} type='button' onClick={reset}>Continue</button>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer />
                </section>
            </Container>
            {/*             <section className={style['login-container']}>
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

            </section> */}

        </>
    )
}

export default ResetPassword
