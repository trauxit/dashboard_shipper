import React, { useState } from 'react'
import styles from '../../Styles/overview.module.css'
import ReactApexChart from "react-apexcharts";
import { Col, Row } from 'react-bootstrap';
var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
const Spark = () => {
    const [state, setState] = useState({
        seriesSpark: [{
            data: randomizeArray(sparklineData)
        }],
        optionsSpark: {
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight'
            },
            fill: {
                opacity: 0.3
            },
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            yaxis: {
                min: 0
            }, colors: ['#FF8201'],
            title: {
                text: 'Total Loads',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                    color: '#777'
                }
            },
            subtitle: {
                text: '10.000',
                offsetX: 0,
                style: {
                    fontSize: '20px',
                    color: '#777'
                }
            }
        },
        seriesSpark2: [{
            data: randomizeArray(sparklineData)
        }],
        optionsSpark2: {
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight'
            },
            fill: {
                opacity: 0.3
            },
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            yaxis: {
                min: 0
            }, colors: ['#029F04'],
            title: {
                text: 'Complete Loads',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                    color: '#777'
                }
            },
            subtitle: {
                text: '8.000',
                offsetX: 0,
                style: {
                    fontSize: '20px',
                    color: '#777'
                }
            }
        },
        seriesSpark3: [{
            data: randomizeArray(sparklineData)
        }],
        optionsSpark3: {
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'straight'
            },
            fill: {
                opacity: 0.3
            },
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            yaxis: {
                min: 0
            }, colors: ['#000'],
            title: {
                text: 'Cnceled Loads',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                    color: '#777'
                }
            },
            subtitle: {
                text: '3.000',
                offsetX: 0,
                style: {
                    fontSize: '20px',
                    color: '#777'
                }
            }
        },
    })
    return (
        <>
            <div className={`${styles.spark}`}>
                <div className={`${styles.spark__body}`} >
                    <ReactApexChart options={state.optionsSpark} series={state.seriesSpark} type="area" height={300} />
                </div>
                <div className={`${styles.spark__body}`}>
                    <ReactApexChart options={state.optionsSpark2} series={state.seriesSpark2} type="area" height={300} />
                </div>
                <div className={`${styles.spark__body}`} >
                    <ReactApexChart options={state.optionsSpark3} series={state.seriesSpark3} type="area" height={300} />
                </div>
            </div>
        </>
    )
}

export default Spark
