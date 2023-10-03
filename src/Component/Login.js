import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AuthContext } from './AuthContext';
import style from '../Styles/login.module.css'
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri"
import { BiUser } from "react-icons/bi"
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
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
                <div className={`${style.auto} container`}>
                    <div className='row'>
                        <div className={`${style.login} shadow`}>
                            <div className={style.userName}>
                                <h4>LOG IN</h4>
                                <p></p>
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
                                <button className={style.log__btn} type='button' onClick={login}>login</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>

            </section>
        </>
    )
}

export default Login
