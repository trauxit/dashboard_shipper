import React from 'react'
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from '../Styles/navbar.module.css'
const NavBar = (props) => {
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.search}`}>
                        <h4 className={styles.title}>{props.title}</h4>
                    </div>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.item}`}>
                            <NotificationsNoneOutlinedIcon className={`${styles.icon}`} />
                            <div className={`${styles.counter}`}>1</div>
                        </div>
                        <div className={`${styles.item}`}>
                            <img
                                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className={`${styles.avatar}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default NavBar
