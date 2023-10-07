import React from 'react'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import styles from '../Styles/profile.module.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import imgNull from '../assets/images/eae946efbbf74117a65d488206a09b63.png'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <div className={`${styles.home}`}>
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='My Profile' />

                    {/* Profile Row */}
                    <Row className={`${styles.profile}`}>
                        {/* Profile Edit Column */}
                        <Col lg='4' className={`${styles.profile__edit}`}>
                            {/* Profile Image */}
                            <img alt="" src={imgNull} className={`${styles.img}`} />
                            {/* User Info */}
                            <div className={`${styles.user}`}>
                                {/* User Name */}
                                <h4 className={`${styles.user__name}`}>basmala ayman</h4>
                                {/* Star Rating */}
                                <div className={`${styles.stars}`}>
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                </div>
                            </div>
                            {/* Edit Link */}
                            <Link to='/setting' className={`${styles.edit}`}>Edit</Link>
                        </Col>

                        {/* User Info Column */}
                        <Col lg='8'>
                            <div className={`${styles.user__info} mt-5`}>
                                <div>
                                    {/* User Info Labels */}
                                    <h2 className={`${styles.user__title}`}>FirstName:</h2>
                                    <h2 className={`${styles.user__title}`}>LastName:</h2>
                                    <h2 className={`${styles.user__title}`}>emailAddress:</h2>
                                    <h2 className={`${styles.user__title}`}>companyName:</h2>
                                    <h2 className={`${styles.user__title}`}>nationalId:</h2>
                                    <h2 className={`${styles.user__title}`}>dateOfBirth:</h2>
                                    <h2 className={`${styles.user__title}`}>phoneNumber:</h2>
                                    <h2 className={`${styles.user__title}`}>country:</h2>
                                    <h2 className={`${styles.user__title}`}>city:</h2>
                                </div>
                                <div>
                                    {/* User Info Values */}
                                    <p className={`${styles.user__para}`}>basmala</p>
                                    <p className={`${styles.user__para}`}>ayman</p>
                                    <p className={`${styles.user__para}`}>basmala@gmail.com</p>
                                    <p className={`${styles.user__para}`}>trauxit</p>
                                    <p className={`${styles.user__para}`}>147852369</p>
                                    <p className={`${styles.user__para}`}>2 feb 1999</p>
                                    <p className={`${styles.user__para}`}>123456789</p>
                                    <p className={`${styles.user__para}`}>usa</p>
                                    <p className={`${styles.user__para}`}>new york</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Profile
