import React, { useState, useEffect } from 'react'
import styles from '../../Styles/allLoads.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import moment from 'moment';
const ColLoad = ({ ship, err }) => {
    return (
        <>

            <TableContainer component={Paper} className={`${styles.tab}`}>
                <div className={`${styles.tabline}`}>
                    <div className={`${styles.tabline__load}`}>
                        <h2>Loads</h2>
                        <p> {ship.length}</p>
                    </div>
                    {/*  <div className={`${styles.tabline__lanes}`}>
                        <h2>Dedicated Lanes </h2>
                        <p> 108</p>
                    </div> */}
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>Pickup</TableCell>
                            {/* <TableCell>Full Route</TableCell> */}
                            <TableCell>Delivery</TableCell>
                            <TableCell>Distance</TableCell>
                            <TableCell>Deadhead</TableCell>
                            <TableCell>Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ship.length !== 0 ?
                            <>
                                {ship && ship.map(shipCard =>
                                    <TableRow
                                        key={shipCard?._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <h5> ${shipCard.priceLoads}</h5>
                                        </TableCell>
                                        <TableCell>
                                            <h5>{shipCard?.PickupLocation?.address}</h5>
                                            <p>{moment(shipCard?.summary?.departureTime).format('MMM Do YY')} </p>

                                        </TableCell>
                                        {/*  <TableCell></TableCell> */}
                                        <TableCell>
                                            <h5>{shipCard?.DropoutLocation?.address}</h5>
                                            <p>{moment(shipCard?.summary?.arrivalTime).format('MMM Do YY')}</p>
                                        </TableCell>
                                        <TableCell>
                                            <h5>{shipCard.shipmentDistance}</h5>
                                        </TableCell>
                                        <TableCell>
                                            <h5>14 mi</h5>
                                        </TableCell>
                                        <TableCell>
                                            <h5>{shipCard.Weight} K</h5>
                                        </TableCell>
                                        <TableCell>
                                            <KeyboardArrowRightIcon />
                                        </TableCell>
                                    </TableRow>
                                )}
                            </>
                            :
                            <div className='mt-5'>
                                <div className='d-flex'>
                                    <h5 className='m-auto'> {err}</h5>
                                </div>
                            </div>
                        }

                    </TableBody>

                </Table>
            </TableContainer >
        </>
    )
}

export default ColLoad
