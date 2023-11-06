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
    const dispatch = useDispatch();

    function login(e) {
        e.preventDefault();
        let userCredentials = {
            email, password
        }
        console.log(userCredentials, 'userrr')
        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/dashboard')
                toast.success('success')
                localStorage.setItem('email', email)
            }
            else {
                toast.error(error)
            }
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

                                <Form.Group className="mb-3 mt-4 " controlId="password">
                                    <Form.Label className={`${style.label}`}>Password</Form.Label>
                                    <Form.Control name="password" type='password' autoComplete="off" placeholder='' className={`${style.full}`} value={password} onChange={(e) => setPassword(e.target.value)} />
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
            {/* <Row className={`${style.rev}`}>
                        <Col>
                            <div className={`${style.login} shadow`}>
                                <div className={style.userName}>
                                    <img alt='' src={logo} className={`${style.logo}`} />
                                    <h4>Sign in</h4>
                                    <p>Welcome to Trauxit</p>
                                    <Form.Group className="mb-3" controlId="email">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${style.inputLogin} `} placeholder="Email Address " value={email} onChange={(e) => setEmail(e.target.value)} />
                                            <div className={style['login-icon__content']}>
                                                <BiUser />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="password" type="password" autoComplete="off" className={style.inputLogin} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <div className={style['login-icon__content']}>
                                                <RiLockPasswordLine />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <div className={`${style.pass}`}>
                                        <div className={`${style.remember}`}>
                                            <div class="cntr">
                                                <input type="checkbox" id="cbx" class="hidden-xs-up" />
                                                <label for="cbx" class="cbx"></label>
                                            </div>
                                            <p>remember me</p>
                                        </div>
                                        <Link className={`${style.forget}`} to="/forget">forget password ?</Link>
                                    </div>
                                    <button className={style.log__btn} type='button' onClick={login}>Sign In</button>
                                    {error && (
                                        <div className='alert alert-danger' role='alert'>{error}</div>
                                    )}
                                    <p className={`${style.account}`}>Don't have an account ? <Link to='/signup' className={`${style.signup}`}>Sign Up</Link></p>
                                </div>
                            </div>
                        </Col>
                        <Col className='mt-5'>
                            <div className={`${style.desc}`}>
                                <h1>WE’RE CHANGING</h1>
                                <p>THE WAY THE WORLD THINKS ABOUT FREIGHT</p>
                            </div>
                        </Col>
                    </Row> */}


        </>
    )
}

export default Login
