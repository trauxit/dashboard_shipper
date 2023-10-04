import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider(Props) {
    const [auth, setAuth] = useState({});
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark-mode" : "light"));
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        if (email) {
            setAuth({
                token, email
            });
        }

    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, theme, toggleTheme }}>
            {Props.children}
        </AuthContext.Provider>
    );

}