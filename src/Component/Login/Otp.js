
import React, { useContext, useRef, useState } from 'react'
import style from '../../Styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { toast } from 'react-toastify';
const Otp = () => {
    const [passwordRestCode, setPasswordRestCode] = useState('');

    const navigate = useNavigate();
    const reqData = {
        passwordRestCode
    }
    function forget(e) {
        e.preventDefault()
        axios.post(`https://52.87.197.234/api/v1/user/verifyresetcode`, reqData)
            .then((response) => {
                toast.success("sucess")
                navigate('/reset-password')
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
                            <h3 className={`${style.signin}`}>Verification Code</h3>

                            <div className={`${style.forgetpass} ${style.otp} `}>
                                <div className={` ${style.forgetpass__body} `}>
                                    <OtpInput
                                        value={passwordRestCode}
                                        onChange={setPasswordRestCode}
                                        numInputs={6}
                                        renderSeparator={''}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </div>
                                <button className={style.log__btn} type='button' onClick={forget}>Continue</button>
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
                            <div className={`${style.login} shadow ${style.forgetpass} ${style.otp} `}>
                                <div className={` ${style.forgetpass__body} `}>
                                    <img alt='' src={logo} className={`${style.logo}`} />
                                    <h4 className='mt-3'>Verification Code</h4>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderSeparator={''}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                    <Link className={style.log__btn} to='/reset-password' >Continue</Link>
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

export default Otp
