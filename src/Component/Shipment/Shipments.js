import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import styles from '../../Styles/expenses.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TableShipment from './TableExpenses'
import east from '../../assets/images/east.svg'
import head from '../../assets/images/headset_mic.svg'
import axios from 'axios'
import { useSelector } from 'react-redux';
const Expenses = () => {
    const [active, setActive] = useState('All shipments')
    let [category, setCategory] = useState('')
    const [ship, setShip] = useState([])
    const { token } = useSelector((state) => state.user);
    useEffect(() => {
        if (category === '') {
            axios.get(`http://52.87.197.234:3000/api/v1/loads/shipper/`, {
                headers: {
                    "Authorization": `Bearer ${token}`

                }
            })
                .then((response) => {
                    setShip(response.data.data.loads)
                }).catch((err) => { console.log(err) })
        }



        axios.get(`http://52.87.197.234:3000/api/v1/loads/shipper/?status=${category}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then((response) => {
                setShip(response.data.data.loads)
                console.log(response.data)
            }).catch((err) => { console.log(err.response.data.message) })


    }, [category])

    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Expenses' />
                    <div className={`${styles.welcome}`}>
                        <div className={`${styles.welcome__body}`}>
                            <p>Good Morning,</p>
                            <h3>Ahmed</h3>
                        </div>
                        <Link to='/create' className={`${styles.create__btn}`}>Create Shipment</Link>
                    </div>
                    <Container className={`${styles.container}`}>
                        <Row className={`${styles.shipmentfilter}`}>
                            <Col xxl='3'>
                                <div className={`${styles.inputBox_container}`}>
                                    <svg className={`${styles.search_icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                        </path>
                                    </svg>
                                    <input className={`${styles.inputBox}`} id="inputBox" type="text" placeholder="Search shipments..." />
                                </div>
                                <p className={`${styles.filter__para}`}>Filter shipments</p>
                                <div>

                                    <div className={`${styles.filter__body}`} onClick={() => { setActive("All shipments") }}>
                                        <p>All shipments</p>
                                        <p>290</p>
                                    </div>
                                    <div onClick={() => { setCategory("inprogress") }}>
                                        <div className={`${active === "In-Progress" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("In-Progress") }}>
                                            <p>In-Progress</p>
                                            <p>17</p>
                                        </div>
                                    </div>
                                    <div onClick={() => { setCategory("booked") }}>
                                        <div className={`${active === "Up coming" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("Up coming") }}>
                                            <p>Up coming</p>
                                            <p>6</p>
                                        </div>
                                    </div>
                                    <div onClick={() => { setCategory("completed") }}>
                                        <div className={`${active === "Pasr" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("Pasr") }}>
                                            <p>Pasr</p>
                                            <p>275</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl='9'>
                                <p className={`${styles.ship__para}`}>{active}</p>
                                <TableShipment ship={ship} />
                                <Link className={`${styles.view__btn}`}>View All <img alt='' src={east} /></Link>
                            </Col>
                        </Row>
                        <div className={`${styles.support}`}>
                            <img alt='' src={head} />
                            <div>
                                <p className={`${styles.support__para}`}>Have Questions?</p>
                                <p className={`${styles.supportus}`}>Contact Us</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Expenses
