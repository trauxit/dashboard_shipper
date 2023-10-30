import React, { useRef, useState, useEffect } from 'react'
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
const Setting = () => {
    const MAX_CORRECT = 11;
    const [maxScore, setMaxScore] = useState(MAX_CORRECT);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setScore(prevScore => Math.max(0, Math.min(prevScore, maxScore)));
    }, [maxScore]);

    const fetchData = () => {
        setScore(score => score + 1);
    };
    const percentCorrect = (score * 100) / maxScore;
    const percentCorrectLabel = `${Number(percentCorrect).toFixed(2)}%`;

    const fname = useRef()
    const lname = useRef()
    const email = useRef()
    const nid = useRef()
    const date = useRef()
    const edu = useRef()
    const country = useRef()
    const city = useRef()
    const companyname = useRef()
    const [formData, setFormData] = useState({
        img: '',
        phone: ''
    })
    console.log(formData.phone, "phone")
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname.current.value)
        console.log(lname.current.value)
        console.log(email.current.value)
        console.log(city.current.value)
        console.log(companyname.current.value)
        console.log(country.current.value)
        console.log(edu.current.value)
        console.log(date.current.value)
        console.log(nid.current.value)
        console.log(formData.img)
        console.log(formData.phone)
    }
    return (
        <>
            <div className={`${styles.home}`}>
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Setting' />
                    <form onSubmit={(e) => handleSubmit(e)}>

                        <p className={`${styles.edit}`}>Edit profile</p>
                        <div className={`${styles.user__info}`}>
                            <div className={`${styles.im}`} onClick={() => fetchData()}>
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
                                <h2 className={`${styles.user__title}`} >Ahmed Mohamed</h2>
                                <p className={`${styles.user__para}`} >Eastern European Time (EET), Cairo UTC +3</p>
                            </div>

                        </div>
                        <div className={`${styles.name} formgroup`}>
                            {/* First Name */}
                            <Form.Group className="mb-3 " controlId="fname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="fname" type='text' autoComplete="off" placeholder="Ahmed " className={`${styles.full}`} ref={fname} onClick={() => fetchData()} />
                            </Form.Group>
                            {/* Last Name */}
                            <Form.Group className="mb-3" controlId="lname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lname" type='text' autoComplete="off" placeholder="eg. Mohamed" className={`${styles.full}`} ref={lname} onClick={() => fetchData()} />
                            </Form.Group>
                        </div>
                        {/* National ID */}
                        <Form.Group className="mb-3 formgroup us" controlId="nid">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control name="nid" type='text' autoComplete="off" placeholder="Ahmed.mo2020" className={`${styles.input}`} ref={nid} onClick={() => fetchData()} />
                        </Form.Group>
                        <div className={`${styles.emphone}`}>
                            <Form.Group className="mb-3  emaili" controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <img alt='' src={mail} />
                                <Form.Control name="email" type='email' autoComplete="off" placeholder='' className={`${styles.full}`} ref={email} onClick={() => fetchData()} />
                            </Form.Group>
                            {/* Phone */}
                            <Form.Group className="mb-3 formgroup " controlId="phone">
                                <Form.Label>Phone Number</Form.Label>
                                <div className=''>
                                    <PhoneInput
                                        country={'eg'}
                                        value={formData.phone}
                                        onChange={onChangeHandlerPhone}
                                        onClick={() => fetchData()}
                                    />
                                </div>
                            </Form.Group>
                        </div>
                        {/* Country */}
                        <Form.Group className="mb-3  loci" controlId="country">
                            <Form.Label className='mt-5'>Location</Form.Label>
                            <img alt='' src={location} />
                            <Form.Control name="country" type='text' autoComplete="off" placeholder="" className={`${styles.input}`} ref={country} onClick={() => fetchData()} />
                        </Form.Group>

                        <div className={`${styles.company}`}>
                            <h3>Companies</h3>
                            <div >
                                <div className={`${styles.company__body}`}>
                                    <img alt='' src={bag} />
                                    <p>Trauxit</p>
                                </div>
                                <div className={`${styles.company__body}`}>
                                    <img alt='' src={bag} />
                                    <p>Noon</p>
                                </div>
                                <div className={`${styles.company__body}`}>
                                    <img alt='' src={bag} />
                                    <p>LamasaTech</p>
                                </div>
                            </div>
                        </div>
                        <Form.Group className="mb-3 pass emaili" controlId="password">
                            <Form.Label>Current Password</Form.Label>
                            <img alt='' src={pass} />
                            <Form.Control name="password" type='password' autoComplete="off" placeholder='' className={`${styles.full}`} ref={email} onClick={() => fetchData()} />
                        </Form.Group>
                        <div className={`${styles.name} passwordd `}>
                            <Form.Group className="mb-3 pass emaili" controlId="password">
                                <Form.Label>New Password</Form.Label>
                                <img alt='' src={pass} />
                                <Form.Control name="password" type='password' autoComplete="off" placeholder='' className={`${styles.full}`} ref={email} onClick={() => fetchData()} />
                            </Form.Group>
                            <Form.Group className="mb-3 p emaili" controlId="password">
                                <Form.Label>Confirm Passowrd</Form.Label>
                                <img alt='' src={pass} />
                                <Form.Control name="password" type='password' autoComplete="off" placeholder='' className={`${styles.full}`} ref={email} onClick={() => fetchData()} />
                            </Form.Group>
                        </div>
                        <div className={`${styles.btns}`}>
                            <Link to='/profile' className={`${styles.cancel__btn}`}>Cancel</Link>
                            <button type='submit' className={`${styles.save__btn}`}>Save Changes</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Setting
