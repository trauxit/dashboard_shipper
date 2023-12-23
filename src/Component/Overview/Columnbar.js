import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import styles from '../../Styles/overview.module.css'
import frame from '../../assets/images/Frame (1).svg'
const Columnbar = () => {
    const [linear, setLinear] = useState({

        series: [{
            name: 'This week',
            data: [20, 30, 35, 10, 60, 40, 50, 25, 66, 44, 55, 57, 56, 19]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,

            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['#FF8201']
            },
            xaxis: {
                categories: ['26/9', "", "", "", '5/10', "", "", "", '16/10', "", "", "", '22/10'],
            },
            title: {
                text: '1.582',
                align: 'center',
                style: {
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: '#000'
                }
            }, subtitle: {
                text: 'Total Loads',
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
            }, colors: ['#FF8201'],
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
            }
        },
    })
    return (
        <>
            <div id="chart" className={`${styles.linear}`}>
                <div className={`${styles.linear__body}`}>
                    <img alt='' src={frame} />
                    <p>10.0 %</p>
                </div>

                <ReactApexChart options={linear.options} series={linear.series} type="bar" height={300} /* width={650}*/ />
            </div>

        </>
    )
}

export default Columnbar
