import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, rows } from '../../TableExpenses';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import styles from '../../Styles/expenses.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import out from '../../assets/images/Exclude.svg';
import inimg from '../../assets/images/Exclude (1).svg'
const TableShipment = () => {

    return (
        <>
            <section>
                <div className={`${styles.destination__body}`}>
                    <p className={`${styles.destination__para}`}>285656</p>
                    <div className={`${styles.divide}`}>
                        <div className='shipmentprog'>
                            <h2 className={`${styles.destination__title}`}>At Destination</h2>
                            <p className={`${styles.destination__time}`}>Sep 25th 2:30 Pm</p>
                            <div className={`${styles.arrive}`}>
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={0} className={`${styles.bar}`} />
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.out__body}`}>
                                <img alt='' src={out} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                            <div className={`${styles.in__body}`}>
                                <img alt='' src={inimg} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.destination__body}`}>
                    <p className={`${styles.destination__para}`}>285656</p>
                    <div className={`${styles.divide}`}>
                        <div className='shipmentprog'>
                            <h2 className={`${styles.destination__title}`}>At Destination</h2>
                            <p className={`${styles.destination__time}`}>Sep 25th 2:30 Pm</p>
                            <div className={`${styles.arrive}`}>
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={0} className={`${styles.bar}`} />
                                <ProgressBar now={0} className={`${styles.bar}`} />
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.out__body}`}>
                                <img alt='' src={out} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                            <div className={`${styles.in__body}`}>
                                <img alt='' src={inimg} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.destination__body}`}>
                    <p className={`${styles.destination__para}`}>285656</p>
                    <div className={`${styles.divide}`}>
                        <div className='shipmentprog'>
                            <h2 className={`${styles.destination__title}`}>At Destination</h2>
                            <p className={`${styles.destination__time}`}>Sep 25th 2:30 Pm</p>
                            <div className={`${styles.arrive}`}>
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={0} className={`${styles.bar}`} />
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.out__body}`}>
                                <img alt='' src={out} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                            <div className={`${styles.in__body}`}>
                                <img alt='' src={inimg} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.destination__body}`}>
                    <p className={`${styles.destination__para}`}>285656</p>
                    <div className={`${styles.divide}`}>
                        <div className='shipmentprog'>
                            <h2 className={`${styles.destination__title}`}>At Destination</h2>
                            <p className={`${styles.destination__time}`}>Sep 25th 2:30 Pm</p>
                            <div className={`${styles.arrive}`}>
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={100} className={`${styles.bar}`} />
                                <ProgressBar now={0} className={`${styles.bar}`} />
                                <ProgressBar now={0} className={`${styles.bar}`} />
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.out__body}`}>
                                <img alt='' src={out} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                            <div className={`${styles.in__body}`}>
                                <img alt='' src={inimg} />
                                <p>Akron, OH</p>
                            </div>
                            <p className={`${styles.date__para}`}>Sep 25th</p>
                            <p className={`${styles.date__time}`}>7:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TableShipment
