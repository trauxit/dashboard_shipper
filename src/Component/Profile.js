import React from 'react'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import styles from '../Styles/profile.module.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import imgNull from '../assets/images/eae946efbbf74117a65d488206a09b63.png'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import photo from '../assets/images/eae946efbbf74117a65d488206a09b63.png'
import bag from '../assets/images/undefined.svg'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
const Profile = () => {
    const { token } = useSelector((state) => state.user);
    const [data, setData] = useState({})
    const [user, setUser] = useState({})
    const [fname, lname] = data.fullName ? data.fullName.split(' ') : ['', ''];
    useEffect(() => {
        axios.get(`https://server.trauxit.app/api/v1/user/getmydata`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then((response) => {
                setData(response.data.data.userData)
                setUser(response.data.data.user_info)
            }).catch((err) => { console.log(err) })

    }, [])

    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='My Profile' />

                    <div className={`${styles.user__body}`}>
                        <div className={`${styles.profile}`}>
                            <div>
                                {data.image ?
                                    <img alt='' src={data.image} className={`${styles.user__img}`} />
                                    :
                                    <img alt='' src={photo} className={`${styles.user__img}`} />

                                }
                            </div>
                            <div>
                                <h2 className={`${styles.user__title}`} >{data.fullName}</h2>
                                <p className={`${styles.user__para}`} >{data.address}</p>
                            </div>
                        </div>
                        <div>
                            <Link to='/Update' className={`${styles.edit__btn}`}>Edit</Link>
                        </div>
                    </div>
                    <div className={`${styles.user__details}`}>
                        <div >
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Full Name</h3>
                                <p className={`${styles.para}`}>{data.fullName}</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>User Name</h3>
                                <p className={`${styles.para}`}>{user.userName}</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Address</h3>
                                <p className={`${styles.para}`}>{data.address}</p>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}></h3>
                                <p className={`${styles.para}`}></p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Email Address</h3>
                                <p className={`${styles.para}`}>{user.email}</p>
                            </div>
                            <div className={`${styles.user}`}>
                                <h3 className={`${styles.title}`}>Phone Number</h3>
                                <p className={`${styles.para}`}>{data.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.company}`}>
                        <h3>Companies</h3>
                        <div >
                            <div className={`${styles.company__body}`}>
                                <img alt='' src={bag} />
                                <p>{data.companyName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Profile
