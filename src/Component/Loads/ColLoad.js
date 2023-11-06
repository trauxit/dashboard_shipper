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

const ColLoad = () => {
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
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <h5>$500</h5>
                            </TableCell>
                            <TableCell>
                                <h5>Dalas, TX</h5>
                                <p>Sep 28+14:30 CST </p>

                            </TableCell>
                            {/*  <TableCell></TableCell> */}
                            <TableCell>
                                <h5>Huston, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            <TableCell>
                                <h5>230mi</h5>
                                <p>$3.23/mile</p>
                            </TableCell>
                            <TableCell>
                                <h5>14 mi</h5>
                            </TableCell>
                            <TableCell>
                                <h5>41.280 Ibs</h5>
                                <p>Van</p>
                            </TableCell>
                            <TableCell>
                                <KeyboardArrowRightIcon />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <h5>$500</h5>
                            </TableCell>
                            <TableCell>
                                <h5>Dalas, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            {/*  <TableCell></TableCell> */}
                            <TableCell>
                                <h5>Huston, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            <TableCell>
                                <h5>230mi</h5>
                                <p>$3.23/mile</p>
                            </TableCell>
                            <TableCell>
                                <h5>14 mi</h5>
                            </TableCell>
                            <TableCell>
                                <h5>41.280 Ibs</h5>
                                <p>Van</p>
                            </TableCell>
                            <TableCell>
                                <KeyboardArrowRightIcon />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <h5>$500</h5>
                            </TableCell>
                            <TableCell>
                                <h5>Dalas, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            {/*  <TableCell></TableCell> */}
                            <TableCell>
                                <h5>Huston, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            <TableCell>
                                <h5>230mi</h5>
                                <p>$3.23/mile</p>
                            </TableCell>
                            <TableCell>
                                <h5>14 mi</h5>
                            </TableCell>
                            <TableCell>
                                <h5>41.280 Ibs</h5>
                                <p>Van</p>
                            </TableCell>
                            <TableCell>
                                <KeyboardArrowRightIcon />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <h5>$500</h5>
                            </TableCell>
                            <TableCell>
                                <h5>Dalas, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            {/*  <TableCell></TableCell> */}
                            <TableCell>
                                <h5>Huston, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            <TableCell>
                                <h5>230mi</h5>
                                <p>$3.23/mile</p>
                            </TableCell>
                            <TableCell>
                                <h5>14 mi</h5>
                            </TableCell>
                            <TableCell>
                                <h5>41.280 Ibs</h5>
                                <p>Van</p>
                            </TableCell>
                            <TableCell>
                                <KeyboardArrowRightIcon />
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <h5>$500</h5>
                            </TableCell>
                            <TableCell>
                                <h5>Dalas, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            {/*  <TableCell></TableCell> */}
                            <TableCell>
                                <h5>Huston, TX</h5>
                                <p>Sep 28+14:30 CST </p>
                            </TableCell>
                            <TableCell>
                                <h5>230mi</h5>
                                <p>$3.23/mile</p>
                            </TableCell>
                            <TableCell>
                                <h5>14 mi</h5>
                            </TableCell>
                            <TableCell>
                                <h5>41.280 Ibs</h5>
                                <p>Van</p>
                            </TableCell>
                            <TableCell>
                                <KeyboardArrowRightIcon />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ColLoad
