import React, { useState } from 'react'
import styles from '../../Styles/dashboard.module.css'
import AddIcon from '@mui/icons-material/Add';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from '../../Styles/modalLoad.module.css'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ModalLoad = () => {
    const [show, setShow] = useState(false);
    const [showcreate, setShowCreate] = useState(false);
    const handleCloseadd = () => setShow(false);
    const handleShowadd = () => setShow(true);
    const handleClosecreate = () => setShowCreate(false);
    const handleShowcreate = () => setShowCreate(true);
    return (
        <>
            <Button className={`${styles.createticket}`} onClick={handleShowcreate}>
                Create Ticket
            </Button>
            <Modal show={showcreate} onHide={handleClosecreate} className={`${style.modal}`}>
                <Modal.Header closeButton>
                    <Modal.Title className={`${style.modal__title}`}>create ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body className=''>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={`${style.label}`}>problem type</Form.Label>
                            <div>
                                <select
                                    className={` ${style.select}`}
                                    name="trailer"
                                >
                                    <option value=''> Eduction Level</option>
                                    <option value='pending' >pending</option>
                                    <option value='accepted'>accepted</option>
                                    <option value='published'>published</option>
                                    <option value='rejected'>rejected</option>
                                </select>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={`${style.label}`}>description</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>

                        <div className={`${style.btns}`}>
                            <Link to='' className={`${style.submit__btn}`}>add</Link>
                            <Link to='' className={`${style.cancel__btn}`} onClick={handleClosecreate}>cancel</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Button className={`${styles.add}`} onClick={handleShowadd}>
                <AddIcon /> Add Load
            </Button>

            <Modal size="lg" show={show} onHide={handleCloseadd} className={`${style.modal}`}>
                <Modal.Header closeButton>
                    <Modal.Title className={`${style.modal__title}`}>add load</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg='7'>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={`${style.label}`}>adress a</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={`${style.label}`}>pick up date</Form.Label>
                                            <Form.Control type="date" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={`${style.label}`}>address b</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={`${style.label}`}>delivery date</Form.Label>
                                            <Form.Control type="date" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={`${style.label}`}>trailer</Form.Label>
                                            <div>
                                                <select
                                                    className={` ${style.select}`}
                                                    name="trailer"
                                                >
                                                    <option value=''> Eduction Level</option>
                                                    <option value='pending' >pending</option>
                                                    <option value='accepted'>accepted</option>
                                                    <option value='published'>published</option>
                                                    <option value='rejected'>rejected</option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={`${style.label}`}>weight</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className={`${style.label}`}>company name</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className={`${style.label}`}>description</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                                <div className={`${style.btns}`}>
                                    <Link to='' className={`${style.submit__btn}`}>submit</Link>
                                    <Link to='' className={`${style.cancel__btn}`} onClick={handleCloseadd}>cancel</Link>
                                </div>
                            </Form>
                        </Col>
                        <Col lg='5'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.33217942648!2d-122.01155228782753!3d37.33464377198324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2seg!4v1696309150198!5m2!1sen!2seg"
                                className={`${style.iframe}`}
                                height="400"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="This is a unique title">
                            </iframe>
                            <div className={`${style.btns} mt-3`}>
                                <Link to='' className={`${style.addressA__btn}`}><LocationOnIcon className={`${style.icon}`} /> address a</Link>
                                <Link to='' className={`${style.addressB__btn}`}> address b</Link>

                            </div>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ModalLoad
