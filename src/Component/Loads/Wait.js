import React, { useState, useEffect, useRef } from 'react'
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
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const Wait = () => {
    const [ship, setShip] = useState([])
    const { token } = useSelector((state) => state.user);
    const [err, setErr] = useState('')
    const [toggle, setToggle] = useState(Array(ship.length).fill(false));
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [selectId, setSelectId] = useState(null);
    const mapContainer = useRef(null);
    let mapInstance = null;
    let startMarker = null;
    let endMarker = null;
    useEffect(() => {
        axios.get(`https://server.trauxit.app/api/v1/loads/shipper/?status=inchecksp`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                setShip(response.data.data.loads)
            }).catch((err) => { setErr(err.response.data.message) })
    }, [])
    const handleClick = (index) => {
        setToggle(prevToggle => {
            const newToggle = [...prevToggle];
            newToggle[index] = !newToggle[index];
            return newToggle;
        });
        setSelectedRowIndex(index);
    };
    useEffect(() => {
        if (selectedRowIndex !== null) {
            const startCoordinates = [
                ship[selectedRowIndex]?.PickupLocation?.coordinates[0],
                ship[selectedRowIndex]?.PickupLocation?.coordinates[1],
            ];
            const endCoordinates = [
                ship[selectedRowIndex]?.DropoutLocation?.coordinates[0],
                ship[selectedRowIndex]?.DropoutLocation?.coordinates[1],
            ];

            // eslint-disable-next-line react-hooks/exhaustive-deps
            mapInstance = tt.map({
                key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
                container: mapContainer.current,
                center: startCoordinates,
                zoom: 2
            });
            mapInstance.on('load', () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                startMarker = new tt.Marker({
                    color: '#ABABAB',
                })
                    .setLngLat(startCoordinates)
                    .addTo(mapInstance);

                // eslint-disable-next-line react-hooks/exhaustive-deps
                endMarker = new tt.Marker({ draggable: true })
                    .setLngLat(endCoordinates)
                    .addTo(mapInstance);
            });
        }
    }, [selectedRowIndex]);
    const handledelet = (item) => {
        axios.patch(`https://server.trauxit.app/api/v1/loads/${item}/update-status-to-canceled`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                console.log(response)
                window.location.reload();

            }
            ).catch((err) => { console.log(err) })
        console.log(item, 'kk')
    };
    const handleapprove = (item) => {
        axios.patch(`https://server.trauxit.app/api/v1/loads/booking/${item}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                console.log(response)
                window.location.reload();

            }
            ).catch((err) => { console.log(err) })
        console.log(item, 'kk')
    };
    return (
        <>
            <Row className={`${styles.bookrow}`}>
                <Col xxl='9' className={`${styles.colload}`}>
                    <TableContainer component={Paper} className={`${styles.tab} ${styles.booktab}`}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead className={`${styles.head}`}>
                                <TableRow className={`${styles.head}`}>
                                    <TableCell>Reference</TableCell>
                                    <TableCell>Pickup</TableCell>
                                    <TableCell>Delivery</TableCell>
                                    <TableCell>Distance</TableCell>
                                    <TableCell>Cost</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ship.length !== 0 ?
                                    <>
                                        {ship && ship.map((shipCard, index) =>
                                            <TableRow
                                                key={shipCard?._id}
                                                onClick={() => { setSelectId(shipCard?._id) }}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                className={`${selectId === shipCard?._id ? styles.cell : styles.book}`}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <h5>{shipCard.idShipper}</h5>
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
                                                    <h5>{shipCard.shipmentDistance} Km</h5>
                                                </TableCell>
                                                <TableCell>
                                                    <h5>{shipCard.priceLoads}</h5>
                                                </TableCell>
                                                <TableCell>
                                                    <h5>Waiting Your Approve</h5>
                                                </TableCell>
                                                <TableCell key={index} onClick={() => handleClick(index)}>
                                                    <MoreHorizIcon />
                                                    {toggle[index] ?
                                                        <div className={`${styles.edit__body}`}>
                                                            <p onClick={() => handleapprove(shipCard?._id)}>Approve</p>
                                                            <hr />
                                                            <p onClick={() => handledelet(shipCard?._id)}>Cancel</p>
                                                        </div>
                                                        :
                                                        ""
                                                    }
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
                {selectedRowIndex !== null && (
                    <Col xxl="3" className={`${styles.colload}`}>
                        <div ref={mapContainer} style={{ marginTop: '20px' }} className={`${styles.mapload}`}>
                            <div id="start-marker" />
                            <div id="end-marker" />
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default Wait
