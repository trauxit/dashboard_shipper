
import React, { useContext, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthContext';
import style from '../../Styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri"
import { BiUser } from "react-icons/bi"
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'
import axios from 'axios';
import Cookies from 'js-cookie';
const Forget = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const reqData = {
        email
    }
    Cookies.set('email', email);
    function forget(e) {
        e.preventDefault()
        axios.post(`https://server.trauxit.app/api/v1/user/forgetpassword`, reqData)
            .then((response) => {
                toast.success("sent OTP to email")
                navigate('/otp')
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
                            <h3 className={`${style.signin}`}>Sign in</h3>
                            <div className={`${style.signin__form}`}>
                                <Form.Group className="mb-3 " controlId="email">
                                    <Form.Label className={`${style.label}`}>Email address</Form.Label>
                                    <Form.Control name="email" type='email' autoComplete="off" placeholder='' className={`${style.full}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <button className={style.log__btn} type='button' onClick={forget}>Continue</button>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer />
                </section>
            </Container>
            {/* <section className={style['login-container']}>
                <Container>
                    <Row className={`${style.rev}`}>
                        <Col>
                            <div className={`${style.login} shadow ${style.forgetpass} `}>
                                <div className={`${style.userName} ${style.forgetpass__body} `}>
                                    <img alt='' src={logo} className={`${style.logo}`} />
                                    <h4 className='mt-3'>Forget Password ?</h4>
                                    <Form.Group className="mb-3" controlId="email">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${style.inputLogin} `} placeholder="Email Address " value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className={style['login-icon__content']}>
                                                <BiUser />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Link className={style.log__btn} to='' onClick={forget} >Continue</Link>
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

export default Forget
