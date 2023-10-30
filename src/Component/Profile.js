import React from 'react'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import styles from '../Styles/profile.module.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import imgNull from '../assets/images/eae946efbbf74117a65d488206a09b63.png'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import photo from '../assets/images/FB_IMG_1528049839195.jpg'
import bag from '../assets/images/undefined.svg'
const Profile = () => {
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='My Profile' />

                    <div className={`${styles.user__body}`}>
                        <div className={`${styles.profile}`}>
                            <div>
                                <img alt='' src={photo} className={`${styles.user__img}`} />
                            </div>
                            <div>
                                <h2 className={`${styles.user__title}`} >Ahmed Mohamed</h2>
                                <p className={`${styles.user__para}`} >Eastern European Time (EET), Cairo UTC +3</p>
                            </div>
                        </div>
                        <div>
                            <Link to='/setting' className={`${styles.edit__btn}`}>Edit</Link>
                        </div>
                    </div>
                    <div className={`${styles.user__details}`}>
                        <div >
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>First Name</h3>
                                <p className={`${styles.para}`}>Ahmed</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>User Name</h3>
                                <p className={`${styles.para}`}>Ahmedmo2020</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Address</h3>
                                <p className={`${styles.para}`}>Eastern European Time (EET), Cairo UTC +3</p>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Last Name</h3>
                                <p className={`${styles.para}`}>Mohamed</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Email Address</h3>
                                <p className={`${styles.para}`}>Ahmedmo2020@gmail.com</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Phone Number</h3>
                                <p className={`${styles.para}`}>0102131232322</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.company}`}>
                        <h3>Companies</h3>
                        <div >
                            <div className={`${styles.company__body}`}>
                                <img alt='' src={bag} />
                                <p>Trauxit</p>
                            </div>
                            <div className={`${styles.company__body}`}>
                                <img alt='' src={bag} />
                                <p>Noon</p>
                            </div>
                            <div className={`${styles.company__body}`}>
                                <img alt='' src={bag} />
                                <p>LamasaTech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Profile
