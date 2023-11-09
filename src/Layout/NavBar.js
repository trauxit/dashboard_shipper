import React, { useContext, useState } from 'react'
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from '../Styles/navbar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../Component/AuthContext'
import Modes from '../Component/Modes';
import Form from 'react-bootstrap/Form';
import logo from './../assets/images/Logo. 1.png'
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import GridViewIcon from '@mui/icons-material/GridView';
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import { useSelector } from 'react-redux';
import { selectUserName } from '../Redux/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/slices/UserSlice';
import Cookies from 'js-cookie';
const NavBar = (props) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.clear();
        Cookies.remove();
        dispatch(logout());
    };
    /*     const [active, setactive] = useState(true)
        const navigate = useNavigate('/all-loads')
        const authContext = useContext(AuthContext);
        function logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            authContext.setAuth({});
        } */
    const { userName } = useSelector((state) => state.user);
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.logo__body}`}>
                        <div>
                            <img alt='' src={logo} className={`${styles.logo}`} />
                            <h4 className={`${styles.logo__title}`}>TRAUXIT</h4>
                        </div>
                    </div>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.item} ${styles.side}`}>
                            <NavLink to="/dashboard" className={`${styles.navlink}`}>
                                <DashboardIcon className={`${styles.icon}`} />
                                Dashboard
                            </NavLink>
                            <NavLink to="/overview" className={`${styles.navlink}`}>
                                <GridViewIcon className={`${styles.icon}`} />
                                Insights
                            </NavLink>
                            <NavLink to="/loads" className={`${styles.navlink}`}>
                                <StoreIcon className={`${styles.icon}`} />
                                Loads
                            </NavLink>
                            <NavLink to="/shipment" className={`${styles.navlink}`}>
                                <PriceChangeIcon className={`${styles.icon}`} />
                                Shipment
                            </NavLink>
                        </div>
                        <div className={`${styles.item}`}>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className={`${styles.dropdown__img}`}>
                                    <NavLink to='/profile' className={`${styles.navlink}`}>{userName}</NavLink>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={`${styles.dropmenu}`}>
                                    <Dropdown.Item ><Link to='/Update' className={`${styles.menu__link}`}>Update</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link to='/profile' className={`${styles.menu__link}`}>Profile</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link to='' className={`${styles.menu__link}`} onClick={handleLogout}>Logout</Link></Dropdown.Item>
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
