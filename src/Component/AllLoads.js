import React, { useState } from 'react'
import styles from '../Styles/allLoads.module.css'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import load from '../assets/images/image 19.png'
import ellipse from '../assets/images/Ellipse 39.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
                            <div>
                                <p>Shipments</p>
                            </div>
                            <div className={`${styles.ship__link}`}>
                                <p className={`${active === "all" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("all") }}>All(20)</p>
                                <p className={`${active === "arrival" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("arrival") }}>arrival</p>
                                <p className={`${active === "route" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("route") }}>on route</p>
                                <p className={`${active === "waiting" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("waiting") }}>waiting</p>
                            </div>
                        </div>
                        <div className={`${styles.shipment__select}`}>
                            <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                <option>Sort by: <p>Time</p></option>
                                <option value="22">Sep 2022</option>
                                <option value="21">Sep 2021</option>
                                <option value="20">Sep 2020</option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                <option>Filter</option>
                                <option value="22">Sep 2022</option>
                                <option value="21">Sep 2021</option>
                                <option value="20">Sep 2020</option>
                            </Form.Select>
                        </div>
                    </div>
                    <Row className={`${styles.AllLoads}`}>
                        <Col className={`${styles.load}`}>
                            <div className={`${styles.route__para}`}>
                                <p className={`${styles.route}`}></p>
                                <p> On route </p>
                            </div>
                            <div className={`${styles.load__body}`}>
                                <div className={`${styles.load__desc}`}>
                                    <h4 className={`${styles.load__title}`}>barcelona-seville1</h4>
                                    <p className={`${styles.load__para} mt-2`}> 5Sep,8:00 PM</p>
                                </div>
                                <p className={`${styles.load__para}`}>1h 36min left</p>
                            </div>
                            <Row className={`${styles.shipment__number}`}>
                                <Col>
                                    <p className={`${styles.ship__para}`}>Shipment number</p>
                                    <p className={`${styles.ship__code}`}>#224512</p>
                                </Col>
                                <Col className={`${styles.load__img}`}>
                                    <img alt='' src={load} />
                                    <img alt='' src={ellipse} />
                                    <ProgressBar now={50} className={`${styles.load__progress}`} label={`${50}%`} />;
                                    <div className={`${styles.type}`}>
                                        <div>
                                            <p className={`${styles.type__para}`}>Load Type</p>
                                            <h5 className={`${styles.type__title}`}>Lveco 80E18</h5>
                                        </div>
                                        <div>
                                            <p className={`${styles.type__para}`}>Wieght</p>
                                            <h5 className={`${styles.type__title}`}>2.81 Kg</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.truck__body}`}>
                                <p className={`${styles.truck__para}`}>truck</p>
                                <h4 className={`${styles.truck__title}`}>Lveco 80E18</h4>
                                <div className={`${styles.stars}`}>
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                </div>
                            </div>
                            <p className={`${styles.truck__distance}`}>distance</p>
                            <h4 className={`${styles.truck__title}`}>600 Km</h4>
                            <div className={`${styles.load__location}`}>
                                <div className={`${styles.loc}`}>
                                    <div>
                                        <p className={`${styles.outer}`}>
                                        </p>
                                    </div>
                                    <div>
                                        <LocationOnIcon className={`${styles.location__icon}`} />
                                    </div>
                                </div>
                                <div className={`${styles.location__body}`}>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>2972 Westheimer</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>8502 Preston</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.load}`}>
                            <div className={`${styles.route__para}`}>
                                <p className={`${styles.route}`}></p>
                                <p> On route </p>
                            </div>
                            <div className={`${styles.load__body}`}>
                                <div className={`${styles.load__desc}`}>
                                    <h4 className={`${styles.load__title}`}>barcelona-seville1</h4>
                                    <p className={`${styles.load__para} mt-2`}> 5Sep,8:00 PM</p>
                                </div>
                                <p className={`${styles.load__para}`}>1h 36min left</p>
                            </div>
                            <Row className={`${styles.shipment__number}`}>
                                <Col>
                                    <p className={`${styles.ship__para}`}>Shipment number</p>
                                    <p className={`${styles.ship__code}`}>#224512</p>
                                </Col>
                                <Col className={`${styles.load__img}`}>
                                    <img alt='' src={load} />
                                    <img alt='' src={ellipse} />
                                    <ProgressBar now={50} className={`${styles.load__progress}`} label={`${50}%`} />;
                                    <div className={`${styles.type}`}>
                                        <div>
                                            <p className={`${styles.type__para}`}>Load Type</p>
                                            <h5 className={`${styles.type__title}`}>Lveco 80E18</h5>
                                        </div>
                                        <div>
                                            <p className={`${styles.type__para}`}>Wieght</p>
                                            <h5 className={`${styles.type__title}`}>2.81 Kg</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.truck__body}`}>
                                <p className={`${styles.truck__para}`}>truck</p>
                                <h4 className={`${styles.truck__title}`}>Lveco 80E18</h4>
                                <div className={`${styles.stars}`}>
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                </div>
                            </div>
                            <p className={`${styles.truck__distance}`}>distance</p>
                            <h4 className={`${styles.truck__title}`}>600 Km</h4>
                            <div className={`${styles.load__location}`}>
                                <div className={`${styles.loc}`}>
                                    <div>
                                        <p className={`${styles.outer}`}>
                                        </p>
                                    </div>
                                    <div>
                                        <LocationOnIcon className={`${styles.location__icon}`} />
                                    </div>
                                </div>
                                <div className={`${styles.location__body}`}>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>2972 Westheimer</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>8502 Preston</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.AllLoads}`}>
                        <Col className={`${styles.load}`}>
                            <div className={`${styles.route__para}`}>
                                <p className={` ${styles.waiting}`}></p>
                                <p> Waiting </p>
                            </div>
                            <div className={`${styles.load__body}`}>
                                <div className={`${styles.load__desc}`}>
                                    <h4 className={`${styles.load__title}`}>barcelona-seville1</h4>
                                    <p className={`${styles.load__para} mt-2`}> 5Sep,8:00 PM</p>
                                </div>
                                <p className={`${styles.load__para}`}>1h 36min left</p>
                            </div>
                            <Row className={`${styles.shipment__number}`}>
                                <Col>
                                    <p className={`${styles.ship__para}`}>Shipment number</p>
                                    <p className={`${styles.ship__code}`}>#224512</p>
                                </Col>
                                <Col className={`${styles.load__img}`}>
                                    <img alt='' src={load} />
                                    <img alt='' src={ellipse} />
                                    <ProgressBar now={30} className={`${styles.load__progress} waiting__progress`} label={`${30}%`} />;
                                    <div className={`${styles.type}`}>
                                        <div>
                                            <p className={`${styles.type__para}`}>Load Type</p>
                                            <h5 className={`${styles.type__title}`}>Lveco 80E18</h5>
                                        </div>
                                        <div>
                                            <p className={`${styles.type__para}`}>Wieght</p>
                                            <h5 className={`${styles.type__title}`}>2.81 Kg</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.truck__body}`}>
                                <p className={`${styles.truck__para}`}>truck</p>
                                <h4 className={`${styles.truck__title}`}>Lveco 80E18</h4>
                                <div className={`${styles.stars}`}>
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                </div>
                            </div>
                            <p className={`${styles.truck__distance}`}>distance</p>
                            <h4 className={`${styles.truck__title}`}>600 Km</h4>
                            <div className={`${styles.load__location}`}>
                                <div className={`${styles.loc}`}>
                                    <div>
                                        <p className={`${styles.outer}`}>
                                        </p>
                                    </div>
                                    <div>
                                        <LocationOnIcon className={`${styles.location__icon}`} />
                                    </div>
                                </div>
                                <div className={`${styles.location__body}`}>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>2972 Westheimer</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>8502 Preston</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.load}`}>
                            <div className={`${styles.route__para}`}>
                                <p className={`${styles.arriver}`}></p>
                                <p> Arriver </p>
                            </div>
                            <div className={`${styles.load__body}`}>
                                <div className={`${styles.load__desc}`}>
                                    <h4 className={`${styles.load__title}`}>barcelona-seville1</h4>
                                    <p className={`${styles.load__para} mt-2`}> 5Sep,8:00 PM</p>
                                </div>
                                <p className={`${styles.load__para}`}>1h 36min left</p>
                            </div>
                            <Row className={`${styles.shipment__number}`}>
                                <Col>
                                    <p className={`${styles.ship__para}`}>Shipment number</p>
                                    <p className={`${styles.ship__code}`}>#224512</p>
                                </Col>
                                <Col className={`${styles.load__img}`}>
                                    <img alt='' src={load} />
                                    <img alt='' src={ellipse} />
                                    <ProgressBar now={100} className={`${styles.load__progress} arriver__progress`} label={`${100}%`} />;
                                    <div className={`${styles.type}`}>
                                        <div>
                                            <p className={`${styles.type__para}`}>Load Type</p>
                                            <h5 className={`${styles.type__title}`}>Lveco 80E18</h5>
                                        </div>
                                        <div>
                                            <p className={`${styles.type__para}`}>Wieght</p>
                                            <h5 className={`${styles.type__title}`}>2.81 Kg</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.truck__body}`}>
                                <p className={`${styles.truck__para}`}>truck</p>
                                <h4 className={`${styles.truck__title}`}>Lveco 80E18</h4>
                                <div className={`${styles.stars}`}>
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                    <StarIcon className={`${styles.star}`} />
                                </div>
                            </div>
                            <p className={`${styles.truck__distance}`}>distance</p>
                            <h4 className={`${styles.truck__title}`}>600 Km</h4>
                            <div className={`${styles.load__location}`}>
                                <div className={`${styles.loc}`}>
                                    <div>
                                        <p className={`${styles.outer}`}>
                                        </p>
                                    </div>
                                    <div>
                                        <LocationOnIcon className={`${styles.location__icon}`} />
                                    </div>
                                </div>
                                <div className={`${styles.location__body}`}>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>2972 Westheimer</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                    <div>
                                        <h4 className={`${styles.location__title}`}>8502 Preston</h4>
                                        <p className={`${styles.location__para}`}>Rd.Santa Ana,Illinois 85486</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div >
            </div >

        </>
    )
}

export default AllLoads
