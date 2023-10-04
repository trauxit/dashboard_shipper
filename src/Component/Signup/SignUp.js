import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthContext';
import style from '../../Styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/images/TRAUXIT-2.png'
import FourthStep from './FourthStep';
import Stepper from 'react-stepper-horizontal';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep'

const SignUp = () => {
    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
    ];
    const [activeStep, setActiveStep] = useState(0);
    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <FirstStep />;
            case 1: return <SecondStep />;
            case 2: return <ThirdStep />;
            case 3: return <FirstStep />;
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
                                        && <Link className={style.log__btn} onClick={() => setActiveStep(activeStep + 1)}>Submit</Link>
                                    }

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
