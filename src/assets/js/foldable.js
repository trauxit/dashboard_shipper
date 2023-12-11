import React, { useState, useEffect } from 'react';

const Foldable = ({ position }) => {
    const [isFolded, setIsFolded] = useState(false);
    const [overflowTimeout, setOverflowTimeout] = useState(null);

    useEffect(() => {
        const foldButton = document.createElement('button');
        foldButton.setAttribute('class', `tt-foldable__button -${position}`);
        const element = document.querySelector('.tt-foldable');
        element.appendChild(foldButton);

        const handleFoldClick = () => {
            setIsFolded((prevIsFolded) => !prevIsFolded);
            element.classList.toggle('-folded');

            if (!isFolded) {
                element.classList.add('-open');
                window.clearTimeout(overflowTimeout);
            } else {
                setOverflowTimeout(
                    window.setTimeout(() => {
                        element.classList.remove('-open');
                    }, 200)
                );
            }
        };

        foldButton.addEventListener('click', handleFoldClick);

        return () => {
            foldButton.removeEventListener('click', handleFoldClick);
        };
    }, [isFolded, position, overflowTimeout]);

    return null;
};

export default Foldable;