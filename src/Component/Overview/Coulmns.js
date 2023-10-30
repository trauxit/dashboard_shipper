import React, { useState } from 'react'
import styles from '../../Styles/overview.module.css'
import ReactApexChart from "react-apexcharts";
import { Col, Row } from 'react-bootstrap';
import frame from '../../assets/images/Frame (1).svg'
var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
const Coulmns = () => {
    const [state, setState] = useState({

        series: [
            {
                name: 'Q1 Actual',
                group: 'actual',
                data: [48000, 50000, 40000, 65000, 25000, 40000, 48000, 50000, 40000, 65000, 25000, 40000]
            },
            {
                name: 'Q2 Actual',
                group: 'actual',
                data: [20000, 40000, 25000, 10000, 12000, 28000, 20000, 40000, 25000, 10000, 12000, 28000]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            dataLabels: {
                formatter: (val) => {
                    return ''
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            xaxis: {
                categories: [
                    '26/9',
                    '',
                    '',
                    '5/10',
                    '',
                    '',
                    '16/10',
                    '',
                    '',
                    '22/10'
                ]
            }, title: {

                text: '98.5%',
                align: 'center',
                style: {
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: '#000'
                }
            }, subtitle: {
                text: 'EDL Load Precentage',
                align: 'center',
                margin: 50,
                style: {
                    fontSize: '20px',
                    fontWeight: 'normal',
                    color: '#000'
                },
            },
            fill: {
                opacity: 1
            },
            colors: ['#FF8201', '#FFDFAF'],
            yaxis: {
                labels: {
                    formatter: (val) => {
                        return val / 1000 + 'K'
                    }
                }
            },
            plugins: {
                legend: false
            },
            grid: {
                show: true,
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
            },
            yaxis: {
                show: false,
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
        },


    })
    return (
        <>
            <div id="chart" className={`${styles.overview__bar}`}>
                <div className={`${styles.linear__body}`}>
                    <img alt='' src={frame} />
                    <p>10.0 %</p>
                </div>
                <ReactApexChart options={state.options} series={state.series} type="bar" height={300} />
            </div>
        </>
    )
}

export default Coulmns
