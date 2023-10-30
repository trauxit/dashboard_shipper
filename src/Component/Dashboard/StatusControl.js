import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const StatusControl = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [
                {
                    name: 'Pending',
                    data: [44, 55, 41, 37, 22, 43, 21],
                },
                {
                    name: 'Assigned ',
                    data: [53, 32, 33, 52, 13, 43, 32],
                },
                {
                    name: 'Tendered',
                    data: [12, 17, 11, 9, 15, 11, 20],
                },
                {
                    name: 'Tender Accepted',
                    data: [9, 7, 5, 8, 6, 9, 4],
                },
                {
                    name: 'In Transit',
                    data: [25, 12, 19, 32, 25, 24, 10],
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        total: {
                            enabled: false,
                            offsetX: 0,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900,
                            },
                        },
                    },
                },
            },
            stroke: {
                width: 1,
                colors: ['#fff'],
            },
            title: {
                text: 'Status By Scheduled Delivary Date',
            },
            xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                labels: {
                    formatter: function (val) {
                        return val + 'K';
                    },
                },
            },
            yaxis: {
                title: {
                    text: undefined,
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + 'K';
                    },
                },
            },
            fill: {
                opacity: 1,
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40,
            }, fill: {
                colors: ['#FF8201', '#FFA84A', '#FDD1A4', '#EFBE7B']
            }, theme: {
                monochrome: {
                    enabled: true,
                    color: '#FF8201'
                }
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <>
            <div id="chart" ref={chartRef}></div>
        </>
    )
}

export default StatusControl
