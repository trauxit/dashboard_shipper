import React, { useState, useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, rows } from '../../TableExpenses';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import styles from '../../Styles/expenses.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import out from '../../assets/images/Exclude.svg';
import inimg from '../../assets/images/Exclude (1).svg'
import moment from 'moment';
const TableShipment = ({ ship }) => {
    return (
        <>
            <section>
                {ship.length !== 0 ?
                    <>
                        {ship && ship.map(shipCard =>
                            <div className={`${styles.destination__body}`} key={shipCard?._id}>
                                <p className={`${styles.destination__para}`}>{shipCard?.Weight}</p>
                                <div className={`${styles.divide}`}>
                                    <div className='shipmentprog'>
                                        <h2 className={`${styles.destination__title}`}>At Destination</h2>
                                        <p className={`${styles.destination__time}`}>{moment(shipCard?.summary?.arrivalTime).format('LLL')}</p>
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
                        )}
                    </>
                    :
                    <div className='mt-5'>
                        <div className='d-flex'>
                            <h5 className='m-auto'> nothing</h5>
                        </div>
                    </div>
                }


            </section>

        </>
    )
}

export default TableShipment