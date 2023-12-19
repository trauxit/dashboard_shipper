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
import ProgressBar from 'react-bootstrap/ProgressBar';
import out from '../../assets/images/Exclude.svg';
import inimg from '../../assets/images/Exclude (1).svg'
import moment from 'moment';
const Expenses = () => {
    const [active, setActive] = useState('All shipments')
    let [category, setCategory] = useState('')
    const [ship, setShip] = useState([])
    const { token } = useSelector((state) => state.user);
    const [errship, setErrship] = useState('')
    const [length, setLength] = useState(0)
    const [alllength, setAllLength] = useState(0)
    useEffect(() => {
        if (category === '' || category === 'all') {
            axios
                .get(`https://server.trauxit.app/api/v1/loads/shipper/`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then((response) => {
                    console.log(response.data);
                    setShip(response.data.data.loads);
                    setAllLength(response.data.length);
                    setErrship('')
                })
                .catch((err) => {
                    console.log(err.response.data.message)
                    if (err.response.status === 404) {
                        setErrship(err.response.data.message);

                    }
                });
        } else {
            axios
                .get(`http://52.87.197.234/api/v1/loads/shipper/?status=${category}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data)
                        setShip(response.data.data.loads);
                        setLength(response.data.length);
                        setErrship('')
                    }
                })
                .catch((err) => {
                    console.log(err.response.data.message)
                    if (err.response.status === 404) {
                        setErrship(err.response.data.message);
                    }
                });
        }
    }, [category]);
    const { userName } = useSelector((state) => state.user);
    console.log(ship, 'f')
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Expenses' />
                    <div className={`${styles.welcome}`}>
                        <div className={`${styles.welcome__body}`}>
                            <p>Good Morning, </p>
                            <h3> {userName}</h3>
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
                                    <div onClick={() => { setCategory("all") }}>
                                        <div className={`${active === "All shipments" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("All shipments") }}>
                                            <p>All shipments</p>
                                            <p>{alllength}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => { setCategory("inprogress") }}>
                                        <div className={`${active === "In-Progress" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("In-Progress") }}>
                                            <p>In-Progress</p>
                                            {category === 'inprogress' && errship == '' ? <p>{length}</p> : <p></p>}
                                        </div>
                                    </div>
                                    <div onClick={() => { setCategory("booked") }}>
                                        <div className={`${active === "Up coming" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("Up coming") }}>
                                            <p>Up coming</p>
                                            {category === 'booked' && errship == '' ? <p>{length}</p> : <p></p>}
                                        </div>
                                    </div>
                                    <div onClick={() => { setCategory("completed") }}>
                                        <div className={`${active === "Pasr" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("Pasr") }}>
                                            <p>Pasr</p>
                                            {category === 'completed' && errship == '' ? <p>{length}</p> : <p></p>}
                                        </div>
                                    </div>
                                    <div onClick={() => { setCategory("available") }}>
                                        <div className={`${active === "Available" ? styles.style__link : styles.view__link} ${styles.filter__body}`} onClick={() => { setActive("Available") }}>
                                            <p>Available</p>
                                            {category === 'available' && errship == '' ? <p>{length}</p> : <p></p>}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl='9'>
                                <p className={`${styles.ship__para}`}>{active}</p>
                                <div>
                                    {errship == '' ?
                                        <>
                                            {ship && ship.map(shipCard =>
                                                <>
                                                    <div className={`${styles.destination__body}`} key={shipCard?._id}>
                                                        <p className={`${styles.destination__para}`}>{shipCard?.Weight}</p>
                                                        <div className={`${styles.divide}`}>
                                                            <div className='shipmentprog'>
                                                                <h2 className={`${styles.destination__title}`}>At Destination</h2>
                                                                <p className={`${styles.destination__time}`}>{moment(shipCard?.summary?.arrivalTime).format('LLL')}</p>
                                                                {shipCard?.status === 'inprogress' ?
                                                                    <div className={`${styles.arrive}`}>
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                    </div>
                                                                    : ''}
                                                                {shipCard?.status === 'completed' ?
                                                                    <div className={`${styles.arrive}`}>
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                    </div>
                                                                    : ''}
                                                                {shipCard?.status === 'available' ?
                                                                    <div className={`${styles.arrive}`}>
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={10} className={`${styles.bar}`} />
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                    </div>
                                                                    : ''}
                                                                {shipCard?.status === 'booked' ?
                                                                    <div className={`${styles.arrive}`}>
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={100} className={`${styles.bar}`} />
                                                                        <ProgressBar now={0} className={`${styles.bar}`} />
                                                                    </div>
                                                                    : ''}

                                                            </div>
                                                            <div>
                                                                <div className={`${styles.out__body}`}>
                                                                    <img alt='' src={out} />
                                                                    <p>{shipCard?.PickupLocation?.address}</p>
                                                                </div>
                                                                <p className={`${styles.date__para}`}>{moment(shipCard?.summary?.departureTime).format('MMM Do YY')}</p>
                                                                <p className={`${styles.date__time}`}>{moment(shipCard?.summary?.departureTime).format('LT')}</p>
                                                            </div>
                                                            <div>
                                                                <div className={`${styles.in__body}`}>
                                                                    <img alt='' src={inimg} />
                                                                    <p>{shipCard?.DropoutLocation?.address}</p>
                                                                </div>
                                                                <p className={`${styles.date__para}`}>{moment(shipCard?.summary?.arrivalTime).format('MMM Do YY')}</p>
                                                                <p className={`${styles.date__time}`}>{moment(ship?.summary?.arrivalTime).format('LT')}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )}
                                            <Link className={`${styles.view__btn}`}>View All <img alt='' src={east} /></Link>
                                        </>
                                        :
                                        <div className='mt-5'>
                                            <div className='d-flex'>
                                                <h5 className='m-auto'> {errship}</h5>
                                            </div>
                                        </div>
                                    }

                                </div>


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
