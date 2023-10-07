import React, { useState } from 'react'
import styles from '../../Styles/allLoads.module.css'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import ColLoad from './ColLoad';
const AllLoads = () => {
    const [active, setActive] = useState('all')
    return (
        <>
            <div className={`${styles.home}`}>
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Loads' />
                    <div className={`${styles.shipment}`}>
                        <div className={`${styles.shipment__body}`}>
                            {/* Shipments */}
                            <div>
                                <p>Shipments</p>
                            </div>
                            {/* Shipment Links */}
                            <div className={`${styles.ship__link}`}>
                                {/* All shipments link */}
                                <p className={`${active === "all" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("all") }}>All(20)</p>
                                {/* Arrival shipments link */}
                                <p className={`${active === "arrival" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("arrival") }}>arrival</p>
                                {/* On route shipments link */}
                                <p className={`${active === "route" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("route") }}>on route</p>
                                {/* Waiting shipments link */}
                                <p className={`${active === "waiting" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("waiting") }}>waiting</p>
                            </div>
                        </div>
                        {/* Shipment Select */}
                        <div className={`${styles.shipment__select}`}>
                            {/* Sort by Select */}
                            <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                <option>Sort by: <p>Time</p></option>
                                <option value="22">Sep 2022</option>
                                <option value="21">Sep 2021</option>
                                <option value="20">Sep 2020</option>
                            </Form.Select>
                            {/* Filter Select */}
                            <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                <option>Filter</option>
                                <option value="22">Sep 2022</option>
                                <option value="21">Sep 2021</option>
                                <option value="20">Sep 2020</option>
                            </Form.Select>
                        </div>
                    </div>
                    <Row className={`${styles.AllLoads}`}>
                        <ColLoad />
                        <ColLoad />
                        <ColLoad />
                        <ColLoad />
                    </Row>
                </div >
            </div >

        </>
    )
}

export default AllLoads
