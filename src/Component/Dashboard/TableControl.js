import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '../../Styles/dashboard.module.css'
const TableControl = () => {
    return (
        <>
            <TableContainer component={Paper} className={`${styles.tabs}`}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={`${styles.tabcontrol}`}>
                        <TableRow>
                            <TableCell className={`${styles.tabcontrol__title}`}>Shipment</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} >Risk Level</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} >Risk ETA</TableCell>
                            <TableCell className={`${styles.tabcontrol__title}`} >Delivary Latest</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                San Francisco CA <ArrowForwardIcon /> Riverside, CA
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.high}`} >high</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>

                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                San Francisco CA <ArrowForwardIcon /> Riverside, CA
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.high}`} >high</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>

                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                San Francisco CA <ArrowForwardIcon /> Riverside, CA
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.medium}`} >Medium</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>

                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={`${styles.name}`} >
                                San Francisco CA <ArrowForwardIcon /> Riverside, CA
                            </TableCell>
                            <TableCell >
                                <div className={`${styles.high}`} >high</div>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`} >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>
                            <TableCell className={`${styles.tab__para}`}  >
                                <p className={`${styles.tab__para1}`}>17-9-2023</p>
                                <p className={`${styles.tab__para2}`}>10:00 AM</p>
                            </TableCell>

                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableControl
