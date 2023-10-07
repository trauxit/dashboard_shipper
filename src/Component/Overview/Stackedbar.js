import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import styles from '../../Styles/overview.module.css'
const Stackedbar = () => {
    const [bar, setBar] = useState({

        series: [{
            name: 'This week',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Last week',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    columnWidth: '25%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            title: {

                text: 'Weekly Comparison For Booking',
                align: 'left',
                style: {
                    color: '#777'
                }
            },
            fill: {
                opacity: 1
            }, colors: ['#eee', '#FF8201'],
        },
    })
    return (
        <>
            <div id="chart" className={`${styles.bar}`}>
                <ReactApexChart options={bar.options} series={bar.series} type="bar" height={280} classNam={`${styles.stbar}`} /* width={600}  */ />
            </div>
        </>
    )
}

export default Stackedbar
