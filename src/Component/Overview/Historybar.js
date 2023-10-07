import React, { useState } from 'react'
import styles from '../../Styles/overview.module.css'
import ReactApexChart from "react-apexcharts";
import { Row, Col } from 'react-bootstrap';
const Historybar = () => {
    const [history, setHistory] = useState({

        series: [{
            name: 'Net Profit',
            data: [35, 44, 55, 57, 56, 61, 58, 63, 60, 66, 80, 100]
        }, {
            name: 'Revenue',
            data: [50, 76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 30]
        }, {
            name: 'Free Cash Flow',
            data: [90, 35, 41, 36, 26, 45, 48, 52, 53, 41, 30, 60]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
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
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            fill: {
                opacity: 1
            },
        },


    })
    return (
        <>
            <Row id="chart" className={`${styles.history__chart}`}>
                <Col>
                    <div className={`${styles.history}`}>
                        <ReactApexChart options={history.options} series={history.series} type="bar" height={350} />{/* <p>1400</p> */}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Historybar
