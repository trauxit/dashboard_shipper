import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../Layout/Sidebar'
import NavBar from '../Layout/NavBar'
import styles from '../Styles/setting.module.css'
import StarIcon from '@mui/icons-material/Star';
import { Col, Container, Form, Row } from 'react-bootstrap';
import imgNull from '../assets/images/eae946efbbf74117a65d488206a09b63.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ProgressBar from "react-bootstrap/ProgressBar";
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
                <Sidebar />
                <div className={`${styles.homeContainer}`}>
                    <NavBar title='Setting' />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Row className={`${styles.profile}`}>

                            <Col lg='4'>
                                <p className={`${styles.edit}`}>Edit Profile</p>
                                <div className={`${styles.im}`} onClick={() => fetchData()}>
                                    <input className={`${styles.fileImg}  input-file-js`} ref={(e) => {
                                        addFileInput.current = e
                                    }} id="input-file" name="img" type="file" onChange={(e) => { previewUploadImage(e) }} />
                                    {
                                        imageUrl == null ?
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
                                <div className={`${styles.user}`} >
                                    <h4 className={`${styles.user__name}`}>basmala ayman</h4>
                                    <div className={`${styles.stars}`}>
                                        <StarIcon className={`${styles.star}`} />
                                        <StarIcon className={`${styles.star}`} />
                                        <StarIcon className={`${styles.star}`} />
                                        <StarIcon className={`${styles.star}`} />
                                        <StarIcon className={`${styles.star}`} />
                                    </div>
                                </div>
                                <div className={`${styles.precent}`}>
                                    <p className={`${styles.edit}`}>Complete your profile</p>
                                    <p className={`${styles.edit}`}>{percentCorrectLabel}</p>
                                </div>

                                <ProgressBar
                                    className={`${styles.prog}`}
                                    min={0}
                                    max={100}
                                    now={percentCorrect}

                                />
                            </Col>
                            <Col lg='8'>
                                <p className={`${styles.edit}`}>personal</p>
                                <div className={`${styles.name}`}>
                                    <Form.Group className="mb-3" controlId="fname">
                                        <div>
                                            <Form.Control name="fname" type='text' autoComplete="off" placeholder="First Name " className={`${styles.fullname}`} ref={fname} onClick={() => fetchData()} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="lname">
                                        <div>
                                            <Form.Control name="lname" type='text' autoComplete="off" placeholder="Last Name " className={`${styles.fullname}`} ref={lname} onClick={() => fetchData()} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <Form.Group className="mb-3" controlId="nid">
                                    <div>
                                        <Form.Control name="nid" type='text' autoComplete="off" placeholder="National Id " className={`${styles.input}`} ref={nid} onClick={() => fetchData()} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="date">
                                    <div>
                                        <Form.Control name="date" type='date' autoComplete="off" placeholder="Date of Birth " className={`${styles.input}`} ref={date} onClick={() => fetchData()} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="edu">
                                    <select
                                        className={`${styles.input} ${styles.select}`}
                                        name="edu"
                                        ref={edu}
                                        onClick={() => fetchData()}
                                    >
                                        <option value=''> Eduction Level</option>

                                        <option value='pending' >pending</option>
                                        <option value='accepted'>accepted</option>
                                        <option value='published'>published</option>
                                        <option value='rejected'>rejected</option>
                                    </select>
                                </Form.Group>

                                <p className={`${styles.edit}`}>Contact</p>
                                <Form.Group className="mb-3" controlId="email">
                                    <div>
                                        <Form.Control name="email" type='email' autoComplete="off" placeholder="Email" className={`${styles.input}`} ref={email} onClick={() => fetchData()} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <div class={styles.inputGroupp}>
                                        <PhoneInput
                                            country={'eg'}
                                            value={formData.phone}
                                            onChange={onChangeHandlerPhone}
                                            onClick={() => fetchData()}
                                        />

                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="country">
                                    <div>
                                        <Form.Control name="country" type='text' autoComplete="off" placeholder="Country " className={`${styles.input}`} ref={country} onClick={() => fetchData()} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="city">
                                    <div>
                                        <Form.Control name="city" type='text' autoComplete="off" placeholder="City " className={`${styles.input}`} ref={city} onClick={() => fetchData()} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="companyname">
                                    <div>
                                        <Form.Control name="companyname" type='text' autoComplete="off" placeholder="Company Name " className={`${styles.input}`} ref={companyname} onClick={() => fetchData()} />
                                    </div>
                                </Form.Group>
                                <button type='submit' className={`${styles.submit__btn}`}> Save</button>
                            </Col>
                        </Row>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Setting
