import React, { useState, useEffect } from 'react'
import styles from '../../Styles/allLoads.module.css'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import ColLoad from './ColLoad';
import Booking from './Booking';
import Pending from './Pending';
import Canceled from './Canceled'
import Available from './Availableload';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Wait from './Wait';
const AllLoads = () => {
    const [active, setActive] = useState('find')
    const [searchQuery, setSearchQuery] = useState('');
    const [deliverySearchQuery, setDeliverySearchQuery] = useState('');
    const [ship, setShip] = useState([])
    const [filteredData, setFilteredData] = useState(ship);
    const { token } = useSelector((state) => state.user);
    const [err, setErr] = useState('')
    console.log(ship)
    useEffect(() => {
        axios.get(`https://server.trauxit.app/api/v1/loads/shipper/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                setShip(response.data.data.loads)
                setFilteredData(response.data.data.loads);

            }).catch((err) => { setErr(err.response.data.message) })
    }, [])
    useEffect(() => {
        const filtered = ship.filter((item) =>
            item?.PickupLocation?.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchQuery]);
    useEffect(() => {
        const filtered = ship.filter((item) =>
            item?.DropoutLocation?.address.toLowerCase().includes(deliverySearchQuery.toLowerCase())
        );
        setFilteredData(filtered);
        console.log(filtered, 'deli')
    }, [deliverySearchQuery]);

    const sortByWeight = () => {
        const sortedLoads = [...filteredData].sort((a, b) => a.Weight - b.Weight);
        setFilteredData(sortedLoads);
    };
    const sortByDistance = () => {
        const sortedLoads = [...filteredData].sort(
            (a, b) => a.shipmentDistance - b.shipmentDistance
        );
        setFilteredData(sortedLoads);
    };
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Loads' />
                    <div className={`${styles.findOrBooked__body}`}>
                        <h2 className={`${active === "find" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("find") }}>Find</h2>
                        <h2 className={`${active === "booked" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("booked") }}>Booked</h2>
                        <h2 className={`${active === "pending" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("pending") }}>Pending</h2>
                        <h2 className={`${active === "wait" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("wait") }}>Waiting Your Approve</h2>
                        <h2 className={`${active === "canceled" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("canceled") }}>Canceled</h2>
                        <h2 className={`${active === "available" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("available") }}>Available</h2>
                    </div>
                    <div className={`${active === "find" ? styles.block : styles.none}`}>
                        <div className={`${styles.find__body}`}>
                            <div className={`${styles.find__search}`}>
                                <div>
                                    <p>Pickup</p>
                                    <div className={`${styles.searchload} inputBox_container`}>
                                        <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                            <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                            </path>
                                        </svg>
                                        <input className="inputBox"
                                            id="inputBox"
                                            type="text"
                                            placeholder="Huston, TX Within 100mi"
                                            value={searchQuery}
                                            onChange={e => setSearchQuery(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <p>Delivery</p>
                                    <div className={`${styles.search}`}>
                                        <div className={`${styles.searchload} inputBox_container`}>
                                            <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                                </path>
                                            </svg>
                                            <input className="inputBox"
                                                id="inputBox"
                                                type="text"
                                                placeholder="Anywhere"
                                                value={deliverySearchQuery}
                                                onChange={(e) => setDeliverySearchQuery(e.target.value)} />
                                        </div>

                                    </div>
                                </div>
                                {/*<button className="button" > Search</button>*/}
                            </div>
                            <div className={`${styles.find__filter}`}>
                                <div className={`${styles.today}`}>
                                    <button onClick={sortByWeight} className={`${styles.select}`}>Sort by Weight</button>
                                </div>
                                <div className={`${styles.today}`}>
                                    <button onClick={sortByDistance} className={`${styles.select}`}>Sort by Distance</button>
                                </div>
                            </div>
                        </div>

                        <ColLoad ship={filteredData} err={err} />
                    </div>
                    <div className={`${active === "booked" ? styles.block : styles.none}`}>
                        <Booking />
                    </div>
                    <div className={`${active === "pending" ? styles.block : styles.none}`}>
                        <Pending />
                    </div>
                    <div className={`${active === "wait" ? styles.block : styles.none}`}>
                        <Wait />
                    </div>
                    <div className={`${active === "canceled" ? styles.block : styles.none}`}>
                        <Canceled />
                    </div>
                    <div className={`${active === "available" ? styles.block : styles.none}`}>
                        <Available />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllLoads
