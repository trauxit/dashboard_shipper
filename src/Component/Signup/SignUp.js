import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthContext';
import style from '../../Styles/signup.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'
import FourthStep from './FourthStep';
import Stepper from 'react-stepper-horizontal';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep'
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../Redux/slices/UserSlice'
const SignUp = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmemail, setConfirmEmail] = useState('')
    const [companyname, setCompanyName] = useState('')
    const [address, setAaddress] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setConfirmPassword] = useState('')
    const { loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    function signup(e) {
        e.preventDefault();
        let userCredentials = {
            fullName,
            userName,
            email,
            confirmemail,
            companyname,
            address,
            password,
            passwordConfirm,
            birthDate: "02/22/1997",
            role: "shipper",
            phoneNumber: "010223242578"
        }
        console.log(userCredentials, 'userrr')
        dispatch(signupUser(userCredentials)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate('/')
            }
        })
    }
    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
    ];
    const [activeStep, setActiveStep] = useState(0);
    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <FirstStep fullname={fullName} setFullName={setFullName} username={userName} setUserName={setUserName} />;
            case 1: return <SecondStep email={email} setEmail={setEmail} confirmemail={confirmemail} setConfirmEmail={setConfirmEmail} />;
            case 2: return <ThirdStep companyname={companyname} setCompanyName={setCompanyName} address={address} setAaddress={setAaddress} />;
            case 3: return <FourthStep password={password} setPassword={setPassword} confirmpassword={passwordConfirm} setConfirmPassword={setConfirmPassword} />;
            default: return null;
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
                                    <h4>Sign up</h4>
                                    <p>Welcome to Trauxit</p>
                                    <div className={`stepper`}>
                                        <Stepper
                                            steps={steps}
                                            activeStep={activeStep}
                                        />
                                    </div>
                                    {getSectionComponent()}
                                    {activeStep !== steps.length - 1
                                        && <Link className={style.log__btn} onClick={() => setActiveStep(activeStep + 1)}>Next</Link>
                                    }
                                    {activeStep == steps.length - 1
                                        && <Link className={style.log__btn} onClick={signup}>Submit</Link>
                                    }
                                    {error && (
                                        <div className='alert alert-danger' role='alert'>{error}</div>
                                    )}
                                    <p className={`${style.account}`}> have an account ? <Link to='/' className={`${style.signup}`}>Sign In</Link></p>
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
            {/*                           */}
        </>
    )

}

export default SignUp
