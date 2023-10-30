import React, { useState } from 'react'
import styles from '../../Styles/allLoads.module.css'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import ColLoad from './ColLoad';
import Booking from './Booking';
const AllLoads = () => {
    const [active, setActive] = useState('find')
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Loads' />
                    <div className={`${styles.findOrBooked__body}`}>
                        <h2 className={`${active === "find" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("find") }}>Find</h2>
                        <h2 className={`${active === "booked" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("booked") }}>Booked</h2>
                    </div>
                    <div className={`${active === "find" ? styles.block : styles.none}`}>
                        <div className={`${styles.find__body}`}>
                            <div className={`${styles.find__search}`}>
                                <div>
                                    <p>Pickup</p>
                                    <div className="inputBox_container">
                                        <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                            <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                            </path>
                                        </svg>
                                        <input className="inputBox" id="inputBox" type="text" placeholder="Huston, TX Within 100mi" />
                                    </div>
                                </div>
                                <div>
                                    <p>Delivery</p>
                                    <div className={`${styles.search}`}>
                                        <div className="inputBox_container">
                                            <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                                </path>
                                            </svg>
                                            <input className="inputBox" id="inputBox" type="text" placeholder="Anywhere" />

                                        </div>
                                        <button className="button"> Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.find__filter}`}>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Date</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Start</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Tailer Type</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Max weight</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Commodity</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Load Type</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.today}`}>
                                    <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                        <option>Appointments</option>
                                        <option value="22">Sep 2022</option>
                                        <option value="21">Sep 2021</option>
                                        <option value="20">Sep 2020</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>

                        <ColLoad />
                    </div>
                    <div className={`${active === "booked" ? styles.block : styles.none}`}>
                        <Booking />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllLoads
