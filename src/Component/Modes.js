import React from 'react'

const Modes = () => {
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
            <label className='switch' >
                <input type='checkbox' onChange={toggleTheme} defaultChecked={selectedTheme === "dark-mode"} />
                <span className='slider'></span>
            </label>
        </>
    )
}

export default Modes
