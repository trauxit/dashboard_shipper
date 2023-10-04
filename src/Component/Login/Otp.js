
import React, { useContext, useRef, useState } from 'react'
import style from '../../Styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'
import OtpInput from 'react-otp-input';

const Otp = () => {
    const [otp, setOtp] = useState('');
    return (
        <>
            <section className={style['login-container']}>
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

            </section>

        </>
    )
}

export default Otp
