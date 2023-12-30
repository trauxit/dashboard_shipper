import React, { useState } from 'react'
import styles from '../../Styles/overview.module.css'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import chart from '../../assets/images/Chart 10.png'
import Coulmns from './Coulmns';
import Stackedbar from './Stackedbar';
import Columnbar from './Columnbar';
import Historybar from './Historybar';
import { Col, Row } from 'react-bootstrap'
import ReactApexChart from "react-apexcharts";
import map from '../../assets/images/Group_1000003377-removebg-preview.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import today from '../../assets/images/today.svg'
import place from '../../assets/images/place.svg'
import Facilities from './Facilities'

const Overview = () => {
    const [active, setActive] = useState('overview')



    return (
        <>
            <div className={`${styles.r3}`}>
                <h3 className={styles.comingsoon}>Coming Soon</h3>
                <div className={`${styles.home}`}>
                    <div className={`${styles.homeContainer}`}>
                        <NavBar />
                        <div className={`${styles.r2}`}>
                            <div className={`${styles.overviewOrFacilities}`}>
                                <div className={`${styles.overviewOrFacilities__body}`}>
                                    <h2 className={`${active === "overview" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("overview") }}>Overview</h2>
                                    <h2 className={`${active === "facilities" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("facilities") }}>Facilities</h2>
                                </div>
                                <div className={`${styles.overviewOrFacilities__date}`}>
                                    <div className={`${styles.today}`}>
                                        <img alt='' src={today} className={`${styles.today__img}`} />
                                        <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                            <option>Select date</option>
                                            <option value="22">Sep 2022</option>
                                            <option value="21">Sep 2021</option>
                                            <option value="20">Sep 2020</option>
                                        </Form.Select>
                                    </div>
                                    <div className={`${styles.location}`}>
                                        <img alt='' src={place} />
                                        <p>Location</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${active === "overview" ? styles.block : styles.none}`}>
                                <div className={`${styles.overview__charts}`}>
                                    <div className={`${styles.overviewbar}`}>
                                        <Columnbar />
                                    </div>
                                    <Historybar />
                                    <div className={`${styles.overviewbar}`}>
                                        <Coulmns />
                                    </div>
                                    <Stackedbar />
                                </div>



                            </div>
                            <div className={`${active === "facilities" ? styles.block : styles.none}`}>
                                <Facilities />
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Overview
