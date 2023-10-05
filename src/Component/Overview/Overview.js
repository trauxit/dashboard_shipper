import React, { useState } from 'react'
import styles from '../../Styles/overview.module.css'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import chart from '../../assets/images/Chart 10.png'
import Spark from './Spark';
import Stackedbar from './Stackedbar';
import Columnbar from './Columnbar';
import Historybar from './Historybar';
import { Col, Row } from 'react-bootstrap'
import ReactApexChart from "react-apexcharts";
import map from '../../assets/images/Group_1000003377-removebg-preview.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Overview = () => {

    const [state, setState] = useState({
        series6: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65,]
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
                text: 'Total Loads',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                    color: '#777'
                }
            }, subtitle: {
                text: '10.000',
                offsetX: 0,
                style: {
                    fontSize: '20px',
                    color: '#777'
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
            }
        }
    })
    const [piechart, setpiechart] = useState({

        series: [75],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#888',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val);
                            },
                            color: '#111',
                            fontSize: '36px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Percent'],
        },
    })

    const [line, setLine] = useState({
        series: [{
            name: "Music",
            data: [10, 33, 19, 120, 60]
        },

        ],
        options: {
            chart: {
                height: 328,
                type: 'line',
                zoom: {
                    enabled: false
                }, dropShadow: {
                    enabled: false,
                    top: 3,
                    left: 2,
                    blur: 4,
                    opacity: 1,
                }
            }, stroke: {
                curve: 'smooth',
                width: 2
            },
            colors: ["#000", '#fff']
            , title: {
                text: 'Shipments over time',
                align: 'left',
                offsetY: 5,
                offsetX: 20,
                style: {
                    color: '#777'
                }
            }, subtitle: {
                text: '$510',
                align: 'center',
                offsetY: 40,
                offsetX: 110,
                style: {
                    fontSize: '17px',
                    color: '#777'
                }
            },
            markers: {
                size: 6,
                strokeWidth: 0,
                hover: {
                    size: 9
                }
            },
            grid: {
                show: true,
                padding: {
                    bottom: 0
                }
            }, labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            xaxis: {
                tooltip: {
                    enabled: false
                }
            }, legend: {
                position: 'top',
                horizontalAlign: 'right',
                offsetY: -20
            }
        }
    })
    return (
        <>
            <div className={`${styles.home}`}>
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Overview' />
                    <div className={`${styles.top}`}>
                        <Spark />
                        <Stackedbar />
                    </div>
                    <div className={`${styles.center}`}>
                        <Columnbar />
                        <img alt='' src={chart} className={`${styles.chart__img}`} />
                    </div>
                    <Historybar />
                    <Row className={`${styles.last}`}>
                        <Col lg='8'>
                            <Row className={`${styles.space}`}>
                                <Col lg='4'>
                                    <div id="chart-6" className={`${styles.lastbar}`}>
                                        <ReactApexChart options={state.options6} series={state.series6} type="bar" height={150} />
                                    </div>
                                    <div id="chart-6" className={`${styles.lastbar}`}>
                                        <ReactApexChart options={state.options6} series={state.series6} type="bar" height={150} />
                                    </div>
                                    <div id="chart-6" className={`${styles.lastbar}`}>
                                        <ReactApexChart options={state.options6} series={state.series6} type="bar" height={150} />
                                    </div>
                                </Col>
                                <Col lg='4'>
                                    <div id="card" className={`${styles.pie}`}>
                                        <div id="chart">
                                            <ReactApexChart options={piechart.options} series={piechart.series} type="radialBar" height={280} />
                                        </div>
                                        <p>kjnkj</p>
                                        <p>gfdtdgf</p>
                                        <p>egfrgr</p>
                                    </div>
                                    <div className={`${styles.line}`}>
                                        <ReactApexChart options={line.options} series={line.series} type="line" height={150} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg='4'>
                            <div className={`${styles.map}`}>
                                <div className={`${styles.img}`}>
                                    <img alt='' src={map} className={`${styles.map__img}`} />
                                </div>
                                <div className={`${styles.map__body}`}>
                                    <div >
                                        <p className={`${styles.map__para}`}>new work</p>
                                        <p className={`${styles.map__para}`}>florida</p>
                                        <p className={`${styles.map__para}`}>hawaii</p>
                                        <p className={`${styles.map__para}`}>maryland</p>
                                        <p className={`${styles.map__para}`}>texas</p>
                                    </div>
                                    <div className={`${styles.map__prog}`}>
                                        <ProgressBar
                                            min={0}
                                            max={100} now={80} className={`${styles.p} ${styles.first}`} />
                                        <ProgressBar
                                            min={0}
                                            max={100} now={90} className={`${styles.p}`} />
                                        <ProgressBar
                                            min={0}
                                            max={100} now={30} className={`${styles.p}`} />
                                        <ProgressBar
                                            min={0}
                                            max={100} now={60} className={`${styles.p}`} />
                                        <ProgressBar
                                            min={0}
                                            max={100} now={80} className={`${styles.p}`} />
                                    </div>
                                    <div>
                                        <p className={`${styles.map__label}`}>80%</p>
                                        <p className={`${styles.map__label}`}>90%</p>
                                        <p className={`${styles.map__label}`}>30%</p>
                                        <p className={`${styles.map__label}`}>60%</p>
                                        <p className={`${styles.map__label}`}>80%</p>
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

export default Overview
