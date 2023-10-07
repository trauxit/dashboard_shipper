import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import styles from '../../Styles/expenses.module.css'
import { Col, Row } from 'react-bootstrap'
import Columnprice from './Columnprice'
import Form from 'react-bootstrap/Form';
import TableExpenses from './TableExpenses'

const Expenses = () => {
    const data = [
        { id: "Anom", date: 19, loadtype: "Male", addressa: "blabla", addressb: "blabla", weight: "20kg", distance: "100km" },
        { id: "Anom", date: 19, loadtype: "Male", addressa: "blabla", addressb: "blabla", weight: "20kg", distance: "100km" },
        { id: "Anom", date: 19, loadtype: "Male", addressa: "blabla", addressb: "blabla", weight: "20kg", distance: "100km" },
        { id: "Anom", date: 19, loadtype: "Male", addressa: "blabla", addressb: "blabla", weight: "20kg", distance: "100km" },
    ]
    return (
        <>
            <div className={`${styles.home}`}>
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Expenses' />
                    <Row className={`${styles.expenses}`}>
                        <Col>
                            <div className={`${styles.expenses__body}`}>
                                <h2 className={`${styles.expenses__title}`}>total expenses</h2>
                                <h1 className={`${styles.expenses__price}`}>$100.000</h1>
                                <div className={`${styles.oldexpenses}`}>
                                    <p className={`${styles.oldexpenses__plus}`}>+22%</p>
                                    <p className={`${styles.oldexpenses__para}`}>then last month</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={`${styles.expenses__body}`}>
                                <h2 className={`${styles.expenses__title}`}>payed</h2>
                                <h1 className={`${styles.expenses__price}`}>$65.000</h1>
                                <div className={`${styles.oldexpenses}`}>
                                    <p className={`${styles.oldexpenses__plus}`}>+36%</p>
                                    <p className={`${styles.oldexpenses__para}`}>then last month</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={`${styles.expenses__body}`}>
                                <h2 className={`${styles.expenses__title}`}>this month</h2>
                                <h1 className={`${styles.expenses__price}`}>$80.000</h1>
                                <div className={`${styles.oldexpenses}`}>
                                    <p className={`${styles.oldexpenses__plus}`}>+11%</p>
                                    <p className={`${styles.oldexpenses__para}`}>then last month</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={`${styles.expenses__body}`}>
                                <h2 className={`${styles.expenses__title} ${styles.pen}`}>pending payment</h2>
                                <h1 className={`${styles.expenses__price}`}>$90.000</h1>
                                <div className={`${styles.oldexpenses}`}>
                                    <p className={`${styles.oldexpenses__plus}`}>+22%</p>
                                    <p className={`${styles.oldexpenses__para}`}>then last month</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.expenses__chart}`}>
                        <Columnprice />
                    </Row>
                    <div className={`${styles.payment}`}>
                        <div className={`${styles.expenses__table}`}>
                            <div className={`${styles.payment__body}`}>
                                <h2 className={`${styles.payment__title}`}>recent payment</h2>
                                <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                    <option>Sep 2023</option>
                                    <option value="22">Sep 2022</option>
                                    <option value="21">Sep 2021</option>
                                    <option value="20">Sep 2020</option>
                                </Form.Select>
                            </div>
                            <TableExpenses />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Expenses
