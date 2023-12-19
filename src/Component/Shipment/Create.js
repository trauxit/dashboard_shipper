import React, { useRef, useReducer, useEffect, useState } from 'react'
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
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from 'react-redux';

import RoadTripMenuPlanner from './MapPhoto'
const Create = () => {
    const [startLat, setStartLat] = useState(null);
    const [startLon, setStartLon] = useState(null);
    const [endLat, setEndLat] = useState(null);
    const [endLon, setEndLon] = useState(null);
    const handleDataFromChild = (startLat, startLon, endLat, endLon) => {
        setStartLat(startLat);
        setStartLon(startLon);
        setEndLat(endLat);
        setEndLon(endLon);
    };
    const initialState = {
        typeLoads: '',
        Weight: '',
        nameLoads: '',
        packagingType: '',
        departureTime: '',
        Pickupaddress: '',
        Pickupdescription: '',
        Pickuptype: '',
        dropoffaddress: '',
        dropoffdescription: '',
        dropofftype: ''
    };

    function formReducer(state, action) {
        switch (action.type) {
            case 'UPDATE_FIELD':
                return {
                    ...state,
                    [action.field]: action.value
                };
            case 'RESET_FORM':
                return initialState;
            default:
                return state;
        }
    }
    const [formData, dispatch] = useReducer(formReducer, initialState);
    const { token } = useSelector((state) => state.user);
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            value: value
        });
    }
    function finalize(e) {
        e.preventDefault();
        const reqData = {
            typeLoads: formData.typeLoads,
            nameLoads: formData.nameLoads,
            Weight: formData.Weight,
            PickupLocation: {
                description: formData.Pickupdescription,
                type: 'Point',
                coordinates: [startLon, startLat],
                address: formData.Pickupaddress
            },
            DropoutLocation: {
                description: formData.dropoffdescription,
                type: 'Point',
                coordinates: [endLon, endLat],
                address: formData.dropoffaddress
            },
            departureTime: formData.departureTime,
            packagingType: formData.packagingType
        };

        axios
            .post('http://52.87.197.234/api/v1/loads/shipper/', reqData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                toast.success(response.data.status);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    }

    useEffect(() => {

        if (!formData.Pickupaddress || !formData.dropoffaddress) {
            dispatch(formData.dropoffaddress, formData.Pickupaddress)
        }

    }, [formData.Pickupaddress, formData.dropoffaddress, dispatch])
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
                            {/* <div className={`${styles.support}`}>
                                <img alt='' src={head} />
                                <div>
                                    <p className={`${styles.support__para}`}>Have Questions?</p>
                                    <p className={`${styles.supportus}`}>Contact Us</p>
                                </div>
                            </div> */}
                        </Col>
                        <Col>
                            <Container >
                                <div className={`${styles.details}`}>
                                    <h2>Finalize details on your shipment</h2>
                                    <p>We just need a bit more information to move your shipments!</p>
                                </div>
                                <Form className={``} onSubmit={(e) => finalize(e)}>
                                    <div>
                                        <div className={`${styles.shipform}`}>
                                            <img alt='' src={fast} />
                                            <h4>Shipment</h4>
                                        </div>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Type of Loads</Form.Label>
                                            <Form.Control type="text" placeholder="e.g PATA" className='cont' name="typeLoads"
                                                value={formData.typeLoads}
                                                onChange={handleChange} />
                                        </Form.Group>
                                        <div>
                                            <Form.Label className={`${styles.lbs}`}>Weight</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    placeholder="e.g 42.000"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    className='in weight'
                                                    type='number'
                                                    name="Weight"
                                                    value={formData.Weight}
                                                    onChange={handleChange}

                                                />
                                                <InputGroup.Text id="basic-addon2" className='in tex'>Lbs</InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Name of Loads</Form.Label>
                                            <Form.Control type="text" placeholder="e.g T-shirt" className='cont' name="nameLoads"
                                                value={formData.nameLoads}
                                                onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Packaging Type</Form.Label>
                                            <select
                                                placeholder="State"
                                                className={` cont`}
                                                name="packagingType"
                                                value={formData.packagingType}
                                                onChange={handleChange}
                                            >
                                                <option value=''>select Packaging Type</option>
                                                <option value='Cardboard Boxes'>Cardboard Boxes</option>
                                                <option value='Corrugated Boxes'>Corrugated Boxes</option>
                                                <option value='Pallets'>Pallets</option>
                                                <option value='Wooden Crates'>Wooden Crates</option>
                                                <option value='Polyethylene Bags'>Polyethylene Bags</option>
                                                <option value='Bubble Wrap'>Bubble Wrap</option>
                                                <option value='Air Cushions'>Air Cushions</option>
                                                <option value='Shipping Envelopes'>Shipping Envelopes</option>
                                                <option value='Shipping Tubes'>Shipping Tubes</option>
                                                <option value='Foam-in-Place Packaging'>Foam-in-Place Packaging</option>
                                                <option value='Insulated'>Insulated</option>
                                                <option value='Reusables and Returnable'>Reusables and Returnable</option>
                                                <option value='Custom Packaging'>Custom Packaging </option>
                                            </select>
                                        </Form.Group>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Departure Time</Form.Label>
                                            <Form.Control type="date" className='cont' name="departureTime"
                                                value={formData.departureTime}
                                                onChange={handleChange} />
                                        </Form.Group>
                                    </div>
                                    <div className={`${styles.pickup}`}>
                                        <img alt='' src={top} />
                                        <h4>Pickup</h4>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="e.g union,USA" className='cont' name="Pickupaddress"
                                                value={formData.Pickupaddress}
                                                onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Pickup Type</Form.Label>
                                            <Form.Control type="text" placeholder="e.g union,USA" className='cont' name="Pickuptype"
                                                value='Point'
                                                readOnly />
                                        </Form.Group>
                                    </div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} mb-3 mt-3`}>
                                        <Form.Label>Additonal Notes</Form.Label>
                                        <Form.Control as="textarea" className='cont shipt' rows={4} placeholder='Let’s know if there any specifics we need to know about this facility' name="Pickupdescription"
                                            value={formData.Pickupdescription}
                                            onChange={handleChange} />
                                    </Form.Group>

                                    <div className={`${styles.pickup}`}>
                                        <img alt='' src={bottom} />
                                        <h4>Dropoff</h4>
                                    </div>
                                    <div className={`${styles.first}`}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="e.g sant luis,USA" className='cont' name="dropoffaddress"
                                                value={formData.dropoffaddress}
                                                onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Dropoff Type</Form.Label>
                                            <Form.Control type="text" placeholder="e.g union,USA" className='cont' name="dropofftype"
                                                value='Point'
                                                readOnly />
                                        </Form.Group>
                                    </div>
                                    <Form.Group controlId="exampleForm.ControlTextarea1" className={`${styles.textareaship} ${styles.hr} mb-3 mt-3`}>
                                        <Form.Label>Additonal Notes</Form.Label>
                                        <Form.Control as="textarea" className='cont shipt' rows={4} placeholder='Let’s know if there any specifics we need to know about this facility' name="dropoffdescription"
                                            value={formData.dropoffdescription}
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <RoadTripMenuPlanner onDataReceived={handleDataFromChild} />
                                    <div className={`${styles.submit__btns}`}>
                                        <p className={`${styles.save}`}>Save & Finish Later</p>
                                        <button className={`${styles.submit}`} type='submit'>Finalize Shipment</button>
                                    </div>
                                </Form>

                            </Container>
                        </Col>
                    </Row>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Create
