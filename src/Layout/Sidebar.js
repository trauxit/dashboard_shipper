import React, { useContext } from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import styles from "../Styles/sidebar.module.css"
import logo from '../assets/images/TRAUXIT-2.png'
import SettingsIcon from '@mui/icons-material/Settings';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import GridViewIcon from '@mui/icons-material/GridView';
import { AuthContext } from '../Component/AuthContext'
const Sidebar = () => {
    const authContext = useContext(AuthContext);
    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark-mode");
        localStorage.setItem("selectedTheme", "dark-mode");
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light-mode");
        localStorage.setItem("selectedTheme", "light-mode");
    }
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        }
        else {
            setLightMode();
        }
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark-mode") {
        setDarkMode();
    }
    return (
        <>
            <div className={`${styles.sidebar}`}>

                <div className={`${styles.top}`}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img src={logo} alt='' className={styles["side-bar__logo"]} />
                        <p className={`${styles.logo__title}`}>Trauxit</p>
                    </Link>
                </div>
                <hr />


                <div className={`${styles.center}`}>
                    <div>
                        <ul>
                            <Link to="/dashboard" style={{ textDecoration: "none" }}>
                                <li>
                                    <DashboardIcon className={`${styles.icon}`} />
                                    <span>Dashboard</span>
                                </li>
                            </Link>
                            <Link to="/overview" style={{ textDecoration: "none" }}>
                                <li>
                                    <GridViewIcon className={`${styles.icon}`} />
                                    <span>Overview</span>
                                </li>
                            </Link>

                            <Link to="/all-loads" style={{ textDecoration: "none" }}>
                                <li>
                                    <StoreIcon className={`${styles.icon}`} />
                                    <span> loads </span>
                                </li>
                            </Link>
                            <Link to="/expenses" style={{ textDecoration: "none" }}>
                                <li>
                                    <PriceChangeIcon className={`${styles.icon}`} />
                                    <span>Expenses</span>
                                </li>
                            </Link>
                            <Link to="/profile" style={{ textDecoration: "none" }} className={`${styles.profile}`}>
                                <li>
                                    <PersonOutlineIcon className={`${styles.icon}`} />
                                    <span>Profile</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.bottom}`}>
                    <ul>
                        <label className='switch' >
                            <input type='checkbox' onChange={toggleTheme} defaultChecked={selectedTheme === "dark-mode"} />
                            <span className='slider'></span>
                        </label>

                        <Link to="/setting" style={{ textDecoration: "none" }}>
                            <li>
                                <SettingsIcon className={`${styles.icon}`} />
                                <span>Setting</span>
                            </li>
                        </Link>
                        <li onClick={logout}>
                            <ExitToAppIcon className={`${styles.icon}`} />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Sidebar
