import React, { useEffect, useState } from 'react';

function InfoHint({ type, position, duration }) {
    const [hidden, setHidden] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHidden(true);
        }, duration);

        return () => {
            clearTimeout(timeout);
        };
    }, [duration]);

    const setErrorMessage = (error) => {
        const errorMessage = error && (error.message || error.data.message) || 'There was an error.';
        setMessage(errorMessage);
        setHidden(false);
    };

    const showMessage = (text) => {
        setMessage(text);
        setHidden(false);
    };

    const getClassList = () => {
        return ['tt-info-hint', hidden ? '-hidden' : '', `-${position}`, `-${type}`].join(' ');
    };

    return (
        <div className={getClassList()}>
            {message}
        </div>
    );
}

export default InfoHint;