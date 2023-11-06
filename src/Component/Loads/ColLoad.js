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
import axios from 'axios'
import { useSelector } from 'react-redux';
import moment from 'moment';
const ColLoad = () => {
    const [ship, setShip] = useState([])
    const { token } = useSelector((state) => state.user);
    useEffect(() => {
        axios.get(`http://52.87.197.234:3000/api/v1/loads/shipper/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                setShip(response.data.data.loads)
            }).catch((err) => { console.log(err) })
    }, [])
    return (
        <>

            <TableContainer component={Paper} className={`${styles.tab}`}>
                <div className={`${styles.tabline}`}>
                    <div className={`${styles.tabline__load}`}>
                        <h2>Loads</h2>
                        <p> 108</p>
                    </div>
                    {/*  <div className={`${styles.tabline__lanes}`}>
                        <h2>Dedicated Lanes </h2>
                        <p> 108</p>
                    </div> */}
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rate</TableCell>
                            <TableCell>Pickup</TableCell>
                            {/* <TableCell>Full Route</TableCell> */}
                            <TableCell>Delivery</TableCell>
                            <TableCell>Distance and RPM</TableCell>
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
                                            <h5>{shipCard.Weight}</h5>
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
                                    <h5 className='m-auto'> nothing</h5>
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
