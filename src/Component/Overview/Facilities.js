import React from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from '../../Styles/overview.module.css'
import { Row, Col } from 'react-bootstrap';
import FacilityBar from './FacilityBar';
import StarIcon from '@mui/icons-material/Star';
function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    avg,
    avgg
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        avg,
        avgg,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function RowTable(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell className={`${open ? styles.t : styles.n}`}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        className={`${open ? styles.t : styles.n}`}
                    >
                        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" className={`${open ? styles.t : styles.n}`}>
                    {row.name}
                </TableCell>
                <TableCell className={`${open ? styles.t : styles.n}`}>{row.calories}</TableCell>
                <TableCell className={`${open ? styles.t : styles.n}`}>{row.fat}</TableCell>
                <TableCell className={`${open ? styles.t : styles.n}`}>{row.carbs}</TableCell>
                <TableCell className={`${open ? styles.t : styles.n}`}>{row.protein}</TableCell>
                <TableCell className={`${open ? styles.t : styles.n}`}>{row.avg}</TableCell>
                <TableCell className={`${open ? styles.t : styles.n}`}>{row.avgg}</TableCell>
            </TableRow>
            <TableRow className={`${styles.collapsetab}`}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                <div className={`${styles.row}`}>
                                    <div>
                                        <FacilityBar />
                                    </div>
                                    <div className={`${styles.review}`}>
                                        <h3 className={`${styles.recent__title}`}>Recent Reviews</h3>
                                        <div>
                                            <div className={`${styles.recent}`}>
                                                <div>
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons} ico`} />
                                                </div>
                                                <p>By J.S On Oct 17, 2023</p>
                                            </div>
                                            <h4>“This place gets in and out pretty quickly if you have your BOL
                                                ready and are polite to the guy at the gate. “</h4>
                                        </div>
                                        <div className='mt-5'>
                                            <div className={`${styles.recent}`}>
                                                <div className={`${styles.icons}`} >
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons} ico`} />
                                                </div>
                                                <p>By J.S On Oct 17, 2023</p>
                                            </div>
                                            <h4>“This place gets in and out pretty quickly if you have your BOL
                                                ready and are polite to the guy at the gate. “</h4>
                                        </div>
                                        <div className='mt-5'>
                                            <div className={`${styles.recent}`}>
                                                <div>
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons}`} />
                                                    <StarIcon className={`${styles.icons} ico`} />
                                                </div>
                                                <p>By J.S On Oct 17, 2023</p>
                                            </div>
                                            <h4>“This place gets in and out pretty quickly if you have your BOL
                                                ready and are polite to the guy at the gate. “</h4>
                                        </div>
                                    </div>

                                </div>

                            </Typography>
                            {/*                             <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table> */}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('ACME Springs Inc-Albany', 'Albany, NY', 42, '98%', 176.4, '4.1(591)', '4.1(591)', '$325'),
    createData('ACME Springs Inc-Albany', 'Albany, NY', 42, '98%', 176.4, '4.1(591)', '4.1(591)', '$325'),
    createData('ACME Springs Inc-Albany', 'Albany, NY', 42, '98%', 176.4, '4.1(591)', '4.1(591)', '$325'),
    createData('ACME Springs Inc-Albany', 'Albany, NY', 42, '98%', 176.4, '4.1(591)', '4.1(591)', '$325'),
    createData('ACME Springs Inc-Albany', 'Albany, NY', 42, '98%', 176.4, '4.1(591)', '4.1(591)', '$325'),
    createData('ACME Springs Inc-Albany', 'Albany, NY', 42, '98%', 176.4, '4.1(591)', '4.1(591)', '$325'),
];

const Facilities = () => {
    return (
        <>
            <TableContainer component={Paper} className={`${styles.tab}`}>
                <Table aria-label="collapsible table">
                    <TableHead className={`${styles.tab__head}`}>
                        <TableRow>
                            <TableCell />
                            <TableCell className={`${styles.tab__cell}`}>Facility Name</TableCell>
                            <TableCell className={`${styles.tab__cell}`}>Location</TableCell>
                            <TableCell className={`${styles.tab__cell}`}>Total Pivkup</TableCell>
                            <TableCell className={`${styles.tab__cell} `}>OTP%</TableCell>
                            <TableCell className={`${styles.tab__cell}`}>Avg Time(mins)</TableCell>
                            <TableCell className={`${styles.tab__cell}`}>Avg Rating</TableCell>
                            <TableCell className={`${styles.tab__cell}`}>Dentention Spent</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={`${styles.r}`}>
                        {rows.map((row) => (
                            <RowTable key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Facilities
