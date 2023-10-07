import React, { useContext, useState } from 'react'
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from '../Styles/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../Component/AuthContext'
import Modes from '../Component/Modes';
import Form from 'react-bootstrap/Form';
const NavBar = (props) => {
    const [active, setactive] = useState(true)
    const navigate = useNavigate('/all-loads')
    const authContext = useContext(AuthContext);
    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.search}`}>
                        <div>
                            {window.location.pathname === '/all-loads' || window.location.pathname === '/expenses' || window.location.pathname === '/dashboard' || window.location.pathname === '/overview' ?
                                <p className={styles.para}>Hi,Basmala</p> : ""
                            }

                            <h4 className={styles.title}>{props.title}</h4>
                        </div>
                        <div>
                            {window.location.pathname === '/all-loads' || window.location.pathname === '/expenses' ?
                                <input className={`${styles.input}`} name="text" placeholder="Search..." type="search" />
                                :
                                ""
                            }
                            {window.location.pathname === '/dashboard' || window.location.pathname === '/overview' ?
                                <Form.Select aria-label="Default select example" className={`${styles.select}`}>
                                    <option>Sep 2023</option>
                                    <option value="22">Sep 2022</option>
                                    <option value="21">Sep 2021</option>
                                    <option value="20">Sep 2020</option>
                                </Form.Select>
                                : ''}
                        </div>
                    </div>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.none}`}>
                            <Modes />
                        </div>
                        <div className={`${styles.item}`}>
                            <NotificationsNoneOutlinedIcon className={`${styles.icon}`} />
                            <div className={`${styles.counter}`}>1</div>
                        </div>
                        <div className={`${styles.item}`}>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className={`${styles.dropdown__img}`}>
                                    <img
                                        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        alt=""
                                        className={`${styles.avatar}`}
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={`${styles.dropmenu}`}>
                                    <Dropdown.Item ><Link to='/setting' className={`${styles.menu__link}`}>Setting</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link to='/profile' className={`${styles.menu__link}`}>Profile</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link to='' className={`${styles.menu__link}`} onClick={logout}>Logout</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}

export default NavBar
