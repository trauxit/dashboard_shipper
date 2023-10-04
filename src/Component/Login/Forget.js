
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
import OtpInput from 'react-otp-input';
const Forget = () => {
    const email = useRef(null);
    const [otp, setOtp] = useState('');
    return (
        <>
            <section className={style['login-container']}>
                <Container>
                    <Row className={`${style.rev}`}>
                        <Col>
                            <div className={`${style.login} shadow ${style.forgetpass} `}>
                                <div className={`${style.userName} ${style.forgetpass__body} `}>
                                    <img alt='' src={logo} className={`${style.logo}`} />
                                    <h4 className='mt-3'>Forget Password ?</h4>
                                    <Form.Group className="mb-3" controlId="email">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${style.inputLogin} `} placeholder="Email Address " ref={email}
                                            />
                                            <div className={style['login-icon__content']}>
                                                <BiUser />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Link className={style.log__btn} to='/otp' >Continue</Link>
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

export default Forget
