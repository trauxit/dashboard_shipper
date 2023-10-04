import React, { useContext, useState } from 'react'
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
const Login = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function login(e) {
        e.preventDefault();
        if (password === '123') {
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({ token, email });
            navigate('/dashboard')
        } else {
            toast.error('wrong details');
        }
    }
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
                                    <Form.Group className="mb-3" controlId="email">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${style.inputLogin} `} placeholder="Email Address " value={email}
                                                onChange={e => setEmail(e.target.value)} />
                                            <div className={style['login-icon__content']}>
                                                <BiUser />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <div className={style['login-icon__container']}>
                                            <Form.Control name="password" type="password" autoComplete="off" className={style.inputLogin} placeholder="Password" value={password}
                                                onChange={e => setPassword(e.target.value)} />
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
                    </Row>
                    <ToastContainer />
                </Container>

            </section>
        </>
    )
}

export default Login
