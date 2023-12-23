import React, { useState, useEffect } from 'react'
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
import { useSelector } from 'react-redux';
import axios from 'axios'
import moment from 'moment';
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
    const [ship, setShip] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const { token } = useSelector((state) => state.user);
    const [err, setErr] = useState('');
    const [searchQuery, setSearchQuery] = useState('inroads');
    const [filteredDataInprog, setFilteredDataInprog] = useState([]);
    const [searchQueryInprog, setSearchQueryInprog] = useState('inprogress');
    useEffect(() => {
        axios
            .get(`https://server.trauxit.app/api/v1/loads/shipper/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setShip(response.data.data.loads);
            })
            .catch((err) => {
                setErr(err.response.data.message);
            });
    }, []);
    useEffect(() => {
        const filtered = ship.filter((item) => item?.status === searchQuery);
        setFilteredData(filtered);
    }, [ship, searchQuery]);
    useEffect(() => {
        const currentTime = new Date().toISOString()
        const filteredInprog = ship.filter((item) => item?.status === searchQueryInprog && new Date(item?.departureTime) > new Date(currentTime));
        setFilteredDataInprog(filteredInprog);
    }, [ship, searchQueryInprog]);


    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar />
                    <div className={`${styles.overviewOrFacilities}`}>
                        <div className={`${styles.overviewOrFacilities__body}`}>
                            <h2 className={`${active === "dashboard" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("dashboard") }}>Dashboard</h2>
                            <h2 className={`${active === "Control Tower" ? styles.style__link : styles.view__link}`} onClick={() => { setActive("Control Tower") }}>Control Tower</h2>
                        </div>
                        {/*  <div className={`${styles.overviewOrFacilities__date}`}>
                            <div className={`${styles.location}`}>
                                <img alt='' src={filter} />
                                <p>Filter</p>
                            </div>
                            <div className={`${styles.location}`}>
                                <img alt='' src={setting} />
                                <p>Configure</p>
                            </div>
                        </div> */}
                    </div>
                    <div className={`${active === "dashboard" ? styles.block : styles.none}`}>
                        <Row className={`${styles.dash}`}>
                            <Col xxl='8'>
                                <h4>Recent Activities</h4>
                                <div className={`${styles.activities}`}>
                                    <div className={`${styles.activities__body} ${styles.transit}`}>
                                        <p>Shipments in Route</p>
                                        <h2>{filteredData.length}</h2>
                                    </div>
                                    {/*  <div className={`${styles.activities__body}`}>
                                        <p>Routes delayed</p>
                                        <h2>3</h2>
                                    </div> */}
                                    <div className={`${styles.activities__body}`}>
                                        <p>Invoices paid</p>
                                        <h2>104</h2>
                                    </div>
                                    <div className={`${styles.activities__body}`}>
                                        <p>New shipments</p>
                                        <h2>{filteredDataInprog.length}</h2>
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
                                <h2>Shipments in Route</h2>
                                <input className={`${styles.input}`} name="text" placeholder="Search..." type="search" />
                                {filteredData.length !== 0 ?
                                    <>
                                        {filteredData && filteredData.map(shipCard =>
                                            <div className={`${styles.routes__body}`} key={shipCard?._id}>
                                                <div className={`${styles.routes__name}`}>
                                                    <h3>{shipCard.idShipper}</h3>
                                                    <img alt='' src={dots} />
                                                </div>
                                                <div className={`${styles.bar}`}><ProgressBar now={(shipCard.shipmentDistance) / 100} className={`${styles.prog}`} />
                                                    <span style={{ left: `calc(${(shipCard.shipmentDistance) / 100}% - 20px)` }} className={`${styles.b}`}> <img alt=' ' src={local} className={`${styles.local}`} /></span>
                                                    <img alt='' src={ellipsis} className={`${styles.ell}`} />
                                                </div>
                                                <div className={`${styles.arrive}`}>
                                                    <div className={`${styles.from}`}>
                                                        <p>{moment(shipCard?.createdAt).format('MMM Do YY')}</p>
                                                        <h3>{shipCard?.PickupLocation?.address}</h3>
                                                    </div>
                                                    <div className={`${styles.to}`}>
                                                        <p>{moment(shipCard?.summary?.arrivalTime).format('MMM Do YY')}</p>
                                                        <h3>{shipCard?.DropoutLocation?.address}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                    :
                                    <div className='mt-5'>
                                        <div className='d-flex'>
                                            <h5 className={`${styles.errbook}`}> {err}</h5>
                                        </div>
                                    </div>
                                }
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
