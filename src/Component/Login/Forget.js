
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
const Forget = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const reqData = {
        email
    }
    function forget(e) {
        e.preventDefault()
        axios.post(`http://13.48.43.204:3000/api/v1/user/forgetpassword`, reqData)
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

            </section>
        </>
    )
}

export default Forget
