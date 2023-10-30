import React from 'react'
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
/* function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */

const Booking = () => {
    return (
        <>
            <Row className={`${styles.bookrow}`}>
                <Col xxl='9'>
                    <TableContainer component={Paper} className={`${styles.tab}`}>
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
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${styles.book}`}
                                >
                                    <TableCell component="th" scope="row">
                                        <h5>UF-S82854232</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Dalas, TX</h5>
                                        <p>Sep 28+14:30 CST </p>
                                    </TableCell>
                                    <TableCell>
                                        <h5>Huston, TX</h5>
                                        <p>Sep 28+14:30 CST </p>

                                    </TableCell>
                                    <TableCell>
                                        <h5>Kevin</h5>
                                    </TableCell>
                                    <TableCell>
                                        <h5>230mi</h5>
                                        <p>$3.23/mile</p>
                                    </TableCell>
                                    <TableCell>
                                        <MoreHorizIcon />
                                    </TableCell>
                                </TableRow>
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
