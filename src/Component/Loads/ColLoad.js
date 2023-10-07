import React from 'react'
import styles from '../../Styles/allLoads.module.css'
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Col, Row } from 'react-bootstrap';
import load from '../../assets/images/image 19.png'
import ellipse from '../../assets/images/Ellipse 39.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
const ColLoad = () => {
    return (
        <>
            <Col className={`${styles.load}`} lg='6'>
                {/* Route */}
                <div className={`${styles.route__para}`}>
                    <p className={`${styles.route}`}></p>
                    <p> On route </p>
                </div>
                {/* Load Body */}
                <div className={`${styles.load__body}`}>
                    {/* Load Description */}
                    <div className={`${styles.load__desc}`}>
                        <h4 className={`${styles.load__title}`}>barcelona-seville1</h4>
                        <p className={`${styles.load__para} mt-2`}> 5Sep,8:00 PM</p>
                    </div>
                    {/* Time Left */}
                    <p className={`${styles.load__para}`}>1h 36min left</p>
                </div>
                {/* Shipment Number */}
                <Row className={`${styles.shipment__number}`}>
                    <Col>
                        <p className={`${styles.ship__para}`}>Shipment number</p>
                        <p className={`${styles.ship__code}`}>#224512</p>
                    </Col>
                    <Col className={`${styles.load__img}`}>
                        {/* Load Image */}
                        <img alt='' src={load} />
                        {/* Ellipse Image */}
                        <img alt='' src={ellipse} />
                        {/* Load Progress Bar */}
                        <ProgressBar now={50} className={`${styles.load__progress} arriver__progress waiting__progress`} label={`${50}%`} />;
                        {/* Load Type */}
                        <div className={`${styles.type}`}>
                            <div>
                                <p className={`${styles.type__para}`}>Load Type</p>
                                <h5 className={`${styles.type__title}`}>Lveco 80E18</h5>
                            </div>
                            {/* Load Weight */}
                            <div>
                                <p className={`${styles.type__para}`}>Weight</p>
                                <h5 className={`${styles.type__title}`}>2.81 Kg</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Truck Body */}
                <div className={`${styles.truck__body}`}>
                    <p className={`${styles.truck__para}`}>Truck</p>
                    <h4 className={`${styles.truck__title}`}>Lveco 80E18</h4>
                    {/* Star Rating */}
                    <div className={`${styles.stars}`}>
                        <StarIcon className={`${styles.star}`} />
                        <StarIcon className={`${styles.star}`} />
                        <StarIcon className={`${styles.star}`} />
                        <StarIcon className={`${styles.star}`} />
                        <StarIcon className={`${styles.star}`} />
                    </div>
                </div>
                {/* Distance */}
                <p className={`${styles.truck__distance}`}>Distance</p>
                <h4 className={`${styles.truck__title}`}>600 Km</h4>
                {/* Load Location */}
                <div className={`${styles.load__location}`}>
                    {/* Location Icon */}
                    <div className={`${styles.loc}`}>
                        <div>
                            <p className={`${styles.outer}`}>
                            </p>
                        </div>
                        <div>
                            <LocationOnIcon className={`${styles.location__icon}`} />
                        </div>
                    </div>
                    {/* Location Details */}
                    <div className={`${styles.location__body}`}>
                        <div>
                            <h4 className={`${styles.location__title}`}>2972 Westheimer</h4>
                            <p className={`${styles.location__para}`}>Rd.Santa Ana, Illinois 85486</p>
                        </div>
                        <div>
                            <h4 className={`${styles.location__title}`}>8502 Preston</h4>
                            <p className={`${styles.location__para}`}>Rd.Santa Ana, Illinois 85486</p>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default ColLoad
