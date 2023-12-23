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
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/slices/UserSlice';
import img from '../../assets/images/Mask Group.png'
const Login = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loading, error } = useSelector((state) => state.user);
    const formRef = useRef(null);
    const dispatch = useDispatch();

    function login(e) {
        e.preventDefault();
        let userCredentials = {
            email, password
        }
        toast.loading('...loading')
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/')

                localStorage.setItem('email', email)
            }
            else {
                toast.error(error)
            }
        })
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            login(e);
        }
    };
    return (
        <>
            <Container>
                <section className={`${style.loginpage}`}>

                    <Row >
                        <Col md='5'>
                            <div className={`${style.logo__body}`}>
                                <div className={`${style.b}`}>
                                    <img alt="" src={logo} className={`${style.logo}`} />

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
                            <p className={`${style.signup}`}>Don’t have an account? <Link className={`${style.signup__link}`} to='/signup'>Sign Up</Link> </p>
                            <h3 className={`${style.signin}`}>Sign in</h3>
                            <div className={`${style.signin__form}`}>
                                <Form.Group className="mb-3 " controlId="email">
                                    <Form.Label className={`${style.label}`}>Email address</Form.Label>
                                    <Form.Control name="email" type='email' autoComplete="off" placeholder='' className={`${style.full}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3 mt-4 " controlId="password">
                                    <Form.Label className={`${style.label}`}>Password</Form.Label>
                                    <Form.Control name="password"
                                        type='password'
                                        autoComplete="off"
                                        placeholder=''
                                        className={`${style.full}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        ref={formRef}
                                        onKeyPress={handleKeyPress} />
                                </Form.Group>

                                <button className={style.log__btn} type='button' onClick={login}>Sign In</button>
                                {/* {error && (
                                    <div className='alert alert-danger' role='alert'>{error}</div>
                                )} */}
                                <div className={`${style.forget__body}`}>
                                    <Link className={`${style.forget}`} to="/forget">forget password ?</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer />
                </section>
            </Container>



        </>
    )
}

export default Login
