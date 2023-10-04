import React, { useState } from 'react'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import styles from '../Styles/dashboard.module.css'
import ReactApexChart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import TableOfDash from './Table';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ModalLoad from './ModalLoad';
const Dashboard = () => {
    const [state, setState] = useState({

        series: [{
            name: 'Accepted',
            data: [40, 32, 40, 10, 51, 40, 60],
            color: '#FF8201',
        }, {
            name: 'Canceled',
            data: [11, 32, 45, 32, 34, 52, 41],
            color: '#000',
        }, {
            name: 'Pending',
            data: [31, 40, 28, 51, 42, 109, 100],
            color: '#eee',
        },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-17", "2018-09-18", "2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM'
                },
            },
        },
    })

    console.log(state.series.map(item => item.name))
    return (
        <>
            <div className={`${styles.home}`}>
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Overview' />
                    <Row className={`${styles.dash}`}>
                        <Col lg='9'>
                            <Row className={`${styles.left}`}>
                                <Col lg='7'>
                                    <div className={`${styles.total}`}>
                                        <div className={`${styles.load__details}`}>
                                            <div className={`${styles.allloard}`}>
                                                <p className={`${styles.allloard__para}`}>all loads</p>
                                                <h2 className={`${styles.loardnum}`}>500</h2>
                                            </div>
                                            <Link to='' className={`${styles.view__btn}`}>View all</Link>
                                        </div>
                                        <div className={`${styles.load__details}`}>
                                            <div className={`${styles.loadprog}`}>
                                                <h2 className={`${styles.loadprog__title}`}>110</h2>
                                                <p className={`${styles.loadprog__para}`}>loads in progress</p>
                                            </div>
                                            <p className={`${styles.loadprog__desc}`}>All online incoming loads</p>
                                            <Link to='' className={`${styles.view__btn}`}>View all</Link>
                                        </div>
                                        <div className={`${styles.load__details}`}>
                                            <div className={`${styles.loaddash}`}>
                                                <h2 className={`${styles.loaddash__title}`}>300</h2>
                                                <p className={`${styles.loaddash__para}`}>loads in progress</p>
                                            </div>
                                            <Link to='' className={`${styles.view__btn}`}>View all</Link>
                                        </div>
                                        <div className={`${styles.load__details}`}>
                                            <div className={`${styles.totalexpenses}`}>
                                                <h2 className={`${styles.totalexpenses__title}`}>$85.200</h2>
                                                <p className={`${styles.totalexpenses__para}`}>total expenses</p>
                                            </div>
                                            <Link to='' className={`${styles.view__btn}`}>view all</Link>
                                        </div>
                                    </div>
                                    <div className={`${styles.chart}`}>
                                        <div className={`${styles.chart__body}`}>
                                            <p className={`${styles.chart__para}`}>receiving orders report</p>
                                            <div className={`${styles.chart__status}`}>
                                                {state.series.map(item => (
                                                    <p style={{ color: `${item.color}` }}>{item.name}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                                    </div>
                                    <TableOfDash />
                                </Col>
                                <Col lg='2'  >
                                    <div className={`${styles.booking}`} >
                                        <h4 className={`${styles.booking__title}`}>loads booking</h4>
                                        <div className={`${styles.loadbook}`}>
                                            <div className={`${styles.loads}`}>
                                                <div className={`${styles.loads__body}`}>
                                                    <h2 className={`${styles.loads__title}`}>17</h2>
                                                </div>
                                                <p className={`${styles.loads__para}`}>total loads</p>
                                            </div>
                                            <div className={`${styles.loads}`}>
                                                <div className={`${styles.loads__body}`}>
                                                    <h2 className={`${styles.loads__title}`}>20</h2>
                                                </div>
                                                <p className={`${styles.loads__para}`}>trucks</p>
                                            </div>
                                            <div className={`${styles.loads}`}>
                                                <div className={`${styles.loads__body}`}>
                                                    <h2 className={`${styles.loads__title}`}>17</h2>
                                                </div>
                                                <p className={`${styles.loads__para}`}>this month</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.payment}`}>
                                        <h4 className={`${styles.payment__title}`}>all payments details</h4>
                                        <div className={`${styles.payment__date}`}>
                                            <p className={`${styles.payment__para}`}>Change date <CalendarTodayIcon className={`${styles.payment__icon}`} /></p>
                                            <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                                <option>Sep 2023</option>
                                                <option value="22">Sep 2022</option>
                                                <option value="21">Sep 2021</option>
                                                <option value="20">Sep 2020</option>
                                            </Form.Select>
                                        </div>
                                        <div className={`${styles.totalPayment}`}>
                                            <div >
                                                <p className={`${styles.totalPayment__para}`}>Total payment of shipments bills</p>
                                                <Link className={`${styles.totalPayment__link}`}>view all details</Link>
                                            </div>
                                            <div>
                                                <h3 className={`${styles.price}`}>$478</h3>
                                            </div>
                                        </div>
                                        <div className={`${styles.totalPayment} mt-5 pb-3`}>
                                            <div >
                                                <p className={`${styles.totalPayment__para}`}>Total payment this month</p>
                                                <Link className={`${styles.totalPayment__link}`}>view all details</Link>
                                            </div>
                                            <div>
                                                <h3 className={`${styles.price}`}>$600</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.currentpay}`}>
                                        <h4 className={`${styles.payment__title}`}>today's payment</h4>
                                        <div className={`${styles.payment__date}`}>
                                            <p className={`${styles.payment__para}`}>Change date <CalendarTodayIcon className={`${styles.payment__icon}`} /></p>
                                            <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                                <option>Sep 2023</option>
                                                <option value="22">Sep 2022</option>
                                                <option value="21">Sep 2021</option>
                                                <option value="20">Sep 2020</option>
                                            </Form.Select>
                                        </div>
                                        <div>
                                            <div className={`${styles.order}`}>
                                                <p className={`${styles.order__id}`}>#224512</p>
                                                <p className={`${styles.order__date}`}>24Sep 2023</p>
                                                <p className={`${styles.order__price}`}>$100</p>
                                                <p className={`${styles.order__status} ${styles.pending}`}>Pending</p>
                                            </div>
                                            <div className={`${styles.order}`}>
                                                <p className={`${styles.order__id}`}>#224512</p>
                                                <p className={`${styles.order__date}`}>24Sep 2023</p>
                                                <p className={`${styles.order__price}`}>$100</p>
                                                <p className={`${styles.order__status} ${styles.paid}`}>Paid</p>
                                            </div>
                                            <div className={`${styles.order}`}>
                                                <p className={`${styles.order__id}`}>#224512</p>
                                                <p className={`${styles.order__date}`}>24Sep 2023</p>
                                                <p className={`${styles.order__price}`}>$100</p>
                                                <p className={`${styles.order__status} ${styles.pending}`}>Pending</p>
                                            </div>
                                            <div className={`${styles.order}`}>
                                                <p className={`${styles.order__id}`}>#224512</p>
                                                <p className={`${styles.order__date}`}>24Sep 2023</p>
                                                <p className={`${styles.order__price}`}>$100</p>
                                                <p className={`${styles.order__status} ${styles.waiting}`}>waiting</p>
                                            </div>
                                            <div className={`${styles.order}`}>
                                                <p className={`${styles.order__id}`}>#224512</p>
                                                <p className={`${styles.order__date}`}>24Sep 2023</p>
                                                <p className={`${styles.order__price}`}>$100</p>
                                                <p className={`${styles.order__status} ${styles.pending}`}>Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                        <Col lg='3' className={`${styles.map}`}>
                            <div className={`${styles.create}`}>
                                <div>
                                    <ModalLoad />
                                </div>
                            </div>
                            <div className={`${styles.loads__map}`}>
                                <h4 className={`${styles.payment__title}`}>current loads</h4>

                                <div className={`${styles.googlemap}`}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.33217942648!2d-122.01155228782753!3d37.33464377198324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2seg!4v1696309150198!5m2!1sen!2seg"
                                        className={`${styles.iframe}`}
                                        height="250"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        title="This is a unique title">
                                    </iframe>
                                    <div className={`${styles.map__details}`}>
                                        <h4 className={`${styles.map__title}`}>Order Id : #22115</h4>
                                        <ProgressBar className={`prog on`}
                                            min={0}
                                            max={100} now={30} />
                                        <div className={`${styles.deliveredorder}`}>
                                            <div>
                                                <div className={`${styles.map__date}`}>
                                                    <p className={`${styles.map__para}`}>26 sep</p>
                                                    <p className={`${styles.map__time}`}>12:00 am</p>
                                                </div>
                                                <div className={`${styles.map__date}`}>
                                                    <p className={`${styles.map__para}`}>26 sep</p>
                                                    <p className={`${styles.map__time}`}>12:00 am</p>
                                                </div>
                                                <div className={`${styles.map__date}`}>
                                                    <p className={`${styles.map__para}`}>26 sep</p>
                                                    <p className={`${styles.map__time}`}>12:00 am</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.roads}`}>
                                                <p className={`${styles.first}`}></p>
                                                <p className={`${styles.second}`}></p>
                                                <p className={`${styles.third}`}></p>
                                            </div>
                                            <div className={`${styles.statusOfOrder}`}>
                                                <p>booked</p>
                                                <p>in route</p>
                                                <p>delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.googlemap}`}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.33217942648!2d-122.01155228782753!3d37.33464377198324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2seg!4v1696309150198!5m2!1sen!2seg"
                                        className={`${styles.iframe}`}
                                        height="250"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        title="This is a unique title">
                                    </iframe>
                                    <div className={`${styles.map__details}`}>
                                        <h4 className={`${styles.map__title}`}>Order Id : #22115</h4>
                                        <ProgressBar className={`prog on`}
                                            min={0}
                                            max={100} now={30} />
                                        <div className={`${styles.deliveredorder}`}>
                                            <div>
                                                <div className={`${styles.map__date}`}>
                                                    <p className={`${styles.map__para}`}>26 sep</p>
                                                    <p className={`${styles.map__time}`}>12:00 am</p>
                                                </div>
                                                <div className={`${styles.map__date}`}>
                                                    <p className={`${styles.map__para}`}>26 sep</p>
                                                    <p className={`${styles.map__time}`}>12:00 am</p>
                                                </div>
                                                <div className={`${styles.map__date}`}>
                                                    <p className={`${styles.map__para}`}>26 sep</p>
                                                    <p className={`${styles.map__time}`}>12:00 am</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.roads}`}>
                                                <p className={`${styles.first}`}></p>
                                                <p className={`${styles.second}`}></p>
                                                <p className={`${styles.third}`}></p>
                                            </div>
                                            <div className={`${styles.statusOfOrder}`}>
                                                <p>booked</p>
                                                <p>in route</p>
                                                <p>delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>


        </>
    )
}

export default Dashboard
