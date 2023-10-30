import React, { useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import styles from '../../Styles/dashboard.module.css'
import ReactApexChart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import TableOfDash from './Table';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import filter from '../../assets/images/filter_list.svg'
import setting from '../../assets/images/Settings.svg'
import Chart from './Chart';
import dots from '../../assets/images/more_horiz.svg'
import local from '../../assets/images/local_shipping.svg'
import ellipsis from '../../assets/images/Ellipse 1091.svg'
import ControTower from './ControTower';
const Dashboard = () => {
    const [state, setState] = useState({
        series6: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65,],

        }],
        options6: {
            chart: {
                type: 'bar',
                width: 100,
                height: 35,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    columnWidth: '50%'
                }
            }, title: {
                text: 'Revenue',
                offsetX: 0,
                style: {
                    fontSize: '27px',
                    color: '#949393',
                    fontWeight: 'bold',
                }
            }, subtitle: {
                text: '$12,789.00',
                offsetX: 0,
                style: {
                    fontSize: '40px',
                    color: '#000',
                    fontWeight: 'bold',
                }
            },
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            },
            colors: ['#FF8201'],
            fill: {
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FF8201'
                        },
                        {
                            offset: 25,
                            color: '#FF8201'
                        },
                        {
                            offset: 50,
                            color: '#FFC487'
                        },
                        {
                            offset: 70,
                            color: '#FFC487'
                        },
                        {
                            offset: 100,
                            color: '#FFE0BF'
                        }
                    ]
                }
            },
        }
    })
    const [active, setActive] = useState('dashboard')
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar />
                    <div className={`${styles.overviewOrFacilities}`}>
                        <div className={`${styles.overviewOrFacilities__body}`}>
                            <h2 className={`${active === "dashboard" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("dashboard") }}>dashboard</h2>
                            <h2 className={`${active === "Control Tower" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("Control Tower") }}>Control Tower</h2>
                        </div>
                        <div className={`${styles.overviewOrFacilities__date}`}>
                            <div className={`${styles.location}`}>
                                <img alt='' src={filter} />
                                <p>Filter</p>
                            </div>
                            <div className={`${styles.location}`}>
                                <img alt='' src={setting} />
                                <p>Configure</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${active === "dashboard" ? styles.block : styles.none}`}>
                        <Row className={`${styles.dash}`}>
                            <Col xxl='8'>
                                <h4>Recent Activities</h4>
                                <div className={`${styles.activities}`}>
                                    <div className={`${styles.activities__body} ${styles.transit}`}>
                                        <p>Routes in transit</p>
                                        <h2>58</h2>
                                    </div>
                                    <div className={`${styles.activities__body}`}>
                                        <p>Routes delayed</p>
                                        <h2>3</h2>
                                    </div>
                                    <div className={`${styles.activities__body}`}>
                                        <p>Invoices paid</p>
                                        <h2>104</h2>
                                    </div>
                                    <div className={`${styles.activities__body}`}>
                                        <p>New booking</p>
                                        <h2>142</h2>
                                    </div>
                                </div>

                                <TableOfDash />
                                <div className={`${styles.dashchart}`}>
                                    <Chart />
                                    <div id="chart-6" className={`${styles.lastbar} `}>
                                        <ReactApexChart options={state.options6} series={state.series6} type="bar" height={250} />
                                    </div>
                                </div>
                            </Col>
                            <Col xxl='4' className={`${styles.routes}`}>
                                <h2>Routes in transit</h2>
                                <input className={`${styles.input}`} name="text" placeholder="Search..." type="search" />
                                <div className={`${styles.routes__body}`}>
                                    <div className={`${styles.routes__name}`}>
                                        <h3>CU 7381</h3>
                                        <img alt='' src={dots} />
                                    </div>
                                    <div className={`${styles.bar}`}><ProgressBar now={70} className={`${styles.prog}`} />
                                        <span style={{ left: `calc(${70}% - 20px)` }} className={`${styles.b}`}> <img alt=' ' src={local} className={`${styles.local}`} /></span>
                                        <img alt='' src={ellipsis} className={`${styles.ell}`} />
                                    </div>
                                    <div className={`${styles.arrive}`}>
                                        <div className={`${styles.from}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                        <div className={`${styles.to}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.routes__body}`}>
                                    <div className={`${styles.routes__name}`}>
                                        <h3>CU 7381</h3>
                                        <img alt='' src={dots} />
                                    </div>
                                    <div className={`${styles.bar}`}><ProgressBar now={50} className={`${styles.prog}`} />
                                        <span style={{ left: `calc(${50}% - 20px)` }} className={`${styles.b}`}> <img alt=' ' src={local} className={`${styles.local}`} /></span>
                                        <img alt='' src={ellipsis} className={`${styles.ell}`} />
                                    </div>
                                    <div className={`${styles.arrive}`}>
                                        <div className={`${styles.from}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                        <div className={`${styles.to}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.routes__body}`}>
                                    <div className={`${styles.routes__name}`}>
                                        <h3>CU 7381</h3>
                                        <img alt='' src={dots} />
                                    </div>
                                    <div className={`${styles.bar}`}><ProgressBar now={30} className={`${styles.prog}`} />
                                        <span style={{ left: `calc(${30}% - 20px)` }} className={`${styles.b}`}> <img alt=' ' src={local} className={`${styles.local}`} /></span>
                                        <img alt='' src={ellipsis} className={`${styles.ell}`} />
                                    </div>
                                    <div className={`${styles.arrive}`}>
                                        <div className={`${styles.from}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                        <div className={`${styles.to}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.routes__body}`}>
                                    <div className={`${styles.routes__name}`}>
                                        <h3>CU 7381</h3>
                                        <img alt='' src={dots} />
                                    </div>
                                    <div className={`${styles.bar}`}><ProgressBar now={70} className={`${styles.prog}`} />
                                        <span style={{ left: `calc(${70}% - 20px)` }} className={`${styles.b}`}> <img alt=' ' src={local} className={`${styles.local}`} /></span>
                                        <img alt='' src={ellipsis} className={`${styles.ell}`} />
                                    </div>
                                    <div className={`${styles.arrive}`}>
                                        <div className={`${styles.from}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                        <div className={`${styles.to}`}>
                                            <p>02:05pm, Sept02</p>
                                            <h3>Miami, USA</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={`${active === "Control Tower" ? styles.block : styles.none}`}>
                        <ControTower />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard
