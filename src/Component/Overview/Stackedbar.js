import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import styles from '../../Styles/overview.module.css'
import frame from '../../assets/images/Frame (1).svg'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const Stackedbar = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: false,
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },

            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false
                }
            }
        }
    };
    const data = {
        labels: ['26/9', "", "", "", '5/10', "", "", "", '16/10', "", "", "", '22/10'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
                borderColor: '#eee',
                backgroundColor: '#FF8201',

                fill: false,

            }
        ],
    };
    const data1 = {
        labels: ['26/9', "", "", "", '5/10', "", "", "", '16/10', "", "", "", '22/10'],
        datasets: [
            {
                data: [55, 49, 60, 81, 50, 59, 65, 13, 40, 30, 74, 56, 55, 40],
                borderColor: '#eee',
                backgroundColor: '#FF8201',

                fill: false,

            }
        ],
    };
    return (
        <>
            <div className={`${styles.overview__line}`}>
                <div className={`${styles.linear__body}`}>
                    <img alt='' src={frame} />
                    <p>10.0 %</p>
                </div>
                <div className={`${styles.chart__body}`}>
                    <h3>5</h3>
                    <p>Avg Load Time ( In Days )</p>
                </div>

                <Line options={options} data={data} className={`${styles.lineimg}`} />
            </div>
            <div className={`${styles.overview__line}`}>
                <div className={`${styles.linear__body}`}>
                    <img alt='' src={frame} />
                    <p>10.0 %</p>
                </div>
                <div className={`${styles.chart__body}`}>
                    <h3>94.8%</h3>
                    <p>On Time Deliveris</p>
                </div>
                <Line options={options} data={data1} className={`${styles.lineimg}`} />
            </div>
        </>
    )
}

export default Stackedbar
