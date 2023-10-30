import React from 'react'
import styles from '../../Styles/create.module.css'
import NavBar from '../../Layout/NavBar'
import { Col, Container, Row } from 'react-bootstrap'
import path from '../../assets/images/path (1).svg'
import inside from '../../assets/images/Group 19.svg'
import head from '../../assets/images/headset_mic.svg'
import fast from '../../assets/images/fast-delivery 1.svg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import top from '../../assets/images/Exclude.svg'
import bottom from '../../assets/images/Exclude (1).svg'
const Create = () => {
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Expenses' />
                    <Row className={`${styles.row} mt-1`}>
                        <Col xxl='2' className={`${styles.background}`}>
                            <div className={`${styles.left}`}>
                                <h2>Create shipments</h2>
                                <p>Trailer Type: <span>Refer</span></p>
                            </div>
                            <div className={`${styles.form}`}>
                                <div className={`${styles.formimg}`}>
                                    <img alt='' src={path} />
                                </div>
                                <div className={`${styles.form__body}`}>
                                    <h4>Pickup & Dropoff</h4>
                                    <div>
                                        <p>Wooster , OH</p>
                                        <p>Sep 14th, Morning</p>
                                    </div>
                                    <div>
                                        <p>Austin Tx</p>
                                        <p>Sep 14th, Morning</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.formreview}`}>
                                <div className={`${styles.formimg}`}>
                                    <img alt='' src={path} />
                                </div>
                                <div className={`${styles.form__body}`}>
                                    <h4>Review Quote</h4>
                                    <div>
                                        <p>$1,376</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.formredetails}`}>
                                <div className={`${styles.formimg}`}>
                                    <img alt='' src={inside} className={`${styles.inside__img}`} />
                                    <p className={`${styles.inside__para}`}>3</p>
                                </div>
                                <div className={`${styles.form__body}`}>
                                    <h4>Finalize Details</h4>

                                </div>
                            </div>
                            <div className={`${styles.support}`}>
                                <img alt='' src={head} />
                                <div>
                                    <p className={`${styles.support__para}`}>Have Questions?</p>
                                    <p className={`${styles.supportus}`}>Contact Us</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Container >
                                <div className={`${styles.details}`}>
                                    <h2>Finalize details on your shipment</h2>
                                    <p>We just need a bit more information to move your shipments!</p>
                                </div>
                                <Form className={``}>
                                    <div>
                                        <div className={`${styles.shipform}`}>
                                            <img alt='' src={fast} />
                                            <h4>Shipment</h4>
                                        </div>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Customer Reference Number</Form.Label>
                                            <Form.Control type="text" placeholder="e.g water bottles" className='cont' />
                                        </Form.Group>
                                        <div>
                                            <Form.Label className={`${styles.lbs}`}>Weight</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    placeholder="e.g 42.000"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    className='in weight'
                                                />
                                                <InputGroup.Text id="basic-addon2" className='in tex'>Lbs</InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Customer Reference Number</Form.Label>
                                            <Form.Control type="text" placeholder="e.g water bottles" className='cont' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Customer Reference Number</Form.Label>
                                            <Form.Control type="text" placeholder="e.g water bottles" className='cont' />
                                        </Form.Group>
                                    </div>
                                    <div className={`${styles.pickup}`}>
                                        <img alt='' src={top} />
                                        <h4>Pickup</h4>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Dropoff Number</Form.Label>
                                            <Form.Control type="text" placeholder="e.g water bottles" className='cont' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Dropoff Type</Form.Label>
                                            <select
                                                placeholder="State"
                                                className={` cont`}
                                            >
                                                <option value=''>select dropoff type</option>
                                                <option value='m'>blabla</option>
                                                <option value='f'>blablabla</option>
                                            </select>
                                        </Form.Group>
                                    </div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} mb-3 mt-3`}>
                                        <Form.Label>Additonal Notes</Form.Label>
                                        <Form.Control as="textarea" className='cont shipt' rows={4} placeholder='Let’s know if there any specifics we need to know about this facility' />
                                    </Form.Group>

                                    <div className={`${styles.pickup}`}>
                                        <img alt='' src={bottom} />
                                        <h4>Dropoff</h4>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Dropoff Number</Form.Label>
                                            <Form.Control type="text" placeholder="e.g water bottles" className='cont' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Dropoff Type</Form.Label>
                                            <select
                                                placeholder="State"
                                                className={` cont`}
                                            >
                                                <option value=''>select dropoff type</option>
                                                <option value='m'>blabla</option>
                                                <option value='f'>blablabla</option>
                                            </select>
                                        </Form.Group>
                                    </div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} ${styles.hr} mb-3 mt-3`}>
                                        <Form.Label>Additonal Notes</Form.Label>
                                        <Form.Control as="textarea" className='cont shipt' rows={4} placeholder='Let’s know if there any specifics we need to know about this facility' />
                                    </Form.Group>
                                    <div className={`${styles.submit__btns}`}>
                                        <p className={`${styles.save}`}>Save & Finish Later</p>
                                        <button className={`${styles.submit}`} type='submit'>Finalize Shipment</button>
                                    </div>
                                </Form>
                            </Container>
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}

export default Create
