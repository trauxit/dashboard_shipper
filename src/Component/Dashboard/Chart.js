import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import styles from '../../Styles/dashboard.module.css'
const Chart = () => {
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
    return (
        <>
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
        </>
    )
}

export default Chart
