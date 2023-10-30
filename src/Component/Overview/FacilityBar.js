import React from 'react'
import styles from '../../Styles/overview.module.css'
import ReactApexChart from "react-apexcharts";
import { useState } from 'react';
const FacilityBar = () => {
    const [state, setState] = useState({

        series: [{
            name: 'Volume',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 413, 201, 352, 752, 320, 257, 160,]
        }, {
            name: 'Avg Load Time',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 17, 31, 22, 22, 12, 16]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Shipments',
                style: {
                    fontSize: '37px',
                    fontWeight: 'bold',
                    color: '#000'
                }
            },
            dataLabels: {
                enabled: false,
                enabledOnSeries: [1]
            },
            xaxis: {
                categories: ['1AM', "", "", "", '2AM', "", "", "", '3AM', "", "", "", '4AM'],
            },
            yaxis: [{
                title: {
                    text: '',
                },
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    show: false
                }

            }, {
                opposite: true,
                title: {
                    text: ''
                },
                labels: {
                    show: false
                }
            }],
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
            }, colors: ['#FF8201', '#898989']

        },


    })
    return (
        <>
            <div id="chart" className={`${styles.facility__bar}`}>
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            </div>

        </>
    )
}

export default FacilityBar
