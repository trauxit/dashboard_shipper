import React, { useState } from 'react'
import styles from '../../Styles/dashboard.module.css'
import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement

} from 'chart.js';
Chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const Chart = () => {
    const data = {
        labels: ["MON", "", "TUE", "", "WED", "", "THU", "", "FRI", "", "SAT", "", "SUN"],
        datasets: [{
            data: [8, 9, 7.8, 7.9, 6, 7, 8, 6, 5, 7.8, 5, 8, 6],
            backgroundColor: 'transparent',
            borderColor: '#FF8201',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5

        }]
    }
    const options = {
        plugins: {
            legend: false
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
    }
    return (
        <>
            <div className={`${styles.linestyle}`}>
                <div className={`${styles.linestyle__body}`}>
                    <h2>Revenue</h2>
                    <p>Weekly</p>
                </div>
                <Line data={data} options={options} className={`${styles.lineimg}`} />
            </div>
        </>
    )
}

export default Chart
