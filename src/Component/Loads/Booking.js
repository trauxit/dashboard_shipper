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
import { Col, Row } from 'react-bootstrap';
import map from '../../assets/images/Maps.png'
import path from '../../assets/images/Path.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios'
import { useSelector } from 'react-redux';
import moment from 'moment';

const Booking = () => {
    const [ship, setShip] = useState([])
    const { token } = useSelector((state) => state.user);
    const [err, setErr] = useState('')
    useEffect(() => {
        axios.get(`https://server.trauxit.app/api/v1/loads/shipper/?status=booked`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                setShip(response.data.data.loads)
            }).catch((err) => { setErr(err.response.data.message) })
    }, [])
    return (
        <>
            <Row className={`${styles.bookrow}`}>
                <Col xxl='9'>
                    <TableContainer component={Paper} className={`${styles.tab} ${styles.booktab}`}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead className={`${styles.head}`}>
                                <TableRow className={`${styles.head}`}>
                                    <TableCell>Reference</TableCell>
                                    <TableCell>Pickup</TableCell>
                                    <TableCell>Delivery</TableCell>
                                    <TableCell>Driver</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ship.length !== 0 ?
                                    <>
                                        {ship && ship.map(shipCard =>
                                            <TableRow
                                                key={shipCard?._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                className={`${styles.book}`}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <h5>UF-S82854232</h5>
                                                </TableCell>
                                                <TableCell>
                                                    <h5>{shipCard?.PickupLocation?.address}</h5>
                                                    <p>{moment(shipCard?.summary?.departureTime).format('MMM Do YY')} </p>

                                                </TableCell>
                                                <TableCell>
                                                    <h5>{shipCard?.DropoutLocation?.address}</h5>
                                                    <p>{moment(shipCard?.summary?.arrivalTime).format('MMM Do YY')} </p>
                                                </TableCell>
                                                <TableCell>
                                                    <h5>{shipCard.idCarrier.userName}</h5>
                                                </TableCell>
                                                <TableCell>
                                                    <h5>{shipCard.status}</h5>
                                                </TableCell>
                                                <TableCell>
                                                    <MoreHorizIcon />
                                                </TableCell>
                                            </TableRow>

                                        )}
                                    </>
                                    :
                                    <div className='mt-5'>
                                        <div className='d-flex'>
                                            <h5 className={`${styles.errbook}`}> {err}</h5>
                                        </div>
                                    </div>
                                }


                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
                <Col xxl='3'>
                    <div className={`${styles.map}`}>
                        <img alt='' src={map} className={`${styles.mapimg}`} />
                        <img alt='' src={path} className={`${styles.path}`} />
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Booking
