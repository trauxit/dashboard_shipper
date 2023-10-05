import React, { useState } from 'react'
import styles from '../../Styles/expenses.module.css'
import ReactApexChart from "react-apexcharts";

const Columnprice = () => {
    const [state, setState] = useState({
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 30, 10, 50]
        },],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '10%',
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
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            }, colors: ['#FF8201'],
            title: {

                text: 'Total State',
                align: 'left',
                style: {
                    color: '#777'
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },


    })
    return (
        <>
            <div id="chart" className={`${styles.chart}`}>
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
            </div>
        </>
    )
}

export default Columnprice
