import React, { useRef, useState, useEffect, useReducer } from 'react'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import styles from '../Styles/setting.module.css'
import StarIcon from '@mui/icons-material/Star';
import { Col, Container, Form, Row } from 'react-bootstrap';
import imgNull from '../assets/images/FB_IMG_1528049839195.jpg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ProgressBar from "react-bootstrap/ProgressBar";
import mail from '../assets/images/Mail.svg'
import location from '../assets/images/Glyph_ undefined.svg'
import bag from '../assets/images/undefined.svg'
import pass from '../assets/images/pass.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { useSelector } from 'react-redux';
const Setting = () => {
    const { token } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        img: '',
        phone: '',
        fname: '',
        lname: '',
        userName: '',
        address: '',
        compantName: '',
        fullName: '',
        currentPassword: '',
        password: '',
        passwordConfirm: ''
    })
    useEffect(() => {
        axios.get(`http://52.87.197.234:3000/api/v1/user/getmydata`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then((response) => {
                setFormData({
                    phone: response.data.data.userData.phoneNumber,
                    userName: response.data.data.user_info.userName,
                    address: response.data.data.userData.address,
                    compantName: response.data.data.userData.companyName,
                    fullName: response.data.data.userData.fullName,
                    email: response.data.data.user_info.email
                })
            }).catch((err) => { console.log(err) })

    }, [])
    const addFile = useRef(null)
    const addFileInput = useRef(null)
    const imageContentRef = useRef(null);
    const imageFirmRef = useRef(null);
    const [imageUrl, setImage] = useState(null)
    function handleLogo() {
        let inputFileEvent = document.querySelector(".input-file-js")
        inputFileEvent.click()
    }
    let previewUploadImage = (e) => {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let preViewLink = URL.createObjectURL(file);
        setImage(preViewLink)
        setFormData(prevValue => {
            return {
                ...prevValue,
                'img': file
            }
        })

    }
    const onChangeHandlerPhone = data => {
        setFormData({ ...formData, phone: data })
        console.log(formData)
    }

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const storeProfile = new FormData();
    storeProfile.append("fname", formData.fname);
    storeProfile.append("lname", formData.lname);
    storeProfile.append("email", formData.email);
    storeProfile.append("address", formData.address);
    storeProfile.append("phoneNumber", formData.phone);
    storeProfile.append("userName", formData.userName);
    storeProfile.append("image", formData.img);
    storeProfile.append("companyName", formData.companyName);

    const storePass = {
        "currentPassword": formData.currentPassword,
        "password": formData.password,
        "passwordConfirm": formData.passwordConfirm
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://52.87.197.234:3000/api/v1/user/updatemydata/`, storeProfile, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }, [])
            .then(response => {
                toast.success(response.data.message)
                console.log(response.data)
            }
            ).catch((err) => { toast.error(err.response.data.message) })
        if (formData.password) {
            axios.patch(`http://52.87.197.234:3000/api/v1/user/updatemypassword`, storePass, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }, [])
                .then(response1 => {
                    toast.success(response1.data.message)
                    console.log(response1)
                }
                ).catch((err) => { toast.error(err.response.data.message) })
        }
    }
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Setting' />
                    <form onSubmit={(e) => handleSubmit(e)}>

                        <p className={`${styles.edit}`}>Edit profile</p>
                        <div className={`${styles.user__info}`}>
                            <div className={`${styles.im}`}>
                                {/* Image Input */}
                                <input className={`${styles.fileImg}  input-file-js`} ref={(e) => {
                                    addFileInput.current = e
                                }} id="input-file" name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />
                                {/* Display Image */}
                                {imageUrl == null ?
                                    <>
                                        <div ref={addFile} onClick={() => { handleLogo() }}>
                                            <img className={`${styles.img}`} ref={imageFirmRef} src={imgNull} alt="" />
                                        </div>
                                    </>
                                    :
                                    <div ref={addFile} onClick={() => { handleLogo() }}>
                                        <img className={`${styles.img}`} ref={imageContentRef} src={imageUrl} alt="" />
                                    </div>
                                }
                            </div>
                            <div>
                                <h2 className={`${styles.user__title}`} >{formData.fullName}</h2>
                                <p className={`${styles.user__para}`} >{formData.address}</p>
                            </div>

                        </div>
                        <div className={`${styles.name} formgroup`}>
                            {/* First Name */}
                            <Form.Group className="mb-3 " controlId="fname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="fname"
                                    type='text'
                                    autoComplete="off"
                                    placeholder=""
                                    className={`${styles.full}`}
                                    onChange={onChangeHandler}
                                    value={formData.fname} />
                            </Form.Group>
                            {/* Last Name */}
                            <Form.Group className="mb-3" controlId="lname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lname"
                                    type='text'
                                    autoComplete="off"
                                    placeholder=""
                                    className={`${styles.full}`}
                                    onChange={onChangeHandler}
                                    value={formData.lname} />
                            </Form.Group>
                        </div>
                        {/* National ID */}
                        <Form.Group className="mb-3 formgroup us" controlId="userName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control name="userName"
                                type='text'
                                autoComplete="off"
                                placeholder=""
                                className={`${styles.input}`}
                                onChange={onChangeHandler}
                                value={formData.userName} />
                        </Form.Group>
                        <div className={`${styles.emphone}`}>
                            <Form.Group className="mb-3  emaili" controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <img alt='' src={mail} />
                                <Form.Control name="email"
                                    type='email'
                                    autoComplete="off"
                                    placeholder=''
                                    className={`${styles.full}`}
                                    onChange={onChangeHandler}
                                    value={formData.email} />
                            </Form.Group>
                            {/* Phone */}
                            <Form.Group className="mb-3 formgroup " controlId="phone">
                                <Form.Label>Phone Number</Form.Label>
                                <div className=''>
                                    <PhoneInput
                                        country={'eg'}
                                        value={formData.phone}
                                        onChange={onChangeHandlerPhone}
                                    />
                                </div>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3  loci" controlId="address">
                            <Form.Label className='mt-5'>Location</Form.Label>
                            <img alt='' src={location} />
                            <Form.Control name="address"
                                type='text'
                                autoComplete="off"
                                placeholder=""
                                className={`${styles.input}`}
                                onChange={onChangeHandler}
                                value={formData.address} />
                        </Form.Group>

                        <div className={`${styles.company}`}>
                            <h3>Companies</h3>
                            <div >
                                <div className={`${styles.company__body}`}>
                                    <img alt='' src={bag} />
                                    <Form.Group className="mb-3" controlId="companyName">
                                        <Form.Control name="companyName"
                                            type='text'
                                            autoComplete="off"
                                            placeholder=""
                                            className={`${styles.full}`}
                                            onChange={onChangeHandler}
                                            value={formData.companyName} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <Form.Group className="mb-3 pass emaili" controlId="currentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <img alt='' src={pass} />
                            <Form.Control name="currentPassword"
                                type='password'
                                autoComplete="off"
                                placeholder=''
                                className={`${styles.full}`}
                                onChange={onChangeHandler}
                                value={formData.currentPassword} />
                        </Form.Group>
                        <div className={`${styles.name} passwordd `}>
                            <Form.Group className="mb-3 pass emaili" controlId="password">
                                <Form.Label>New Password</Form.Label>
                                <img alt='' src={pass} />
                                <Form.Control name="password"
                                    type='password'
                                    autoComplete="off"
                                    placeholder=''
                                    className={`${styles.full}`}
                                    onChange={onChangeHandler}
                                    value={formData.password}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 p emaili" controlId="passwordConfirm">
                                <Form.Label>Confirm Passowrd</Form.Label>
                                <img alt='' src={pass} />
                                <Form.Control
                                    name="passwordConfirm"
                                    type='password'
                                    autoComplete="off"
                                    placeholder=''
                                    className={`${styles.full}`}
                                    onChange={onChangeHandler}
                                    value={formData.passwordConfirm}
                                />
                            </Form.Group>
                        </div>
                        <div className={`${styles.btns}`}>
                            <Link to='/profile' className={`${styles.cancel__btn}`}>Cancel</Link>
                            <button type='submit' className={`${styles.save__btn}`}>Save Changes</button>
                        </div>
                    </form>
                </div >
                <ToastContainer />
            </div >
        </>
    )
}

export default Setting
