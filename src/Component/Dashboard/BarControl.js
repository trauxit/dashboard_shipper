import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import styles from '../../Styles/dashboard.module.css'
import ReactApexChart from "react-apexcharts";
const BarControl = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [138, 180, 47, 20,],
            labels: ['Tracking on time', 'Delayed', 'Past due not shipped', 'Past due not deliverd'],
            chart: {
                type: 'donut',
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },

            ],
            fill: {
                colors: ['#FF8201', '#FFA84A', '#FDD1A4', '#EFBE7B']
            }, theme: {
                monochrome: {
                    enabled: true,
                    color: '#FF8201'
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true
                            }
                        },

                    }
                }
            },
            title: {
                text: "Load Summary",
                style: {
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#000',
                },
                margin: 10,
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);
    return (
        <>

            <div id="chart" ref={chartRef} >
            </div>


        </>
    )
}

export default BarControl
