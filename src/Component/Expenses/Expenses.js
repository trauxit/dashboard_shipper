import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import NavBar from '../../Layout/NavBar'
import styles from '../../Styles/expenses.module.css'
import { Col, Row } from 'react-bootstrap'
import Columnprice from './Columnprice'
import Form from 'react-bootstrap/Form';

const Expenses = () => {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]
    return (
        <>
            <div className={`${styles.home}`}>
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Overview' />
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
                                <h2 className={`${styles.expenses__title}`}>pending payment</h2>
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
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                </tr>
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.name}</td>
                                            <td>{val.age}</td>
                                            <td>{val.gender}</td>
                                        </tr>
                                    )
                                })}
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Expenses
