import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BarControl from './BarControl'
import styles from '../../Styles/dashboard.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import up from '../../assets/images/d.PNG'
import down from '../../assets/images/dd.PNG'
import TableControl from './TableControl';
import StatusControl from './StatusControl';
const ControTower = () => {
    return (
        <>
            <Row className={`${styles.r}`}>
                <Col>
                    <div className={`${styles.leftcon}`}>

                        <div className={`${styles.controlchart}`}>
                            <BarControl />
                            {/* <div className={`${styles.response}`}>
                                <p>Responses Needed : 0</p>
                                <p>Responses Provided : 0</p>
                            </div> */}
                        </div>
                        <div className={`${styles.updown}`}>
                            <div className={`${styles.up}`}>
                                <div>
                                    <h3>187</h3>
                                    <img alt='' src={up} />
                                </div>
                                <p>Scheduled for pickup today </p>
                            </div>
                            <div className={`${styles.up}`}>
                                <div>
                                    <h3>250</h3>
                                    <img alt='' src={down} />
                                </div>
                                <p>Scheduled for delivery today </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={`${styles.r3}`}>
                        <h3 className={styles.comingsoon}>Coming Soon</h3>
                        <TableControl />
                    </div>
                </Col>
            </Row>
            <div className={`${styles.r3}`}>
                <h3 className={styles.comingsoon}>Coming Soon</h3>
                <Row className={`${styles.r2} mt-5 mb-4`}>
                    <Col>
                        <div className={`${styles.status} ${styles.rstatus}`}>
                            <StatusControl />
                        </div>
                    </Col>
                    <Col>
                        <div className={`${styles.status} ${styles.r2}`}>
                            <StatusControl />
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default ControTower
